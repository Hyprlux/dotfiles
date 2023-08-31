(function (undefined) {
    ke.import('s:ui_components.dropdown');

    ke.import('ext.input');
    ke.import('ext.string');
    ke.import('ext.event');
    ke.import('ext.dom');

    var EF = function () {
    };

    pl.extend(ke.ui, {
        dropdown: {}
    });

    var MOUSE_MODE = 1;
    var KEYS_MODE = 2;

    var first = true;

    pl.extend(ke.ui.dropdown, {
        data: {
            isOpened: false,
            isFocused: true, // Due to integral auto-focus
            overOption: false,

            ind: 999,
            callback: EF,
            callbacksOnOpenClose: [EF, EF],

            ui_search: {},

            openedOptionsSerial: 0,

            mouseX: 0,
            mouseY: 0,
            changeMode: MOUSE_MODE,

            applied: 0
        },

        init: function (fn, callbacks, filler, opt, final_cb) {
            opt = opt || '';

            pl(document).unbind().bind({
                click: ke.ui.dropdown.externalClick,
                keydown: ke.ui.dropdown.arrowsNavigation,
                mousemove: ke.ui.dropdown.mouseMove
            });

            ke.ui.dropdown.applySelects(filler, opt, function () {
                pl('.' + ke.getPrefix() + 'options .' + ke.getPrefix() + 'list li[index]').unbind().bind({
                    click: ke.ui.dropdown.optionClick,
                    mouseover: ke.ui.dropdown.optionHover,
                    mouseout: ke.ui.dropdown.optionOut
                });

                final_cb();
            });
            if (!pl.empty(callbacks)) {
                ke.ui.dropdown.data.callbacksOnOpenClose = callbacks;
            }

            // don't forget to remove old listeners
            // often `initDropdowns` gets called way too many times
            $('.' + ke.getPrefix() + 'select').off().on('click', ke.ui.dropdown.dropdownClick);

            ke.ui.dropdown.data.callback = fn;
        },

        applySelects: function (filler, opt, final_cb) {
            var selNumber;

            var isValidContext = function (s) {
                return pl.type(s, 'str') && !pl.empty(s);
            };

            var e = pl(pl.type(opt, 'int') ? '.' + ke.getPrefix() + 'opt-' + opt : ((isValidContext(opt) ? opt + ' ' : '') + '.' + ke.getPrefix() + 'options'));
            var len = e.len();

            var index = 0;
            e.each(function () {
                selNumber = +$(this).data('serial');

                if (isNaN(selNumber)) {
                    --len;
                    return;
                }

                var that = this;
                filler(selNumber, null, function (filling) {
                    $(that)
                        .css('z-index', --ke.ui.dropdown.data.ind)
                        .find('.' + ke.getPrefix() + 'list')
                        .html(filling.code);

                    if (first) {
                        ke.ui.dropdown.data.applied++;
                    }

                    if (!pl.empty(filling.select)) {
                        var sel = $('.' + ke.getPrefix() + 'opt-' + filling.num).parent().find('.' + ke.getPrefix() + 'select');
                        sel
                            .removeClass(ke.getPrefix() + 'just-added')
                            .html(ke.ui.dropdown.cropCaption(filling.select, sel.get()));
                    }

                    $(that).find('.' + ke.getPrefix() + 'dd-input').unbind().bind({
                        keyup: ke.ui.dropdown.onSearchKeyUp
                    }).attr('data-width', parseInt($(this).find('.' + ke.getPrefix() + 'dd-input').css('width')));

                    ++index;
                    if (index === len) {
                        final_cb && final_cb();
                    }
                });
            })
                .hide();

            first = false;
        },

        mouseMove: function (e) {
            if (e.pageX !== ke.ui.dropdown.data.mouseX || e.pageY !== ke.ui.dropdown.data.mouseY) {
                ke.ui.dropdown.data.mouseX = e.pageX;
                ke.ui.dropdown.data.mouseY = e.pageY;
                ke.ui.dropdown.data.changeMode = MOUSE_MODE;
            }
        },

        optionHover: function () {
            if (ke.ui.dropdown.data.changeMode !== MOUSE_MODE) {
                return;
            }
            ke.ui.dropdown.data.overOption = true;
            pl(this).addClass(ke.getPrefix() + 'whenHover');
        },

        optionOut: function () {
            if (ke.ui.dropdown.data.changeMode !== MOUSE_MODE) {
                return;
            }
            ke.ui.dropdown.data.overOption = false;
            pl(this).parent().find('.' + ke.getPrefix() + 'whenHover').removeClass(ke.getPrefix() + 'whenHover');
        },

        arrowsNavigation: function (e) {
            if (!ke.ui.dropdown.data.isOpened) {
                return true; // Allow typing
            }

            ke.ui.dropdown.data.changeMode = KEYS_MODE;

            var current_opt = $('.' + ke.getPrefix() + 'opt-' + ke.ui.dropdown.data.openedOptionsSerial);
            var over_item = current_opt.find('.' + ke.getPrefix() + 'whenHover');
            var selected_item = current_opt.find('.' + ke.getPrefix() + 'option_selected');

            if ($.isEmptyObject(over_item.get())) {
                over_item = selected_item;
            }

            var getProperItem = function (item, func) {
                var next_item = item;
                while ((next_item = next_item[func]()) && !$.isEmptyObject(next_item.get())) {
                    if (!next_item.hasClass(ke.getPrefix() + 'search-li') && !next_item.hasClass(ke.getPrefix() + 'group') && next_item.is(':visible')) {
                        item = next_item;
//                        console.log(item.text());
                        break;
                    }
                }
                return item;
            };

            if (ke.ext.event.is('enter', e)) {
                ke.ui.dropdown.optionClick.call(over_item);
            } else {
                over_item.removeClass(ke.getPrefix() + 'whenHover');

                var init_item = over_item;
                var up = false;

                if (ke.ext.event.is('arrowdown', e)) {
                    over_item = getProperItem(over_item, 'next');
                } else if (ke.ext.event.is('arrowup', e)) {
                    up = true;
                    over_item = getProperItem(over_item, 'prev');
                }

                over_item.addClass(ke.getPrefix() + 'whenHover');
            }
        },

        externalClick: function (evt, forced) {
            if (forced !== true
                && (pl(evt.target).hasClass(ke.getPrefix() + 'option')
                    || pl(evt.target).parent().hasClass(ke.getPrefix() + 'option')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'option_selected')
                    || pl(evt.target).parent().hasClass(ke.getPrefix() + 'option_selected')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'options')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'search-li')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'dd-search')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'dd-input')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'select')
                    || pl(evt.target).parent().hasClass(ke.getPrefix() + 'select')
                    || pl(evt.target).hasClass(ke.getPrefix() + 'group')
                    || pl(evt.target).parent().hasClass(ke.getPrefix() + 'group')
                    || (evt.target != document.body && pl(evt.target).parent(4).hasClass(ke.getPrefix() + 'options'))))
                return;

            //console.log('close selector', evt.target);

            // reset the search
            $('.' + ke.getPrefix() + 'ui_selector .' + ke.getPrefix() + 'dd-search input').val('');
            ke.ui.dropdown.applySearch('', () => {
                ke.ui.dropdown.data.openedOptionsSerial = 0;
                ke.ui.dropdown.data.callbacksOnOpenClose[1]();

                $('.' + ke.getPrefix() + 'ui_selector .' + ke.getPrefix() + 'options').slideUp(ke.getAnimSpeed('fast_slide_up') / 2.5, ke.getAnimType('slide_up'));
                $('.' + ke.getPrefix() + 'ui_selector .' + ke.getPrefix() + 'options-arrow').hide();
                pl('.' + ke.getPrefix() + 'select').removeClass(ke.getPrefix() + 'active');
                pl('.' + ke.getPrefix() + 'options .' + ke.getPrefix() + 'whenHover').removeClass(ke.getPrefix() + 'whenHover');

                ke.ui.dropdown.data.isOpened = false;
            });
        },

        dropdownClick: function () {
            var serial = +$(this).data('for-serial') || +$(this).parent().find('.' + ke.getPrefix() + 'options').data('serial');

            if ($(this).hasClass(ke.getPrefix() + 'active')) {
                ke.ui.dropdown.externalClick(null, true);
            } else {
                ke.ui.dropdown.data.openedOptionsSerial = serial;

                $('.' + ke.getPrefix() + 'ui_selector .' + ke.getPrefix() + 'options').hide();
                $('.' + ke.getPrefix() + 'ui_selector .' + ke.getPrefix() + 'options-arrow').hide();
                $('.' + ke.getPrefix() + 'select').removeClass(ke.getPrefix() + 'active');
                $(this).addClass(ke.getPrefix() + 'active');

                var that = this;
                var parent_offset_x = 0;
                
                if ($('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').parent().css('position') !== 'static') {
                    parent_offset_x = ($('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').parent().offset() || {left: 0}).left;
                }

                var sel_width = $('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').width() + parseInt($('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').css('padding-left')) * 2;
                var opt_width = $('.' + ke.getPrefix() + 'opt-' + serial).width() + parseInt($('.' + ke.getPrefix() + 'opt-' + serial).css('padding-left')) * 2;
                var x = $('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').offset().left - parent_offset_x - opt_width / 2 + sel_width / 2;

                // 16 is just an offset so selector doesn't stick to the end of the screen
                // `parent_offset_x` needs to be added back because we're looking at absolute coordinates here
                while (x + parent_offset_x + opt_width > $(window).width() - 16) {
                    x -= 10;
                }

                if ($(this).parent().find('.' + ke.getPrefix() + 'opt-' + serial).hasClass(ke.getPrefix() + 'standalone')) {
                    // 16 is arrow's width
                    var arrow_x = $('.' + ke.getPrefix() + 'select.' + ke.getPrefix() + 'active').offset().left - parent_offset_x + sel_width / 2 - parseInt($(this).parent().find('.' + ke.getPrefix() + 'options-arrow').css('width')) / 2;
                    $(this).parent().find('.' + ke.getPrefix() + 'options-arrow').show().css({
                        'left': arrow_x + 'px',
                        'z-index': ++ke.ui.dropdown.data.ind
                    });
                }

                let css = {
                    'left': x + 'px'
                };

                $(this).parent().find('.' + ke.getPrefix() + 'opt-' + serial).css(css).slideDown(ke.getAnimSpeed('fast_slide_down') * 1.5, ke.getAnimType('slide_down'), function () {
                    var offsetTop = pl(that).parent().find('.' + ke.getPrefix() + 'opt-' + serial + ' .' + ke.getPrefix() + 'option_selected').get().offsetTop - 34;
                    
                    ke.ui.dropdown.data.isOpened = true;
                    ke.ui.dropdown.data.callbacksOnOpenClose[0](serial, offsetTop);

                    if (!ke.IS_SAMSUNG) {
                        $(this).find('.' + ke.getPrefix() + 'dd-input').focus();
                    }
                });
            }
        },

        // not used anymore
        cropCaption: function (text, sel) {
            return text;
        },

        globalRecrop: function () {
            $('.' + ke.getPrefix() + 'select').each(function () {
                $(this).html(ke.ui.dropdown.cropCaption($(this).text(), this));
            });
        },

        onSearchFocus: function () {
            $(this).animate({
                'background-position-x': 5,
                width: parseInt($(this).data('width')) + 2,
                paddingLeft: 20
            }, 1, ke.getAnimType('fast_slide_down'));
        },

        onSearchBlur: function () {
            if (pl.empty($(this).val())) {
                var input_width = $(this).width();
                var input_pl = parseInt($(this).css('padding-left'));
                var placeholder_width = $(this).placeholderWidth();
                var paddingLeft = input_pl / 2 + input_width / 2 - placeholder_width / 2 + 6;

                $(this).animate({
                    'background-position-x': paddingLeft - 6,
                    width: input_width - paddingLeft / 2 - input_pl + 2,
                    paddingLeft: paddingLeft + 6 + 3
                }, ke.getAnimSpeed('fast_slide_down') / 2, ke.getAnimType('fast_slide_down'));
            }
        },

        onSearchKeyUp: function (evt) {
            if (!pl.type(ke.ui.dropdown.data.searchTimeout, 'null')) {
                clearTimeout(ke.ui.dropdown.data.searchTimeout);
            }

            if (ke.ext.event.is('ctrl', evt) || ke.ext.event.is('alt', evt)) {
                return true;
            }

            if (evt.keyCode === 13) {
                ke.ui.dropdown.selectFirst();
            }

            var that = this;
            ke.ui.dropdown.data.searchTimeout = setTimeout(function () {
                ke.ui.dropdown.applySearch(pl(that).val());
            }, 525);
        },

        selectFirst: function () {
            var sel_lang = $('.' + ke.getPrefix() + 'opt-' + ke.ui.dropdown.data.openedOptionsSerial).find('.' + ke.getPrefix() + 'option:visible span').attr('val');
            var $sel = $('.' + ke.getPrefix() + 'opt-' + ke.ui.dropdown.data.openedOptionsSerial).parent().find('.' + ke.getPrefix() + 'select');

            // don't apply if no results

            if (sel_lang) {
                ke.ui.dropdown.data.callback(
                    ke.ui.dropdown.data.openedOptionsSerial,
                    sel_lang
                );

                ke.ui.dropdown.dropdownClick.call($sel[0]);
            }
        },

        applySearch: function (val, callback) {
            var serial = ke.ui.dropdown.data.openedOptionsSerial;
            var contents;
            var all_elements = 0;
            var all_hidden_elements = 0;
            var group_hidden_elements = 0;
            var group_elements = 0;
            var animations = 0;

            var decrementAnimations = function () {
                --animations;
            };

            var toggleGroup = function (group, anim_dir) {
                //console.log(group, anim_dir);
                if ($('.' + ke.getPrefix() + 'opt-' + serial + ' .' + ke.getPrefix() + 'group:eq(' + group + ')').length > 0) {
                    ++animations;
                    $('.' + ke.getPrefix() + 'opt-' + serial + ' .' + ke.getPrefix() + 'group:eq(' + group + ')')['slide' + ke.capitalize(anim_dir)](ke.getAnimSpeed('slide_up'), ke.getAnimType('slide_up'), decrementAnimations);
                }
            };

            val = val.toLowerCase();

            var last_el = pl('.' + ke.getPrefix() + 'opt-' + serial + ' li').last().get();
            var current_group = -1;
            $('.' + ke.getPrefix() + 'opt-' + serial + ' li').each(function () {
                if ($(this).hasClass(ke.getPrefix() + 'search-li')) return;
                if ($(this).hasClass(ke.getPrefix() + 'group')) {
                    if (group_elements == group_hidden_elements) {
                        toggleGroup(current_group, 'up');
                    }

                    group_elements = 0;
                    group_hidden_elements = 0;
                    ++current_group;
                    return;
                }

                ++all_elements;
                ++group_elements;
                contents = $(this).find('span:eq(0)').text();

                if (!~contents.toLowerCase().indexOf(val)) {
                    ++group_hidden_elements;
                    ++all_hidden_elements;
                    ++animations;

                    $(this).slideUp(ke.getAnimSpeed('slide_up'), ke.getAnimType('slide_up'), decrementAnimations);
                } else {
                    ++animations;

                    if (!pl.empty(val)) {
                        contents = ke.ext.string.highlight(contents, val);
                        $(this).find('span').html(contents);
                    } else {
                        $(this).find('span').html(contents);
                    }

                    $(this).slideDown(ke.getAnimSpeed('slide_down'), ke.getAnimType('slide_down'), decrementAnimations);
                }

                if (this.isEqualNode(last_el) && group_elements == group_hidden_elements) {
                    toggleGroup(current_group, 'up');
                } else if (pl.empty(val) || group_elements != group_hidden_elements) {
                    toggleGroup(current_group, 'down');
                }
            });

            var int = setInterval(function () {
                if (animations == 0) {
                    clearInterval(int);

                    pl('.' + ke.getPrefix() + 'opt-' + serial).find('.' + ke.getPrefix() + 'search-failed-plaque').remove();
                    if (all_elements == all_hidden_elements) {
                        pl('.' + ke.getPrefix() + 'opt-' + serial + ' .' + ke.getPrefix() + 'inner-options-layout')
                            .append(pl('<div>').addClass(ke.getPrefix() + 'search-failed-plaque').html(ke.getLocale('CommonUi_NoResults')).get());
                    }

                    ke.ui.dropdown.data.callbacksOnOpenClose[0](serial);

                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            }, 10);
        },

        optionClick: function () {
            if ($(this).hasClass(ke.getPrefix() + 'group')) {
                return;
            }

            var p = $(this).parent().parent().parent().parent().parent().parent();
            var select = p.find('.' + ke.getPrefix() + 'select');

            if (select.length === 0) {
                select = p.parent().find('.' + ke.getPrefix() + 'select');
            }

            if (p.find('.' + ke.getPrefix() + 'option_selected').length > 0) {
                var prev_val = p.find('.' + ke.getPrefix() + 'option_selected').find('span').attr('val');
                $(this).parent().find('.' + ke.getPrefix() + 'option_selected').removeClass(ke.getPrefix() + 'option_selected');
            }
            $(this).addClass(ke.getPrefix() + 'option_selected');

            //console.log('option clicked', p.find('.' + ke.getPrefix() + 'option_selected')[0], $(this).parent().find('.' + ke.getPrefix() + 'option_selected').find('span').attr('val'));

            ke.ui.dropdown.data.callback(
                ke.ui.dropdown.data.openedOptionsSerial,
                $(this).parent().find('.' + ke.getPrefix() + 'option_selected').find('span').attr('val'),
                prev_val
            );

            //console.log('look here', p, select);

            ke.ui.dropdown.dropdownClick.call(select[0]);
        },

        getActiveOptionValue: function (serial) {
            return $('.' + ke.getPrefix() + 'opt-' + serial).find('.' + ke.getPrefix() + 'option_selected span').attr('val');
        }
    });
})();