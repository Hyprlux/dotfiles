/**
 * Created by chernikovalexey on 02/11/17.
 */

(function () {

    const HTML = {

        old_cleaner: '\
            <div class="ccw-upgrade-layout pro-alert">\
                <div class="popup combo-change-window">\
                    <div class="ccw-top">\
                        <div class="ccw-logo"></div>\
                    </div>\
                    <div class="ccw-contents">\
                        <div class="ccw-more"><%=message%></div>\
                        <div class="features">\
                            <div class="feature">\
                                <span><%=split_test_2_feature_2%></span>\
                            </div>\
                            <div class="feature">\
                                <span><%=split_test_2_feature_3%></span>\
                            </div>\
                            <div class="feature">\
                                <span><%=split_test_2_feature_4%></span>\
                            </div>\
                            <div class="feature">\
                                <span><%=split_test_2_feature_5%></span>\
                            </div>\
                            <div class="feature rm-1">\
                                <span><%=split_test_2_feature_8%></span>\
                            </div>\
                        </div>\
                        <div class="one-off-elements">\
                            <button class="mw-button high-cta ccw-upgrade"><%=upgrade_button%></button>\
                            <button class="mw-button wba-s ccw-restore"><%=l_restore%></button>\
                            <button class="mw-button wba-s ccw-close"><%=l_not_now%></button>\
                        </div>\
                        <div class="sub-elements">\
                            <div class="plans">\
                                <div class="plan monthly">\
                                    <div class="checkbox"></div>\
                                    <div class="price-layout"><span class="price"><%=price_monthly%></span></div>\
                                </div>\
                                <div class="plan annual selected">\
                                    <div class="checkbox"></div>\
                                    <div class="price-layout">\
                                        <div class="price"><%=price_annual%></div>\
                                        <div class="savings"><%=savings%></div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="mw-button high-cta pro-subscribe">\
                                <div class="main-cta" id="Sub_TryFreeCTA"><%=subscribe_btn%></div>\
                                <!--<div class="secondary-note"><%=due_after_trial%></div>-->\
                            </div>\
                            <div class="secondary-sub-actions">\
                                <div class="sec-button more-settings"><%=more_settings%></div>\
                                <div class="sec-button ccw-close"><%=l_not_now%></div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>'
    };

    pl.extend(ke.ui.pro_alert, {
        opened: false,

        getTopPos: function ($alert, $mw) {
            var h = $mw.height()
                + parseInt($mw.css('padding-top')) * 2;

            return $alert.height() / 2 - h / 2;
        },

        show: function (message, short_id, add_html, not_dismissable) {
            ke.ext.util.storageUtil.chainRequestBackgroundOption([
                {fn: 'getVal', args: ['pro_inapp_price']},
                {fn: 'getVal', args: ['account_token']},
                {fn: 'isTrueOption', args: ['chr_pro_flag']}
            ], function (r) {
                var price = r[0].response;
                var token = r[1].response;
                var is_pro = r[2].response;

                if (ke.ui.pro_alert.opened || ke.isProUser) {
                    return;
                }

                ke.ui.pro_alert.opened = true;

                message = message || '';

                // savings, more_settings, _48h_notification, price_annual, price_monthly,
                // subscribe_btn, due_after_trial
                let trial_days = 7;
                let country = ke.ext.util.storageUtil.getVal('user_country');
                let tier = 1;
                let region =  ke.isEEA(country) 
                    ? "eu"
                    : ((country in ke.ext.const.subscriptions.prices['tier_' + tier]) ? country : "default");
    
                    let annual_price = ke.ext.util.storageUtil.getVal('sub_price_annual').replace(',', '.').match(/\d+(,|.)\d+/)[0];
                    let monthly_price = ke.ext.util.storageUtil.getVal('sub_price_monthly').replace(',', '.').match(/\d+(,|.)\d+/)[0];
                let savings = Math.floor((1 - annual_price / (monthly_price * 12)) * 100);

                const no_trial = (trial_days === 0 || ke.ext.util.storageUtil.isTrueOption('sub_been_subscribed_once'));
                let subscribe_btn = ke.getLocale('Sub_TryFreeCTA').replace('<span class="trial-days"></span>', trial_days);
                
                if (no_trial) {
                    subscribe_btn = ke.getLocale('Sub_SubscribeNow');
                }

                if (ke.ext.util.storageUtil.getVal('user_country') in ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS) {
                    price = ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS[ke.ext.util.storageUtil.getVal('user_country')].price;
                }

                // if (ke.ext.util.storageUtil.getIntValue('one_off_tier') >= 2) {
                //     price = ke.ext.const.subscriptions.one_off_prices['tier_' + ke.ext.util.storageUtil.getIntValue('one_off_tier')][region][0];
                // }

                $('body').append(ke.ext.tpl.compile(HTML['old_cleaner'], {
                    savings: ke.getLocale('Sub_Savings').replace('{{savings}}', savings),
                    more_settings: ke.getLocale('Sub_MoreInlineInfo'),
                    _48h_notification: ke.getLocale('Sub_48hNotificationLabel'),
                    price_annual: ke.ext.util.storageUtil.getVal('sub_price_annual') + ke.getLocale('Sub_Year'),
                    price_monthly: ke.ext.util.storageUtil.getVal('sub_price_monthly') + ke.getLocale('Sub_Month'),
                    subscribe_btn: subscribe_btn,
                    due_after_trial: ke.getLocale('Sub_DueAfterTrial').replace('<span class="price-due"></span>', '<span class="price-due">' + ke.ext.const.subscriptions.prices['tier_' + tier][region][1] + ke.getLocale('Sub_Year') + '</span>'),

                    // . -> '' bc it's easier than going thru all strings
                    // to match "{{message}}, and more:"
                    message: '<b>' + message.substr(0, message.length - 1) + '</b>' + ke.getLocale('Pro_ComesAlong'),
                    upgrade_button: ke.getLocale('Window_Mw_UpgradeButton', price),

                    l_more: ke.getLocale('Pro_UnlockMore'),

                    l_feature1: ke.getLocale('Tour_ProFeature1'),
                    l_feature1_tooltip: ke.getLocale('Pro_PhrasebookFeature'),

                    l_feature7: ke.getLocale('Tour_ProFeature7'),

                    l_feature2: ke.getLocale('Tour_ProFeature2'),
                    l_feature2_tooltip: ke.getLocale('Pro_STTFeature'),

                    l_feature3: ke.getLocale('Tour_ProFeature3'),
                    l_feature3_tooltip: ke.getLocale('Pro_ShortcutsFeature'),

                    l_feature4: ke.getLocale('Tour_ProFeature4'),

                    l_restore: ke.getLocale('Settings_Restore'),
                    l_not_now: ke.getLocale('Window_Mw_NotChromeNotNow'),

                    l_feature_ipa: ke.getLocale('Pro_IPA'),
                    l_feature_ipa_tooltip: ke.getLocale('Pro_IPA_Desc'),

                    l_feature_articles: ke.getLocale('Pro_Articles'),
                    l_feature_articles_tooltip: ke.getLocale('Pro_Articles_Desc'),

                    split_test_2_feature_1: ke.getLocale('ProSplitTests_2_F1'),
                    split_test_2_feature_2: ke.getLocale('ProSplitTests_2_F2'),
                    split_test_2_feature_3: ke.getLocale('ProSplitTests_2_F3'),
                    split_test_2_feature_4: ke.getLocale('ProSplitTests_2_F4'),
                    split_test_2_feature_5: ke.getLocale('ProSplitTests_2_F5'),
                    split_test_2_feature_6: ke.getLocale('ProSplitTests_2_F6'),
                    split_test_2_feature_8: ke.getLocale('ProSplitTests_2_F8'),

                    split_test_3_pitch: '<b>' + message + '</b><br>' + ke.getLocale('ProSplitTests_2_Pitch').split('<br>').pop()
                }));

                var $alert = $('.pro-alert');
                var $mw = $alert.find('.combo-change-window');

                if (add_html) {
                    $alert.append(add_html);
                }

                if (ke.isSubscriptionBased) {
                    $alert.find('.one-off-elements').hide();
                } else {
                    $alert.find('.sub-elements').hide();
                }

                if (!message) {
                    $alert.find('.ccw-more').remove();
                }

                if (!ke.IS_CHROME) {
                    $alert.find('.stt-feature').remove();
                }

                $('.' + short_id + '-feature').remove();

                // 7.0.20 -- don't remove the feature which triggered this alert from the list
                //$alert.find('.' + short_id + '-feature').remove();

                $alert.css('top', $(document).scrollTop());
                $('body').addClass('stop-scrolling');

                if (typeof ga != "undefined") ga('send', 'event', 'pro', 'shown', short_id);

                $alert.find('.ccw-restore').attr('data-id', short_id);
                $alert.find('.ccw-close').attr('data-id', short_id);

                if (ke.section === 'options') {
                    $alert.find('.more-settings').remove();
                } else {
                    $alert.find('.more-settings').on('click', ke.ui.pro_alert.openMoreSubscriptionInfo);
                }
                
                $alert.find('.plan').on('click', ke.ui.pro_alert.changeBillingPeriod);

                if (token) {
                    $alert.find('.ccw-restore').remove();
                } else {
                    $alert.find('.ccw-restore').on('click', ke.ui.pro_alert.restore);
                }

                if (ke.isSubscriptionBased) {
                    $alert
                        .find('.pro-subscribe')
                        .attr('data-id', short_id)
                        .on('click', ke.ui.pro_alert.subscribe);
                } else {
                    $alert
                        .find('.ccw-upgrade')
                        .attr('data-id', short_id)
                        .on('click', ke.ui.pro_alert.upgrade);
                }
                
                setTimeout(() => {
                    var top = ke.ui.pro_alert.getTopPos($alert, $mw);
                    var rm = 0;
                    var iterations = 0;

                    while ((top < 5 || $mw.height() > $(window).height()) && ++iterations <= 10) {
                        if (rm === 0) {
                            $alert.addClass('ccw-small');
                        } else {
                            $alert.find('.rm-' + rm).remove();
                        }

                        top = ke.ui.pro_alert.getTopPos($alert, $mw);
                        ++rm;
                    }

                    $mw.css('top', top);

                    if (not_dismissable) {
                        $alert.find('.ccw-close').remove();
                        $alert.css('backdrop-filter', 'blur(5px)');
                        $alert.css('-webkit-backdrop-filter', 'blur(5px)'); // firefox
                    } else {
                        $alert.find('.ccw-close').on('click', ke.ui.pro_alert.close);
                    }
                }, 50);
            });
        },

        changeBillingPeriod: function() {
            $('.plan.selected').removeClass('selected');
            $(this).addClass('selected');
            $('.price-due').html($('.plan.selected .price').html());
        },

        openMoreSubscriptionInfo: function() {
            let period = $('.plan.selected').hasClass('monthly') ? 'monthly' : 'annual';
            let id = $(this).parent().prev().attr('data-id');
            chrome.tabs.create({
                url: chrome.extension.getURL('/pages/public/options.html#sub_ref,' + period + ',' + id)
            });
        },

        upgrade: function (event, short_id) {
            var id = $(this).data('id');

            if (ke.section === 'options') {
                ke.particles.pro_block.model.upgrade();
            } else {
                chrome.tabs.create({
                    url: chrome.extension.getURL('/pages/public/options.html#start_purchase,' + id)
                });
            }

            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'upgrade-clicked', id);
        },

        subscribe: function (event, short_id) {
            var id = $(this).data('id');

            if (ke.section === 'options') {
                ke.particles.pro_block.model.subscribe();
            } else {
                let period = $('.plan.selected').hasClass('monthly') ? 'monthly' : 'annual';
                chrome.tabs.create({
                    url: chrome.extension.getURL('/pages/public/options.html#start_purchase,' + period + ',' + id)
                });
            }

            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'subscribe-clicked', id);
        },

        restore: function () {
            ke.ui.login.show({is_restore: true});

            var id = $(this).data('id');
            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'restore-clicked', id);
        },

        close: function () {
            $('.ccw-upgrade-layout.pro-alert').remove();
            $('body').removeClass('stop-scrolling');

            var id = $(this).data('id');

            ke.ui.pro_alert.opened = false;
            
            if (typeof ga != "undefined") ga('send', 'event', 'pro', 'alert-closed', id);
        }
    });

})();