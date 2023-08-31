/**
 * Created by chernikovalexey on 07/11/17.
 */

(function () {
    pl.extend(ke.particles.pro_block.view, {
        init: function (callback) {
            if (!ke.IS_CHROME) {
                $('.stt-feature').remove();
            }

            $('.whats-coming-soon').on('click', ke.particles.pro_block.model.onComingSoonClicked);
            $('.login-button').on('click', ke.particles.pro_block.model.showLogin);
            $('.signout').on('click', ke.particles.pro_block.model.signOut);

            $('.pull-sub-data-again').on('click', ke.particles.pro_block.model.retryPullingSubDataAgain);

            this.setupSurveys();
            this.showSyncState();
            this.showProState();

            if (typeof callback === 'function') {
                callback();
            }
        },

        setupSurveys: function() {
            let params = [
                ke.ext.util.storageUtil.getVal('account_email'),
                1,
                7,
                ke.ext.util.storageUtil.getVal('user_country'),
                ke.ext.util.storageUtil.getVal('all_trans_count'),
                (new Date(+ke.ext.util.storageUtil.getVal('install_date')))
            ];

            $('.survey-layout iframe').each(function() {
                $(this).attr('src', $(this).attr('src') + ';' + params.join(';'));
            });
            
            let cancelled_params = [
                ke.ext.util.storageUtil.isTrueOption('sub_48h_notif'),
                ke.ext.util.storageUtil.getDecodedVal('sub_data').status
            ];

            if (ke.ext.util.storageUtil.getDecodedVal('sub_data').status === 'trialing') {
                let current_trial_day = (Date.now() - ke.ext.util.storageUtil.getIntValue('sub_trial_starting_date')) / (1000 * 60 * 60 * 24);
                cancelled_params.push(current_trial_day); // which trial day is it now
            }

            $('.survey-layout.cancelled').attr('src', $('.survey-layout.cancelled').attr('src') + ';' + cancelled_params.join(';'));
            $('.survey-layout .dismiss').on('click', ke.particles.pro_block.model.dismissSurvey);
        },

        tryShowingProSurvey: function(sub_data) {
            if (sub_data.status === "active" 
                && ke.ext.util.storageUtil.getIntValue('sub_pro_survey') === 0
                && Math.random() < 0.5) {

                $('.combo-change-window').hide();
                $('.combo-change-window.just-subscribed').show();
                $(window).scrollTop(0);
                $('body').addClass('stop-scrolling');
                $('.survey-layout').fadeIn(100).css('display', 'flex');

                ke.ext.util.storageUtil.setIntValue('sub_pro_survey', 1);
            }
        },

        showProState: function() {
            //console.log('showing pro state', ke.isLegacyProUser);

            if (ke.isLegacyProUser) {
                $('.no-pro-layout').hide();
                $('.pro-layout').hide();
                $('.no-pro-layout-old').hide();

                if (ke.isSubscriptionBased) {
                    $('.pro-block-design').hide();
                    $('.pro-layout.legacy').show();
                } else {
                    $('.pro-layout.old').show();
                    $('.restore').hide();
                    $('.student-discount').hide();
                }
            } else {
                ke.particles.pro_block.model.getLatestSubscriptionData(this.showSubscriptionStatus);
            }
        },

        showSubscriptionStatus: function(response) {
            let data = ke.ext.util.storageUtil.getDecodedVal('sub_data');
            let temp_sub_data = ke.ext.util.storageUtil.getDecodedVal('temp_sub_data');

            console.log('got sub status:', response);
            console.log(data);

            ke.particles.pro_block.view.tryShowingProSurvey(data);

            // Make the subscription interface ready even if it's going to be shown in the first place
            // Some actions like Resubscribe may trigger its appearance
            let country = ke.ext.util.storageUtil.getVal('user_country');
            let tier = 1;
            let region =  ke.isEEA(country) 
                ? "eu"
                : ((country in ke.ext.const.subscriptions.prices['tier_' + tier]) ? country : "default");

            $('.plan.monthly .price').html(ke.ext.util.storageUtil.getVal('sub_price_monthly') + ke.getLocale('Sub_Month'));
            $('.plan.annual .price').html(ke.ext.util.storageUtil.getVal('sub_price_annual') + ke.getLocale('Sub_Year'));
                
            // 29,99 won't convert to float, only 29.99
            // let annual_price = ke.ext.const.subscriptions.prices['tier_' + tier][region][1].replace(',', '.').match(/\d+(,|.)\d+/)[0];
            // let monthly_price = ke.ext.const.subscriptions.prices['tier_' + tier][region][0].replace(',', '.').match(/\d+(,|.)\d+/)[0];
            let annual_price = ke.ext.util.storageUtil.getVal('sub_price_annual').replace(',', '.').match(/\d+(,|.)\d+/)[0];
            let monthly_price = ke.ext.util.storageUtil.getVal('sub_price_monthly').replace(',', '.').match(/\d+(,|.)\d+/)[0];
            let savings = Math.floor((1 - annual_price / (monthly_price * 12)) * 100);
            $('.plan.annual .savings').html(ke.getLocale('Sub_Savings').replace('{{savings}}', savings));

            $('.price-due').html($('.plan.selected .price').html());

            let trial_days = 7;
            if (trial_days === 0 || ke.ext.util.storageUtil.isTrueOption('sub_been_subscribed_once')) {
                $('.pro-subscribe').html(ke.getLocale('Sub_SubscribeNow'));
                $('._48h-notification').remove();
            } else {
                $('.trial-days').html(trial_days);
            }

            if (!ke.ext.util.storageUtil.isTrueOption('sub_48h_notif')) {
                $('._48h-notification').remove();
            }

            $('.plan').on('click', ke.particles.pro_block.model.changeBillingPeriod);
            $('.pro-subscribe').on('click', ke.particles.pro_block.model.subscribe);
            $('.screw-subscription').on('click', ke.particles.pro_block.model.screwSubscription);
            $('.student-discount').on('click', ke.particles.pro_block.model.requestStudentDiscount);

            if (ke.ext.util.storageUtil.getVal('account_token')) {
                $('.purchased-pro-before').remove();
            } else {
                $('.purchased-pro-before').on('click', ke.particles.pro_block.model.restoreSubscription);
            }

            if (ke.ext.util.storageUtil.isTrueOption('already_submitted_screw_sub_survey')) {
                $('.screw-subscription').remove();
            }

            //
            // Now, status-specific actions
            //

            if (response === 'server_error') {
                $('.pro-layout.with-account').hide();
                $('.no-pro-layout').show();
                //$('.error-free-pro-layout').hide();
                $('.no-pro-layout-old').hide();
                $('.pro-data-loading-layout').fadeOut(100);
                $('.error-layout').css('display', 'flex');
            } else if (response === 'no_account' && temp_sub_data.email) {
                // go and finish creating it, mate

                console.log('finish creating your account');

                $('.pro-block-design').hide();
                $('.no-pro-layout').hide();
                $('.pro-layout.with-account').hide();
                $('.pro-layout.no-account').show();
                $('.no-pro-layout-old').hide();

                if (temp_sub_data.signed_in_before) {
                    $('.pro-layout.no-account .next-billing').html(ke.getLocale('Sub_PleaseSignBackIn').replace('{{email}}', temp_sub_data.email));
                    $('.finish-creating-button').hide();
                    $('.login-button').show();
                } else {
                    $('.pro-layout.no-account .next-billing').html(ke.getLocale('Sub_PleaseCreateAccount').replace('{{email}}', temp_sub_data.email));
                    $('.login-button').hide();
                    $('.finish-creating-button').show();
                }

                $('.finish-creating-button').on('click', ke.particles.pro_block.model.finishCreatingAccount);
            } else if (!data.isSubscriptionVerified) {
                if (ke.isSubscriptionBased) {
                    const pricing_tier = 1;

                    if (pricing_tier >= 2) {
                        const one_off_price = ke.ext.const.subscriptions.one_off_prices['tier_' + pricing_tier][region][0];
                        $('.pro-version-button').html(ke.getLocale('Window_Mw_UpgradeButton', one_off_price));
                    }
    
                    console.log('no sub – upgrade block');
    
                    $('.pro-layout').hide();
                    $('.no-pro-layout').show();
                    $('.no-pro-layout-old').hide();
                    $('.pro-data-loading-layout').fadeOut(100);
                } else {
                    $('.no-pro-layout-old').show();
                    $('.pro-data-loading-layout').fadeOut(100);
                    $('.error-free-pro-layout').hide();
                    
                    //
                    // we have to update the label here manually because of custom prices for certain regions
                    //

                    let price = ke.ext.util.storageUtil.getVal('pro_inapp_price');

                    if (ke.ext.util.storageUtil.getVal('user_country') in ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS) {
                        price = ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS[ke.ext.util.storageUtil.getVal('user_country')].price;
                    }

                    $('.pro-version-button')
                        .on('click', ke.particles.pro_block.model.upgrade)
                        .html(ke.getLocale('Window_Mw_UpgradeButton', price));
    
                    // it says `restoreSubscription`, yet it's exactly the same for one-off and sub
                    // just the sub legacy stuff
                    $('.restore').on('click', ke.particles.pro_block.model.restoreSubscription);
                }
            } else if (data.isSubscriptionVerified) {
                // show sub info

                console.log('sub verified');

                $('.no-pro-layout').fadeOut(100);
                $('.pro-block-design').hide();
                $('.pro-pitch').hide();
                $('.pro-layout.no-account').hide();
                $('.no-pro-layout-old').hide();
                $('.pro-layout.with-account').show();

                $('.sub-email').html(data.email);

                let next_amount_billed = data.unit_price + ' ' + data.currency;
                let next_billing_date = new Date(data.next_bill_date).toString().split(' ').splice(1, 3).join(' ');

                $('.change-payment-method').attr('href', data.update_url);
                $('.cancel-subscription')
                    .attr('href', data.cancel_url)
                    .on('click', ke.particles.pro_block.model.cancelSub);
                $('.resubscribe').hide();

                // past_due, paused aren't covered. will see if we need to?
                if (data.status === 'trialing') {
                    /*let period = 'Monthly';
                    if (data.subscription_plan_id == ke.ext.const.subscriptions.ANNUAL_PLAN_ID) {
                        period = 'Annual';
                    }*/
                    $('.next-billing').html(ke.getLocale('Sub_WhenTrialing').replace('{{next_amount_billed}}', next_amount_billed).replace('{{next_billing_date}}', next_billing_date));
                } else if (data.isCancelled) { // status == deleted
                    // cancelled but still has access
                    let sub_ends_on = new Date(data.endsOn).toString().split(' ').splice(1, 3).join(' ');
                    $('.next-billing').html(ke.getLocale('Sub_WhenCancelled').replace('{{sub_ends_on}}', sub_ends_on));

                    $('.change-payment-method').hide();
                    $('.cancel-subscription').hide();
                    $('.resubscribe').show().on('click', ke.particles.pro_block.model.resubscribe);
                } else { 
                    // active sub
                    $('.next-billing').html(ke.getLocale('Sub_NextBilling').replace('{{next_amount_billed}}', next_amount_billed).replace('{{next_billing_date}}', next_billing_date));
                }
            }
        },

        showSyncState: function () {
            ke.ext.util.storageUtil.chainRequestBackgroundOption([
                {fn: 'getVal', args: ['account_token']},
                {fn: 'isTrueOption', args: ['chr_pro_flag']},
                {fn: 'getVal', args: ['account_email']}
            ], function (r) {
                var token = r[0].response;
                var is_pro = r[1].response;
                var email = r[2].response;

                if (!token) {
                    $('.signed-in-layout').hide();
                    $('.signed-out-layout').show();
                    $('.sync-block .pro-pitch').show();
                } else {
                    $('.login-email').html(email);
                    $('.signed-out-layout').hide();
                    $('.signed-in-layout').show();
                    $('.sync-block .pro-pitch').hide();

                    if (ke.isProUser) {
                        $('.sync-option-disabled').hide();
                    } else {
                        $('.sync-option-disabled').show();
                    }
                }
            });
        }
    });
})();