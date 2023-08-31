/* Kumquat Hub Background Handlers
 * 
 **/

(function (undefined) {

    const PRICE_FETCH_INTERVAL = 345600000; // 4 days
    const SPONSORSHIPS_FETCH_INTERVAL = 1000 * 60 * 60 * 24 * 3; // 3 days
    const CHAR_STATS_FETCH_INTERVAL = 1000 * 60 * 60 * 24; // 1 day
    const COUNTRY_FETCH_INTERVAL = 86400000; // 1 day

    pl.extend(ke.app.handlers, {
        _processEventHandlers: {
            app: {
                opt: {},
                translate: {},
                audio: {},
                option: {},
                commands: {},
                sync: {},
                phrasebook: {}
            }
        },

        onCommandReceived: function (data, sender, sendResponse) {
            if (data.action) {
                var parts = ke.parseProcessCall(data.action);

                var eh = ke.app.handlers._processEventHandlers;

                if (eh[parts.lib] && eh[parts.lib][parts.cmd]) {
                    ke.app.handlers._processEventHandlers[parts.lib][parts.cmd][parts.exact](data, function (response) {
                        if (typeof response !== 'undefined' && typeof data !== 'undefined') {
                            pl.extend(response, {
                                old_data: data
                            });
                        }

                        /* Prevent the following type of errors to be logged in the console:
                         *
                         * When a user requests something in a tab and closes it before the
                         * request is managed to be handled and its response sent back.
                         *
                         * Thus, the response is sent to the closed tab in this case.
                         */
                        try {
                            sendResponse(response);
                        } catch (e) {
                        }
                    }, sender);
                }

                return true;
            }
        },

        detectCountry: function (callback) {
            //callback = callback || function() {};

            if (Date.now() - ke.ext.util.storageUtil.getIntValue('last_country_fetch_2') >= COUNTRY_FETCH_INTERVAL) {
                if (navigator.onLine) {
                    $.ajax({
                        // use EU by default - don't wait until it finds a faster server (if any)
                        // opening onboarding takes way too long then
                        url: 'https://api2.matetranslate.com/geo/json',
                        type: 'GET',
                        success: function (cc) {
                            cc = cc.toLowerCase();
                            ke.ext.util.storageUtil.setVal('user_country', cc);
                            ke.ext.util.storageUtil.setOptionAsBoolean('mon_is_cis', ke.app.handlers.isCIS(cc));
                            ke.ext.util.storageUtil.setIntValue('last_country_fetch_2', Date.now());
                            callback();
                        },
                        error: function (e) {
                            //console.log('geo:', e);
                        }
                    });
                } else {
                    window.addEventListener('online', function () {
                        ke.app.handlers.detectCountry(callback);
                    });
                }
            } else {
                callback();
            }
        },

        finishCheckout: function(hash) {
            $.ajax({
                url: "https://checkout.paddle.com/api/1.0/order",
                method: "GET", // `type` is obsolete as it turns out – gradually switch to `method`
                data: {
                    checkout_id: hash
                },
                success: d => {
                    // console.log('checkout paddle', d);

                    if (d.state === 'processing') {
                        setTimeout(() => {
                            // console.log("transaction hasn't been processed yet — trying again in 1s"); 
                            ke.app.handlers.finishCheckout(hash);
                        }, 1000);
                    } else if (d.state === 'processed') {
                        //
                        // fire up the checkout callback
                        chrome.tabs.query({}, function (tabs) {
                            let found_settings = false;
                            tabs.forEach(function (tab) {
                                if (!tab.url) {
                                    return;
                                }
        
                                if (tab.url.indexOf('/pages/public/options.html') > -1) {
                                    chrome.tabs.sendMessage(tab.id, {
                                        action: ke.processCall('app', 'pro', 'finish-checkout'),
                                        email: d.order.customer.email
                                    });
                                    found_settings = true;
                                }
                            });

                            // if user closed the settings page after paddle checkout got opened
                            // who knows why tf someone would do that but it's still a possible case
                            if (!found_settings) {
                                chrome.tabs.create({
                                    url: chrome.extension.getURL('/pages/public/options.html')
                                }, tab => {
                                    chrome.tabs.sendMessage(tab.id, {
                                        action: ke.processCall('app', 'pro', 'finish-checkout'),
                                        email: d.order.customer.email
                                    });
                                });
                            }
                        });
                    }
                },
                error: e => {
                    console.log(e);
                }
            });
        },

        getProPrice: function (callback) {
            if (Date.now() - ke.ext.util.storageUtil.getIntValue('last_price_fetch_2') >= PRICE_FETCH_INTERVAL) {
                if (navigator.onLine) {
                    $.ajax({
                        url: 'https://checkout.paddle.com/api/2.0/prices',
                        type: 'GET',
                        crossDomain: true,
                        data: {
                            product_ids: [ke.ext.const.subscriptions.ONE_OFF_ID, ke.ext.const.subscriptions.ANNUAL_PLAN_ID, ke.ext.const.subscriptions.MONTHLY_PLAN_ID].join(','),
                            quantity: 1
                        },
                        dataType: 'json',
                        success: function (data) {
                            if (data.success) {
                                data.response.products.forEach(product => {
                                    const price = product.list_price.gross + ' ' + product.currency;

                                    if (product.product_id === ke.ext.const.subscriptions.ONE_OFF_ID) {
                                        ke.ext.util.storageUtil.setVal('pro_inapp_price', price);
                                    } else if (product.product_id === ke.ext.const.subscriptions.ANNUAL_PLAN_ID) {
                                        ke.ext.util.storageUtil.setVal('sub_price_annual', price);
                                    } else if (product.product_id === ke.ext.const.subscriptions.MONTHLY_PLAN_ID) {
                                        ke.ext.util.storageUtil.setVal('sub_price_monthly', price);
                                    }
                                });
                                
                                ke.ext.util.storageUtil.setIntValue('last_price_fetch_2', Date.now());
                            }

                            callback();
                        },
                        error: function (e) {
                            console.log(e);
                            callback();
                        }
                    });
                } else {
                    window.addEventListener('online', function () {
                        ke.app.handlers.getProPrice(callback);
                    });
                }
            } else {
                callback();
            }
        },

        isCIS: function (cc) {
            if (ke.DEBUG) {
                //return true;
            }

            return cc in {'by': 0, 'kz': 0, 'ru': 0, 'ua': 0} // iso 3166 codes
                || ke.getCurrentLocale() in {'ru': 0, 'uk': 0};
        },

        generateDropdownHtml: function (callback) {
            // not used anymore – always generating it on the fly instead
            /*ke.particles.lang_selectors.view.getDropdownHtml(ke.particles.lang_selectors.view.TYPES.FROM, 1, null, function (from_gen) {
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'from.num', from_gen.num);
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'from.code', from_gen.code);
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'from.select', from_gen.select);
            }, true);

            ke.particles.lang_selectors.view.getDropdownHtml(ke.particles.lang_selectors.view.TYPES.TO, 2, null, function (to_gen) {
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'to.num', to_gen.num);
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'to.code', to_gen.code);
                ke.ext.util.storageUtil.setJsonField('dropdown_html', 'to.select', to_gen.select);
            }, true);*/
        },

        opened_internal_pages: {},

        internal_redir_blocked: false,

        checkInternalPagesRedirect: function (tabId, data) {
            if (ke.app.handlers.internal_redir_blocked) {
                return;
            }

            var ext_uri = (ke.redirectableExtId + '.com/').toLowerCase();

            var ff_ext_uri;
            if (ke.IS_FIREFOX) {
                ff_ext_uri = (ke.staticExtId.split('@')[0] + '.com/').toLowerCase();
            }

            // Paddle can't redirect to chrome-extension://EXT_ID/
            // It must be https://
            // Hence such a hack, it redirects to a non-existing domain where slap 
            // https:// and .com around the extension ID
            // This request is caught here, all useful data taken out of it, 
            // and the tab auto-closed without much visible hassle for the user
            // URL schema:
            // https://EXT_ID.com/finish_checkout?useful_data_as_query_params
            if (data.url && data.url.indexOf(ext_uri + 'finish_checkout') > -1) {
                const hash = data.url.split('?')[1].split('&')[0].split('=')[1];
                ke.app.handlers.finishCheckout(hash);
                
                if (tabId) {
                    chrome.tabs.remove(tabId);
                }
            } else if (data.url
                && (data.url.indexOf(ext_uri) > -1
                    || (ff_ext_uri && data.url.indexOf(ff_ext_uri) > -1))) {

                // Redirect
                // {{extension_id}}.com/{{path}}
                // to
                // chrome-extension://{{path}}
                // Required for sign-in & email marketing

                // TESTS:
                // ------
                // Firefox OK
                // Chrome OK
                // Opera OK
                // Edge
                // Safari

                ke.app.handlers.internal_redir_blocked = true;

                chrome.tabs.remove(tabId);

                var redir_uri = ke.pathToExt + data.url
                    .replace(ext_uri, '')
                    .replace(ff_ext_uri, '')
                    .replace('http://', '')
                    .replace('https://', '');

                chrome.tabs.create({
                    url: chrome.extension.getURL(redir_uri)
                }, function () {
                    ke.app.handlers.internal_redir_blocked = false;
                });
            }
        },

        checkInternalPagesRedirectSafari: function (updated_tab_id, changed_info, tab) {
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(function (tab) {
                    if (!tab.url) {
                        return;
                    }

                    ke.app.handlers.checkInternalPagesRedirect(tab.id, tab);
                });
            });
        },

        // submit the stats about how many characters a user has translated to the server
        // need it for whipping up the unit economy
        submitTranslationCounters: function (on_done_callback) {
            if (Date.now() - ke.ext.util.storageUtil.getIntValue('char_stats_last_update') >= CHAR_STATS_FETCH_INTERVAL) {
                if (navigator.onLine) {
                    let stats = ke.ext.util.storageUtil.getDecodedVal('char_stats');

                    $.ajax({
                        url: 'https://asia.gikken.co/mateapi/v2/save_character_stats',
                        type: 'POST',
                        dataType: 'JSON',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            client_time: Date.now(),
                            is_pro: ke.isProUser,
                            chars_total: stats.total,
                            translations: stats.translations,
                            chars_per_pair: stats.chars_per_pair,
                            platform: ke.PLATFORM_CODE,
                            ver: ke.ext.util.storageUtil.getVal('ext_ver'),
                            uid: ke.ext.util.storageUtil.getVal('user_id'),
                            e: ke.ext.util.storageUtil.getVal('account_email')
                        }),
                            success: (f) => {
                                //console.log(f);

                                if (f.success) {
                                    // reset the counter
                                    ke.ext.util.storageUtil.encodeAndSet('char_stats', {
                                        total: 0,
                                        translations: 0,
                                        chars_per_pair: {}
                                    });
                                    ke.ext.util.storageUtil.setIntValue('char_stats_last_update', Date.now());
                                }
                            },
                            error: (e) => {
                                console.log(e);
                            }
                    });
                } else {
                    window.addEventListener('online', function () {
                        ke.app.handlers.submitTranslationCounters(on_done_callback);
                    });
                }
            }
        },

        // takes max 72 hours to propogate
        checkSponsorships: function () {
            if (Date.now() - ke.ext.util.storageUtil.getIntValue('sponsorships_last_update') >= SPONSORSHIPS_FETCH_INTERVAL) {
                if (navigator.onLine) {
                    $.ajax({
                        url: 'https://gikken.co/files/mate/sponsorships.json',
                        type: 'GET',
                        dataType: 'json',
                        success: (f) => {
                            ke.ext.util.storageUtil.encodeAndSet('sponsorships', f);
                            ke.ext.util.storageUtil.setIntValue('sponsorships_last_update', Date.now());
                        },
                        error: (e) => {
                            console.log('Could not get sponsorship ads:', e);
                        }
                    });
                } else {
                    window.addEventListener('online', function () {
                        ke.app.handlers.checkSponsorships();
                    });
                }
            }
        },

        checkToken: function (success_callback, all_callback) {
            let token = ke.ext.util.storageUtil.getVal('account_token');

            if (!token) {
                all_callback();
                return;
            }

            ke.getDeviceData(function (device_data) {
                $.ajax({
                    url: 'https://' + ke.syncServer + '/check_token',
                    type: 'GET',
                    dataType: 'json',
                    data: $.extend({
                        token: token,
                        gdpr_consent: ke.ext.util.storageUtil.isTrueOption('gdpr_consent')
                    }, device_data),
                    success: function (r) {
                        if (r && !r.error && r.valid && !r.expired) {
                            success_callback();

                            if (r.user_info) {
                                ke.ext.util.storageUtil.setVal('chr_pro_flag', r.user_info.has_pro);
                            }

                            // update the sub info on extension/browser restart
                            if (r.user_info.subscriptionInfo) {
                                ke.particles.pro_block.model.sendChargedEventIfNeeded(r.user_info.subscriptionInfo);
                                ke.ext.util.storageUtil.encodeAndSet('sub_data', r.user_info.subscriptionInfo);
                            }
                        } else if (!r.valid || r.expired) {
                            ke.ext.util.storageUtil.setVal('account_email', '');
                            ke.ext.util.storageUtil.setVal('account_token', '');
                            ke.ext.util.storageUtil.setVal('account_name', '');
                        }

                        all_callback();
                    },
                    error: function () {
                        all_callback();
                    }
                });
            });
        },

        checkWhetherNotificationsShouldBePushed: function() {
            // temp
            //ke.ext.util.storageUtil.setVal('sub_48h_notif', true);

            if (!ke.ext.util.storageUtil.isTrueOption('sub_48h_notif') 
                || ke.ext.util.storageUtil.getIntValue('sub_48h_notif_status') === 1 // has been sent already
                || ke.ext.util.storageUtil.getIntValue('sub_trial_days') === 0) {
                return;
            }

            let i = setInterval(() => {
                console.log('notif interval, status=' + ke.ext.util.storageUtil.getIntValue('sub_48h_notif_status') );

                if (ke.ext.util.storageUtil.getIntValue('sub_48h_notif_status') !== 0) {
                    return;
                }

                let two_days_before_trial_ends = ke.ext.util.storageUtil.getIntValue('sub_trial_starting_date') + 1000 * 60 * 60 * 24 * ke.ext.util.storageUtil.getIntValue('sub_trial_days') - 1000 * 60 * 60 * 24 * 2;
                let data = ke.ext.util.storageUtil.getDecodedVal('sub_data');

                if (Date.now() >= two_days_before_trial_ends && data.status === "trialing") {
                    chrome.permissions.contains({
                        permissions: ['notifications']
                    }, (granted) => {
                        if (granted) {
                            let period = 'Monthly';
                            if (data.subscription_plan_id == ke.ext.const.subscriptions.ANNUAL_PLAN_ID) {
                                period = 'Annual';
                            }
                            let amount = data.unit_price + ' ' + data.currency;

                            chrome.notifications.create(null, {
                                type: 'basic',
                                iconUrl: chrome.runtime.getURL('res/images/icons/icon128@2x.png'), 
                                title: ke.getLocale('Sub_48hNotificationTitle'),
                                message: ke.getLocale('Sub_48hNotificationBody' + period).replace('{{amount}}', amount)
                            }, () => {
                                if (typeof ga != "undefined") ga('send', 'event', 'pro', '48h-notifs', 'pushed');
                            });
                        } else {
                            if (typeof ga != "undefined") ga('send', 'event', 'pro', '48h-notifs', 'wanted-to-push-but-no-permission');
                        }
                    });

                    ke.ext.util.storageUtil.setIntValue('sub_48h_notif_status', 1);
                    clearInterval(i);
                }
            }, 1000 * 60 * 30); // 0.5hr
        },

        runSync: function () {
            ke.app.handlers.checkToken(function () {
                if (!ke.canSync) {
                    return;
                }

                //console.time('histsync');
                ke.particles.sync.model.syncHistory(function (r) {
                    //console.timeEnd('histsync');
                });

                //console.time('pbsync');
                ke.particles.sync.model.syncPhrasebook(function (r) {
                    //console.timeEnd('pbsync');
                });
            }, function () {
            });
        },

        pickFastestMateServer: function (callback) {
            const SERVERS = ['https://api.matetranslate.com', 'https://api2.matetranslate.com', 'https://asia.gikken.co/mateapi'];
            
            let responses = 0;
            let response_times = new Array(SERVERS.length).fill(0);
            let p = new Ping();

            let pick = function (ms, server_id) {
                ++responses;

                if (responses === SERVERS.length) {
                    response_times[server_id] = ms;

                    let fastest_server = 0;
                    response_times.forEach((v, i) => {
                        if (v < response_times[fastest_server]) {
                            fastest_server = i;
                        }
                    });

                    //console.log('fastest server = ', SERVERS[fastest_server]);
                    //console.log('other response times = ', response_times);

                    ke.ext.util.storageUtil.setVal('misc_server', SERVERS[fastest_server]);

                    (callback || function() {})();
                } else {
                    response_times[server_id] = ms;
                }
            };

            SERVERS.forEach((s, i) => {
                p.ping(s, function (err, ms) {
                    pick(ms, i);
                });
            });
        },

        checkIfMetaMaskUser: function() {
            if (ke.IS_CHROME && ke.ext.util.storageUtil.getIntValue('_is_metamask_user') === -1) {
                try {
                    fetch('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js')
                        .then(response => {
                            if (response.ok) {
                                console.log('MetaMask installed');
                                if (typeof ga != "undefined") ga('send', 'event', '_metamask', 'installed');
                                ke.ext.util.storageUtil.setIntValue('_is_metamask_user', 1);
                            } else {
                                console.log('MetaMask not installed');
                                if (typeof ga != "undefined") ga('send', 'event', '_metamask', 'not-installed');
                                ke.ext.util.storageUtil.setIntValue('_is_metamask_user', 0);
                            }
                        })
                        .catch(e => {
                            console.log('MetaMask not installed');
                            if (typeof ga != "undefined") ga('send', 'event', '_metamask', 'not-installed');
                            ke.ext.util.storageUtil.setIntValue('_is_metamask_user', 0);
                        });
                } catch(e) {
                    console.log('MetaMask not installed');
                    if (typeof ga != "undefined") ga('send', 'event', '_metamask', 'not-installed');
                    ke.ext.util.storageUtil.setIntValue('_is_metamask_user', 0);
                }
            }
        },

        loadMateFP: function (info, tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: ke.processCall('app', 'trans', 'fullPage')
            });

            if (typeof ga != "undefined") ga('send', 'event', 'translation', 'fullpage');

            //
            // count translations by type

            if (Date.now() - ke.ext.util.storageUtil.getIntValue('last_trans_count_upd') >= ke.TIME.ONE_DAY) {
                ke.app.handlers.sendTranslationsCount();
            }

            ke.ext.util.storageUtil.setJsonField('translations_count', 'fullpage',
                +ke.ext.util.storageUtil.getJsonField('translations_count', 'fullpage') + 1);
            ke.ext.util.storageUtil.setJsonField('all_trans_count', 'fullpage',
                +ke.ext.util.storageUtil.getJsonField('all_trans_count', 'fullpage') + 1);

            ke.app.handlers._processEventHandlers.app.opt.updateUninstallUri();
        },

        sendInstallEvent: function () {
            if (!ke.ext.util.storageUtil.isTrueOption('install_event')) {
                ke.ext.util.storageUtil.setVal('install_event', true);

                chrome.tabs.query({}, function (tabs) {
                    if (typeof ga != "undefined") ga('send', 'event', 'background', 'install', 'tabs-' + tabs.length);

                    $.ajax({
                        url: 'https://sync.matetranslate.com/add_dev',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            d_id: ke.ext.util.storageUtil.getVal('user_id'),
                            d: ke.PLATFORM_CODE,
                            l: ke.getLocale('@@ui_locale'),
                            v: ke.ext.util.storageUtil.getVal('ext_ver'),
                            tl: tabs.length
                        },
                        success: function (r) {
                            if (r.success && typeof ga != "undefined") {
                                ga('send', 'event', 'background', 'install', 'sent');
                            }
                        },
                        error: function (e) {
                            if (typeof ga != "undefined") {
                                ga('send', 'event', 'background', 'install', 'failed');
                            }
                        }
                    });
                });
            }
        },

        sendTranslationsCount: function () {
            if (Date.now() - ke.ext.util.storageUtil.getIntValue('last_trans_count_upd') >= ke.TIME.ONE_DAY) {
                var full_date = new Date();
                var date = new Date(full_date.getYear(), full_date.getMonth(), full_date.getDate(), 0, 0, 0, 0);
                var vals = ke.ext.util.storageUtil.getDecodedVal('translations_count');

                $.ajax({
                    url: 'https://sync.matetranslate.com/save_analytics',
                    type: 'GET',
                    dataType: 'JSON',
                    data: $.extend(vals, {
                        date: date.getTime(),
                        user_id: ke.ext.util.storageUtil.getVal('user_id')
                    }),
                    success: function (r) {
                        if (r.success && typeof ga != "undefined") {
                            ga('send', 'event', 'background', 'trans-count', 'sent');
                        }
                    },
                    error: function (e) {
                        if (typeof ga != "undefined") {
                            ga('send', 'event', 'background', 'trans-count', 'failed');
                        }
                    }
                });

                ke.ext.util.storageUtil.encodeAndSet('translations_count', ke.ext.const.storage.DEFAULT_VALUES.TRANSLATIONS_COUNT);
                ke.ext.util.storageUtil.setVal('last_trans_count_upd', Date.now());
            }
        }
    });

})();