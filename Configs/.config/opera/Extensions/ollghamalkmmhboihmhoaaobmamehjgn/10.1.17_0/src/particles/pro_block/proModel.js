/**
 * Created by chernikovalexey on 07/11/17.
 */


(function () {
    pl.extend(ke.particles.pro_block.model, {
        callback: null,

        upgrade: function () {
            var source = ke.app.temp.source || ke.section;

            ke.ext.util.storageUtil.chainRequestBackgroundOption([
                {fn: 'getVal', args: ['account_email']},
                {fn: 'getVal', args: ['user_country']},
                {fn: 'isTrueOption', args: ['gdpr_consent']}
            ], function (r) {
                var is_gdpr = r[2].response;

                /*if (!is_gdpr) {
                    alert(ke.getLocale('Settings_NoConsentPro'));
                    ke.ui.login.show({is_gdpr: true});
                } else {*/
                    var email = r[0].response;
                    var country = r[1].response;
                    var custom_checkout_link = '';

                    if (ke.ext.util.storageUtil.getVal('user_country') in ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS) {
                        custom_checkout_link = ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS[ke.ext.util.storageUtil.getVal('user_country')].link;
                    }

                    /*if (ke.ext.util.storageUtil.getIntValue('one_off_tier') >= 2) {
                        custom_checkout_link = ke.ext.const.subscriptions.one_off_checkout_links['tier_' + ke.ext.util.storageUtil.getIntValue('one_off_tier')];
                    }*/

                    Paddle.Checkout.open({
                        product: ke.ext.const.subscriptions.ONE_OFF_ID,
                        override: custom_checkout_link,
                        email: email,
                        country: country,
                        allowQuantity: false,
                        referrer: ke.browserName,
                        passthrough: ke.browserName + " v" + ke.ext.util.storageUtil.getVal('ext_ver') + " (" + source + ")",
                        message: ke.getLocale('MatePro_Description'),
                        successCallback: function (data) {
                            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['chr_pro_flag', true], function() {
                                if (ke.section === 'tour') {
                                    // window.close();
                                    // too user hostile / confusing to just close the window

                                    setTimeout(ke.particles.pro_block.model.popConfetti, 1000);

                                    ke.app.render.organize.showProLayout();
                                } else {
                                    //alert(ke.getLocale('Settings_ProActivated'));
    
                                    if (ke.ui.pro_alert.opened) {
                                        ke.ui.pro_alert.close();
                                    }
    
                                    ke.particles.pro_block.view.showProState();
                                    ke.particles.pro_block.view.showSyncState();
                                    ke.particles.pro_block.model.popConfetti();
                                }
                            });

                            ke.ext.mate_events.send('purchased_one_time');
                            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'purchased', source);
                        },
                        closeCallback: function (data) {
                            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'pro-checkout-closed', source);
                        }
                    });
                //}
            });

            if (typeof ga != "undefined") ga('send', 'event', 'options', 'pro-checkout-shown', source);
        },

        subscribe: function() {
            // contentes of that function can be moved here, in fact
            // legacy post A/B test code - just removed ifs for now
            ke.particles.pro_block.model.subscribeWithNewTabCheckout.call(this);
        },

        subscribeWithNewTabCheckout: function() {
            if ($(this).data('disabled') === true) {
                return;
            }

            let source = ke.app.temp.source || ke.section;
            let billing_period = 'annual';

            if ($('.plan.selected').hasClass('monthly')) {
                billing_period = 'monthly';
            }

            // init spinner
            $('.spinner').fadeIn(125);
            let prev_button_value = $('.pro-subscribe').html();
            $(this).data('disabled', true);
            $('.pro-subscribe').html('&nbsp;');

            ke.particles.pro_block.model.generateSubscriptionLinks(billing_period, link => {
                // remove spinner 
                $('.spinner').fadeOut(125);
                $(this).data('disabled', false);
                $('.pro-subscribe').html(prev_button_value);

                if (link) {
                    chrome.tabs.create({
                        url: link
                    });
                } else {
                    alert(ke.getLocale('Sub_CouldNotGetPayLink'));
                }
            });

            if (typeof ga != "undefined") ga('send', 'event', 'options', 'pro-checkout-shown', source);
        },

        subscribeInline: function() {
            var source = ke.app.temp.source || ke.section;

            const tier = 1;
            let trial_days = 7;

            if (ke.ext.util.storageUtil.isTrueOption('sub_been_subscribed_once')) {
                trial_days = 0; // don't let users who have already been subscribed take trial again
            }

            ke.ext.util.storageUtil.chainRequestBackgroundOption([
                {fn: 'getVal', args: ['account_email']},
                {fn: 'getVal', args: ['user_country']}
            ], function (r) {
                    let email = r[0].response;
                    let country = r[1].response;

                    let billing_period = 'annual';
                    let subscription_id = ke.ext.const.subscriptions.ANNUAL_PLAN_ID;

                    if ($('.plan.selected').hasClass('monthly')) {
                        billing_period = 'monthly';
                        subscription_id = ke.ext.const.subscriptions.MONTHLY_PLAN_ID;
                    }

                    let passthrough = {
                        email: email,
                        browser_name: ke.browserName,
                        extension_version: ke.ext.util.storageUtil.getVal('ext_ver'),
                        referrer: source,
                        lang: ke.browserLang,
                        cohort: '',
                        operating_system: ke.isMac ? 'mac' : (ke.isWindows ? 'windows' : 'other'),
                        _48h_notif: ke.ext.util.storageUtil.isTrueOption('sub_48h_notif')
                    };

                    if (!ke.ext.util.storageUtil.getVal('account_token')) {
                        let signup_code = ke.generateUserId(8, 1);
                        ke.ext.util.storageUtil.setVal('temp_signup_code', signup_code);
                        passthrough.signup_code = signup_code;
                    }

                    let checkout_options = {
                        product: subscription_id,
                        override: ke.ext.const.subscriptions.checkout_links[billing_period]['tier_' + tier]['trial_' + trial_days],
                        email: email,
                        country: country,
                        allowQuantity: false,
                        referrer: ke.browserName,
                        passthrough: JSON.stringify(passthrough),
                        message: trial_days > 0 ? ke.getLocale('Sub_FreeTrialVerificationCharge') : "",
                        successCallback: function (data) {
                            ke.particles.pro_block.model.finishCheckoutCallback(data.user.email);
                        },
                        closeCallback: function (data) {
                            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'pro-checkout-closed', source);
                        }
                    };

                    Paddle.Checkout.open(checkout_options);
            });

            if (typeof ga != "undefined") ga('send', 'event', 'options', 'pro-checkout-shown', source);
        },

        finishCheckoutCallback: function(email) {
            const source = ke.app.temp.source || ke.section;
            const tier = 1;
            let trial_days = 7;

            if (ke.section === 'options') {
                ke.particles.sett_tabber.view.displayCurrentTab(1);
            }

            // there will be a bunch of AJAX requests, so a spinner is needed
                            // checking if user is already registered, pulling the latest sub data, etc.
                            $('.pro-data-loading-layout').show();

                            if (ke.ui.pro_alert.opened) {
                                ke.ui.pro_alert.close();
                            }

                            let postAccountCheckCallback = () => {
                                // initiate showing the pro survey once trial changes to active at some point
                                ke.ext.util.storageUtil.setIntValue('sub_pro_survey', 0);

                                // save what feature the user subscribed for, for further split test tracking
                                ke.ext.util.storageUtil.setVal('sub_source', source);
                                
                                // prevent from cancelling trial & getting a new one
                                ke.ext.util.storageUtil.setVal('sub_been_subscribed_once', true);

                                // show confetti and success message if it's onboarding
                                // all other stuff like next billing, management, etc is in settings
                                if (ke.section === 'tour') {
                                    ke.app.render.organize.showProLayout();
                                    setTimeout(ke.particles.pro_block.model.popConfetti, 1500);
                                } else {
                                    ke.particles.pro_block.model.getLatestSubscriptionData((response) => {
                                        ke.particles.pro_block.view.showSubscriptionStatus(response);
                                        ke.particles.pro_block.view.showSyncState();

                                        setTimeout(ke.particles.pro_block.model.popConfetti, 1500);
                                    });
                                }

                                if (trial_days > 0) {
                                    ke.ext.util.storageUtil.setIntValue('sub_trial_starting_date', Date.now());
                                }

                                // analytics stuff

                                ke.ext.mate_events.send('trial_started');

                                if (typeof ga != "undefined") ga('send', 'event', 'pro', 'subscribed', source);
                            };

                            if (!ke.ext.util.storageUtil.getVal('account_token')) {
                                let signed_in_before = false;
                                let checkUserCallback = () => {
                                    ke.ext.util.storageUtil.encodeAndSet('temp_sub_data', {
                                        email: email,
                                        signed_in_before: signed_in_before
                                    });
                                    postAccountCheckCallback();
                                };

                                $.ajax({
                                    url: 'https://' + ke.syncServer + '/check_user',
                                    type: 'GET',
                                    dataType: 'json',
                                    data: {
                                        lang: ke.browserLang,
                                        email: email,
                                        require_password: true
                                    },
                                    success: function (r) {
                                        if (r.registered) {
                                            signed_in_before = true;
                                        }

                                        // console.log('post checkout user check', r);

                                        checkUserCallback();
                                    },
                                    error: checkUserCallback
                                });
                            } else {
                                postAccountCheckCallback();
                            }
        },

        generateSubscriptionLinks: function(plan, callback) {
            let passthrough = {
                ext_id: ke.redirectableExtId,
                plan: plan,
                prev_sub: ke.ext.util.storageUtil.isTrueOption('sub_been_subscribed_once'),
                pt_email: ke.ext.util.storageUtil.getVal('account_email'),
                pt_lang: ke.browserLang,
                pt_browser_name: ke.browserName,
                pt_ext_version: ke.ext.util.storageUtil.getVal('ext_ver'),
                pt_referrer: ke.app.temp.source || ke.section,
                pt_os: ke.isMac ? 'mac' : (ke.isWindows ? 'windows' : 'other'),
                pt_cohort: '' // can be random - usually something we're testing with A/B
            };

            if (!ke.ext.util.storageUtil.getVal('account_token')) {
                let signup_code = ke.generateUserId(8, 1);
                ke.ext.util.storageUtil.setVal('temp_signup_code', signup_code);
                passthrough.pt_signup_code = signup_code;
            }

            $.ajax({
                url: 'https://' + ke.syncServer + '/generate_pay_links_for_browsers',
                type: 'GET',
                data: passthrough,
                success: d => {
                    // if (d.annual.link) {
                    //     ke.ext.util.storageUtil.setVal('sub_checkout_link_annual', d.annual.link);
                    // }

                    // if (d.monthly.link) {
                    //     ke.ext.util.storageUtil.setVal('sub_checkout_link_monthly', d.monthly.link);
                    // }

                    callback(d.link || null);
                },
                error: e => {
                    callback(null);
                }
            });
        },

        finishCreatingAccount: function() {

            console.log('finish creating called');

            ke.ui.login.show({
                is_finish_signup: true,
                email: ke.ext.util.storageUtil.getDecodedVal('temp_sub_data').email
            });
        },
        
        handleNotificationPermissions: function() {
            const schedule = () => {
                ke.ext.util.storageUtil.setVal('sub_48h_notif_status', 0);
            };

            chrome.permissions.contains({
                permissions: ['notifications']
            }, (has) => {
                console.log('notifs permission / contains:', has);

                if (!has) {
                    //setTimeout(() => {
                        chrome.permissions.request({
                            permissions: ['notifications']
                        }, (granted) => {
                            console.log('notifs permission / request:', granted);
    
                            if (granted) {
                                schedule();
                                
                                if (typeof ga != "undefined") ga('send', 'event', 'pro', '48h-notifs', 'granted-and-scheduled');
                            } else {
                                // it might scare people
                                // + it's freaking unpredictable, chrome's weird
                                //alert(ke.getLocale('Sub_NoNotifPermissionAlert'));
    
                                if (typeof ga != "undefined") ga('send', 'event', 'pro', '48h-notifs', 'dismissed-or-weird-error');
                            }
                        });
                    //}, 1000);
                } else {
                    schedule();

                    if (typeof ga != "undefined") ga('send', 'event', 'pro', '48h-notifs', 'had-permission-and-scheduled');
                }
            });
        },

        showLogin: function () {
            ke.ui.login.show({is_restore: false});

            if (typeof ga != "undefined") ga('send', 'event', 'options', 'login-clicked');
        },

        restore: function () {
            ke.ui.login.show({is_restore: true});

            if (typeof ga != "undefined") ga('send', 'event', 'options', 'restore-clicked');
        },

        signOut: function () {
            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['account_email', '']);
            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['account_token', ''], () => {
                ke.particles.pro_block.view.showProState();
                ke.particles.pro_block.view.showSyncState();
            });
            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['account_name', '']);
            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['sub_data', '{}']);

            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'opt', 'revokeToken')
            });

            if (typeof ga != "undefined") ga('send', 'event', 'login', 'sign-out');
        },

        getLatestSubscriptionData: function(callback) {
            let token = ke.ext.util.storageUtil.getVal('account_token');

            if (!token) {
                callback('no_account');
                return;
            }

            //setTimeout(() => {
            $.ajax({
                url: 'https://sync.matetranslate.com/subscription',
                type: 'GET',
                dataType: 'json',
                data: {
                    token: token
                },
                success: (d) => {
                    console.log(d);

                    ke.particles.pro_block.model.sendChargedEventIfNeeded(d);
                    ke.ext.util.storageUtil.encodeAndSet('sub_data', d);

                    callback('ok');
                },
                error: (e) => {
                    callback('server_error');
                }
            });
            //}, 5000)
        },

        sendChargedEventIfNeeded: function(new_sub_data) {
            let prev_sub_data = ke.ext.util.storageUtil.getDecodedVal('sub_data');
            
            if (prev_sub_data && prev_sub_data.status === "trialing" && new_sub_data.status === "active") {
                ke.ext.util.storageUtil.setVal('sub_pro_survey', 0);

                ke.ext.mate_events.send('charged_money');
            }
        },

        changeBillingPeriod: function() {
            $('.plan.selected').removeClass('selected');
            $(this).addClass('selected');
            $('.price-due').html($('.plan.selected .price').html());
        },

        screwSubscription: function() {
            $('.combo-change-window').hide();
            $('.combo-change-window.screw-the-subscription').show();
            $(window).scrollTop(0);
            $('body').addClass('stop-scrolling');
            $('.survey-layout').fadeIn(100).css('display', 'flex');
        },

        dismissSurvey: function() {
            if ($('.combo-change-window:visible').hasClass('cancelled')) {
                document.location.href = $('.cancel-subscription').attr('href');
            }

            $('.survey-layout:visible').fadeOut(100);
            $('body').removeClass('stop-scrolling');
        },

        restoreSubscription: function() {
            ke.ui.login.show({is_restore: true});
        },

        requestStudentDiscount: function() {
            chrome.tabs.create({
                url: 'https://gikken.co/mate-translate/students/?ref=' + ke.browserName + 'SubscriptionBlock'
            });

            if (typeof ga !== "undefined") ga('send', 'event', 'pro', 'request-student-discount');
        },

        // no trial anymore if they've already been subscribed before
        resubscribe: function() {
            ke.ext.util.storageUtil.setIntValue('sub_trial_days', 0);

            $('.pro-subscribe').html(ke.getLocale('Sub_SubscribeNow'));
            $('._48h-notification').remove();

            $('.pro-layout').slideUp(100, () => {
                $('.no-pro-layout').slideDown(100);
                $('.pro-data-loading-layout').fadeOut(100);
            });
        },

        retryPullingSubDataAgain: function() {
            $('.error-layout').fadeOut(100);
            $('.pro-data-loading-layout').fadeIn(100);
            ke.particles.pro_block.model.getLatestSubscriptionData(ke.particles.pro_block.view.showSubscriptionStatus);
        },

        cancelSub: function(event) {
            event.preventDefault();

            $('.combo-change-window').hide();
            $('.combo-change-window.cancelled').show();
            $(window).scrollTop(0);
            $('body').addClass('stop-scrolling');
            $('.survey-layout').fadeIn(100).css('display', 'flex');
        },

        popConfetti: function() {
            var count = 400;
            var defaults = {
              origin: { y: 0.7 }
            };
            
            function fire(particleRatio, opts) {
              confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
              }));
            }
            
            fire(0.25, {
              spread: 26,
              startVelocity: 55,
            });
            fire(0.2, {
              spread: 60,
            });
            fire(0.35, {
              spread: 100,
              decay: 0.91,
              scalar: 0.8
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              scalar: 1.2
            });
            fire(0.1, {
              spread: 120,
              startVelocity: 45,
            });
        },

        onComingSoonClicked: function() {
            alert(ke.getLocale('Sub_CrossPlatformProComingSoon'));
        },

        _resetSub: function() {
            ke.ext.util.storageUtil.setVal('sub_data', '{}');
            ke.ext.util.storageUtil.setVal('temp_sub_data', '{}');
            ke.ext.util.storageUtil.setVal('sub_been_subscribed_once', false);
            ke.ext.util.storageUtil.setVal('sub_48h_notif', true);
            ke.ext.util.storageUtil.setVal('sub_trial_days', 7);
            ke.ext.util.storageUtil.setIntValue('sub_pro_survey', -1);
            ke.ext.util.storageUtil.setVal('already_submitted_screw_sub_survey', false);
        }
    });
})();