/* Kumquat Hub Tour Router
 * 
 **/

(function (undefined) {

    pl.extend(ke.app, {
        import: [
            'ext.const.storage',
            'ext.util.storageUtil',
            'ext.util.langUtil',
            'ext.util.selectorsUtil',
            'ext.const.subscriptions',
            'ext.const.lang',

            'ext.mate_events',
            'ext.tpl',
            'ext.event',
            'ext.dom',
            'ext.googleApi',

            'ui_views.i18n',
            'ui_components.dropdown.dropdown',
            'ui_components.ss_selector.ss_selector',
            'ui_components.toggle',
            'ui_components.loading',
            'ui_components.login',
            'ui_components.info_alert',
            'ui_components.tooltip.helpSelected',
            'ui_components.notifications',

            'particles.listen.lModel',
            'particles.translate_ctt.tcModel',
            'particles.3dots_button.3dotsModel',
            'particles.3dots_button.3dotsView',
            'particles.sett_trans_combo.stcView',
            'particles.sett_trans_combo.stcModel',
            'particles.scrollbars.sModel',
            'particles.lang_selectors.lsView',
            'particles.pro_block.proView',
            'particles.pro_block.proModel',

            'lib.contextMenu',
            'lib.confetti',

            's:ui_components.contextMenu',
            's:ui_components.tooltip.simple',
            's:ui_components.tooltip.help',
            's:ui_components.tooltip.helpSelected',
            's:ui_components.tooltip.helpSelected'
        ],

        TABS: 4,
        // PDF_TAB_NUM: 4,

        temp: {
            currentBid: 1,
            currentTab: 1
        },

        flags: {
            isTranslating: false
        },

        get bodyScrollLeft() {
            return document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        },

        get bodyScrollTop() {
            return document.documentElement.scrollTop || document.body.scrollTop || 0;
        },

        callbacksInitialization: {},

        init: function () {
            document.title = ke.getLocale("Tour_Title");

            if (!ke.supportsOnlineAnalytics) {
                ke.import('lib.ga', ke.initAnalytics);
            } else {
                ke.loadExternalScript(ke.analyticsScriptLink, ke.initAnalytics);
            }

            ke.ui.loading.close();

            ke.ui_views.i18n.init();

            ke.app.initCarousel();
            ke.ui.toggle.initToggles();

            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['seen_tour', true]);
            ke.ext.util.storageUtil.requestBackgroundOption('setVal', ['selection', true]);

            if (ke.isProUser) {
                ke.app.render.organize.showProLayout();
            }

            chrome.runtime.onMessage.addListener(ke.app.handlers.handleLoginStateChange);

            ke.ext.event.listen(ke.EF, ke.EF, ke.app.handlers.trackShiftT);

            $(window).dblclick(ke.app.handlers.onDoubleClick);
            $(window).on('mouseup', ke.app.handlers.onSelection);

            // $('.student-discount').on('click', ke.particles.pro_block.model.requestStudentDiscount);
            
            if (ke.isSubscriptionBased) {
                $('.cbm-4').css('height', '276px');
            }

            ke.particles.pro_block.view.showSubscriptionStatus();
            //$('.pro-version-button').on('click', ke.app.handlers.upgrade);
            
            $('.got-it').on('click', ke.app.handlers.gotIt);

            this.initLanguagePicker();

            window.onbeforeunload = ke.app.handlers.onBeforeUnload;
        },

        initLanguagePicker: function () {
            ke.ui.dropdown.init(
                ke.app.handlers.onLanguagePickerChange,
                [ke.app.handlers.onLanguagePickerOpen, ke.EF],
                function (type, data, callback) {
                    ke.particles.lang_selectors.view.fillDropdown(ke.particles.lang_selectors.view.TYPES.TO, type, null, ke.ext.const.lang.list, callback);
                },
                undefined,
                function () {
                }
            );
        },

        initCarousel: function () {
            for (var i = 1; i <= ke.app.TABS; ++i) {
                $('.progress-dots').append($('<div class="progress-dot pd-' + i + '">'));
            }

            var pd_width = $('.progress-dots').css('width');
            $('.progress-dots').css('left', 'calc(50% - ' + pd_width + ' / 2)');

            ke.app.render.organize.showCarouselTab(1);

            $('.to-left').on('click', ke.app.handlers.showPreviousCarouselTab);
            $('.continue, .to-right').on('click', ke.app.handlers.showNextCarouselTab);
        }
    });

})();