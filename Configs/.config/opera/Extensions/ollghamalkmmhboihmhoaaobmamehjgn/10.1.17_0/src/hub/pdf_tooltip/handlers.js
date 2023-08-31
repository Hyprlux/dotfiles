/* Kumquat Hub Content Handlers
 * 
 **/

(function (undefined) {

    pl.extend(ke.app.handlers, {
        getListenValue: function (s) {
            if (s === 'orig') {
                return ke.particles.translate_ctt.model.getCurrentSelectedText();
            } else if (s === 'trans') {
                if (ke.app.flags.isCurrentTranslationMulti) {
                    return pl('.' + ke.getPrefix() + 'main-variant .' + ke.getPrefix() + 'mv-text-part').text();
                } else {
                    return pl('.' + ke.getPrefix() + 'padded-single-translation .' + ke.getPrefix() + 'tpart').text();
                }
            }

            return '';
        },

        onResize: function () {
            window.resizeTo(337, 300);
        },

        reverseTranslation: function (event) {
            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'opt', 'newTab'),
                url: chrome.extension.getURL('/pages/public/options.html#3,tooltip')
            });

            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                cat: 'pdf',
                event: 'change-langs'
            });

            window.close();
        },
        showTranslation: function (is_offline, data) {
            if (is_offline) {
                $('.' + ke.getPrefix() + 'offline')['show']();
                return;
            }

            console.log('data',data);

            $('body').html(ke.ext.tpl.compile(ke.templates.helpSelectedTooltip, {
                prefix: ke.getPrefix(),
                content: data.code,
                ttid: data.old_data.id,
                // l_human: ke.getLocale('Human_OrderButton'),
                // l_open: ke.getLocale('Kernel_OpenGt'),
                // l_reversed: ke.getLocale('Kernel_Reverse'),
                // l_original: ke.getLocale('Kernel_Original'),
                // l_highlight: ke.getLocale('Kernel_Highlight')
                lang_search: ke.getLocale('Kernel_SearchPlaceholder'),
                l_human: ke.getLocale('Human_OrderButton'),
                l_original: ke.getLocale('Kernel_Original'),
                l_open: ke.getLocale('Kernel_OpenGt'),
                l_reversed: ke.getLocale('Kernel_Reverse'),
                l_unpin: ke.getLocale('Kernel_Unpin'),
                l_highlight: ke.getLocale('Kernel_Highlight'),
                l_loading: ke.getLocale('Kernel_Loading'),
                l_offline: ke.getLocale('Window_Offline'),
                title_highlight_button: ke.getLocale('Tooltip_Highlight'),
                title_open_link: ke.getLocale('Tootip_OpenLink'),
                title_listen_original: ke.getLocale('Tooltip_ListenOriginal'),
                title_show_reversed: ke.getLocale('Tooltip_ShowReversed'),
                title_unpin: ke.getLocale('Tooltip_Unpin'),
                ti_localized: ke.getLocale("There_Is_Localised_Site"),
                ti_localized_desc: ke.getLocale("There_Is_Localised_Site_Desc"),
                title_settings: ke.getLocale('Kernel_SettingsTitle'),
                dd_localized: ke.getLocale('Tooltip_DisableDoubleClick'),
                dd_localized_desc: ke.getLocale('Tooltip_DisableDoubleClickDesc'),
                sel_localized: ke.getLocale('Tooltip_DisableSelection'),
                sel_localized_desc: ke.getLocale('Tooltip_DisableSelectionDesc'),
                upgrade_to_pro: ke.getLocale('Window_ProBannerAds').replace('.', '').replace('。', ''),
                netflix_save: ke.getLocale('Pb_SaveButton'),
                netflix_continue: ke.getLocale('Login_Continue')
            })).addClass(`${ke.getPrefix()}tooltip-main-wrap force-visible`);

            // $('.' + ke.getPrefix() + 'unpin').remove();
            $('.' + ke.getPrefix() + 'utils').remove();
            $('.' + ke.getPrefix() + 'hsw-' + data.old_data.id)
                .addClass(ke.getPrefix() + 'tooltip-' + data.old_data.id);
            $('.' + ke.getPrefix() + 'listen-original')
                .attr('data-from', data.from === 'auto' ? data.detected_lang : data.from);

            ke.particles.translate_ctt.model.display(is_offline, data, true);
        },

        settings: function () {
            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'opt', 'newTab'),
                url: chrome.extension.getURL('/pages/public/options.html#3,pdf')
            });

            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                cat: 'pdf',
                event: 'settings'
            });
        },
    });
})();
