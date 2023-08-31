/* Kumquat Hub Content Render
 * 
 **/

(function (undefined) {

    var ALLOWED_KC_TYPES = {
        search: true,
        text: true,
        '': true
    };

    pl.extend(ke.app.render, {
        organize: {
            fillOnPageLangDropdown: function (type, _, callback) {
                if (type === 3) {
                    // store languages in our format
                    // convert it to MS's format on the fly, immediately before translating
                    let fp_lang_list = {};
                    for (let lang in ke.ext.const.lang.list) {
                        if (Microsoft.Translator.Widget.languageCodes.indexOf(getBingCompatibleLang(ke.ext.const.lang.list[lang])) > -1) {
                            fp_lang_list[lang] = ke.ext.const.lang.list[lang];
                        }
                    }
                    
                    ke.particles.lang_selectors.view.fillFPDropdown(type, type, null, fp_lang_list, callback);
                } else {
                    let data = null;
                    if (ke.app.temp.tooltip_detected_from_lang) {
                        data = {
                            from: ke.app.temp.tooltip_detected_from_lang
                        };
                    }
                    ke.particles.lang_selectors.view.fillDropdown(type, type, data, ke.ext.const.lang.list, callback);
                }
            }
        },

        events: {
            listen: function () {
                pl('.' + ke.getPrefix() + 'listen-original').unbind().bind('click', ke.particles.listen.model.playTooltip);
                pl('.' + ke.getPrefix() + 'listen-butt0n').unbind().bind('click', ke.particles.listen.model.playTooltip);
            },

            showUpgradeForIpaAndArticles: function() {
                pl('.' + ke.getPrefix() + 'mv-translit').unbind().bind('click', ke.app.handlers.upgradeForIpa);
                pl('.' + ke.getPrefix() + 'article').unbind().bind('click', ke.app.handlers.upgradeForArticle);
            },

            listenSynonym: function () {
                pl('.' + ke.getPrefix() + 'listen-v-item').unbind().bind('click', ke.particles.listen.model.playTooltipSynonym);
            },

            reverseTranslation: function () {
                pl('.' + ke.getPrefix() + 'show-reversed').unbind().bind('click', ke.app.handlers.reverseTranslation);
            },

            highlight: function () {
                pl('.' + ke.getPrefix() + 'highlight-butt0n').unbind().bind('click', ke.app.handlers.highlight);
            },

            unpin: function () {
                pl('.' + ke.getPrefix() + 'unpin').unbind().bind('click', ke.app.handlers.unpin);
            },

            settings: function () {
                pl('.' + ke.getPrefix() + 'settings').unbind().bind('click', ke.app.handlers.settings);
            },

            localizedSiteInfoWarnActions: function (ttid) {
                pl('.' + ke.getPrefix() + 'iw-' + ttid)
                    .find('a')
                    .unbind()
                    .bind('click', ke.app.handlers.useLocalizedInfoWarn);
                pl('.' + ke.getPrefix() + 'close-loc-option')
                    .unbind()
                    .bind('click', ke.app.handlers.closeInlineOption);
            },

            doubleClickOptionActions: function (ttid) {
                pl('.' + ke.getPrefix() + 'ddopt-' + ttid)
                    .unbind()
                    .bind('click', ke.app.handlers.disableInlineOption);
                pl('.' + ke.getPrefix() + 'close-dd-option')
                    .unbind()
                    .bind('click', ke.app.handlers.closeInlineOption);
            },

            selectionOptionActions: function (ttid) {
                pl('.' + ke.getPrefix() + 'selopt-' + ttid)
                    .unbind()
                    .bind('click', ke.app.handlers.disableInlineOption);
                pl('.' + ke.getPrefix() + 'close-sel-option')
                    .unbind()
                    .bind('click', ke.app.handlers.closeInlineOption);
            }
        }
    });

})();