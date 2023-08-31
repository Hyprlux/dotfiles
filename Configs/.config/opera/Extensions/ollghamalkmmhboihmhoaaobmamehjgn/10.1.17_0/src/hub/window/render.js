/* Kumquat Hub Window Render
 *
 **/

(function (undefined) {

    const ONE_DAY = 86400000;
    const ONE_MONTH = ONE_DAY * 30;

    pl.extend(ke.app.render, {

        get ONE_DAY() {
            return ONE_DAY;
        },

        organize: {
            ctrlHistoryLinkVisibility: function () {
                ke.ext.util.storageUtil.requestBackgroundOption('isTrueOption', ['history'], function (is_true) {
                    $('.collapsable-history').css('display', is_true ? 'inline-block' : 'none');
                });
            },

            fadeInElements: function () {
                $('.complex-wrap')
                    .fadeIn(175, ke.getAnimType('slide_up'), function () {
                        $(this).addClass('unfaded-cw');
                        pl('.translation-input').caretToEnd();
                    });
            },

            toggleUnpinLink: function () {
                if (document.location.hash.indexOf("unpinned") > -1 || ke.IS_SAMSUNG) {
                    $('.unpin').fadeOut(300, ke.getAnimType('fade_out'));
                }
            },

            tryShowingProUpgradeLayout: function() {
                if (!ke.app.flags.pro && Date.now() - ke.ext.util.storageUtil.getIntValue('pro_upgrade_last_shown') >= ONE_MONTH) {
                    ke.ui.pro_alert.show(ke.getLocale('Window_ProBannerAds'), 'toolbar-window-routine-promo');
                    ke.ext.util.storageUtil.setIntValue('pro_upgrade_last_shown', Date.now());
                }
            },

            tryShowingSponsorshipBar: function() {
                let ads = ke.ext.util.storageUtil.getDecodedVal('sponsorships');

                if (!ads.active 
                        || ke.ext.util.storageUtil.isTrueOption('sponsorships_dismissed')
                        || ke.app.flags.pro) {

                    ke.app.handlers.hideSponsorshipsBar();
                } else if (Math.random() < 0.5) {
                    // sometimes show pro promo
                    $('.sponsorship-bar .message').html(ke.getLocale('Window_ProBannerAds')
                        .replace('.', '')
                        .replace('。', ''));
                    $('.sponsorship-bar').on('click', ke.app.handlers.onProBannerAdsClicked);
                    if (typeof ga != "undefined") ga('send', 'event', 'window', 'pro-banner-ads', 'shown');
                } else {
                    // actually show something

                    const ROTATION = ONE_DAY * 3;
                
                    let current_id = ke.ext.util.storageUtil.getVal('sponsorships_current_id');
                    let filtered_ads = ads.ads.filter((ad) => {
                        return (ad.region === 'global' || ad.region === ke.ext.util.storageUtil.getVal('user_country'))
                            && (typeof ad.platform === 'undefined' 
                                || (ad.platform === 'mac' && ke.isMac) 
                                || (ad.platform === 'windows' && ke.isWindows));
                    });

                    if (!current_id) {
                        ke.app.temp.current_ad = filtered_ads[Math.floor(Math.random() * filtered_ads.length)];
                        ke.ext.util.storageUtil.setVal('sponsorships_current_id', ke.app.temp.current_ad.id);
                        ke.ext.util.storageUtil.setVal('sponsorships_last_ad_rotation', Date.now());
                    } else if (Date.now() - ke.ext.util.storageUtil.getIntValue('sponsorships_last_ad_rotation') >= ROTATION) {
                        let found = false;

                        for (let i = 0; i < filtered_ads.length; ++i) {
                            if (current_id === filtered_ads[i].id) {
                                // take next
                                if (i + 1 < filtered_ads.length) {
                                    ke.app.temp.current_ad = filtered_ads[i + 1];
                                } else {
                                    ke.app.temp.current_ad = filtered_ads[i + 1 - filtered_ads.length];
                                }

                                found = true;
                                break;
                            }
                        }

                        if (!found) {
                            ke.app.temp.current_ad = filtered_ads[Math.floor(Math.random() * filtered_ads.length)];
                        }

                        ke.ext.util.storageUtil.setVal('sponsorships_current_id', ke.app.temp.current_ad.id);
                        ke.ext.util.storageUtil.setVal('sponsorships_last_ad_rotation', Date.now());
                    } else {
                        let found = false;
                        for (let i = 0; i < filtered_ads.length; ++i) {
                            if (current_id === filtered_ads[i].id) {
                                ke.app.temp.current_ad = filtered_ads[i];
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            ke.app.temp.current_ad = filtered_ads[Math.floor(Math.random() * filtered_ads.length)];
                        }
                    }

                    if (ke.app.temp.current_ad && ke.app.temp.current_ad.id) {
                        let message = ke.app.temp.current_ad.localizations[navigator.language.split('-').shift()]
                            || ke.app.temp.current_ad.localizations['en']
                            || ke.app.temp.current_ad.localizations['ru'];

                        $('.sponsorship-bar .message').html(message);
                        $('.sponsorship-bar').on('click', ke.app.handlers.openSponsorship);
                        $('.sponsorship-bar .close').on('click', ke.app.handlers.dismissSponsorship);

                        if (typeof ga != "undefined") ga('send', 'event', 'affiliate-ads', ke.app.temp.current_ad.id, 'shown');
                    } else {
                        ke.app.handlers.hideSponsorshipsBar();
                        if (typeof ga != "undefined") ga('send', 'event', 'affiliate-ads', 'not-shown', 'unknown-reason');
                    }
                }
            },

            adjustSwapWidth: function () {
                let $lang_sel = $('.lang-selectors');
                let $from_sel = $('.from-lang');
                let $lang_swap = $('.lang-swap');
                let iterations = 0;

                // if the entire picker layout's height is bigger than the one of one picker,
                // it probably means the layout got fucked up, and the picker and below one another
                // min swap button width so it doesn't look ugly = 35px
                // prevent an infinite loop with `iterations`, anyway
                while ($lang_sel.height() > $from_sel.height() && $lang_swap.width() >= 35 && ++iterations <= 30) {
                    $lang_swap.width($lang_swap.width() - 1);
                }
            }
        },

        events: {
            showArticleUpgrade: function() {
                if (!ke.app.flags.pro) {
                    $('.article').click(ke.app.handlers.showArticleUpgrade);
                }
            },

            showIpaUpgrade: function() {
                if (!ke.app.flags.pro) {
                    $('.ipa').click(ke.app.handlers.showIpaUpgrade);
                }
            },

            swap: function () {
                $('.lang-swap').bind('click', ke.app.handlers.onSwapLang);
            },

            toggleTextareaFocus: function () {
                $(document).off('focus').on('focus', '.translation-input', ke.particles.tr_input.model.onTextareaFocus);
                $(document).off('blur').on('blur', '.translation-input', ke.particles.tr_input.model.onTextareaBlur);
            },

            listenRaw: function () {
                $('.listen-raw-butt0n').bind('click', ke.particles.listen.model.playRaw);
            },

            listenTranslation: function () {
                $('.listen-translation').bind('click', ke.particles.listen.model.playTranslation);
            },

            listenSynonym: function () {
                $('.listen-v-item').bind('click', ke.particles.listen.model.playSynonym);
                $('.small-copy-button').bind('click', ke.particles.three_dots.model.copySynonym);
            },

            useSynonym: function () {
                $('.synonym').bind('click', ke.app.handlers.useSynonym);
            },

            listen: function () {
                this.listenRaw();
                //this.listenTranslation();
            },

            clearInput: function () {
                $('.clear-input').bind('click', ke.app.handlers.clearInput);
                //$('.translation-input').bind('keyup', ke.app.handlers.ctrlClearInputVisibility);
            },

            enableRawListen: function () {
                //$('.translation-input').bind('keyup', ke.particles.listen.model.ctrlRawVisibility);
            },

            onHistoryLinkClick: function () {
                $('.history-button').bind('click', ke.app.handlers.onHistoryLinkClick);
            },

            onSettingsLinkClick: function () {
                $('.settings-button').bind('click', ke.app.handlers.onSettingsLinkClick);
            },

            onUnpinLinkClick: function () {
                $('.unpin').bind('click', ke.app.handlers.onUnpinLinkClick);
            },

            translateOnClick: function () {
                $('.translate-button').bind('click', ke.particles.translate.model.translateSimple);
            },

            onResize: function () {
                $(window).resize(ke.app.handlers.onResize);
            },

            // in this method
            translateOnKeyCombinations: function () {
                ke.ext.util.storageUtil.requestBackgroundOption('getVal', ['win_trans_type'], function (type) {
                    ke.app.$input.bind('keydown', function (event) {
                        ke.particles.translate.model.checkTranslationShortcut(event, type);
                    });
                });

                ke.app.$input.bind('keyup', function (event) {
                    ke.particles.translate.model.toggleControls();
                });
            },

            translateOnKeyup: function () {
                $('.translation-input').bind('keyup', ke.particles.translate.model.translateOnKeyup);
            },

            saveValueOnKeyup: function () {
                ke.app.$input.bind('keyup', ke.particles.tr_input.model.saveValueOnKeyup);
            },

            countTextLength: function () {
                ke.app.$input.bind('keyup', ke.app.handlers.countTextLength);
            },

            shortcuts: function () {
                $(document.body).bind('keyup', ke.app.handlers.onShortcutsUp);
                $('.translation-input').bind('keyup', ke.app.handlers.onShortcutsUp);
            },

            dontAutocorrect: function () {
                $('.autocorrection-layout .ac-word').on('click', ke.app.handlers.dontAutocorrect);
            }
        }
    });

})();
