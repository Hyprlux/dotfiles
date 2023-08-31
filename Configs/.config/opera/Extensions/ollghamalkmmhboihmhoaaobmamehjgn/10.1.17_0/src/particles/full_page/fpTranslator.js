/* Copyright 2021 Gikken UG */
var translation_callbacks = {};

function fpTranslate() {
    //var BFI_APPID = 'nil';
    var BFI_DONEMSG = 'nil';
    var BFI_TOLANG = 'nil';
    var BFI_SAMELANGMSG = 'nil';
    var BFI_LOADINGLANGMSG = 'nil';
    var BFI_CANCEL = 'nil';

    window['_mstConfig'] = {
        //appId: 'ThItpYrZC8u7LA_4XaMM9h1vkkDbKII4khHm2jXmvMYo\x2a',
        appId:'NTBD',
        rootURL: 'https\x3a\x2f\x2fwww.microsofttranslator.com\x2f',
        baseURL: 'https\x3a\x2f\x2fwww.microsofttranslator.com\x2fajax\x2fv3\x2fwidgetV3.ashx\x3fsettings\x3dmanual',
        serviceURL: 'https\x3a\x2f\x2fapi.microsofttranslator.com\x2fv2\x2fajax.svc',
        imagePath: 'https\x3a\x2f\x2fwww.microsofttranslator.com\x2fstatic\x2f197997\x2fimg\x2f',
        debug: false,
        locale: 'en',
        country: '',
        category: '',
        ref: 'WidgetV3',
        service: 'WG3',
        maxChars: 1000000000,
        noAuto: ["facebook.", "youtube."],
        escapeNonAscii: false,
        requestGroup: '',
        preTrans: false
    };
    window._mstConfig['SignIn'] = '<a href="https://login.live.com/login.srf?wa=wsignin1.0&amp;rpsnv=12&amp;ct=1401208142&amp;rver=6.0.5276.0&amp;wp=LBI&amp;wreply=http:%2F%2Fwww.microsofttranslator.com%2Fajax%2Fv2%2Fauth.aspx%3Fpru%3Dhttp%253a%252f%252fwww.microsofttranslator.com%252fajax%252fv3%252fwidgetV3.ashx&amp;lc=1033&amp;id=268160">Sign in</a>';

    if (!this.Microsoft) this.Microsoft = {};
    if (!this.Microsoft.Translator) this.Microsoft.Translator = {};
    if (Microsoft.Translator.Reset) Microsoft.Translator.Reset();

    Microsoft.Translator = new function () {
        var strWidgetFloaterPanels = "WidgetFloaterPanels",
            sevenSeconds = 7e3,
            strBlock = "block",
            fourPxPadding = "4px 4px 4px 4px",
            strPointer = "pointer",
            maxZIndex = "2147483647",
            strAbsolute = "absolute",
            strInlineBlock = "inline-block",
            strDirection = "direction",
            strLang = "lang",
            gtSign = ">",
            strFont = "font",
            tagImg = "img",
            strFalse = "false",
            strLeft = "left",
            strRight = "right",
            oneHundred = 100,
            strVisible = "visible",
            num255 = 255,
            strDiv = "div",
            strInline = "inline",
            strPosition = "position",
            fourHundred = 400,
            strSelect = "select",
            px = "px",
            zeroPx = "0px",
            languageMappingsKey = "languageMappings",
            localizedLangsKey = "localizedLangs",
            langSpanish = "es",
            langNorwegian = "no",
            langGerman = "de",
            langFrench = "fr",
            langTraditionalChinese = "zh-cht",
            langSimplifiedChinese = "zh-chs",
            langArabic = "ar",
            leftToRight = "ltr",
            rightToLeft = "rtl",
            none = "none",
            strIframe = "iframe",
            radixHex = 16,
            trueValue = true,
            numberTypeString = "number",
            functionTypeString = "function",
            undefinedTypeString = "undefined",
            head = "head",
            negativeOne = -1,
            pathDelimiter = "/",
            mstConfigKey = "_mstConfig",
            langEnglish = "en",
            falseValue = false,
            staticImgPath = "/static/img/",
            emptyString = "",
            nullValue = null,
            self = this;
        self.AddTranslation = function (appId, originalText, translatedText, from, to, rating, contentType, category, user, uri, onSuccess, onError, timeout) {
            return new callTranslateAPI("AddTranslation", {
                appId: appId,
                originalText: originalText,
                translatedText: translatedText,
                from: from,
                to: to,
                rating: rating,
                contentType: contentType,
                category: category,
                user: user,
                uri: uri
            }, onSuccess, onError, timeout)
        };
        self.BreakSentences = function (appId, text, language, onSuccess, onError, timeout) {
            return new callTranslateAPI("BreakSentences", {
                appId: appId,
                text: text,
                language: language
            }, onSuccess, onError, timeout)
        };
        self.Detect = function (appId, text, onSuccess, onError, timeout) {
            return new callTranslateAPI("Detect", {
                appId: appId,
                text: text
            }, onSuccess, onError, timeout)
        };
        self.DetectArray = function (appId, texts, onSuccess, onError, timeout) {
            return new callTranslateAPI("DetectArray", {
                appId: appId,
                texts: texts
            }, onSuccess, onError, timeout)
        };
        self.GetAppIdToken = function (appId, minRatingRead, maxRatingWrite, expireSeconds, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetAppIdToken", {
                appId: appId,
                minRatingRead: minRatingRead,
                maxRatingWrite: maxRatingWrite,
                expireSeconds: expireSeconds
            }, onSuccess, onError, timeout)
        };
        self.GetLanguageNames = function (appId, locale, languageCodes, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetLanguageNames", {
                appId: appId,
                locale: locale,
                languageCodes: languageCodes
            }, onSuccess, onError, timeout)
        };
        self.GetLanguagesForSpeak = function (appId, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetLanguagesForSpeak", {
                appId: appId
            }, onSuccess, onError, timeout)
        };
        self.GetLanguagesForTranslate = function (appId, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetLanguagesForTranslate", {
                appId: appId
            }, onSuccess, onError, timeout)
        };
        self.GetTranslations = function (appId, text, from, to, maxTranslations, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetTranslations", {
                appId: appId,
                text: text,
                from: from,
                to: to,
                maxTranslations: maxTranslations,
                options: options
            }, onSuccess, onError, timeout)
        };
        self.Translate = function (appId, text, from, to, contentType, category, onSuccess, onError, timeout) {
            return new callTranslateAPI("Translate", {
                appId: appId,
                text: text,
                from: from,
                to: to,
                contentType: contentType,
                category: category
            }, onSuccess, onError, timeout)
        };
        self.AddTranslationArray = function (appId, translations, from, to, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("AddTranslationArray", {
                appId: appId,
                translations: translations,
                from: from,
                to: to,
                options: options
            }, onSuccess, onError, timeout)
        };
        self.GetTranslationsArray = function (appId, texts, from, to, maxTranslations, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("GetTranslationsArray", {
                appId: appId,
                texts: texts,
                from: from,
                to: to,
                maxTranslations: maxTranslations,
                options: options
            }, onSuccess, onError, timeout)
        };
        self.Speak = function (appId, text, language, format, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("Speak", {
                appId: appId,
                text: text,
                language: language,
                format: format,
                options: options
            }, onSuccess, onError, timeout)
        };
        self.TranslateArray = function (appId, texts, from, to, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("TranslateArray", {
                appId: appId,
                texts: texts,
                from: from,
                to: to,
                options: options
            }, onSuccess, onError, timeout)
        };
        self.TranslateArray2 = function (appId, texts, from, to, options, onSuccess, onError, timeout) {
            return new callTranslateAPI("TranslateArray2", {
                appId: appId,
                texts: texts,
                from: from,
                to: to,
                options: options
            }, onSuccess, onError, timeout)
        };
        var config = {
            serviceClient: nullValue,
            appId: emptyString,
            lpURL: "https://www.bing.com/translator",
            rootURL: "https://www.microsofttranslator.com/",
            baseURL: "https://www.microsofttranslator.com/Ajax/V2/Toolkit.ashx",
            serviceURL: "https://api.microsofttranslator.com/V2/Ajax.svc",
            imagePath: staticImgPath,
            debug: falseValue,
            locale: langEnglish,
            country: emptyString,
            category: emptyString,
            ref: emptyString,
            service: emptyString,
            maxChars: 1e9,
            noAuto: [],
            escapeNonAscii: falseValue,
            requestGroup: emptyString,
            preTrans: falseValue
        };
        config.serviceClient = self;

        if (window[mstConfigKey]) {
            for (var key in config)
                if (!window[mstConfigKey][key]) window[mstConfigKey][key] = config[key];
            config = window[mstConfigKey]
        } else {
            window[mstConfigKey] = config;
        }

        var sendRequest = config.serviceClient.LoadScript = new function () {
                function URL(url, baseUrl) {
                    var self = this,
                        matched = url.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
                    if (matched) {
                        self.auth = matched[1] || emptyString;
                        self.path = matched[2] || emptyString;
                        self.query = matched[3] || emptyString
                    } else {
                        matched = baseUrl.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
                        var baseAuth = matched[1] || emptyString,
                            basePath = matched[2] || emptyString,
                            basePathParts = url.substr(0, 1) == pathDelimiter ? [] : basePath.split(pathDelimiter);
                        matched = url.match(/^([^?]*)([\?][^#]*)*$/);
                        var parts = (matched[1] || emptyString).split(pathDelimiter),
                            query = matched[2] || emptyString;
                        if (basePathParts.length > 0 && parts.length > 0 && parts[0] != ".") basePathParts.pop();
                        while (parts.length > 0) {
                            var part = parts.shift();
                            switch (part) {
                                case ".":
                                    break;
                                case "..":
                                    if (basePathParts.length) basePathParts.pop();
                                    break;
                                default:
                                    basePathParts.push(part)
                            }
                        }
                        self.auth = baseAuth;
                        self.path = basePathParts.join(pathDelimiter);
                        self.query = query
                    }
                    self.toString = function () {
                        return this.auth + this.path + this.query
                    };
                    return self
                }
                // mate note
                // include scripts with translations PJSON or whatever it's called
                return function (url, baseUrl, doc, callback_id) {
                    url = (new URL(url, baseUrl ? baseUrl : new URL(config.baseURL))).toString();
                    doc = doc ? doc : document;
                    var urlLength = encodeURIComponent(url).replace(/%\w\w/g, " ").length;
                    if (navigator.userAgent.indexOf("MSIE") > negativeOne && urlLength > 2048 || urlLength > 8192) return nullValue;

                    //console.log('Requesting URL:', f, callback_id);

                    if (url.indexOf('sync.ashx') > -1) {
                        // Taining: sync.ashx is for logging, it's fine to ignore such requests completely
                    } else {
                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'json',
                            crossDomain: true,
                            success: (d) => {
                                //console.log(callback_id, translation_callbacks["_mstc" + callback_id]);
                                if (typeof translation_callbacks["_mstc" + callback_id] === 'function') {
                                    translation_callbacks["_mstc" + callback_id](d);
                                }
                            },
                            error: (e) => {
                                //console.log(callback_id, translation_callbacks["_mstc" + callback_id]);
                                if (typeof translation_callbacks["_mste" + callback_id] === 'function') {
                                    translation_callbacks["_mste" + callback_id](e);
                                }
                            }
                        });
                    }

                    return false
                }
            },
            getType = new function () {
                var builtinClassNames = {
                        1: "Array",
                        2: "Boolean",
                        3: "Date",
                        4: "Function",
                        5: "Number",
                        6: "Object",
                        7: "RegExp",
                        8: "String"
                    },
                    nodeTypeMapping = {
                        1: "element",
                        2: "attribute",
                        3: "text",
                        4: "cdata",
                        5: "entityReference",
                        6: "entity",
                        7: "instruction",
                        8: "comment",
                        9: "document",
                        10: "documentType",
                        11: "documentFragment",
                        12: "notation"
                    },
                    constructorTypeMapping = {};
                for (var key in builtinClassNames) constructorTypeMapping[window[builtinClassNames[key]]] = builtinClassNames[key].toLowerCase();
                return function (value) {
                    if (value === undefined) return undefinedTypeString;
                    else if (value === nullValue) return "null";
                    else if (typeof value.constructor === functionTypeString && constructorTypeMapping[value.constructor]) return constructorTypeMapping[value.constructor];
                    else if (typeof value.nodeType === numberTypeString && nodeTypeMapping[value.nodeType]) return nodeTypeMapping[value.nodeType];
                    return typeof value
                }
            },
            toEncodedString = new function () {
                var localNullValue = nullValue;
                if (navigator.userAgent.toLowerCase().indexOf("msie 6.") > negativeOne || navigator.userAgent.toLowerCase().indexOf("webkit") > negativeOne && (document.charset || document.characterSet || emptyString).toLowerCase().indexOf("utf") == negativeOne) config.escapeNonAscii = trueValue;
                var unicodeTemplate = "\\u0000",
                    signChars = '"#%&+:;=?@\\',
                    nonAsciiTextRanges = ["\\x00-\\x1F", "\\x7F-\\xA0"],
                    unicodeRanges = ["\\u02B0-\\u038F", "\\u2000-\\u20FF", "\\u3000-\\u303F"],
                    quotes = {
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    regexp;

                function compileRegexp() {
                    regexp = new RegExp("[\\s" + signChars.replace(/./g, function (char) {
                        var hex = char.charCodeAt(0).toString(radixHex);
                        return unicodeTemplate.substr(0, unicodeTemplate.length - hex.length) + hex
                    }) + nonAsciiTextRanges.join(emptyString) + (config.escapeNonAscii ? "\\x7B-\\uFFFF" : unicodeRanges.join(emptyString)) + "]", "g");
                    regexp.compile(regexp.source, "g")
                }

                function replacer(char) {
                    if (quotes[char]) return quotes[char];
                    if (char.match(/[\s\xA0]/)) return "+";
                    var c = char.charCodeAt(0),
                        hex = c.toString(radixHex),
                        encodedByBuiltin = encodeURIComponent(char),
                        encodedByCustom = unicodeTemplate.substr(0, unicodeTemplate.length - hex.length) + hex;
                    if (encodedByBuiltin.length < encodedByCustom.length && c > 34 || config.escapeNonAscii && c > 122) return encodedByBuiltin;
                    else return encodedByCustom
                }

                function encode(value) {
                    return value.toString().replace(regexp, replacer)
                }

                function encodeString(a) {
                    return '"' + encode(a) + '"'
                }

                function encodeArray(arr) {
                    var result = [];
                    for (var i = 0; i < arr.length; ++i) {
                        var item = toEncodedString(arr[i]);
                        if (item !== localNullValue) result.push(item)
                    }
                    return "[" + result.join(",") + "]"
                }

                function encodeObject(obj) {
                    var result = [];
                    for (var key in obj) {
                        var item = toEncodedString(obj[key]);
                        if (item !== localNullValue) result.push('"' + key + '":' + item)
                    }
                    return "{" + result.join(",") + "}"
                }
                return function (value) {
                    compileRegexp();
                    switch (getType(value)) {
                        case undefinedTypeString:
                            return localNullValue;
                        case "null":
                            return localNullValue;
                        case "boolean":
                            return encode(value.toString());
                        case numberTypeString:
                            return encode(value.toString());
                        case "string":
                            return encodeString(value);
                        case "array":
                            return encodeArray(value);
                        default:
                            return encodeObject(value)
                    }
                }
            },
            callTranslateAPI = new function () {
                var k, count = 0,
                    win = window,
                    lowerCaseCharset = (document.charset || document.characterSet || emptyString).toLowerCase();
                if (lowerCaseCharset.indexOf("utf") == negativeOne && lowerCaseCharset.indexOf("unicode") == negativeOne) try {
                    config.escapeNonAscii = trueValue;
                    var element = document.createElement(strIframe);
                    element.id = "MstReqFrm";
                    element.style.display = none;
                    element.translate = falseValue;
                    document.documentElement.insertBefore(element, document.documentElement.firstChild);
                    element.contentWindow.document.open("text/html", "replace");
                    element.contentWindow.document.write('<html><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body></body></html>');
                    element.contentWindow.document.close();
                    win = element.contentWindow
                } catch (err) {
                    if (config.debug);
                }
                return function (action, queries, onSuccess, onError, q) {
                    var funcType = functionTypeString,
                        uid = ++count,
                        timer, domForRequest, isDestroyed = falseValue,
                        isAborted = falseValue,
                        errorMessage = emptyString;
                        // mate note
                        // adding callbacks into the main scope for jsonp
                        // on success callback
                        translation_callbacks["_mstc" + uid] = function (value) {
                            if (validTranslation) return;
                            validTranslation = true;
                            //console.log("SUCCESS " + d);
                            setTimeout(function () {
                                if (isAborted) {
                                    errorCallback(errorMessage);
                                    return
                                }
                                if (isDestroyed) return;
                                setTimeout(destroy, 0);
                                if (onSuccess && typeof onSuccess === funcType) onSuccess(value)
                            }, 0)
                        };
                        // on error callback
                        var errorCallback = translation_callbacks["_mste" + uid] = function (a) {
                            setTimeout(function () {
                                if (isDestroyed) return;
                                setTimeout(destroy, 0);
                                if (onError && typeof onError === funcType) onError(a)
                            }, 0)
                        };
                        var validPage = false,
                        validTranslation = false;

                    // console.log('Added callbacks:', "_mstc" + d, "_mste" + d);

                    // [TODO Taining]: I think it's Test code made by us and could be removed later
                    if (window.location.href === 'http://mi.fujigen.co.jp/collection/ser_expert_flame.html') {
                        setTimeout(function(a) {
                            if (validTranslation) return;
                            //document.body.style.backgroundColor = 'red';
                            if (uid === 1) {
                                console.log("MOCK SEND");
                                window["_mstc1"]([{"From":"ja","OriginalTextSentenceLengths":[10],"TranslatedText":"COLLECTION","TranslatedTextSentenceLengths":[10]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"Guitar","TranslatedTextSentenceLengths":[6]},{"From":"ja","OriginalTextSentenceLengths":[4],"TranslatedText":"Bass","TranslatedTextSentenceLengths":[4]},{"From":"ja","OriginalTextSentenceLengths":[9],"TranslatedText":"Accessory","TranslatedTextSentenceLengths":[9]},{"From":"ja","OriginalTextSentenceLengths":[17],"TranslatedText":"WEB DEISGN SYSTEM","TranslatedTextSentenceLengths":[17]},{"From":"ja","OriginalTextSentenceLengths":[11],"TranslatedText":"ONLINE SHOP","TranslatedTextSentenceLengths":[11]},{"From":"ja","OriginalTextSentenceLengths":[13],"TranslatedText":"COMMUNICATION","TranslatedTextSentenceLengths":[13]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"Artist","TranslatedTextSentenceLengths":[6]},{"From":"ja","OriginalTextSentenceLengths":[10],"TranslatedText":"Technology","TranslatedTextSentenceLengths":[10]},{"From":"ja","OriginalTextSentenceLengths":[7],"TranslatedText":"Dealers","TranslatedTextSentenceLengths":[7]},{"From":"ja","OriginalTextSentenceLengths":[8],"TranslatedText":"About Us","TranslatedTextSentenceLengths":[8]},{"From":"ja","OriginalTextSentenceLengths":[40],"TranslatedText":"<b10> GUITAR</b10> &gt;&gt; EXPERT SERIES","TranslatedTextSentenceLengths":[41]},{"From":"ja","OriginalTextSentenceLengths":[12],"TranslatedText":"Expert FLAME","TranslatedTextSentenceLengths":[12]},{"From":"ja","OriginalTextSentenceLengths":[8],"TranslatedText":"FEATURES","TranslatedTextSentenceLengths":[8]},{"From":"ja","OriginalTextSentenceLengths":[17],"TranslatedText":"Circles fretting system","TranslatedTextSentenceLengths":[23]},{"From":"ja","OriginalTextSentenceLengths":[45,36],"TranslatedText":"Hitting the fret in an arc-shaped, each chord and each fret and intersect at right angles and minimizes contact surface. Delivers clear and of good, rich sound sustain.","TranslatedTextSentenceLengths":[121,47]},{"From":"ja","OriginalTextSentenceLengths":[57],"TranslatedText":" FUJIGEN, FGN all electric guitars, electric bass circles fretting system adopted.","TranslatedTextSentenceLengths":[82]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"For more information, click here.","TranslatedTextSentenceLengths":[33]},{"From":"ja","OriginalTextSentenceLengths":[17],"TranslatedText":"Low set-up set up","TranslatedTextSentenceLengths":[17]},{"From":"ja","OriginalTextSentenceLengths":[71,29],"TranslatedText":"Without lowering the frets to compared to traditional electric guitar neck to set about 1 mm deeper body, has shortened the distance between the strings and body top. Expert OS expert FL, NST to adoption.","TranslatedTextSentenceLengths":[167,37]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"For more information, click here.","TranslatedTextSentenceLengths":[33]},{"From":"ja","OriginalTextSentenceLengths":[15],"TranslatedText":"Expert fret edges","TranslatedTextSentenceLengths":[17]},{"From":"ja","OriginalTextSentenceLengths":[51],"TranslatedText":"Fret edges by craftsmen hand-made finish contributes to the smooth, smooth fingering.","TranslatedTextSentenceLengths":[85]},{"From":"ja","OriginalTextSentenceLengths":[24],"TranslatedText":"Natural satin finish neck back","TranslatedTextSentenceLengths":[30]},{"From":"ja","OriginalTextSentenceLengths":[61],"TranslatedText":"Natural satin FI 2 she to achieve smooth and comfortable playability sweating hands neck and back....","TranslatedTextSentenceLengths":[101]},{"From":"ja","OriginalTextSentenceLengths":[18],"TranslatedText":"Smooth heel neck joints","TranslatedTextSentenceLengths":[23]}]);
                            }
                            else if (uid === 2) {
                                window["_mstc2"]([{"From":"ja","OriginalTextSentenceLengths":[43],"TranslatedText":"It is possible a smooth access to the fretboard smooth heel neck joints.","TranslatedTextSentenceLengths":[72]},{"From":"ja","OriginalTextSentenceLengths":[11],"TranslatedText":"FJTP tailpiece","TranslatedTextSentenceLengths":[14]},{"From":"ja","OriginalTextSentenceLengths":[57],"TranslatedText":"FGN オリジナルテイル piece FJTP through body style, stop tail style 2 type is selectable.","TranslatedTextSentenceLengths":[81]},{"From":"ja","OriginalTextSentenceLengths":[19],"TranslatedText":"Expert FLAME LINEUP","TranslatedTextSentenceLengths":[19]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"EFL-FM","TranslatedTextSentenceLengths":[6]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"EFL-DE","TranslatedTextSentenceLengths":[6]},{"From":"ja","OriginalTextSentenceLengths":[6],"TranslatedText":"EFL-HM","TranslatedTextSentenceLengths":[6]},{"From":"ja","OriginalTextSentenceLengths":[8],"TranslatedText":"PAGE TOP","TranslatedTextSentenceLengths":[8]},{"From":"ja","OriginalTextSentenceLengths":[11],"TranslatedText":"ONLINE SHOP","TranslatedTextSentenceLengths":[11]},{"From":"ja","OriginalTextSentenceLengths":[5],"TranslatedText":"LINKS","TranslatedTextSentenceLengths":[5]},{"From":"ja","OriginalTextSentenceLengths":[7],"TranslatedText":"CONTACT","TranslatedTextSentenceLengths":[7]},{"From":"ja","OriginalTextSentenceLengths":[10],"TranslatedText":"SITEPOLICY","TranslatedTextSentenceLengths":[10]},{"From":"ja","OriginalTextSentenceLengths":[7],"TranslatedText":"SITEMAP","TranslatedTextSentenceLengths":[7]},{"From":"ja","OriginalTextSentenceLengths":[35],"TranslatedText":"All copyright reserved Fujigen Inc.","TranslatedTextSentenceLengths":[35]}]);
                            }
                            console.log("TIMEOUT RECEIVED SEND MOCK");
                            validTranslation = true;
                        }, 5000);
                    }

                    function destroy() {
                        try {
                            //delete e["_mstc" + d]
                        } catch (err) {}
                        try {
                            //delete e["_mste" + d]
                        } catch (err) {}
                        try {
                            if (domForRequest) domForRequest.parentNode.removeChild(domForRequest)
                        } catch (a) {}
                        try {
                            if (timer) clearTimeout(timer)
                        } catch (a) {}
                        isDestroyed = trueValue
                    }
                    this.abort = function (a) {
                        isAborted = trueValue;
                        errorMessage = "The request has been aborted" + (a ? ": " + a : emptyString)
                    };
                    var c = [];
                    for (var key in queries)
                        if (queries[key] != nullValue) c.push(key + "=" + toEncodedString(queries[key]));
                    //c.push("oncomplete=_mstc" + d);
                    //c.push("onerror=_mste" + d);
                    c.push("loc=" + encodeURIComponent(config.locale));
                    c.push("ctr=" + encodeURIComponent(config.country));
                    if (config.ref) c.push("ref=" + encodeURIComponent(config.ref));
                    c.push("rgp=" + encodeURIComponent(config.requestGroup));
                    var x = "./" + action + "?" + c.join("&");
                    // mate note
                    // trying to include scripts with translations
                    // d = callback_id, _mstc
                    // console.log('trying to call', a.serviceURL);
                    domForRequest = sendRequest(x, config.serviceURL, win.document, uid);
                    /*if (f) {
                        if (typeof q === C && q > 0) o = setTimeout(function () {
                            n("The request has timed out")
                        }, q)
                    } else {
                        if (a.debug);
                        n("The script could not be loaded")
                    }*/
                    return this
                }
            },
            localizedLangs = {
                af: '',
                sq: '',
                am: '',
                ar: "العربية",
                hy: '',
                az: '',
                bn: '',
                bs: '',
                bg: "Български",
                ca: "Català",
                "zh-CHS": "简体中文",
                "zh-CHT": "繁體中文",
                hr: '',
                cs: "Čeština",
                da: "Dansk",
                nl: "Nederlands",
                en: "English",
                et: "Eesti",
                fi: "Suomi",
                fr: "Français",
                de: "Deutsch",
                el: "Ελληνικά",
                gu: '',
                ht: "Haitian Creole",
                he: "עברית",
                is: '',
                hi: "हिंदी",
                mww: "Hmong Daw",
                hu: "Magyar",
                id: "Indonesia",
                it: "Italiano",
                ja: "日本語",
                kn: '',
                kk: '',
                km: '',
                tlh: "Klingon",
                ko: "한국어",
                ku: '',
                lo: '',
                lv: "Latviešu",
                lt: "Lietuvių",
                mg: '',
                ms: "Melayu",
                ml: '',
                mt: "Il-Malti",
                mi: '',
                mr: '',
                my: '',
                no: "Norsk",
                ne: '',
                fa: "Persian",
                pl: "Polski",
                pt: "Português",
                ps: '',
                pa: '',
                ro: "Română",
                ru: "Русский",
                sk: "Slovenčina",
                sl: "Slovenščina",
                es: "Español",
                sv: "Svenska",
                sm: '',
                ta: '',
                te: '',
                th: "ไทย",
                tr: "Türkçe",
                uk: "Українська",
                ur: "اردو",
                vi: "Tiếng Việt",
                cy: "Welsh"
            },
            languageDirs = {
                af: leftToRight,
                sq: leftToRight,
                am: leftToRight,
                hy: leftToRight,
                az: leftToRight,
                bn: leftToRight,
                bs: leftToRight,
                hr: leftToRight,
                gu: leftToRight,
                is: leftToRight,
                kn: leftToRight,
                kk: leftToRight,
                km: leftToRight,
                ku: leftToRight,
                lo: leftToRight,
                mg: leftToRight,
                ml: leftToRight,
                mi: leftToRight,
                mr: leftToRight,
                my: leftToRight,
                ne: leftToRight,
                ps: leftToRight,
                pa: leftToRight,
                sm: leftToRight,
                ta: leftToRight,
                te: leftToRight,
                ar: rightToLeft,
                bg: leftToRight,
                ca: leftToRight,
                "zh-chs": leftToRight,
                "zh-cht": leftToRight,
                cs: leftToRight,
                da: leftToRight,
                nl: leftToRight,
                en: leftToRight,
                et: leftToRight,
                fi: leftToRight,
                fr: leftToRight,
                de: leftToRight,
                el: leftToRight,
                ht: leftToRight,
                he: rightToLeft,
                hi: leftToRight,
                mww: leftToRight,
                hu: leftToRight,
                id: leftToRight,
                it: leftToRight,
                ja: leftToRight,
                tlh: leftToRight,
                "tlh-qaak": leftToRight,
                ko: leftToRight,
                lv: leftToRight,
                lt: leftToRight,
                ms: leftToRight,
                mt: leftToRight,
                no: leftToRight,
                fa: rightToLeft,
                pl: leftToRight,
                pt: leftToRight,
                ro: leftToRight,
                ru: leftToRight,
                sk: leftToRight,
                sl: leftToRight,
                es: leftToRight,
                sv: leftToRight,
                th: leftToRight,
                tr: leftToRight,
                uk: leftToRight,
                ur: rightToLeft,
                vi: leftToRight,
                cy: leftToRight
            },
            languageMappings = {
                "ar-sa": langArabic,
                ar: langArabic,
                "ar-iq": langArabic,
                "ar-eg": langArabic,
                "ar-ly": langArabic,
                "ar-dz": langArabic,
                "ar-ma": langArabic,
                "ar-tn": langArabic,
                "ar-om": langArabic,
                "ar-ye": langArabic,
                "ar-sy": langArabic,
                "ar-jo": langArabic,
                "ar-lb": langArabic,
                "ar-kw": langArabic,
                "ar-ae": langArabic,
                "ar-bh": langArabic,
                "ar-qa": langArabic,
                "bg-bg": "bg",
                bg: "bg",
                "ca-es": "ca",
                ca: "ca",
                "ca-es-valencia": "ca",
                "zh-cn": langSimplifiedChinese,
                "zh-chs": langSimplifiedChinese,
                "zh-sg": langSimplifiedChinese,
                "zh-tw": langTraditionalChinese,
                "zh-cht": langTraditionalChinese,
                "zh-hk": langTraditionalChinese,
                "zh-mo": langTraditionalChinese,
                "cs-cz": "cs",
                cs: "cs",
                "da-dk": "da",
                da: "da",
                "nl-nl": "nl",
                nl: "nl",
                "nl-be": "nl",
                "en-us": langEnglish,
                en: langEnglish,
                "en-gb": langEnglish,
                "en-au": langEnglish,
                "en-ca": langEnglish,
                "en-nz": langEnglish,
                "en-ie": langEnglish,
                "en-za": langEnglish,
                "en-jm": langEnglish,
                "en-029": langEnglish,
                "en-bz": langEnglish,
                "en-tt": langEnglish,
                "en-zw": langEnglish,
                "en-ph": langEnglish,
                "en-in": langEnglish,
                "en-my": langEnglish,
                "en-sg": langEnglish,
                "et-ee": "et",
                et: "et",
                "fi-fi": "fi",
                fi: "fi",
                "fr-fr": langFrench,
                fr: langFrench,
                "fr-be": langFrench,
                "fr-ca": langFrench,
                "fr-ch": langFrench,
                "fr-lu": langFrench,
                "fr-mc": langFrench,
                "de-de": langGerman,
                de: langGerman,
                "de-ch": langGerman,
                "de-at": langGerman,
                "de-lu": langGerman,
                "de-li": langGerman,
                "el-gr": "el",
                el: "el",
                "he-il": "he",
                he: "he",
                "hi-in": "hi",
                hi: "hi",
                "hu-hu": "hu",
                hu: "hu",
                "id-id": "id",
                id: "id",
                "it-it": "it",
                it: "it",
                "it-ch": "it",
                "ja-jp": "ja",
                ja: "ja",
                "ko-kr": "ko",
                ko: "ko",
                "lv-lv": "lv",
                lv: "lv",
                "lt-lt": "lt",
                lt: "lt",
                "ms-my": "ms",
                ms: "ms",
                "ms-bn": "ms",
                "mt-mt": "mt",
                mt: "mt",
                "nb-no": langNorwegian,
                nb: langNorwegian,
                no: langNorwegian,
                "nn-no": langNorwegian,
                nn: langNorwegian,
                "fa-ir": "fa",
                fa: "fa",
                "pl-pl": "pl",
                pl: "pl",
                "pt-br": "pt",
                pt: "pt",
                "pt-pt": "pt",
                "ro-ro": "ro",
                ro: "ro",
                "ru-ru": "ru",
                ru: "ru",
                "sk-sk": "sk",
                sk: "sk",
                "sl-si": "sl",
                sl: "sl",
                "es-mx": langSpanish,
                es: langSpanish,
                "es-es": langSpanish,
                "es-gt": langSpanish,
                "es-cr": langSpanish,
                "es-pa": langSpanish,
                "es-do": langSpanish,
                "es-ve": langSpanish,
                "es-co": langSpanish,
                "es-pe": langSpanish,
                "es-ar": langSpanish,
                "es-ec": langSpanish,
                "es-cl": langSpanish,
                "es-uy": langSpanish,
                "es-py": langSpanish,
                "es-bo": langSpanish,
                "es-sv": langSpanish,
                "es-hn": langSpanish,
                "es-ni": langSpanish,
                "es-pr": langSpanish,
                "es-us": langSpanish,
                "sv-se": "sv",
                sv: "sv",
                "sv-fi": "sv",
                "th-th": "th",
                th: "th",
                "tr-tr": "tr",
                tr: "tr",
                "uk-ua": "uk",
                uk: "uk",
                "ur-pk": "ur",
                ur: "ur",
                "vi-vn": "vi",
                vi: "vi",
                "cy-gb": "cy",
                cy: "cy"
            };
        window[localizedLangsKey] = localizedLangs;
        window["languageDirs"] = languageDirs;
        window[languageMappingsKey] = languageMappings;
        var domUtils = new function () {
            var oneHundredPercent = "100%",
                zeroString = "0",
                self = this,
                bmpHeader = [66, 77, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                base64chars = [],
                charRanges = [{
                    startChar: "A",
                    charCount: 26
                }, {
                    startChar: "a",
                    charCount: 26
                }, {
                    startChar: zeroString,
                    charCount: 10
                }, {
                    startChar: "+",
                    charCount: 1
                }, {
                    startChar: pathDelimiter,
                    charCount: 1
                }];

            for (var t = 0; t < charRanges.length; ++t)
                for (var y = 0; y < charRanges[t].charCount; ++y) base64chars.push(String.fromCharCode(charRanges[t].startChar.charCodeAt(0) + y));

            self.addEvent = function (element, event, callback, context) {
                var onTrigger = function () {
                    return callback(element, context)
                };
                if (element.addEventListener) element.addEventListener(event, onTrigger, falseValue);
                else if (element.attachEvent) element.attachEvent("on" + event, onTrigger);
                return onTrigger
            };
            self.removeEvent = function (el, event, callback) {
                if (el.removeEventListener) el.removeEventListener(event, callback, falseValue);
                else if (el.detachEvent) el.detachEvent("on" + event, callback)
            };
            var getStyleValue = self.getStyleValue = function (element, styleName) {
                    if (element.style[styleName]) return element.style[styleName];
                    if (element.currentStyle) return !element.currentStyle[styleName] ? emptyString : element.currentStyle[styleName];
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        styleName = styleName.replace(/([A-Z])/g, "-$1").toLowerCase();
                        var d = document.defaultView.getComputedStyle(element, emptyString);
                        return d && d.getPropertyValue(styleName)
                    }
                    return emptyString
                },
                fixIEQuirks = self.fixIEQuirks = function (element) {
                    if (element.tagName.toLowerCase() === strSelect) return;
                    var width = getStyleValue(element, "width");
                    if (width && width.indexOf(px) > negativeOne) element.style.width = parseInt(width) + parseInt(zeroString + getStyleValue(element, "borderLeftWidth")) + parseInt(zeroString + getStyleValue(element, "borderRightWidth")) + parseInt(zeroString + getStyleValue(element, "paddingLeft")) + parseInt(zeroString + getStyleValue(element, "paddingRight")) + px;
                    var height = getStyleValue(element, "height");
                    if (height && height.indexOf(px) > negativeOne) element.style.height = parseInt(height) + parseInt(zeroString + getStyleValue(element, "borderTopWidth")) + parseInt(zeroString + getStyleValue(element, "borderBottomWidth")) + parseInt(zeroString + getStyleValue(element, "paddingTop")) + parseInt(zeroString + getStyleValue(element, "paddingBottom")) + px;
                    for (var b = 0; b < element.childNodes.length; ++b)
                        if (element.childNodes[b].nodeType === 1) fixIEQuirks(element.childNodes[b])
                };
            self.absXPos = function (el) {
                if (el.getBoundingClientRect) return el.getBoundingClientRect().left + (Math.max(el.ownerDocument.documentElement.scrollLeft, el.ownerDocument.body.scrollLeft) - Math.max(el.ownerDocument.documentElement.clientLeft, el.ownerDocument.documentElement.offsetLeft));
                else return getOffsetLeft(el) + getScrollLeft(el)
            };

            function getOffsetLeft(el) {
                return el.offsetLeft + (el.offsetParent && el.offsetParent.nodeType == 1 ? getOffsetLeft(el.offsetParent) : 0)
            }

            function getScrollLeft(el) {
                return (el.parentNode && el.parentNode.nodeType == 1 ? getScrollLeft(el.parentNode) : 0) + (el.nodeName.toLowerCase() != "html" && el.nodeName.toLowerCase() != "body" && el.scrollLeft ? -el.scrollLeft : 0)
            }
            self.absYPos = function (el) {
                if (el.getBoundingClientRect) return el.getBoundingClientRect().top + (Math.max(el.ownerDocument.documentElement.scrollTop, el.ownerDocument.body.scrollTop) - Math.max(el.ownerDocument.documentElement.clientTop, el.ownerDocument.documentElement.offsetTop));
                else return getOffsetTop(el) + getScrollTop(el)
            };

            function getOffsetTop(el) {
                return el.offsetTop + (el.offsetParent && el.offsetParent.nodeType == 1 ? getOffsetTop(el.offsetParent) : 0)
            }

            function getScrollTop(el) {
                return (el.parentNode && el.parentNode.nodeType == 1 ? getScrollTop(el.parentNode) : 0) + (el.nodeName.toLowerCase() != "html" && el.nodeName.toLowerCase() != "body" && el.scrollTop ? -el.scrollTop : 0)
            }
            self.getVisibleWidth = function (doc) {
                var result = fourHundred;
                if (window.innerWidth && window.innerWidth > result) result = window.innerWidth;
                else if (doc.documentElement.clientWidth && doc.documentElement.clientWidth > result) result = doc.documentElement.clientWidth;
                else if (doc.body.clientWidth && doc.body.clientWidth > result) result = doc.body.clientWidth;
                return result
            };
            self.getVisibleHeight = function (doc) {
                return isQuirksMode(doc) ? doc.body.clientHeight : doc.documentElement.clientHeight
            };
            self.getStringByteCount = function (str) {
                return config.escapeNonAscii ? encodeURIComponent(str).length : encodeURIComponent(str).replace(/%\w\w/g, " ").length
            };
            var getBlockParent = self.getBlockParent = function (el) {
                    var display = el._display = el._display || domUtils.getStyleValue(el, "display"),
                        position = el._position = el._position || domUtils.getStyleValue(el, strPosition);
                    return display && display.toLowerCase() == strInline && position.toLowerCase() == "static" && el.parentNode && el.parentNode.nodeType == 1 ? getBlockParent(el.parentNode) : el
                },
                isQuirksMode = self.isQuirksMode = function (doc) {
                    if (doc.compatMode && doc.compatMode.indexOf("CSS") != negativeOne) return falseValue;
                    else return trueValue
                },
                isInternetExplorer11OrHigher = self.isInternetExplorer11OrHigher = function () {
                    var result = falseValue;
                    if (navigator.appName == "Netscape") {
                        var ua = navigator.userAgent,
                            reg = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                        if (reg.exec(ua) != nullValue) {
                            rv = parseFloat(RegExp.$1);
                            if (rv >= 11) result = trueValue
                        }
                    }
                    return result
                },
                S = self.isInternetExplorerAnyVersion = function () {
                    var a = isInternetExplorer(),
                        b = isInternetExplorer11OrHigher();
                    return a || b
                },
                isInternetExplorer = self.isInternetExplorer = function () {
                    return window.navigator.userAgent.toUpperCase().indexOf("MSIE") > negativeOne
                };
            self.setGradient = function (el, colorFrom, colorTo, height) {
                if (!height) height = el.offsetHeight;
                if (el._mstGradCol1 != colorFrom.toString() || el._mstGradCol2 != colorTo.toString()) {
                    if (el._mstGradElem && el._mstGradElem.parentNode == el) el.removeChild(el._mstGradElem);
                    if (colorFrom.toString() == colorTo.toString()) el.style.backgroundColor = "#" + colorFrom.toString();
                    else if (isInternetExplorer() && (!document.documentMode || document.documentMode < 8)) createGradientwithIEFilter(el, colorFrom, colorTo, height);
                    else {
                        el.style.backgroundRepeat = "repeat-x";
                        el.style.backgroundImage = "url('data:image/x-ms-bmp;base64," + toBase64String(bytesFor1pxWidthGradientImage(colorFrom, colorTo, height)) + "')"
                    }
                    el._mstGradCol1 = colorFrom.toString();
                    el._mstGradCol2 = colorTo.toString()
                }
            };

            function createGradientwithIEFilter(el, colorFrom, colorTo, height) {
                var endColorPrefix = ",endColorStr=#FF",
                    gradientFilterPrefix = "progid:DXImageTransform.Microsoft.Gradient(startColorStr=#FF";
                el._mstGradElem = document.createElement(strDiv);
                el._mstGradElem.style.fontSize = zeroPx;
                el._mstGradElem.style.width = oneHundredPercent;
                el._mstGradElem.style.height = height + px;
                el._mstGradElem.style.marginBottom = "-" + el._mstGradElem.style.height;
                el.insertBefore(el._mstGradElem, el.firstChild);
                el._mstGradElem.appendChild(document.createElement(strDiv));
                el._mstGradElem.appendChild(document.createElement(strDiv));
                el._mstGradElem.firstChild.style.width = el._mstGradElem.lastChild.style.width = oneHundredPercent;
                el._mstGradElem.firstChild.style.height = el._mstGradElem.lastChild.style.height = height / 2 + px;
                el._mstGradElem.firstChild.style.fontSize = el._mstGradElem.lastChild.style.fontSize = zeroPx;
                el._mstGradElem.firstChild.style.filter = gradientFilterPrefix + colorTo + endColorPrefix + colorTo.interpolate(colorFrom, .5) + ")";
                el._mstGradElem.lastChild.style.filter = gradientFilterPrefix + colorFrom + endColorPrefix + colorFrom.interpolate(colorTo, .5) + ")"
            }

            function bytesFor1pxWidthGradientImage(colorFrom, colorTo, height) {
                var pixelCount = 1 * height,
                    bytes = [];
                for (var b = 0; b < bmpHeader.length; ++b) bytes.push(bmpHeader[b]);
                write4bytesInByteArray(bytes, 2, 54 + pixelCount * 4);
                // BMP width
                write4bytesInByteArray(bytes, 18, 1);
                // BMP height
                write4bytesInByteArray(bytes, 22, height);
                write4bytesInByteArray(bytes, 34, pixelCount * 4);
                for (var b = 0; b < height; ++b) {
                    var color = b < height / 2 ? colorFrom.interpolate(colorTo, .5 - b / height) : colorFrom.interpolate(colorTo, b / height);
                    bytes.push(color.b);
                    bytes.push(color.g);
                    bytes.push(color.r);
                    bytes.push(num255)
                }
                return bytes
            }

            function write4bytesInByteArray(bytes, index, value) {
                bytes.splice(index, 1, value & num255);
                bytes.splice(index + 1, 1, value >>> 8 & num255);
                bytes.splice(index + 2, 1, value >>> 16 & num255);
                bytes.splice(index + 3, 1, value >>> 24 & num255)
            }
            self.applyProtectiveCss = function (el) {
                var contentBox = "content-box",
                    normal = "normal";
                el.style.backgroundAttachment = "scroll";
                el.style.backgroundColor = "Transparent";
                el.style.backgroundImage = none;
                el.style.color = "White";
                el.style.fontStyle = normal;
                el.style.fontVariant = normal;
                el.style.fontWeight = normal;
                el.style.letterSpacing = normal;
                el.style.lineHeight = normal;
                el.style.margin = zeroPx;
                el.style.outline = none;
                el.style.overflow = strVisible;
                el.style.padding = zeroPx;
                el.style.verticalAlign = "baseline";
                el.style.wordSpacing = normal;
                el.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
                try {
                    el.style.fontSize = "inherit"
                } catch (e) {
                    el.style.fontSize = oneHundredPercent
                }
                el.style.textTransform = none;
                el.style.textDecoration = none;
                el.style.border = zeroPx;
                el.style.boxSizing = contentBox;
                el.style.MozBoxSizing = contentBox;
                el.style.float = none;
                el.style.maxWidth = none
            };

            function toBase64String(bytes) {
                var e = 1048576,
                    result = [];
                while (bytes.length) {
                    var a = [];
                    a.push(bytes.shift());
                    result.push(base64chars[a[0] >> 2 & 63]);
                    a.push(bytes.length > 0 ? bytes.shift() : e);
                    a.push(bytes.length > 0 ? bytes.shift() : e);
                    result.push(base64chars[(a[0] << 4 | a[1] >>> 4) & 63]);
                    result.push(a[1] == e ? "=" : base64chars[(a[1] << 2 | a[2] >>> 6) & 63]);
                    result.push(a[2] == e ? "=" : base64chars[a[2] & 63])
                }
                return result.join(emptyString)
            }
            var R = self.clone = function (obj) {
                var result = {};
                for (var key in obj)
                    if (typeof obj[key] === "object" && obj !== nullValue) result[key] = this.clone(obj);
                    else result[key] = obj[key];
                return result
            };
            self.compress = function (str) {
                var charCodeMap = {},
                    negativeIndex = 0,
                    pos = 0,
                    accumulated = emptyString,
                    c, nextAccumulated, result = [];
                while (c = str.charAt(pos++)) {
                    charCodeMap[c] = c.charCodeAt(0);
                    nextAccumulated = accumulated + c;
                    if (charCodeMap[nextAccumulated]) accumulated = nextAccumulated;
                    else {
                        charCodeMap[nextAccumulated] = --negativeIndex;
                        result.push(charCodeMap[accumulated]);
                        accumulated = c
                    }
                }
                if (accumulated) result.push(charCodeMap[accumulated]);
                return result
            };
            self.decompress = function (numArray) {
                var stringMap = {},
                    negativeIndex = 0,
                    pos = 0,
                    lastStr = String.fromCharCode(numArray[pos++]),
                    curNum, curStr, result = lastStr;
                while (curNum = numArray[pos++]) {
                    if (curNum > 0) stringMap[curNum] = String.fromCharCode(curNum);
                    if (stringMap[curNum]) curStr = stringMap[curNum];
                    else if (curNum + 1 == negativeIndex) curStr = lastStr + lastStr.charAt(0);
                    else throw "Invalid input data";
                    result += curStr;
                    stringMap[--negativeIndex] = lastStr + curStr.charAt(0);
                    lastStr = curStr
                }
                return result
            };
            return self
        };

        function Color(red, green, blue) {
            var self = this;

            self.r = red;
            self.g = green;
            self.b = blue;

            for (var key in self) {
                self[key] = self[key] > num255 ? num255 : self[key] < 0 ? 0 : self[key];
            }

            self.toString = function () {
                var redStr = "0" + this.r.toString(radixHex),
                    greenStr = "0" + this.g.toString(radixHex),
                    blueStr = "0" + this.b.toString(radixHex);
                return (redStr.substr(redStr.length - 2) + greenStr.substr(greenStr.length - 2) + blueStr.substr(blueStr.length - 2)).toUpperCase()
            };
            self.interpolate = function (color2, ratio) {
                var self = this;
                if (self.toString() == color2.toString()) return new Color(self.r, self.g, self.b);
                return new Color(
                    Math.round(self.r + ratio * (color2.r - self.r)),
                    Math.round(self.g + ratio * (color2.g - self.g)),
                    Math.round(self.b + ratio * (color2.b - self.b))
                )
            };
            return self
        }
        Color.parse = function (colorStr) {
            var matched = colorStr.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);

            if (matched) {
                return new Color(
                    parseInt(matched[1], 10),
                    parseInt(matched[2], 10),
                    parseInt(matched[3], 10)
                );
            }

            colorStr = colorStr.split(" ")[0];

            if (colorStr.substr(0, 1) == "#") {
                if (colorStr.length == 4) {
                    return new Color(
                        radixHex * parseInt(colorStr.substr(1, 1), radixHex),
                        radixHex * parseInt(colorStr.substr(2, 1), radixHex),
                        radixHex * parseInt(colorStr.substr(3, 1), radixHex)
                    );
                }
                else if (colorStr.length == 7) {
                    return new Color(
                        parseInt(colorStr.substr(1, 2), radixHex),
                        parseInt(colorStr.substr(3, 2), radixHex),
                        parseInt(colorStr.substr(5, 2), radixHex)
                    )
                }
            } else if (Color.nameTable[colorStr.toLowerCase()]) {
                return Color.parse(Color.nameTable[colorStr.toLowerCase()]);
            }
            else throw "Color format not suported: " + colorStr;
        };
        Color.nameTable = {
            Black: "#000000",
            Navy: "#000080",
            DarkBlue: "#00008B",
            MediumBlue: "#0000CD",
            Blue: "#0000FF",
            DarkGreen: "#006400",
            Green: "#008000",
            Teal: "#008080",
            DarkCyan: "#008B8B",
            DeepSkyBlue: "#00BFFF",
            DarkTurquoise: "#00CED1",
            MediumSpringGreen: "#00FA9A",
            Lime: "#00FF00",
            SpringGreen: "#00FF7F",
            Aqua: "#00FFFF",
            Cyan: "#00FFFF",
            MidnightBlue: "#191970",
            DodgerBlue: "#1E90FF",
            LightSeaGreen: "#20B2AA",
            ForestGreen: "#228B22",
            SeaGreen: "#2E8B57",
            DarkSlateGray: "#2F4F4F",
            LimeGreen: "#32CD32",
            MediumSeaGreen: "#3CB371",
            Turquoise: "#40E0D0",
            RoyalBlue: "#4169E1",
            SteelBlue: "#4682B4",
            DarkSlateBlue: "#483D8B",
            MediumTurquoise: "#48D1CC",
            "Indigo ": "#4B0082",
            DarkOliveGreen: "#556B2F",
            CadetBlue: "#5F9EA0",
            CornflowerBlue: "#6495ED",
            MediumAquaMarine: "#66CDAA",
            DimGray: "#696969",
            SlateBlue: "#6A5ACD",
            OliveDrab: "#6B8E23",
            SlateGray: "#708090",
            LightSlateGray: "#778899",
            MediumSlateBlue: "#7B68EE",
            LawnGreen: "#7CFC00",
            Chartreuse: "#7FFF00",
            Aquamarine: "#7FFFD4",
            Maroon: "#800000",
            Purple: "#800080",
            Olive: "#808000",
            Gray: "#808080",
            SkyBlue: "#87CEEB",
            LightSkyBlue: "#87CEFA",
            BlueViolet: "#8A2BE2",
            DarkRed: "#8B0000",
            DarkMagenta: "#8B008B",
            SaddleBrown: "#8B4513",
            DarkSeaGreen: "#8FBC8F",
            LightGreen: "#90EE90",
            MediumPurple: "#9370D8",
            DarkViolet: "#9400D3",
            PaleGreen: "#98FB98",
            DarkOrchid: "#9932CC",
            YellowGreen: "#9ACD32",
            Sienna: "#A0522D",
            Brown: "#A52A2A",
            DarkGray: "#A9A9A9",
            LightBlue: "#ADD8E6",
            GreenYellow: "#ADFF2F",
            PaleTurquoise: "#AFEEEE",
            LightSteelBlue: "#B0C4DE",
            PowderBlue: "#B0E0E6",
            FireBrick: "#B22222",
            DarkGoldenRod: "#B8860B",
            MediumOrchid: "#BA55D3",
            RosyBrown: "#BC8F8F",
            DarkKhaki: "#BDB76B",
            Silver: "#C0C0C0",
            MediumVioletRed: "#C71585",
            "IndianRed ": "#CD5C5C",
            Peru: "#CD853F",
            Chocolate: "#D2691E",
            Tan: "#D2B48C",
            LightGrey: "#D3D3D3",
            PaleVioletRed: "#D87093",
            Thistle: "#D8BFD8",
            Orchid: "#DA70D6",
            GoldenRod: "#DAA520",
            Crimson: "#DC143C",
            Gainsboro: "#DCDCDC",
            Plum: "#DDA0DD",
            BurlyWood: "#DEB887",
            LightCyan: "#E0FFFF",
            Lavender: "#E6E6FA",
            DarkSalmon: "#E9967A",
            Violet: "#EE82EE",
            PaleGoldenRod: "#EEE8AA",
            LightCoral: "#F08080",
            Khaki: "#F0E68C",
            AliceBlue: "#F0F8FF",
            HoneyDew: "#F0FFF0",
            Azure: "#F0FFFF",
            SandyBrown: "#F4A460",
            Wheat: "#F5DEB3",
            Beige: "#F5F5DC",
            WhiteSmoke: "#F5F5F5",
            MintCream: "#F5FFFA",
            GhostWhite: "#F8F8FF",
            Salmon: "#FA8072",
            AntiqueWhite: "#FAEBD7",
            Linen: "#FAF0E6",
            LightGoldenRodYellow: "#FAFAD2",
            OldLace: "#FDF5E6",
            Red: "#FF0000",
            Fuchsia: "#FF00FF",
            Magenta: "#FF00FF",
            DeepPink: "#FF1493",
            OrangeRed: "#FF4500",
            Tomato: "#FF6347",
            HotPink: "#FF69B4",
            Coral: "#FF7F50",
            Darkorange: "#FF8C00",
            LightSalmon: "#FFA07A",
            Orange: "#FFA500",
            LightPink: "#FFB6C1",
            Pink: "#FFC0CB",
            Gold: "#FFD700",
            PeachPuff: "#FFDAB9",
            NavajoWhite: "#FFDEAD",
            Moccasin: "#FFE4B5",
            Bisque: "#FFE4C4",
            MistyRose: "#FFE4E1",
            BlanchedAlmond: "#FFEBCD",
            PapayaWhip: "#FFEFD5",
            LavenderBlush: "#FFF0F5",
            SeaShell: "#FFF5EE",
            Cornsilk: "#FFF8DC",
            LemonChiffon: "#FFFACD",
            FloralWhite: "#FFFAF0",
            Snow: "#FFFAFA",
            Yellow: "#FFFF00",
            LightYellow: "#FFFFE0",
            Ivory: "#FFFFF0",
            White: "#FFFFFF"
        };
        new function () {
            var table = {};
            for (var key in Color.nameTable) table[key.toLowerCase()] = Color.nameTable[key];
            // Convert all nameTable keys to lower case
            Color.nameTable = table
        };

        function DOMTranslator(Hb, dom, from, to, onSuccess, onError, initialTimeout, isSourceFrame, isParallelSupported, disableUntranslate) {
            var errorMessageForTooDeep = "Element too deep",
                tempTagPrefix = "b",
                serviceLP = "LP",
                scrollEventName = "scroll",
                space = " ",
                self = this,
                that = self,
                langFrom = from,
                langTo = to,
                el = dom,
                localOnSuccess = onSuccess, // Function
                localOnError = onError, // Function
                apiTimeout = initialTimeout,
                progressListeners = [],
                parallel, directionStyles, supportParallel = isParallelSupported ? trueValue : falseValue,
                alwaysTrue = trueValue,
                Bc;

            Microsoft.Translator.APIRequests = 0;
            Microsoft.Translator.APIResponses = 0;
            
            var isUntranslateEnabled = !disableUntranslate && !isParallelSupported,
                batchCursor = 0,
                maxBatches = 9,
                timeoutForCheck = 0,
                cycleToReduceMaxBatches = 15,
                thresholdToStopBatch = oneHundred;
                
            if (navigator.userAgent && (navigator.userAgent.indexOf("Chrome") > negativeOne || navigator.userAgent.indexOf("Mobile") > negativeOne)) {
                cycleToReduceMaxBatches /= 3;
                maxBatches /= 2;
                thresholdToStopBatch /= 3;
                timeoutForCheck = 0; /* APPLE OVERRIDE */
            }
            apiTimeout = apiTimeout * maxBatches;
            var successListeners = [],
                errorListeners = [],
                batches = {}; // Record<number, { Dom: DOM[], Txt: string[] }>
            batches.size = 0;
            var batchCandidates = [],
                imageElements;
                
            config.requestGroup = Math.floor(Math.random() * 1e9).toString(radixHex);
            config.from = from;
            config.to = to;

            if (dom.nodeType != 1) throw new Error("Invalid input type");
            if (from == to) {
                activateImages(1);
                if (onSuccess) onSuccess(dom);
                return self
            }
            if (!el.innerHTML || !el.innerText && !el.textContent) {
                if (onSuccess) onSuccess(dom);
                return self
            }
            
            var translateRequest, latestTranslatedTextAndSentenceLengths, gb = 1400,
                maxStringByteCount = 1600,
                textWithNormalizedSpace = (el.innerText || el.textContent).replace(/\s+/g, space),
                accumulatedHTMLSkeletonCharCount = 0,
                noTranslateTextLength = 0,
                accumulatedHTMLLength = el.innerHTML.length,
                accumulatedCharCount = 0,
                domStack = [el],
                childIndexesInParent = [0],
                textLengthOffsetStack = [{
                    o: accumulatedHTMLLength,   // Text Length
                    p: 0 // Text Offset
                }],
                nodesToTranslate = [],
                htmlSkeletons = [],
                domsOfLatestBatch = [],
                textsOfLatestBatch = [],
                textsWithoutTag = [],
                destroyed = falseValue,
                isTranslating = falseValue,
                hasScrolled = falseValue,
                shouldReactToScroll = falseValue;

            self.text = textWithNormalizedSpace;
            self.textLength = textWithNormalizedSpace.length;
            self.showTooltips = trueValue;
            self.showHighlight = trueValue;
            self.sourceFrame = isSourceFrame ? trueValue : falseValue;
            self.detectedLanguage;
            self.transItems = [];

            var stats = [],
                latestRequestStartTime, latestRequestTextLength = 0,
                latestRequestDomCount = 0;

            if (alwaysTrue && el.ownerDocument && el.ownerDocument.documentElement && el == el.ownerDocument.documentElement) {
                var headElement = el.ownerDocument.getElementsByTagName(head)[0];
                if (headElement) {
                    accumulatedHTMLLength -= headElement.innerHTML.length;
                    textLengthOffsetStack[0].o = accumulatedHTMLLength
                }
            }
            if (window.translatorOnBegin || document.translatorOnBegin) {
                try {
                    (window.translatorOnBegin || document.translatorOnBegin)()
                } catch (err) {
                    console.log(err);
                }
            }

            function onScroll() {
                hasScrolled = trueValue;
                if (shouldReactToScroll) {
                    shouldReactToScroll = falseValue;
                    if (batches.size < maxBatches)
                        if (isParallelSupported && isSourceFrame) traverseDomToTranslate();
                        else setTimeout(function () {
                            traverseDomToTranslate()
                        }, timeoutForCheck)
                }
            }
            
            domUtils.addEvent(el.ownerDocument.defaultView || el.ownerDocument.parentWindow, scrollEventName, onScroll);
            
            var cancel = self.cancel = function () {
                if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.hideTooltip) Microsoft.TranslatorOverride.hideTooltip();
                if (!el) return;
                destroyed = trueValue;
                if (translateRequest) translateRequest.abort("canceled by user.");
                untranslate(el);
                el = nullValue
            };

            try {
                if (!toolbar || !toolbar.addExitEvent || !toolbar.setProgress || !toolbar.setLanguagePair) toolbar = nullValue
            } catch (err) {
                toolbar = nullValue
            }

            var exit = self.exit = function () {
                cancel();
                if (toolbar) toolbar.hide()
            };

            function triggerProgress(progress) {
                progress = Math.max(progress, 0);
                progress = Math.min(progress, oneHundred);
                for (var i = 0; i < progressListeners.length; ++i) progressListeners[i](progress)
            }
            self.addProgressEvent = function (onProgressChange) {
                progressListeners.push(onProgressChange)
            };
            if (!that.sourceFrame)
                if (toolbar && toolbar.setProgress) that.addProgressEvent(toolbar.setProgress);
            self.setParallel = function (value) {
                parallel = value
            };
            if (toolbar) {
                toolbar.addExitEvent(self.exit);
                toolbar.setProgress(0);
                toolbar.setLanguagePair(langFrom, langTo)
            }
            var ToggleEnum = {
                    Inherit: 0,
                    On: 1,
                    Off: 2,
                    Skip: 3
                },
                metaForToggle = {
                    google: {
                        value: {
                            notranslate: ToggleEnum.Off
                        },
                        content: {
                            notranslate: ToggleEnum.Off
                        }
                    },
                    microsoft: {
                        value: {
                            notranslate: ToggleEnum.Off
                        },
                        content: {
                            notranslate: ToggleEnum.Off
                        }
                    }
                },
                attributesForToggle = {
                    translate: {
                        "true": ToggleEnum.On,
                        yes: ToggleEnum.On,
                        "false": ToggleEnum.Off,
                        no: ToggleEnum.Off,
                        skip: ToggleEnum.Skip
                    }
                },
                classNamesForToggle = {
                    notranslate: ToggleEnum.Off,
                    skiptranslate: ToggleEnum.Skip
                };
            if (shouldTranslatePage(el) == ToggleEnum.Off) {
                if (onSuccess) onSuccess(dom);
                return
            }
            // Util function for array to get last element
            domStack.top = childIndexesInParent.top = textLengthOffsetStack.top = function () {
                return this[this.length - 1]
            };
            var tagNamesToSkipTranslate = {
                    head: 1,
                    script: 1,
                    style: 1,
                    code: 1,
                    samp: 1,
                    "var": 1,
                    kbd: 1,
                    pre: 1,
                    input: 1,
                    object: 1,
                    address: 1,
                    textarea: 1,
                    noscript: 1
                },
                tagNamesToIgnoreText = {
                    hr: 1,
                    option: 1,
                    title: 1,
                    br: 1,
                    frame: 1,
                    iframe: 1
                };
            for (var key in tagNamesToSkipTranslate) tagNamesToIgnoreText[key] = 1;
            delete tagNamesToIgnoreText["code"];
            delete tagNamesToIgnoreText["samp"];
            delete tagNamesToIgnoreText["var"];

            function getDirectionRelatedStyles(langCode) {
                var result;
                if (languageDirs[langCode] == rightToLeft) result = {
                    direction: rightToLeft,
                    textAlign: strRight
                };
                else result = {
                    direction: leftToRight,
                    textAlign: strLeft
                };
                return result
            }
            if (!isSourceFrame && !isParallelSupported) directionStyles = getDirectionRelatedStyles(to);

            function getPathForCurrentElements() {
                var result = [];
                for (var a = domStack.length - 2; a >= 0; --a)
                    if (domStack[a].id) {
                        result.unshift(domStack[a].id.toString());
                        break
                    } else result.unshift((domStack[a].nodeName && domStack[a].nodeName.toLowerCase ? domStack[a].nodeName.toLowerCase() : emptyString) + "-" + childIndexesInParent[a].toString());
                return result.join("_")
            }

            function traverseDomToTranslate() {
                var attrNameForLength = "len";
                if (config.maxChars && config.maxChars < accumulatedCharCount && !hasScrolled && !that.sourceFrame) {
                    if (!shouldReactToScroll) {
                        reportStats();
                        shouldReactToScroll = trueValue
                    }
                    return
                }
                var textOrInlineNodes = [],
                    needCleanUp = falseValue,
                    nodePath = nullValue;
                if (alwaysTrue && textLengthOffsetStack.length) {
                    var extractedTextLength = 0;
                    for (var i = 0; i < textLengthOffsetStack.length; ++i) extractedTextLength += parseInt(textLengthOffsetStack[i].p);
                    triggerProgress(Math.min(99.999 * (extractedTextLength - noTranslateTextLength) / (accumulatedHTMLLength - noTranslateTextLength), 99.999))
                }

                // Traverse the given DOM
                while (domStack.length > 0 && (accumulatedHTMLSkeletonCharCount < gb || textOrInlineNodes.length)) {
                    if (domStack.length && isDocumentAccessible(domStack.top()) && shouldTranslate(domStack.top())) {
                        domStack.push(domStack.top().contentWindow.document.documentElement);
                        childIndexesInParent.push(0);
                        textLengthOffsetStack.push({
                            o: 0,
                            p: 0
                        });
                        needCleanUp = trueValue;
                        domUtils.addEvent(domStack.top().ownerDocument.defaultView || domStack.top().ownerDocument.parentWindow, scrollEventName, onScroll);
                        if (alwaysTrue) {
                            var len = typeof domStack.top().length == numberTypeString ? domStack.top().length : domStack.top().getAttribute(attrNameForLength) || (domStack.top().innerHTML && domStack.top().innerHTML.length ? domStack.top().innerHTML.length : 0);
                            try {
                                if (!domStack.top().length && !domStack.top().getAttribute(attrNameForLength)) domStack.top().setAttribute(attrNameForLength, len)
                            } catch (err) {}
                            textLengthOffsetStack[textLengthOffsetStack.length - 1].o = len;
                            accumulatedHTMLLength += len
                        }
                    } else if (domStack.length && domStack.top().firstChild && domStack.top().firstChild.parentNode == domStack.top() && !isTextOrInlineNode(domStack.top()) && shouldTranslate(domStack.top())) {
                        domStack.push(domStack.top().firstChild);
                        childIndexesInParent.push(0);
                        textLengthOffsetStack.push({
                            o: 0,
                            p: 0
                        });
                        needCleanUp = trueValue;
                        if (alwaysTrue) {
                            var len = typeof domStack.top().length == numberTypeString ? domStack.top().length : domStack.top().getAttribute(attrNameForLength) || (domStack.top().innerHTML && domStack.top().innerHTML.length ? domStack.top().innerHTML.length : 0);
                            try {
                                if (!domStack.top().length && !domStack.top().getAttribute(attrNameForLength)) domStack.top().setAttribute(attrNameForLength, len)
                            } catch (err) {}
                            textLengthOffsetStack[textLengthOffsetStack.length - 1].o = len
                        }
                    } else {
                        while (domStack.length && (!domStack.top().nextSibling && !domStack.top().nextElementSibling)) {
                            domStack.pop();
                            childIndexesInParent.pop();
                            textLengthOffsetStack.pop();
                            needCleanUp = trueValue
                        }
                        if (domStack.length > 1) {
                            if (alwaysTrue && domStack.top().nodeName.toLowerCase() != head) textLengthOffsetStack[textLengthOffsetStack.length - 2].p += parseInt(textLengthOffsetStack[textLengthOffsetStack.length - 1].o);
                            domStack.push(domStack.pop().nextSibling);
                            textLengthOffsetStack[textLengthOffsetStack.length - 1] = {
                                o: 0,
                                p: 0
                            };
                            if (!isTextOrInlineNode(domStack.top())) needCleanUp = trueValue;
                            if (alwaysTrue) {
                                var len = typeof domStack.top().length == numberTypeString ? domStack.top().length : domStack.top().getAttribute(attrNameForLength) || (domStack.top().innerHTML && domStack.top().innerHTML.length ? domStack.top().innerHTML.length : 0);
                                try {
                                    if (!domStack.top().length && !domStack.top().getAttribute(attrNameForLength)) domStack.top().setAttribute(attrNameForLength, len)
                                } catch (j) {}
                                textLengthOffsetStack[textLengthOffsetStack.length - 1].o = len
                            }
                        } else {
                            domStack.pop();
                            childIndexesInParent.pop();
                            textLengthOffsetStack.pop();
                            needCleanUp = trueValue
                        }
                    }
                    
                    if (needCleanUp || domStack.length > 0 && !isTextOrInlineNode(domStack.top())) {
                        if (textOrInlineNodes.length) try {
                            cleanupNodesAndPrepareHtmlForThem(textOrInlineNodes, nodePath)
                        } catch (l) {
                            if (config.debug);
                        }
                        needCleanUp = falseValue;
                        nodePath = nullValue
                    }

                    if (domStack.length) {
                        if (domStack.top().clientHeight < domStack.top().scrollHeight) domUtils.addEvent(domStack.top(), scrollEventName, onScroll);
                        if (isTextOrInlineNode(domStack.top())) {
                            if (!nodePath) nodePath = getPathForCurrentElements();
                            ++childIndexesInParent[childIndexesInParent.length - 1];
                            textOrInlineNodes.push(domStack.top())
                        }
                        if (domStack.top().nodeName.toLowerCase() != head && !shouldTranslate(domStack.top())) noTranslateTextLength += parseInt(textLengthOffsetStack.top().o);
                        adjustAlign(domStack.top())
                    }
                }
                if (accumulatedHTMLSkeletonCharCount > 0 || batchCandidates.length > 0) translatePreparedNodesAndTexts();
                else {
                    if (batches.size > 0 || batchCandidates.length > 0) return;
                    triggerProgress(oneHundred);
                    activateImages(1);
                    if (localOnSuccess) localOnSuccess(el);
                    localOnSuccess = nullValue;
                    if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.showHighlight) Microsoft.TranslatorOverride.showHighlight(that, langFrom, langTo);
                    if (window.translatorOnComplete || document.translatorOnComplete) try {
                        (window.translatorOnComplete || document.translatorOnComplete)()
                    } catch (l) {
                        if (config.debug);
                    }
                    reportStats()
                }
            }

            function adjustAlign(el) {
                var attrName = "adjustalign";
                try {
                    if (!el.getAttribute) return;
                    el.adjustAlign = el.getAttribute(attrName) && !(el.getAttribute(attrName).toLowerCase() == strFalse);
                    if (el.adjustAlign == nullValue) el.adjustAlign = el.parentNode.adjustAlign;
                    if (el.adjustAlign == undefined || el.adjustAlign == nullValue) el.adjustAlign = trueValue;
                    if (directionStyles && el && el.style && shouldTranslate(el) && !that.sourceFrame && config.service != serviceLP && el.adjustAlign)
                        for (var d in directionStyles) try {
                            var e = domUtils.getStyleValue(el, d);
                            if (e != directionStyles[d]) {
                                if (d == "textAlign" && (e && e.toLowerCase().indexOf("center") != negativeOne || el.tagName && el.tagName.toLowerCase() == "center")) continue;
                                if (isUntranslateEnabled) {
                                    if (!el._mstStyle) el._mstStyle = {};
                                    if (el.style[d]) el._mstStyle[d] = el.style[d];
                                    else el._mstStyle[d] = e
                                }
                                el.style[d] = directionStyles[d]
                            }
                        } catch (e) {
                            console.error(e)
                        }
                } catch (e) {
                    console.error(e)
                }
            }

            function activateImages(factor) {
                var attrName = "_mssrc";
                if (!imageElements)
                    if (el.getElementsByTagName) imageElements = el.getElementsByTagName(tagImg);
                    else if (el.documentElement.getElementsByTagName) imageElements = el.documentElement.getElementsByTagName(tagImg);
                    else if (el.ownerDocument.documentElement.getElementsByTagName) imageElements = el.ownerDocument.documentElement.getElementsByTagName(tagImg);
                var img;
                if (imageElements && imageElements.length > 0) var d = 0;
                for (var i = 0; i < imageElements.length && d < Math.max(1, imageElements.length * factor); i++) {
                    img = imageElements[i];
                    if (img.getAttribute(attrName)) {
                        img.src = img.getAttribute(attrName);
                        img.removeAttribute(attrName);
                        d++
                    }
                }
            }

            function reportStats() {
                if (!parallel || !that.sourceFrame) {
                    var b = [];
                    b.push("svc=" + encodeURIComponent(config.service));
                    b.push("loc=" + encodeURIComponent(config.locale));
                    b.push("ref=" + encodeURIComponent(config.ref));
                    b.push("from=" + encodeURIComponent(langFrom ? langFrom : emptyString));
                    b.push("to=" + encodeURIComponent(langTo ? langTo : emptyString));
                    b.push("dtc=" + encodeURIComponent(that.detectedLanguage ? that.detectedLanguage : emptyString));
                    var d = textsWithoutTag.join(" | "),
                        e = domUtils.getStringByteCount(d);
                    if (e > 128) d = d.substr(0, Math.round(d.length * 128 / e)) + "...";
                    b.push("text=" + toEncodedString(d ? d : emptyString));
                    for (var c = 0; c < stats.length && c < 64; ++c) b.push(c.toString() + "=" + [stats[c].r, stats[c].c, stats[c].s, stats[c].e, stats[c].l].join("_"));
                    sendRequest("/sync.ashx?" + b.join("&"));
                    textsWithoutTag = [];
                    stats = []
                }
            }

            function shouldTranslate(node) {
                if (node.nodeType == 3) return trueValue;
                if (node.nodeType != 1) return falseValue;
                if (!node.hasChildNodes() && !isDocumentAccessible(node)) return falseValue;
                var c;
                try {
                    c = getTranslateToggleValueForNode(node)
                } catch (d) {
                    if (config.debug);
                }
                if (c == ToggleEnum.Off || c == ToggleEnum.Skip) return falseValue;
                if (tagNamesToSkipTranslate[node.nodeName.toLowerCase()]) return falseValue;
                if (!node.innerHTML || !notEmptyString(node.innerHTML)) return falseValue;
                return trueValue
            }

            function isTextOrInlineNode(node) {
                if (node.nodeType == 3) return trueValue;
                else if (node.nodeType != 1 || node._mstChunk || domUtils.getStyleValue(node, "display").toLowerCase() != strInline || domUtils.getStyleValue(node, strPosition).toLowerCase() != "static" || tagNamesToIgnoreText[node.nodeName.toLowerCase()]) return falseValue;
                for (var b = 0; b < node.childNodes.length; ++b)
                    if (!isTextOrInlineNode(node.childNodes[b])) return falseValue;
                return trueValue
            }

            function isDocumentAccessible(b) {
                try {
                    if (b.contentWindow && b.contentWindow.document && b.contentWindow.document.documentElement) return trueValue
                } catch (c) {
                    if (config.debug);
                }
                return falseValue
            }

            function getTranslateToggleValueForNode(node) {
                var result = ToggleEnum.Inherit;
                if (!node.getAttribute) return result;
                for (var attrName in attributesForToggle) {
                    var attrValue = getAttribute(node, attrName);

                    if (attrValue != nullValue) {
                        var valueToggleMap = attributesForToggle[attrName],
                            toggle = valueToggleMap[attrValue.toString().toLowerCase()];
                        result = toggle || result;
                        if (result == ToggleEnum.Off || result == ToggleEnum.Skip) return result
                    }
                }
                var className = getAttribute(node, "class") || getAttribute(node, "className");
                if (className != nullValue) {
                    var classes = className.toString().split(space);
                    for (var i = 0; i < classes.length; i++) {
                        var klass = classes[i],
                            toggle = classNamesForToggle[klass.toLowerCase()];
                        result = toggle || result;
                        if (result == ToggleEnum.Off) return result
                    }
                }
                return result
            }

            function getAttribute(c, b) {
                try {
                    return c.getAttribute(b) || c[b]
                } catch (d) {
                    if (config.debug);
                    return nullValue
                }
            }

            function shouldTranslatePage(el) {
                var result = ToggleEnum.Inherit,
                    metas = el.ownerDocument.getElementsByTagName("meta");
                for (var d = 0; d < metas.length; d++) {
                    var meta = metas[d],
                        metaName = getAttribute(meta, "name");
                    if (metaName != nullValue)
                        if (metaForToggle[metaName.toString().toLowerCase()] != nullValue) {
                            var item = metaForToggle[metaName.toString().toLowerCase()];
                            for (var attrName in item) {
                                var attr = getAttribute(meta, attrName);
                                if (attr != nullValue) {
                                    attr = attr.toString().toLowerCase();
                                    var toggle = item[attrName][attr];
                                    if (toggle != nullValue) {
                                        result = toggle || result;
                                        if (result == ToggleEnum.Off) return result
                                    }
                                    if (attr.match(/^notranslateclasses\s/i)) {
                                        var i = attr.split(/\s+/);
                                        for (var e = 1; e < i.length; e++) classNamesForToggle[i[e]] = ToggleEnum.Off
                                    }
                                }
                            }
                        }
                }
                return result
            }

            // Prepare nodes that are ready for translation
            function cleanupNodesAndPrepareHtmlForThem(nodes, nodePath) {
                trimNodesCollapsableToEmptyString(nodes);

                var parentNode = getOrCreateExclusiveParent(nodes);
                if (parentNode && shouldTranslate(parentNode)) {
                    parentNode._mstHash = hashStringToNumber(nodePath);
                    // In case hash function gets collision, try to get a unique hash number
                    while (that[parentNode._mstHash])++parentNode._mstHash;
                    that[parentNode._mstHash] = parentNode;
                    if (supportParallel && !that.sourceFrame) {
                        if (supportParallel && parallel && parallel[parentNode._mstHash]) {
                            var htmlSkeleton = htmlSkeletonForTranslation(parallel[parentNode._mstHash], tempTagPrefix),
                                htmlSkeletonForCurrent = htmlSkeletonForTranslation(parentNode, tempTagPrefix);
                            if (htmlSkeleton.split(/<b\d+/g).length != htmlSkeletonForCurrent.split(/<b\d+/g).length) {
                                if (config.debug);
                                return
                            }
                        } else {
                            if (config.debug);
                            return
                        }
                    } else {
                        var htmlSkeleton = htmlSkeletonForTranslation(parentNode, tempTagPrefix);
                    }
                        
                    if (notEmptyString(htmlSkeleton)) {
                        accumulatedHTMLSkeletonCharCount += domUtils.getStringByteCount(htmlSkeleton);
                        nodesToTranslate.push(parentNode);
                        htmlSkeletons.push(htmlSkeleton)
                    }
                }
            }

            // Given a list of nodes that share the same parent node, get the parent node or
            // create a new parent node that exclusively contains the given nodes
            function getOrCreateExclusiveParent(nodes) {
                var result = nullValue;
                if (nodes.length > 0)
                    if (nodes.length == 1 && nodes[0].nodeType == 1) result = nodes.pop();
                    else if (nodes[0].parentNode && nodes.length == nodes[0].parentNode.childNodes.length) {
                        result = nodes.pop().parentNode;
                        while (nodes.length > 0) nodes.pop()
                    } else {
                        result = nodes[0].ownerDocument.createElement(strFont);
                        result._mstChunk = trueValue;
                        if (nodes[0].parentNode) nodes[0].parentNode.insertBefore(result, nodes[0]);
                        while (nodes.length > 0) result.appendChild(nodes.shift())
                    }
                return result
            }

            // Given a list of nodes in the same parent node, both the leading and trailing empty nodes
            // (or with just spaces) contribute no characters into the extracted text, so they could be removed
            function trimNodesCollapsableToEmptyString(nodes) {
                var c = trueValue;
                while (c) {
                    c = falseValue;
                    if (nodes.length == 1 && !shouldTranslate(nodes[0])) return;
                    if (nodes.length == 1 && nodes[0].nodeType == 1 && nodes[0].childNodes.length > 0) {
                        var e = nodes.pop();
                        for (var d = 0; d < e.childNodes.length; d++) nodes.push(e.childNodes[d]);
                        c = trueValue
                    }
                    if (nodes.length > 0)
                        if (!isBlockNodeOrWithValidText(nodes[0])) {
                            var b = nodes.shift();
                            if (b.nodeType == 3 && !b.nodeValue) b.parentNode.removeChild(b);
                            c = trueValue
                        } else if (!isBlockNodeOrWithValidText(nodes[nodes.length - 1])) {
                            var b = nodes.pop();
                            if (b.nodeType == 3 && !b.nodeValue) b.parentNode.removeChild(b);
                            c = trueValue
                        }
                }
                if (nodes.length == 1 && !isBlockNodeOrWithValidText(nodes[0])) nodes.pop()
            }

            function notEmptyString(a) {
                return !!(a.match(/[a-zA-Z0-9\xC0-\uFFFF]/) || isParallelSupported && a.replace(/[\r\n\s]/g, emptyString).length > 0)
            }

            function isBlockNodeOrWithValidText(node) {
                if (!isTextOrInlineNode(node)) return trueValue;
                var str = emptyString;
                switch (node.nodeType) {
                    case 1:
                        str = node.innerText || node.textContent || emptyString;
                        break;
                    case 3:
                        str = node.nodeValue || emptyString
                }
                if (str.match(/^[\s\xA0]*$/)) return falseValue;
                if (notEmptyString(str)) return trueValue;
                return falseValue
            }

            // Create a HTML to copy the structure of the given node, excluding all nodes that should not be translated
            // I think the result HTML is for translation to fit in
            function htmlSkeletonForTranslation(node, tagPrefix, level) {
                level = level ? level : 1;
                if (level > 9) throw new Error(errorMessageForTooDeep);
                var parts = [],
                    translationIndexInSameLevel = 0,
                    m = 0;
                for (var i = 0; i < node.childNodes.length; ++i) switch (node.childNodes[i].nodeType) {
                    case 1:
                        var tag = tagPrefix + level.toString() + translationIndexInSameLevel.toString();
                        try {
                            var toggle = getTranslateToggleValueForNode(node.childNodes[i])
                        } catch (k) {
                            if (config.debug);
                        }
                        if (toggle == ToggleEnum.Skip && node.childNodes[i].previousSibling && node.childNodes[i].previousSibling.nodeType == 1) node.childNodes[i].previousSibling._mstSkipNext = translationIndexInSameLevel;
                        else if (toggle == ToggleEnum.Skip && node.childNodes[i].nextSibling && node.childNodes[i].nextSibling.nodeType == 1) node.childNodes[i].nextSibling._mstSkipPrev = translationIndexInSameLevel;
                        else {
                            parts.push("<");
                            parts.push(tag);
                            parts.push(gtSign);
                            if (toggle != ToggleEnum.Skip) parts.push(htmlSkeletonForTranslation(node.childNodes[i], tagPrefix, level + 1));
                            parts.push("</");
                            parts.push(tag);
                            parts.push(gtSign)
                        }
                        
                        ++translationIndexInSameLevel;
                        break;
                    case 3:
                        if (node.childNodes[i].nodeValue) {
                            var h = node.childNodes[i].nodeValue.replace(/[\s\xA0]+/g, space);
                            if (h != node.childNodes[i].nodeValue) node.replaceChild(node.ownerDocument.createTextNode(h), node.childNodes[i]);
                            parts.push(encodeHtmlEntities(h))
                        }
                }
                return parts.join(emptyString)
            }

            function renderTranslatedText(el, translatedText, tagPrefix, textSentenceLengths, createdNodes, tagLevel) {
                if (!tagLevel) tagLevel = 1;
                if (tagLevel > 9) throw new Error(errorMessageForTooDeep);
                var childElements = [];
                for (var i = 0; i < el.childNodes.length; ++i) {
                    if (el.childNodes[i].parentNode != el) el.appendChild(el.childNodes[i--]);
                    if (el.childNodes[i].nodeType == 1) childElements.push(el.childNodes[i])
                }
                var currentOffset = 0,
                    childIndex = 0;
                translatedText.replace(new RegExp("<" + tagPrefix + tagLevel + "(\\d+)>(.*)<\\/" + tagPrefix + tagLevel + "\\1>", "gi"), function (matchedText, strChildElementIndex, innerHtml, offsetInTranslatedText) {
                    while (textSentenceLengths && textSentenceLengths[0] <= offsetInTranslatedText - currentOffset) {
                        var textNode = el.ownerDocument.createTextNode(textFromHtml(translatedText.substr(currentOffset, textSentenceLengths[0])));
                        createdNodes[createdNodes.length - 1].push(textNode);
                        createdNodes.push([]);
                        el.insertBefore(textNode, childIndex < el.childNodes.length ? el.childNodes[childIndex] : nullValue);
                        ++childIndex;
                        currentOffset += textSentenceLengths[0];
                        textSentenceLengths.shift()
                    }
                    if (currentOffset < offsetInTranslatedText) {
                        var textNode = el.ownerDocument.createTextNode(textFromHtml(translatedText.substr(currentOffset, offsetInTranslatedText - currentOffset)));
                        if (textSentenceLengths) {
                            createdNodes[createdNodes.length - 1].push(textNode);
                            textSentenceLengths[0] -= offsetInTranslatedText - currentOffset
                        }
                        el.insertBefore(textNode, childIndex < el.childNodes.length ? el.childNodes[childIndex] : nullValue);
                        ++childIndex;
                        currentOffset = offsetInTranslatedText
                    }
                    var childElement = childElements[parseInt(strChildElementIndex)];
                    if (childElement != el.childNodes[childIndex]) el.insertBefore(childElement, el.childNodes[childIndex]);
                    ++childIndex;
                    if (typeof childElement._mstSkipPrev == numberTypeString) {
                        var elToSkip = childElements[childElement._mstSkipPrev];
                        el.insertBefore(elToSkip, childElement);
                        ++childIndex;
                        if (textSentenceLengths) createdNodes[createdNodes.length - 1].push(elToSkip);
                        childElement._mstSkipPrev = emptyString
                    }
                    if (shouldTranslate(childElement))
                        if (textSentenceLengths)
                            if (textSentenceLengths[0] < matchedText.length) {
                                createdNodes.push([]);
                                textSentenceLengths[0] -= 4 + strChildElementIndex.length;
                                renderTranslatedText(childElement, innerHtml, tagPrefix, textSentenceLengths, createdNodes, tagLevel + 1);
                                textSentenceLengths[0] -= 5 + strChildElementIndex.length
                            } else {
                                createdNodes[createdNodes.length - 1].push(childElement);
                                renderTranslatedText(childElement, innerHtml, tagPrefix, nullValue, nullValue, tagLevel + 1);
                                textSentenceLengths[0] -= matchedText.length
                            } else renderTranslatedText(childElement, innerHtml, tagPrefix, nullValue, nullValue, tagLevel + 1);
                    else if (textSentenceLengths) {
                        if (textSentenceLengths[0] < matchedText.length) createdNodes.push([childElement], []);
                        else createdNodes[createdNodes.length - 1].push(childElement);
                        for (var len = matchedText.length; len > textSentenceLengths[0]; textSentenceLengths.shift()) len -= textSentenceLengths[0];
                        textSentenceLengths[0] -= len
                    }
                    if (typeof childElement._mstSkipNext == numberTypeString) {
                        var r = childElements[childElement._mstSkipNext];
                        el.insertBefore(r, childElement.nextSibling);
                        ++childIndex;
                        if (textSentenceLengths) createdNodes[createdNodes.length - 1].push(r);
                        childElement._mstSkipNext = emptyString
                    }
                    currentOffset += matchedText.length
                });
                while (textSentenceLengths && textSentenceLengths[0] <= translatedText.length - currentOffset) {
                    var textNode = el.ownerDocument.createTextNode(textFromHtml(translatedText.substr(currentOffset, textSentenceLengths[0])));
                    createdNodes[createdNodes.length - 1].push(textNode);
                    createdNodes.push([]);
                    el.insertBefore(textNode, childIndex < el.childNodes.length ? el.childNodes[childIndex] : nullValue);
                    ++childIndex;
                    currentOffset += textSentenceLengths[0];
                    textSentenceLengths.shift()
                }
                if (currentOffset < translatedText.length) {
                    var textNode = el.ownerDocument.createTextNode(textFromHtml(translatedText.substr(currentOffset, translatedText.length - currentOffset)));
                    el.insertBefore(textNode, childIndex < el.childNodes.length ? el.childNodes[childIndex] : nullValue);
                    ++childIndex;
                    if (textSentenceLengths) {
                        createdNodes[createdNodes.length - 1].push(textNode);
                        textSentenceLengths[0] -= translatedText.length - currentOffset
                    }
                }
                while (childIndex < el.childNodes.length) el.removeChild(el.childNodes[childIndex]);
                if (createdNodes && createdNodes[createdNodes.length - 1].length) createdNodes.push([])
            }

            function encodeHtmlEntities(b) {
                if (config.service == serviceLP && Default.Globals.PhraseAlignment) return b.replace(/[\s\xA0]/g, space);
                else return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\s\xA0]/g, space)
            }

            function textFromHtml(b) {
                if (config.service == serviceLP && Default.Globals.PhraseAlignment) return b;
                else return b.replace(/<\w+>/g, emptyString).replace(/<\/\w+>/g, emptyString).replace(/&gt;/gi, gtSign).replace(/&lt;/gi, "<").replace(/&amp;/gi, "&")
            }

            function hashStringToNumber(str) {
                str = str.replace(/[\s\xA0]/g, emptyString);
                var result = 0;
                for (var i = 0; i < str.length; ++i) result += str.charCodeAt(i) * 13 * (i + 7);
                return result
            }

            function translatePreparedNodesAndTexts() {
                var doms = [],
                    texts = [],
                    requestTextLength = 0,
                    textLength = domUtils.getStringByteCount(htmlSkeletons[0]);
                if (batchCandidates.length > 0 && !isTranslating) {
                    isTranslating = trueValue;
                    var item = batchCandidates.shift();
                    textsOfLatestBatch = item.txt;
                    requestTextLength = item.length;
                    domsOfLatestBatch = item.dom;
                    var text = textsOfLatestBatch[0],
                        maxTextLen = Math.floor(text.length * gb / requestTextLength);
                    textsOfLatestBatch = [text.substr(0, maxTextLen), text];
                    while (domUtils.getStringByteCount(textsOfLatestBatch[0]) > gb && maxTextLen > fourHundred) {
                        maxTextLen = Math.floor(maxTextLen / 2);
                        textsOfLatestBatch = [text.substr(0, maxTextLen), text]
                    }
                    latestTranslatedTextAndSentenceLengths = {
                        aTxt: [],
                        aSrcSnt: [],
                        aTgtSnt: []
                    };
                    latestRequestStartTime = new Date;
                    latestRequestTextLength = textsOfLatestBatch[0].length;
                    latestRequestDomCount = 1;
                    translateRequest = config.serviceClient.TranslateArray(BFI_APPID, [textsOfLatestBatch[0]], langFrom, langTo, config.category ? {
                        Category: config.category
                    } : nullValue, onTranslateArraySuccess, onBatchError, apiTimeout);
                    Microsoft.Translator.APIRequests++;
                    return
                }
                do {
                    if (htmlSkeletons.length == 0) break;
                    if (textsWithoutTag.length && textsWithoutTag[0].length < 32 && htmlSkeletons[0].length > 32) textsWithoutTag = [];
                    textsWithoutTag.push(htmlSkeletons[0].replace(/<[^>]*>/g, space).replace(/[\s\xA0]+/g, space));
                    accumulatedHTMLSkeletonCharCount -= textLength;
                    requestTextLength += textLength;
                    accumulatedCharCount += htmlSkeletons[0].length;
                    doms.push(nodesToTranslate.shift());
                    texts.push(htmlSkeletons.shift());
                    textLength = htmlSkeletons.length > 0 ? domUtils.getStringByteCount(htmlSkeletons[0]) : 0
                } while (nodesToTranslate.length > 0 && requestTextLength < gb && requestTextLength + textLength + (texts.length + 1) * domUtils.getStringByteCount('"",') <= maxStringByteCount);

                if (requestTextLength > maxStringByteCount && (!parallel || !that.sourceFrame)) {
                    batchCandidates.push({
                        dom: doms,
                        txt: texts,
                        length: requestTextLength
                    });
                    traverseDomToTranslate()
                } else if (requestTextLength > 0 && (!parallel || !that.sourceFrame)) {
                    latestRequestStartTime = new Date;
                    latestRequestTextLength = requestTextLength;
                    latestRequestDomCount = texts.length;
                    successListeners[batchCursor] = function (a) {
                        return function (b) {
                            onBatchSuccess(b, a)
                        }
                    }(batchCursor);
                    errorListeners[batchCursor] = function (a) {
                        return function (b) {
                            onBatchError(b, a)
                        }
                    }(batchCursor);
                    batches[batchCursor] = {
                        Dom: doms,
                        Txt: texts
                    };
                    batches.size++;
                    if (config.service == serviceLP) translateRequest = config.serviceClient.TranslateArray2(BFI_APPID, texts, langFrom, langTo, config.category ? {
                        Category: config.category
                    } : nullValue, successListeners[batchCursor], errorListeners[batchCursor], apiTimeout);
                    else translateRequest = config.serviceClient.TranslateArray(BFI_APPID, texts, langFrom, langTo, config.category ? {
                        Category: config.category
                    } : nullValue, successListeners[batchCursor], errorListeners[batchCursor], apiTimeout);
                    batchCursor++;
                    Microsoft.Translator.APIRequests++;
                    adjustBandwidhAccordingToBatchesInProgress();
                    if (batches.size < maxBatches)
                        if (isParallelSupported && isSourceFrame) traverseDomToTranslate();
                        else setTimeout(function () {
                            traverseDomToTranslate()
                        }, timeoutForCheck)
                } else if (batches.size < maxBatches)
                    if (isParallelSupported && isSourceFrame) traverseDomToTranslate();
                    else setTimeout(function () {
                        traverseDomToTranslate()
                    }, timeoutForCheck)
            }

            function onTranslateArraySuccess(translations) {
                if (destroyed) return;
                if (!isTranslating) return;
                isTranslating = falseValue;
                Microsoft.Translator.APIResponses++;
                that.detectedLanguage = translations && translations[0] && translations[0].From ? translations[0].From.toLowerCase() : that.detectedLanguage;
                var translatedText = translations[0].TranslatedText,
                    originalTextSentenceLengths = translations[0].OriginalTextSentenceLengths,
                    translatedTextSentenceLengths = translations[0].TranslatedTextSentenceLengths,
                    orignalTextOffset = 0,
                    translatedTextOffset = 0;
                if (!(translatedText && originalTextSentenceLengths && translatedTextSentenceLengths)) {
                    isTranslating = trueValue;
                    onBatchError(translations[0].Error);
                    return
                }
                collectStats(translations);
                for (var el = 0; el < (textsOfLatestBatch.length > 1 ? Math.max(originalTextSentenceLengths.length - 2, 1) : originalTextSentenceLengths.length); ++el) {
                    latestTranslatedTextAndSentenceLengths.aTxt.push(translatedText.substr(translatedTextOffset, translatedTextSentenceLengths[el]));
                    latestTranslatedTextAndSentenceLengths.aSrcSnt.push(originalTextSentenceLengths[el]);
                    latestTranslatedTextAndSentenceLengths.aTgtSnt.push(translatedTextSentenceLengths[el]);
                    orignalTextOffset += originalTextSentenceLengths[el];
                    translatedTextOffset += translatedTextSentenceLengths[el]
                }
                if (textsOfLatestBatch.length > 1)
                    if (originalTextSentenceLengths.length < 1) traverseDomToTranslate();
                    else {
                        var c = textsOfLatestBatch[1].substr(orignalTextOffset),
                            r = domUtils.getStringByteCount(c),
                            e = Math.floor(c.length * gb / r);
                        textsOfLatestBatch = e > gb ? [c.substr(0, e), c] : [c];
                        while (domUtils.getStringByteCount(textsOfLatestBatch[0]) > gb && e > fourHundred) {
                            e = Math.floor(e / 2);
                            textsOfLatestBatch = [c.substr(0, e), c]
                        }
                        if (isTranslating) return;
                        isTranslating = trueValue;
                        latestRequestStartTime = new Date;
                        latestRequestTextLength = textsOfLatestBatch[0].length;
                        latestRequestDomCount = 1;
                        translateRequest = config.serviceClient.TranslateArray(BFI_APPID, [textsOfLatestBatch[0]], langFrom, langTo, nullValue, onTranslateArraySuccess, onBatchError, apiTimeout)
                    } else {
                    var el = domsOfLatestBatch.shift(),
                        s = from || that.detectedLanguage;
                    if (!isSourceFrame && !isParallelSupported) {
                        directionStyles = getDirectionRelatedStyles(to);
                        adjustAlign(el)
                    }
                    try {
                        translateElement(el, htmlSkeletonForTranslation(el, tempTagPrefix), latestTranslatedTextAndSentenceLengths.aTxt.join(emptyString), latestTranslatedTextAndSentenceLengths.aSrcSnt, latestTranslatedTextAndSentenceLengths.aTgtSnt)
                    } catch (p) {
                        if (config.debug);
                    }
                    if (batches.size < maxBatches)
                        if (isParallelSupported && isSourceFrame) traverseDomToTranslate();
                        else setTimeout(function () {
                            traverseDomToTranslate()
                        }, timeoutForCheck)
                }
            }

            function onBatchSuccess(translations, batchIndex) {
                if (destroyed) return;
                Microsoft.Translator.APIResponses++;
                if (batches[batchIndex] && translations.length != batches[batchIndex].Dom.length) {
                    onBatchError("Inconsistent Data", batchIndex);
                    return
                }
                collectStats(translations);
                that.detectedLanguage = translations && translations[0] && translations[0].From ? translations[0].From.toLowerCase() : that.detectedLanguage;
                var i = from || that.detectedLanguage;
                if (!isSourceFrame && !isParallelSupported) {
                    directionStyles = getDirectionRelatedStyles(to);
                    adjustAlign(batches[batchIndex].Dom)
                }
                var textForAlignment = emptyString;
                for (var dom = batches[batchIndex].Dom.shift(), text = batches[batchIndex].Txt.shift(), translation = translations.shift(); dom && translation; dom = batches[batchIndex].Dom.shift(), (text = batches[batchIndex].Txt.shift(), translation = translations.shift())) {
                    if (translation.Alignment) {
                        if (textForAlignment.length != 0) textForAlignment += "|";
                        textForAlignment += translation.Alignment
                    }
                    try {
                        translateElement(dom, text, translation.TranslatedText, translation.OriginalTextSentenceLengths, translation.TranslatedTextSentenceLengths)
                    } catch (h) {
                        if (config.debug);
                    }
                }
                if (textForAlignment.length != 0) dom.setAttribute("mstAlign", textForAlignment);
                delete batches[batchIndex];
                batches.size--;
                if (batches.size < maxBatches)
                    if (isParallelSupported && isSourceFrame) traverseDomToTranslate();
                    else setTimeout(function () {
                        traverseDomToTranslate()
                    }, timeoutForCheck)
            }

            function adjustBandwidhAccordingToBatchesInProgress() {
                if (batchCursor > thresholdToStopBatch) {
                    maxBatches = 1;
                    timeoutForCheck = 500
                } else if (maxBatches > 2 && batchCursor % cycleToReduceMaxBatches == 0) {
                    maxBatches = maxBatches - parseInt(maxBatches / 3);
                    timeoutForCheck += 10;
                    activateImages(.1)
                }
            }

            function onBatchError(error, batchIndex) {
                if (batchIndex) {
                    delete batches[batchIndex];
                    batches.size--
                }
                if (destroyed) return;
                if (config.debug);
                Microsoft.Translator.APIResponses++;
                collectStats(nullValue);
                if (localOnError) localOnError(error);
                if (batches.size < maxBatches) traverseDomToTranslate()
            }

            function collectStats(translations) {
                var now = new Date,
                    duration = now.getTime() - latestRequestStartTime.getTime();
                if (duration > 13000) duration = 13000;
                var translatedDomCount = 0;
                if (translations)
                    for (var d = 0; d < translations.length; ++d) translatedDomCount += translations[d].OriginalTextSentenceLengths.length;
                else translatedDomCount = latestRequestDomCount;
                stats.push({
                    r: translations ? "S" : "E",
                    c: latestRequestTextLength,
                    s: translatedDomCount,
                    e: latestRequestDomCount,
                    l: duration
                })
            }

            var translateElement = self.translateElement = function (el, htmlSkeleton, translatedText, originalTextSentenceLengths, translatedTextSentenceLengths) {
                el._mstSrcHtml = el.innerHTML;
                if (el.nodeName.toLowerCase() == "option") {
                    renderTranslatedText(el, translatedText, tempTagPrefix, nullValue, nullValue);
                    return
                }
                var elForTranslation, hashNumber = el._mstHash;
                if (that.sourceFrame) elForTranslation = el.cloneNode(trueValue);
                else {
                    elForTranslation = el;
                    el = elForTranslation.cloneNode(trueValue)
                }
                var copyOfOriginalTextSentenceLengths = originalTextSentenceLengths ? originalTextSentenceLengths.slice(0) : [],
                    copyOfTranslatedTextSentenceLengths = translatedTextSentenceLengths ? translatedTextSentenceLengths.slice(0) : [],
                    createdNodesForOriginalText = [
                        []
                    ],
                    createdNodesForTranslatedText = [
                        []
                    ];
                try {
                    renderTranslatedText(el, htmlSkeleton, tempTagPrefix, copyOfOriginalTextSentenceLengths, createdNodesForOriginalText);
                    renderTranslatedText(elForTranslation, translatedText, tempTagPrefix, copyOfTranslatedTextSentenceLengths, createdNodesForTranslatedText)
                } catch (p) {
                    if (config.debug);
                }

                if (createdNodesForOriginalText.length > 2 && createdNodesForTranslatedText.length > 2) {
                    el._mstSrcHtml = el.innerHTML;
                    for (var i = 0; i < createdNodesForOriginalText.length && i < createdNodesForTranslatedText.length; ++i) recordTranslatedElementTuple(getOrCreateExclusiveParent(createdNodesForOriginalText[i]), getOrCreateExclusiveParent(createdNodesForTranslatedText[i]), hashNumber * (i + 1))
                } else recordTranslatedElementTuple(el, elForTranslation, hashNumber);
                
                if (parallel && parallel[hashNumber] && !that.sourceFrame) {
                    parallel.translateElement(parallel[hashNumber], htmlSkeleton, translatedText, originalTextSentenceLengths, translatedTextSentenceLengths)
                }
            };

            function recordTranslatedElementTuple(originalEl, translatedEl, hashNumber) {
                if (!(originalEl && translatedEl)) return;

                var originalTextContent = originalEl.textContent || originalEl.innerText || emptyString,
                    translatedTextContent = translatedEl.textContent || translatedEl.innerText || emptyString;

                if (!originalTextContent.match(/[a-zA-Z0-9\xC0-\uFFFF]/) && !translatedTextContent.match(/[a-zA-Z0-9\xC0-\uFFFF]/)) return;

                originalEl._mstHash = translatedEl._mstHash = hashNumber;

                if (isUntranslateEnabled) translatedEl._mstSrcHtml = originalEl.innerHTML;

                try {
                    originalEl.setAttribute(strLang, langFrom);
                    translatedEl.setAttribute(strLang, langTo)
                } catch (e) {
                    if (config.debug);
                }

                originalEl._mstNormalize = function () {
                    return htmlSkeletonForTranslation(originalEl, tempTagPrefix)
                };
                translatedEl._mstNormalize = function () {
                    return htmlSkeletonForTranslation(translatedEl, tempTagPrefix)
                };
                translatedEl._mstDenormalize = function (d) {
                    var clonedEl = originalEl.cloneNode(trueValue);
                    clonedEl._mstNormalize = function () {
                        return htmlSkeletonForTranslation(clonedEl, tempTagPrefix)
                    };
                    try {
                        renderTranslatedText(clonedEl, d, tempTagPrefix)
                    } catch (e) {
                        if (config.debug);
                    }
                    return clonedEl
                };

                try {
                    if (that.sourceFrame) {
                        that[hashNumber] = originalEl;
                        new Tooltip(originalEl, translatedEl, domUtils.getBlockParent(originalEl), getDirectionRelatedStyles(langTo), that, parallel)
                    } else {
                        that[hashNumber] = translatedEl;
                        new Tooltip(translatedEl, originalEl, domUtils.getBlockParent(translatedEl), getDirectionRelatedStyles(langFrom || that.detectedLanguage), that, parallel)
                    }
                } catch (i) {}

                that.transItems.push({
                    src: originalEl,
                    tgt: translatedEl
                })
            }

            function untranslate(el) {
                if (!isUntranslateEnabled) throw new Error("Untranslate feature was turned off, please consider modifying the parameter in the constructor!");
                if (el.nodeName.toLowerCase() == "frame" || el.nodeName.toLowerCase() == strIframe) try {
                    untranslate(el.contentWindow.document.documentElement)
                } catch (c) {
                    if (config.debug);
                } else {
                    if (el._mstStyle)
                        for (var key in el._mstStyle) try {
                            el.style[key] = el._mstStyle[key]
                        } catch (c) {
                            if (config.debug);
                        }
                    el._mstStyle = nullValue;
                    if (el._mstSrcHtml) {
                        el.innerHTML = el._mstSrcHtml;
                        if (el._mstTooltip) el._mstTooltip.detach()
                    } else
                        for (var d = 0; d < el.childNodes.length; ++d) try {
                            untranslate(el.childNodes[d])
                        } catch (c) {
                            if (config.debug);
                        }
                }
            }
            if (isParallelSupported && isSourceFrame) {
                traverseDomToTranslate();
                if (toolbar) toolbar.show()
            } else {
                setTimeout(traverseDomToTranslate, 0);
                if (toolbar) setTimeout(toolbar.show, 10)
            }
            return self
        }
        var Language = function () {
                function Language(b, a) {
                    this.Name = b;
                    this.Code = a
                }
                return Language
            }(),
            Links = function () {
                function Links(signInLink, signOutLink, helpLink) {
                    this.SignIn = signInLink;
                    this.SignOut = signOutLink;
                    this.Help = helpLink
                }
                return Links
            }(),
            TranslatorWidget = function () {
                var objectTypeString = "object",
                    strOnComplete = "onComplete",
                    stringTypeString = "string";

                function Widget() {
                    var userNameKey = "UserName",
                        self = this;
                    self.languageNames = [];
                    self.langLocalized = nullValue;
                    self.appId = window._mstConfig.appId;
                    self.unTranslateDelegate = nullValue;
                    self.Links = new Links(window._mstConfig["SignIn"] ? window._mstConfig["SignIn"] : emptyString, window._mstConfig["SignOut"] ? window._mstConfig["SignOut"] : emptyString, "https://go.microsoft.com/?linkid=9722454");
                    self.UserName = window._mstConfig[userNameKey] ? window._mstConfig[userNameKey] : emptyString;
                    self.languageCodes = [];
                    for (var key in window[localizedLangsKey]) self.languageCodes[self.languageCodes.length] = key
                }
                Widget.prototype.Translate = function (from, to, onProgress, onError, onComplete, onRestoreOriginal, timeout) {
                    this.TranslateElement(from, to, document.documentElement, onProgress, onError, onComplete, onRestoreOriginal, timeout, false)
                };
                Widget.prototype.TranslateElement = function (from, to, el, onProgress, onError, onComplete, onRestoreOriginal, timeout, showFloater) {
                    var self = this;

                    if (typeof el === undefinedTypeString) el = document.documentElement;
                    if (typeof showFloater === undefinedTypeString) showFloater = trueValue;

                    self.validate(from, "from", falseValue, stringTypeString);
                    self.validate(to, "to", trueValue, stringTypeString);

                    if (!self.isElement(el) && !self.isNode(el)) throw new Error("Invalid DomElement");

                    self.validate(onProgress, "onProgress", falseValue, functionTypeString);
                    self.validate(onError, "onError", falseValue, functionTypeString);
                    self.validate(onComplete, strOnComplete, falseValue, functionTypeString);
                    self.validate(onRestoreOriginal, "onRestoreOriginal", falseValue, functionTypeString);
                    self.validate(timeout, "timeOut", falseValue, numberTypeString, trueValue);
                    self.validate(showFloater, "showFloater", falseValue, "boolean");

                    var completed = falseValue;
                    self.lastToLanguage = to;

                    if (self.domTranslator != nullValue && self.domTranslator.cancel) self.domTranslator.cancel();
                    if (showFloater) uiController.Show(to);

                    var localOnSuccess = function () {
                            localOnProgress(oneHundred);
                            completed = trueValue;
                            try {
                                if (showFloater) uiController.TranslationComplete()
                            } catch (err) {
                                console.error(err)
                            }
                            try {
                                if (onComplete) onComplete()
                            } catch (err) {
                                console.error(err)
                            }
                        },
                        localOnError = function (error) {
                            try {
                                if (showFloater) uiController.TranslationError(error)
                            } catch (err) {
                                console.error(err)
                            }
                            try {
                                if (onError) onError(error)
                            } catch (err) {
                                console.error(err)
                            }
                        },
                        localOnProgress = function (progress) {
                            if (completed) return;
                            if (progress == oneHundred) completed = trueValue;
                            try {
                                if (showFloater) uiController.TranslationProgress(progress)
                            } catch (err) {
                                console.error(err)
                            }
                            try {
                                if (onProgress) onProgress(progress)
                            } catch (err) {
                                console.error(err)
                            }
                        };
                    self.domTranslator = new DOMTranslator(self.appId, el, from, to, localOnSuccess, onError, timeout, falseValue, falseValue);
                    if (self.domTranslator.addProgressEvent) self.domTranslator.addProgressEvent(localOnProgress);
                    if (onRestoreOriginal) b.unTranslateDelegate = onRestoreOriginal;
                    if (onError && timeout) {
                        var translator = self.domTranslator;
                        setTimeout(function () {
                            if (!completed) {
                                onError("Timout expired before translation could be finished");
                                if (translator.cancel) translator.cancel()
                            }
                        }, timeout)
                    }
                };
                Widget.prototype.validate = function (val, name, required, expectedType, requirePositiveNumber) {
                    var typeErrorMessage = " should be of type ";
                    if (required) {
                        if (!val) throw new Error(name + " is required");
                        if (typeof val != expectedType) throw new Error(name + typeErrorMessage + expectedType);
                    } else if (val && typeof val != expectedType) throw new Error(name + typeErrorMessage + expectedType);
                    if (expectedType == numberTypeString && requirePositiveNumber && val && val < 0) throw new Error(name + " should be a positive number");
                };
                Widget.prototype.isNode = function (val) {
                    return typeof Node === objectTypeString ? val instanceof Node : val && typeof val === objectTypeString && typeof val.nodeType === numberTypeString && typeof val.nodeName === stringTypeString
                };
                Widget.prototype.isElement = function (val) {
                    return typeof HTMLElement === objectTypeString ? val instanceof HTMLElement : val && typeof val === objectTypeString && val !== nullValue && val.nodeType === 1 && typeof val.nodeName === stringTypeString
                };
                Widget.prototype.RestoreOriginal = function () {
                    var self = this;
                    if (!self.domTranslator) throw new Error("Can not RestoreOriginal before making a translation");
                    if (self.domTranslator.cancel) self.domTranslator.cancel();
                    if (self.unTranslateDelegate) {
                        try {
                            self.unTranslateDelegate(self.lastToLanguage)
                        } catch (err) {
                            console.error(err)
                        }
                    }
                };
                Widget.prototype.GetLanguagesForTranslate = function (locale, onComplete, onError, timeout) {
                    var self = this;
                    self.validate(locale, "locale", trueValue, stringTypeString);
                    self.validate(onComplete, strOnComplete, trueValue, functionTypeString);
                    self.validate(onError, "onError", falseValue, functionTypeString);
                    self.validate(timeout, "timeOut", falseValue, numberTypeString, trueValue);

                    if (self.languageNames[locale] != nullValue) {
                        try {
                            onComplete(self.languageNames[locale])
                        } catch (err) {
                            console.error(err)
                        }
                        return
                    }

                    Microsoft.Translator.Widget.GetLanguageNamesCallBack(
                        ["Arabic","Bulgarian","Catalan","Chinese Simplified","Chinese Traditional","Czech","Danish","Dutch","English","Estonian","Finnish","French","German","Greek","Haitian Creole","Hebrew","Hindi","Hmong Daw","Hungarian","Indonesian","Italian","Japanese","Klingon","Korean","Latvian","Lithuanian","Malay","Maltese","Norwegian","Persian","Polish","Portuguese","Romanian","Russian","Slovak","Slovenian","Spanish","Swedish","Thai","Turkish","Ukrainian","Urdu","Vietnamese","Welsh"],
                        locale,
                        onComplete,
                        onError
                    );
                    //Microsoft.Translator.GetLanguageNames(b.appId, c, b.languageCodes, function (a) {
                    //                                      Microsoft.Translator.Widget.GetLanguageNamesCallBack(a, c, h, i)
                    //                                      }, i, j)
                };
                Widget.prototype.GetLanguageNamesCallBack = function (langNames, locale, onComplete, onError) {
                    if (!langNames || !langNames[0]) {
                        if (onError) onError("Invalid locale " + locale);
                        return
                    }
                    var result = [];
                    for (var i = 0; i < langNames.length; i++) result[i] = new Language(langNames[i], this.languageCodes[i]);
                    this.languageNames[locale] = result;
                    try {
                        onComplete(result)
                    } catch (err) {
                        console.error(err)
                    }
                };
                Widget.prototype.GetLanguagesForTranslateLocalized = function () {
                    var self = this;
                    if (!self.langLocalized) {
                        self.langLocalized = [];
                        for (var key in window[localizedLangsKey]) self.langLocalized[self.langLocalized.length] = new Language(window[localizedLangsKey][key], key)
                    }
                    return self.langLocalized
                };
                Widget.prototype.GetAutoDetectedLanguage = function () {
                    if (!this.domTranslator || !this.domTranslator.detectedLanguage) throw new Error("Can not return auto detected language before making a translation with 'from' parameter set to null ");
                    return this.domTranslator.detectedLanguage
                };
                return Widget
            }();
        self.Widget = new TranslatorWidget;
        var Tooltip = new function () {
                var isLocked = falseValue,
                    timeoutForShowAndHide = 600,
                    contentMinWidth = 430,
                    highlightFrontColor = "#0F0F5F",
                    highlightBackgroundColor = 'rgba(1, 233, 175, 0.5)', // "#F0F0A0",
                    r;
                return function (el, el2, parent, directionStyles, domTranslator, parallel) {
                    var mouseOutEvent = "mouseout",
                        mouseOverEvent = "mouseover",
                        self = this;

                    if (el._mstTooltip) {
                        try {
                            el._mstTooltip.detach()
                        } catch (err) {}
                    }

                    el._mstTooltip = el2._mstTooltip = self;
                    if (!parent) parent = el;

                    var shouldShow = falseValue,
                        isShown = falseValue,
                        originalFrontColor = el.style.color,
                        originalBackgroundColor = el.style.backgroundColor,
                        doc = el.ownerDocument,
                        hover = self.hover = function (event) {
                            if (isLocked) return;
                            if (domTranslator.showHighlight) {
                                var color = el.style.color;
                                try {
                                    color = "#" + Color.parse(el.style.color).toString()
                                } catch (err) {}

                                if (color != highlightFrontColor) originalFrontColor = el.style.color;

                                var bgColor = el.style.backgroundColor;
                                try {
                                    bgColor = "#" + Color.parse(el.style.backgroundColor).toString()
                                } catch (err) {}

                                if (bgColor != highlightBackgroundColor) originalBackgroundColor = el.style.backgroundColor;
                                // mate note
                                // highlighting html elements to show original text
                                //r.className = ke.getPrefix() + 'highlighted-for-original';
                                el.style.color = highlightFrontColor;
                                el.style.backgroundColor = highlightBackgroundColor;
                            }
                            if (domTranslator.showTooltips && event) {
                                shouldShow = trueValue;
                                setTimeout(tryToShow, timeoutForShowAndHide)
                            }
                            if (event && parallel && parallel[el._mstHash] && parallel[el._mstHash]._mstTooltip) parallel[el._mstHash]._mstTooltip.hover()
                        },
                        unhover = self.unhover = function (a) {
                            if (isLocked) return;
                            if (domTranslator.showHighlight) {
                                el.style.color = originalFrontColor;
                                el.style.backgroundColor = originalBackgroundColor
                                //r.className = '';
                            }
                            if (domTranslator.showTooltips && a) {
                                shouldShow = falseValue;
                                setTimeout(tryToHide, timeoutForShowAndHide)
                            }
                            if (a && parallel && parallel[el._mstHash] && parallel[el._mstHash]._mstTooltip) parallel[el._mstHash]._mstTooltip.unhover()
                        };

                    function tryToShow() {
                        if (isLocked) return;
                        if (shouldShow) show()
                    }
                    // mate note
                    // original tooltip is shown here
                    var show = self.show = function () {
                        var eb = "none 0px",
                            F = "normal",
                            fb = "0px 0px 0px 0px";

                        var db = strInlineBlock;

                        if (isShown) return;
                        else isShown = trueValue;
                        
                        if (!doc._mstTooltip) {
                            var lb = config.baseURL.substr(0, 8) + config.baseURL.substr(8).replace(/\/.*$/, staticImgPath),
                                isDirectionRightToLeft = falseValue;

                            if (languageMappings[config.locale] && languageDirs[languageMappings[config.locale]] && languageDirs[languageMappings[config.locale]] == rightToLeft) {
                                isDirectionRightToLeft = trueValue;
                            }

                            doc._mstTooltip = doc.createElement(strDiv);
                            doc._mstTooltip.translate = falseValue;
                            doc._mstTooltip.setAttribute("translate", langNorwegian);
                            doc._mstTooltip.className = ke.getPrefix() + "inline-original-tooltip";
                            doc._mstTooltip.style.display = none;
                            doc._mstTooltip.style.zIndex = maxZIndex;

                            ke.ext.util.storageUtil.requestBackgroundOption('isTrueOption', ['dark_mode'], (dark_mode) => {
                                if (dark_mode) {
                                    doc._mstTooltip.className += ' ' + ke.getPrefix() + "dark-mode";
                                }
                            });

                            chrome.runtime.sendMessage({
                                action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                                cat: 'full-page',
                                event: 'show-original-tooltip',
                                subevent: ''
                            });

                            /*h._mstTooltip.style.position = W;
                            h._mstTooltip.style.margin = fb;
                            h._mstTooltip.style.border = "2px solid #D2D2D2";
                            h._mstTooltip.style.padding = fb;
                            h._mstTooltip.style.color = "#000000";
                            h._mstTooltip.style.backgroundColor = "#E6E6E6";
                            h._mstTooltip.style.fontFamily = "Arial, Helvetica, Sans-Serif";
                            h._mstTooltip.style.fontStyle = F;
                            h._mstTooltip.style.fontVariant = F;
                            h._mstTooltip.style.fontWeight = F;
                            h._mstTooltip.style.fontSize = "12px";
                            h._mstTooltip.style.lineHeight = F;*/

                            if (!isDirectionRightToLeft) {
                                doc._mstTooltip.style.direction = leftToRight;
                                doc._mstTooltip.style.textAlign = strLeft
                            } else {
                                doc._mstTooltip.style.direction = rightToLeft;
                                doc._mstTooltip.style.textAlign = strRight
                            }

                            var divCloseButton = doc.createElement(strDiv);
                            if (!isDirectionRightToLeft) divCloseButton.style.styleFloat = divCloseButton.style.cssFloat = strRight;
                            else divCloseButton.style.styleFloat = divCloseButton.style.cssFloat = strLeft;

                            /*var j = h.createElement("a");
                            j.href = a.lpURL;
                            j.target = "_blank";
                            j.style.display = db;
                            j.style.margin = "4px 4px 0px 4px";
                            j.style.border = eb;
                            j.style.cursor = J;
                            j.style.textDecoration = C;
                            // close button
                            var V = h.createElement(t);
                            // a.imagePath is no longer valid
                            V.src = a.imagePath + "binglogo_ctf.png";
                            V.style.border = eb;
                            // Don't add the link to Bing Translator to the popover
                            // j.appendChild(V);
                            //n.appendChild(j);*/

                            doc._mstTooltip.cl = doc.createElement("a");
                            doc._mstTooltip.cl.style.display = db;
                            doc._mstTooltip.cl.className = ke.getPrefix() + 'close-original-tooltip';
                            /*h._mstTooltip.cl.style.cursor = J;
                            h._mstTooltip.cl.style.textDecoration = C;
                            h._mstTooltip.cl.style.verticalAlign = "top";
                            h._mstTooltip.cl.style.border = eb;
                            h._mstTooltip.cl.style.padding = S;*/

                            // close image inside the afore-described container 
                            /*var ib = h.createElement(t);
                            // a.imagePath is no longer valid
                            // ib.src = a.imagePath + "tooltip_close.gif";
                            ib.src = "http://az577702.vo.msecnd.net/images/cancel.png"
                            h._mstTooltip.cl.appendChild(ib);*/

                            divCloseButton.appendChild(doc._mstTooltip.cl);
                            doc._mstTooltip.appendChild(divCloseButton);
                            
                            // mate note
                            // original label
                            var divOriginalLabel = doc.createElement(strDiv);
                            divOriginalLabel.className = ke.getPrefix() + 'original-label';
                            /*m.style.margin = "4px 4px 8px 4px";
                            m.style.fontWeight = "bold";
                            m.style.fontFamily = "Segoe UI";
                            m.style.fontSize = "10px";
                            m.style.letterSpacing = "1px";
                            m.style.textTransform = "uppercase";
                            m.style.color = "#4D4D4D";*/
                            if (!domTranslator.sourceFrame) {
                                var labelText = "Original";
                                try {
                                    labelText = localizedOriginal[languageMappings[config.locale || langEnglish] || langEnglish] || labelText
                                } catch (M) {}
                            } else {
                                var labelText = "Translation";
                                try {
                                    labelText = localizedTranslation[languageMappings[config.locale || langEnglish] || langEnglish] || labelText
                                } catch (M) {}
                            }
                            divOriginalLabel.appendChild(doc.createTextNode(labelText));
                            doc._mstTooltip.appendChild(divOriginalLabel);
                            doc._mstTooltip.cp = doc.createElement(strDiv);
                            doc._mstTooltip.appendChild(doc._mstTooltip.cp);

                            // inner text layout
                            doc._mstTooltip.cb = doc.createElement("span");
                            doc._mstTooltip.cb.style.display = db;
                            doc._mstTooltip.cb.className = ke.getPrefix() + 'text-layout';
                            /*h._mstTooltip.cb.style.margin = "0px 4px 4px 4px";
                            h._mstTooltip.cb.style.fontFamily = "Arial";
                            h._mstTooltip.cb.style.fontSize = "12px";
                            h._mstTooltip.cb.style.color = "black";*/
                            doc._mstTooltip.cp.appendChild(doc._mstTooltip.cb);
                            doc.body.appendChild(doc._mstTooltip)
                        }
                        doc._mstTooltip.cl.onclick = hide;
                        doc._mstTooltip.style.width = emptyString;
                        doc._mstTooltip.cb.style.whiteSpace = "nowrap";
                        doc._mstTooltip.cb.innerHTML = emptyString;
                        doc._mstTooltip.cb.appendChild(doc.createTextNode(el2.innerText || el2.textContent));
                        doc._mstTooltip.style.display = strBlock;

                        for (var key in directionStyles) {
                            try {
                                doc._mstTooltip.cp.style[key] = directionStyles[key]
                            } catch (err) {
                                if (config.debug);
                            }
                        }

                        doc._mstTooltip.onmouseover = function () {
                            shouldShow = trueValue;
                            hover();
                            tryToShow()
                        };
                        doc._mstTooltip.onmouseout = function () {
                            shouldShow = falseValue;
                            setTimeout(tryToHide, fourHundred)
                        };

                        var docWidth = Math.max(domUtils.getVisibleWidth(doc), fourHundred),
                            scrollLeft = window.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft,
                            kb = Math.max(doc.documentElement.scrollWidth, doc.body.scrollWidth);

                        if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.showTooltip) {
                            try {
                                Microsoft.TranslatorOverride.showTooltip(el2, el, doc._mstTooltip);
                                contentMinWidth = 430
                            } catch (err) {}
                        }

                        var width = doc._mstTooltip.cb.offsetWidth + 12;
                        if (width > parent.offsetWidth) width = parent.offsetWidth;
                        if (width > docWidth - radixHex) width = docWidth - radixHex;
                        if (width < contentMinWidth) width = contentMinWidth;

                        doc._mstTooltip.style.width = width.toString() + px;
                        doc._mstTooltip.cb.style.whiteSpace = emptyString;

                        var left;

                        if (domUtils.getStyleValue(el, strDirection) == rightToLeft || domUtils.getStyleValue(el, "text-align") == strRight) {
                            left = domUtils.absXPos(el) + el.offsetWidth - doc._mstTooltip.offsetWidth;
                        } else {
                            left = domUtils.absXPos(el);
                        }

                        if (left + doc._mstTooltip.offsetWidth > domUtils.absXPos(parent) + parent.offsetWidth) {
                            left = domUtils.absXPos(parent) + parent.offsetWidth - doc._mstTooltip.offsetWidth;
                        }

                        if (left < domUtils.absXPos(parent)) {
                            left = domUtils.absXPos(parent);
                        }

                        if (domUtils.getStyleValue(el, strDirection) != rightToLeft) {
                            if (left + doc._mstTooltip.offsetWidth > docWidth + scrollLeft - 8) left = docWidth + scrollLeft - 8 - doc._mstTooltip.offsetWidth;
                            if (left < scrollLeft + 8) left = scrollLeft + 8
                        }

                        doc._mstTooltip.style.left = left + px;
                        doc._mstTooltip.style.top = Math.max(domUtils.absYPos(el) - (doc._mstTooltip.offsetHeight + 8), 8) + px
                    };

                    function tryToHide() {
                        if (isLocked) return;
                        if (!shouldShow) hide()
                    }
                    var hide = self.hide = function () {
                            setLock(falseValue);
                            if (!isShown) return;
                            else isShown = falseValue;
                            
                            if (domTranslator.showHighlight) {
                                el.style.color = originalFrontColor;
                                el.style.backgroundColor = originalBackgroundColor
                            }
                            if (doc._mstTooltip) doc._mstTooltip.style.display = none
                        },
                        setLock = self.setLock = function (val) {
                            isLocked = val
                        },
                        detach = self.detach = function () {
                            domUtils.removeEvent(el, mouseOverEvent, wrappedOnMouseover);
                            domUtils.removeEvent(el, mouseOutEvent, wrappedOnMouseout)
                        },
                        wrappedOnMouseover = domUtils.addEvent(el, mouseOverEvent, hover),
                        wrappedOnMouseout = domUtils.addEvent(el, mouseOutEvent, unhover)
                }
            },
            ub = new function (baseUrl) {
                var maxUrlLength = 1600,
                    whiteColor = "white",
                    greyColor = "#E6E6E6",
                    strSpan = "span",
                    strHidden = "hidden",
                    transPanelId = "MSTCTransPanel",
                    self = this,
                    qc = 0,
                    locale, langCodeFrom, langCodeTo, originalEl, translatedEl, $translatorCommunity, $content, $expandLink, $rootPanel, $loading, $submitting, $transPanel, $prevNextPanel, $prevLink, $nextLink, $prevCount, $nextCount, $footerPanel, $dashboardLink, $transPanelError, $transPanelErrorMsg, $okImgBtn, $helpImgBtn, jc, $approve, $approveTooltip, $reject, $rejectTooltip, $restore, $restoreTooltip, $userId, $buttonPanel, $dashboard, siteData, maxRating, imagePath, lowerAuthLang, dashboardUrl, mstTooltip, tc, locked = falseValue,
                    shouldShowDashboard = trueValue,
                    rc = 1e6,
                    uiTransItems, cursor = 0,
                    ctfLangDict, initTranslatorCommunity;
                window._mstCmCb = function () {
                    config.appId = document.getElementById("MSTCAppIdToken").innerHTML;
                    maxRating = parseInt(document.getElementById("MSTCMaxRating").innerHTML);
                    imagePath = document.getElementById("MSTCImagePath").innerHTML;
                    lowerAuthLang = document.getElementById("MSTCAuthLang").innerHTML.toLowerCase();
                    dashboardUrl = document.getElementById("MSTCDashboardUrl").href;
                    $content = document.getElementById("MSTCContent");
                    $expandLink = document.getElementById("MSTCExpandLink");
                    $rootPanel = document.getElementById("MSTCRootPanel");
                    $loading = document.getElementById("MSTCLoading");
                    $submitting = document.getElementById("MSTCSubmitting");
                    $transPanel = document.getElementById(transPanelId);
                    $prevNextPanel = document.getElementById("MSTCPrevNextPanel");
                    $prevLink = document.getElementById("MSTCPrevLink");
                    $nextLink = document.getElementById("MSTCNextLink");
                    $prevCount = document.getElementById("MSTCPrevCount");
                    $nextCount = document.getElementById("MSTCNextCount");
                    $footerPanel = document.getElementById("MSTCFooterPanel");
                    $dashboardLink = document.getElementById("MSTCDashboardLink");
                    $approve = document.getElementById("MSTCApprove");
                    $approveTooltip = document.getElementById("MSTCApproveTooltip");
                    $reject = document.getElementById("MSTCReject");
                    $rejectTooltip = document.getElementById("MSTCRejectTooltip");
                    $restore = document.getElementById("MSTCRestore");
                    $restoreTooltip = document.getElementById("MSTCRestoreTooltip");
                    $userId = document.getElementById("MSTCUserID");
                    $buttonPanel = document.getElementById("MSTCButtonPanel");
                    $transPanelError = document.getElementById("MSTCTransPanelError");
                    $transPanelErrorMsg = document.getElementById("MSTCTransPanelErrorMsg");
                    $okImgBtn = document.getElementById("MSTCOKImgBtn");
                    $helpImgBtn = document.getElementById("MSTCHelpImgBtn");

                    if ($okImgBtn) $okImgBtn.onclick = hideTransPanellError;
                    if (domUtils.isInternetExplorer() && domUtils.isQuirksMode(document)) domUtils.fixIEQuirks($translatorCommunity);

                    $prevLink.onclick = function () {
                        stepBy(-3);
                        return falseValue
                    };
                    $nextLink.onclick = function () {
                        stepBy(3);
                        return falseValue
                    };
                    if ($dashboardLink)
                        if (shouldShowDashboard) {
                            $dashboardLink.onclick = showDashboard;
                            var el = document.getElementById("MSTTDashboardLink");
                            if (el) {
                                el.parentNode.style.display = strInlineBlock;
                                el.onclick = showDashboard;
                                el.href = "javascript: " + el.title
                            }
                        } else $dashboardLink.style.visibility = strHidden;

                    if (!Microsoft) Microsoft = {};

                    Microsoft.TranslatorOverride = {
                        showTooltip: showTooltip,
                        hideTooltip: hideTooltip
                    };
                    if (maxRating >= 5) Microsoft.TranslatorOverride.showHighlight = startHighlight
                };
                var showTooltip = self.showTooltip = function (el, transEl, $container) {
                        if (!$translatorCommunity || $translatorCommunity.ownerDocument != $container.ownerDocument) return;
                        mstTooltip = el._mstTooltip;
                        langCodeFrom = el.getAttribute(strLang);
                        langCodeTo = transEl.getAttribute(strLang);
                        originalEl = el;
                        translatedEl = transEl;
                        locked = falseValue;
                        $expandLink.onclick = showTranslations;
                        $translatorCommunity.style.display = strBlock;
                        $rootPanel.style.display = none;
                        $transPanel.style.display = none;
                        hideTransPanellError();
                        $container.appendChild($translatorCommunity)
                    },
                    showTranslations = self.showTranslations = function () {
                        $expandLink.onclick = onClickExpankLink;
                        $rootPanel.style.display = strBlock;
                        $loading.style.display = strBlock;
                        $transPanel.style.display = none;
                        hideTransPanellError();
                        $prevNextPanel.style.display = none;
                        config.serviceClient.GetTranslations(config.appId, originalEl._mstNormalize(), langCodeFrom, langCodeTo, 24, config.category ? {
                            Category: config.category
                        } : nullValue, onSuccessGetTranslations, onErrorGetTranslations, sevenSeconds);
                        return falseValue
                    };

                function onSuccessGetTranslations(response) {
                    $loading.style.display = none;
                    $transPanel.innerHTML = emptyString;
                    $transPanel.style.display = strBlock;

                    if (response.Translations.length > 3) $prevNextPanel.style.display = strBlock;

                    var shouldShowButtonTooltip = maxRating >= 5 && maxRating >= Math.abs(response.Translations[0].Rating) && (!lowerAuthLang || lowerAuthLang == langCodeTo.toLowerCase()),
                        shouldHighlight = response.Translations.length > 0 && response.Translations[0].Rating >= 5,
                        shouldMouseOverOnInit = !response.NoEdit && response.Translations.length == 1,
                        reject = response.Reject,
                        firstFiveRatingTransIndex, transLength = response.Translations.length;

                    for (firstFiveRatingTransIndex = 0; firstFiveRatingTransIndex < transLength; firstFiveRatingTransIndex++)
                        if (response.Translations[firstFiveRatingTransIndex].Rating == 5) break;

                    if (firstFiveRatingTransIndex != transLength) {
                        var fiveTratingTransText = response.Translations[firstFiveRatingTransIndex].TranslatedText;

                        for (var d = 0; d < response.Translations.length; d++) {
                            if (d == firstFiveRatingTransIndex) continue;
                            if (fiveTratingTransText == response.Translations[d].TranslatedText) {
                                if (d < firstFiveRatingTransIndex) firstFiveRatingTransIndex--;
                                response.Translations.splice(d, 1);
                                d--
                            }
                        }
                    }

                    var firstLtFiveIndex = negativeOne,
                        firstGtNegFiveIndex = negativeOne;

                    for (var d = 0; d < response.Translations.length; ++d) {
                        if (firstLtFiveIndex == negativeOne && response.Translations[d].Rating < 5) firstLtFiveIndex = d;
                        if (firstLtFiveIndex != negativeOne && response.Translations[d].Rating > -5) firstGtNegFiveIndex = d
                    }
                    if (firstLtFiveIndex >= 0 && firstGtNegFiveIndex > firstLtFiveIndex)
                        for (var d = firstLtFiveIndex; d < firstGtNegFiveIndex; ++d)
                            for (var i = d + 1; i <= firstGtNegFiveIndex; ++i)
                                if (response.Translations[d].Count < response.Translations[i].Count) {
                                    var t = response.Translations[d];
                                    response.Translations[d] = response.Translations[i];
                                    response.Translations[i] = t
                                }
                    uiTransItems = [];

                    while (response.Translations.length > 0) {
                        var transItem = response.Translations.shift();
                        try {
                            uiTransItems.push(new TranslationItemUI(transItem, $transPanel, shouldShowButtonTooltip, shouldHighlight, shouldMouseOverOnInit, reject))
                        } catch (err) {
                            if (config.debug);
                            continue
                        }
                        if (shouldHighlight) shouldHighlight = falseValue
                    }
                    if (response.Hover && uiTransItems.length && uiTransItems[0].hover) uiTransItems[0].hover();
                    cursor = 0;
                    stepBy();
                    if (document._mstTooltip && (document._mstTooltip.style.display == none || $translatorCommunity.style.display == none)) hideTooltip();
                    return uiTransItems.slice(0)
                }

                function showError($container, errorMsg) {
                    $transPanelErrorMsg.textContent = $transPanelErrorMsg.innerText = errorMsg;
                    $transPanelError.style.width = $container.offsetWidth - 20 + px;
                    $transPanelError.style.height = $container.offsetHeight + px;
                    $transPanelError.style.left = $container.offsetLeft + px;
                    $transPanelError.style.top = $container.offsetTop + px;
                    $transPanelError.style.display = emptyString
                }

                function hideTransPanellError() {
                    $transPanelError.style.display = none
                }

                function onErrorGetTranslations() {
                    if (config.debug);
                    onClickExpankLink()
                }

                function onClickExpankLink() {
                    locked = falseValue;
                    mstTooltip.setLock(falseValue);
                    $expandLink.onclick = showTranslations;
                    $translatorCommunity.style.display = strBlock;
                    $rootPanel.style.display = none;
                    $transPanel.style.display = none;
                    hideTransPanellError();
                    return falseValue
                }

                function stepBy(delta) {
                    if (locked) return falseValue;

                    if (!delta) cursor = 0;
                    else cursor += delta;

                    if (cursor < 0) cursor = 0;
                    else if (cursor >= uiTransItems.length) cursor -= 3;

                    mstTooltip.setLock(trueValue);

                    for (var a = 0; a < uiTransItems.length; ++a) {
                        if (a >= cursor && a < cursor + 3) uiTransItems[a].panel.style.display = strBlock;
                        else uiTransItems[a].panel.style.display = none;
                    }

                    var prevCount = cursor,
                        nextCount = Math.max(uiTransItems.length - (cursor + 3), 0);

                    $prevCount.innerHTML = "(" + prevCount.toString() + ")";
                    $nextCount.innerHTML = "(" + nextCount.toString() + ")";

                    if (prevCount > 0) {
                        $prevLink.style.color = "#59F";
                        $prevCount.style.display = emptyString
                    } else {
                        $prevLink.style.color = "#999";
                        $prevCount.style.display = none
                    } if (nextCount > 0) {
                        $nextLink.style.color = "#59F";
                        $nextCount.style.display = emptyString
                    } else {
                        $nextLink.style.color = "#999";
                        $nextCount.style.display = none
                    }

                    setTimeout(function () {
                        mstTooltip.setLock(falseValue)
                    }, 500)
                }

                function TranslationItemUI(transItem, $container, shouldShowButtonTooltip, shouldSetcolor, shouldMouseOverOnInit, reject) {
                    var cancelButtonClassName = "MSTCCancelButton",
                        submitButtonClassName = "MSTCSubmitButton",
                        reportButtonClassName = "MSTCReportButton",
                        selectButtonClassName = "MSTCSelectButton",
                        editButtonClassName = "MSTCEditButton",
                        marginForLeftToRight = "4px 1px 0px 3px",
                        marginForRightToLeft = "4px 3px 0px 1px",
                        badgeGifName = "ctfbadge.gif",
                        self = this,
                        $panel = self.panel = document.createElement(strDiv);

                    $panel.className = transPanelId;
                    $container.appendChild($panel);

                    transItem.OriginalText = originalEl._mstNormalize();

                    var hb = translatedEl._mstDenormalize(transItem.TranslatedText),
                        $transBox = document.createElement(strDiv);

                    $transBox.className = "MSTCTransBox";
                    if (shouldSetcolor) $transBox.style.color = "#009345";

                    $transBox.appendChild(document.createTextNode(hb.innerText || hb.textContent));
                    $panel.appendChild($transBox);

                    var $statsTab = document.createElement(strDiv);
                    $statsTab.className = "MSTCStatsTab";
                    $panel.insertBefore($statsTab, $panel.firstChild);

                    var $voteCount = document.createElement(strDiv);
                    $voteCount.className = "MSTCVoteCount";
                    $statsTab.appendChild($voteCount);

                    if (transItem.Rating > 5) {
                        var $container1 = document.createElement(strSpan),
                            $badgeImg = document.createElement(tagImg);

                        $badgeImg.src = config.imagePath + badgeGifName;
                        $badgeImg.style.margin = "4px 5px 0px 5px";
                        $container1.appendChild($badgeImg);
                        $voteCount.appendChild($container1);

                        if (transItem.Rating >= 10) $container1.style.backgroundColor = "#F2C341";
                        else if (transItem.Rating >= 8) $container1.style.backgroundColor = "#B2B2B2";
                        else if (transItem.Rating >= 6) $container1.style.backgroundColor = "#8C7853"
                    } else if (transItem.Rating == 5) {
                        var $container2 = document.createElement(strSpan),
                            $fmtImg = document.createElement(tagImg);

                        $fmtImg.src = config.imagePath + "ctfmt.gif";
                        $fmtImg.style.margin = "2px 2px 0px 3px";
                        $container2.appendChild($fmtImg);
                        $voteCount.appendChild($container2)
                    } else if (transItem.Count) {
                        var $container3 = document.createElement(strSpan),
                            $font = document.createElement(strFont);

                        $font.style.display = strInlineBlock;
                        $font.appendChild(document.createTextNode(transItem.Count));
                        $container3.appendChild($font);

                        var $fmtImg = document.createElement(tagImg);
                        $fmtImg.src = config.imagePath + "ctfvotes.gif";
                        $container3.appendChild($fmtImg);
                        $voteCount.appendChild($container3);

                        if (domUtils.getStyleValue($content, strDirection) == rightToLeft) {
                            $font.style.margin = marginForRightToLeft;
                            $fmtImg.style.margin = "7px 1px 0px 3px"
                        } else {
                            $font.style.margin = marginForLeftToRight;
                            $fmtImg.style.margin = "3px 3px 0px 1px"
                        }
                    } else $statsTab.parentNode.removeChild($statsTab);
                    
                    if (transItem.Flags) {
                        var $flagCount = document.createElement(strDiv);
                        $flagCount.className = "MSTCFlagCount";
                        $flagCount.style.marginTop = "2px";
                        $statsTab.appendChild($flagCount);

                        var $onePixWidth = document.createElement(strSpan);
                        $onePixWidth.style.width = $onePixWidth.style.minWidth = "1px";
                        $onePixWidth.style.height = "19px";
                        $flagCount.appendChild($onePixWidth);

                        var $container5 = document.createElement(strSpan),
                            $font = document.createElement(strFont);
                        $font.style.display = strInlineBlock;
                        $font.appendChild(document.createTextNode(transItem.Flags));
                        $container5.appendChild($font);

                        var $flagsImg = document.createElement(tagImg);
                        $flagsImg.src = config.imagePath + "ctfflags.gif";
                        $container5.appendChild($flagsImg);
                        $flagCount.appendChild($container5);

                        if (domUtils.getStyleValue($content, strDirection) == rightToLeft) {
                            $font.style.margin = marginForRightToLeft;
                            $flagsImg.style.margin = "7px 1px 0px 2px"
                        } else {
                            $font.style.margin = marginForLeftToRight;
                            $flagsImg.style.margin = "7px 2px 0px 1px"
                        }
                    }

                    $statsTab.style.marginTop = ($panel.offsetHeight - $statsTab.offsetHeight) / 2 + px;

                    var $clonedButtonPanel = $buttonPanel.cloneNode(trueValue);
                    $clonedButtonPanel.style.visibility = strHidden;

                    $panel.insertBefore($clonedButtonPanel, $panel.firstChild);

                    if (shouldShowButtonTooltip) {
                        var editButton = new Button(findDescendantWithClassName($clonedButtonPanel, editButtonClassName)),
                            selectButton = new Button(findDescendantWithClassName($clonedButtonPanel, selectButtonClassName), $approve.innerText || $approve.textContent, $approveTooltip.innerText || $approveTooltip.textContent);

                        if (transItem.Rating > -5) var reportButton = new Button(findDescendantWithClassName($clonedButtonPanel, reportButtonClassName), $reject.innerText || $reject.textContent, $rejectTooltip.innerText || $rejectTooltip.textContent);
                        else {
                            var reportButton = new Button(findDescendantWithClassName($clonedButtonPanel, reportButtonClassName), $restore.innerText || $restore.textContent, $restoreTooltip.innerText || $restoreTooltip.textContent);
                            $transBox.style.color = "#A6A6A6"
                        }

                        var submitButton = new Button(findDescendantWithClassName($clonedButtonPanel, submitButtonClassName), nullValue, $approveTooltip.innerText || $approveTooltip.textContent),
                            cancelButton = new Button(findDescendantWithClassName($clonedButtonPanel, cancelButtonClassName));

                        selectButton.setIcon(badgeGifName);
                        submitButton.setIcon(badgeGifName)
                    } else {
                        var editButton = new Button(findDescendantWithClassName($clonedButtonPanel, editButtonClassName)),
                            selectButton = new Button(findDescendantWithClassName($clonedButtonPanel, selectButtonClassName), nullValue, nullValue, transItem.Count),
                            reportButton = new Button(findDescendantWithClassName($clonedButtonPanel, reportButtonClassName)),
                            submitButton = new Button(findDescendantWithClassName($clonedButtonPanel, submitButtonClassName)),
                            cancelButton = new Button(findDescendantWithClassName($clonedButtonPanel, cancelButtonClassName));
                    }

                    var $containerOfTransEdit, $transEdit, timer;

                    if (!reject) {
                        selectButton.hover();
                        editButton.collapse();
                        reportButton.collapse()
                    } else {
                        selectButton.collapse();
                        editButton.collapse();
                        reportButton.hover()
                    }

                    self.hover = $panel.onmouseover = function () {
                        if (locked) return;
                        $panel.className = $panel.className + " MSTCTransPanelHover";
                        $statsTab.style.visibility = strHidden;
                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                        $clonedButtonPanel.style.visibility = strVisible
                    };
                    self.unhover = $panel.onmouseout = function () {
                        if (locked) return;
                        $panel.className = $panel.className.replace(/\s+/g, " ").replace(/MSTCTransPanelHover/g, emptyString);
                        $statsTab.style.visibility = strVisible;
                        $clonedButtonPanel.style.visibility = strHidden
                    };
                    $clonedButtonPanel.onmouseover = function () {
                        if (locked) return;
                        editButton.expand();
                        selectButton.expand();
                        reportButton.expand()
                    };
                    $clonedButtonPanel.onmouseout = function () {
                        if (locked) return;
                        if (!reject) {
                            selectButton.hover();
                            editButton.collapse();
                            reportButton.collapse()
                        } else {
                            selectButton.collapse();
                            editButton.collapse();
                            reportButton.hover()
                        }
                    };
                    editButton.setCallback(function () {
                        if (locked) return falseValue;
                        locked = trueValue;
                        mstTooltip.setLock(trueValue);
                        if (!$transEdit) {
                            $containerOfTransEdit = document.createElement(strDiv);
                            $containerOfTransEdit.style.padding = "14px 4px 14px 4px";

                            $transEdit = document.createElement("textarea");
                            $transEdit.className = "MSTCTransEdit";
                            $transEdit.style.width = ($panel.offsetWidth - 116).toString() + px;
                            $transEdit.style.height = ($panel.offsetHeight - 38).toString() + px;
                            $transEdit.style.padding = fourPxPadding;
                            $transEdit.onkeypress = function (a) {
                                a = a || window.event;
                                if (a.keyCode == 13) {
                                    submitButton.doCallback();
                                    return falseValue
                                } else if (a.keyCode == 27) {
                                    cancelButton.doCallback();
                                    return falseValue
                                }
                            };
                            $containerOfTransEdit.appendChild($transEdit);
                            $panel.appendChild($containerOfTransEdit)
                        }
                        $transBox.style.display = none;
                        $containerOfTransEdit.style.display = strBlock;

                        editButton.hide();
                        selectButton.hide();
                        reportButton.hide();
                        submitButton.show();
                        cancelButton.show();
                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                        $transEdit.value = replaceHtmlTagWithLiteralTag(transItem.TranslatedText);
                        $transEdit.focus();
                        $transEdit.select();
                        return falseValue
                    });
                    editButton.setHover(function () {
                        selectButton.unhover();
                        reportButton.unhover()
                    });
                    selectButton.setCallback(function () {
                        if (locked) return falseValue;
                        editButton.hide();
                        selectButton.hide();
                        reportButton.hide();
                        submitButton.hide();
                        cancelButton.show();

                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                        $panel.style.backgroundColor = greyColor;
                        $transBox.style.display = none;
                        $panel.appendChild($submitting);
                        $submitting.style.display = strBlock;

                        locked = trueValue;
                        mstTooltip.setLock(trueValue);

                        timer = setTimeout(function () {
                            locked = falseValue;
                            hideTooltip();

                            $panel.removeChild($submitting);
                            $panel.style.backgroundColor = emptyString;
                            $transBox.style.display = strBlock;
                            $panel.onmouseout();

                            editButton.show();
                            selectButton.show();
                            reportButton.show();
                            submitButton.hide();
                            cancelButton.hide();

                            var rating = maxRating;
                            if (lowerAuthLang && lowerAuthLang != langCodeTo.toLowerCase()) rating = 2;

                            var url = getUrl(),
                                originalText = replaceHtmlTagWithLiteralB(transItem.OriginalText),
                                translatedText = replaceHtmlTagWithLiteralB(transItem.TranslatedText);

                            config.serviceClient.AddTranslation(config.appId, originalText, translatedText, langCodeFrom, langCodeTo, rating, nullValue, config.category ? config.category : nullValue, getUser(), url, function () {}, function () {}, sevenSeconds);

                            if (transItem.Callback) transItem.Callback(rating);
                            try {
                                translatedEl.innerHTML = translatedEl._mstDenormalize(transItem.TranslatedText).innerHTML
                            } catch (err) {}
                        }, 1e3);
                        return falseValue
                    });
                    selectButton.setHover(function () {
                        editButton.unhover();
                        reportButton.unhover()
                    });
                    reportButton.setCallback(function () {
                        if (locked) return falseValue;

                        editButton.hide();
                        selectButton.hide();
                        reportButton.hide();
                        submitButton.hide();
                        cancelButton.show();

                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                        $panel.style.backgroundColor = greyColor;
                        $transBox.style.display = none;
                        $panel.appendChild($submitting);
                        $submitting.style.display = strBlock;

                        locked = trueValue;
                        mstTooltip.setLock(trueValue);

                        timer = setTimeout(function () {
                            locked = falseValue;
                            mstTooltip.setLock(falseValue);

                            $panel.removeChild($submitting);
                            $transBox.style.display = strBlock;
                            $submitting.style.display = none;
                            $statsTab.style.display = none;
                            cancelButton.hide();

                            var user = getUser();

                            if (maxRating >= 5 && (!lowerAuthLang || lowerAuthLang == langCodeTo.toLowerCase())) user = "authuser";
                            var rating = maxRating;

                            if (lowerAuthLang && lowerAuthLang != langCodeTo.toLowerCase()) rating = 2;
                            else if (transItem.Rating < -5) rating = 0;

                            var url = getUrl(),
                                originalText = replaceHtmlTagWithLiteralB(transItem.OriginalText),
                                translatedText = replaceHtmlTagWithLiteralB(transItem.TranslatedText);

                            config.serviceClient.AddTranslation(config.appId, originalText, translatedText, langCodeFrom, langCodeTo, -rating, nullValue, config.category ? config.category : nullValue, user, url, function () {}, function () {}, sevenSeconds);

                            if (transItem.Callback) transItem.Callback(rating);

                            if (rating > 5 || rating == 0) {
                                transItem.Rating = -rating;
                                editButton.show();
                                selectButton.show();
                                reportButton.show();
                                $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                                if (rating == 0) {
                                    reportButton.setLabel($reject.innerText || $reject.textContent, $rejectTooltip.innerText || $rejectTooltip.textContent);
                                    $transBox.style.color = emptyString
                                } else {
                                    reportButton.setLabel($restore.innerText || $restore.textContent, $restoreTooltip.innerText || $restoreTooltip.textContent);
                                    $transBox.style.color = "#A6A6A6"
                                }
                                $panel.style.backgroundColor = emptyString
                            }
                        }, 1e3);

                        return falseValue
                    });
                    reportButton.setHover(function () {
                        editButton.unhover();
                        selectButton.unhover()
                    });
                    submitButton.setCallback(function () {
                        if (!$transEdit.value) return;
                        if (!$transEdit.value.replace(/\s/g, emptyString)) return;

                        $transBox.style.display = strBlock;
                        $containerOfTransEdit.style.display = none;

                        editButton.hide();
                        selectButton.hide();
                        reportButton.hide();
                        submitButton.hide();
                        cancelButton.show();

                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;
                        $panel.style.backgroundColor = greyColor;
                        $transBox.style.display = none;
                        $panel.appendChild($submitting);
                        $submitting.style.display = strBlock;

                        locked = trueValue;
                        mstTooltip.setLock(trueValue);

                        timer = setTimeout(function () {
                            var rating = maxRating;
                            if (lowerAuthLang && lowerAuthLang != langCodeTo.toLowerCase()) rating = 2;

                            var url = getUrl(),
                                originalText = replaceHtmlTagWithLiteralB(transItem.OriginalText),
                                translatedText = replaceHtmlTagWithLiteralB($transEdit.value);

                            config.serviceClient.AddTranslation(config.appId, originalText, translatedText, langCodeFrom, langCodeTo, rating, nullValue, config.category ? config.category : nullValue, getUser(), url, function () {
                                locked = falseValue;
                                hideTooltip();
                                $panel.removeChild($submitting);
                                $panel.style.backgroundColor = emptyString;
                                $transBox.style.display = strBlock;
                                $panel.onmouseout();
                                editButton.show();
                                selectButton.show();
                                reportButton.show();
                                submitButton.hide();
                                cancelButton.hide();
                                if (transItem.Callback) transItem.Callback(rating);
                                try {
                                    translatedEl.innerHTML = translatedEl._mstDenormalize(replaceHtmlTagWithLiteralB($transEdit.value)).innerHTML
                                } catch (a) {
                                    alert("The translation could not be displayed.  Please try again later.")
                                }
                            }, function (a) {
                                cancelButton.hide();
                                if (a.indexOf("InvalidRequest_MismatchedTags") >= 0) {
                                    showError($panel, "The translation could not be added. Please check that the tags are preserved and try again.");
                                    $panel.style.backgroundColor = emptyString;
                                    $transBox.style.display = emptyString;
                                    $submitting.style.display = none;
                                    locked = falseValue;
                                    editButton.doCallback()
                                } else {
                                    alert("The translation could not be added.  Please try again later.");
                                    hideTooltip()
                                }
                            }, sevenSeconds)
                        }, 1e3);

                        return falseValue
                    });
                    cancelButton.setCallback(function () {
                        if (timer) {
                            clearTimeout(timer);
                            timer = nullValue
                        }

                        $panel.style.backgroundColor = emptyString;
                        $transBox.style.display = strBlock;
                        if ($containerOfTransEdit) $containerOfTransEdit.style.display = none;
                        $submitting.style.display = none;

                        editButton.show();
                        selectButton.show();
                        reportButton.show();
                        submitButton.hide();
                        cancelButton.hide();

                        try {
                            $panel.removeChild($submitting)
                        } catch (err) {}

                        $clonedButtonPanel.style.marginTop = ($panel.offsetHeight - $clonedButtonPanel.offsetHeight) / 2 + px;

                        setTimeout(function () {
                            locked = falseValue;
                            mstTooltip.setLock(falseValue);
                            if (shouldMouseOverOnInit) hideTooltip()
                        }, oneHundred);

                        return falseValue
                    });

                    if (!reject) {
                        $panel.title = selectButton.tooltip;
                        $panel.onclick = function () {
                            selectButton.doCallback();
                            return falseValue
                        }
                    } else {
                        $panel.title = reportButton.tooltip;
                        $panel.onclick = function () {
                            reportButton.doCallback();
                            return falseValue
                        }
                    }
                    
                    if (shouldMouseOverOnInit) {
                        $panel.onmouseover();
                        editButton.doCallback()
                    }
                    return self
                }

                function Button(el, buttonText, tooltipText, voteCount) {
                    var self = this,
                        $root = el,
                        $buttonIcon = findDescendantWithClassName($root, "MSTCButtonIcon"),
                        $voteCountSelect = findDescendantWithClassName($root, "MSTCVoteCountSelect"),
                        $buttonImg = findDescendantWithClassName($root, "MSTCButtonImg"),
                        $buttonLabel = findDescendantWithClassName($root, "MSTCButtonLabel"),
                        buttonLabelColor = domUtils.getStyleValue($buttonLabel, "color"),
                        buttonLabelBgColor = domUtils.getStyleValue($buttonLabel, "backgroundColor"),
                        buttonImgFileExt = $buttonImg.src.match(/^(.*)(\.[^\.]*)$/)[1],
                        styleNameForBorder = domUtils.getStyleValue($content, strDirection) == rightToLeft ? "borderRightColor" : "borderLeftColor",
                        callback, onHover, onUnhover, isCallingExternalCallback = falseValue;
                    if (buttonText) {
                        $buttonLabel.innerHTML = emptyString;
                        $buttonLabel.appendChild(document.createTextNode(buttonText))
                    }
                    if (tooltipText) $root.title = tooltipText;
                    if (voteCount)
                        if (voteCount.toString().length <= 2) $voteCountSelect.appendChild(document.createTextNode(voteCount));
                        else {
                            $voteCountSelect.title = voteCount;
                            $voteCountSelect.appendChild(document.createTextNode(voteCount.toString().substr(0, 1) + "x"))
                        }
                    self.tooltip = $root.title;
                    $buttonLabel.style[styleNameForBorder] = whiteColor;
                    var $span = document.createElement(strSpan);
                    $span.style.display = strInlineBlock;
                    $span.style.width = "1px";
                    $span.style.height = "19px";
                    $span.style.backgroundColor = buttonLabelBgColor;
                    $root.insertBefore($span, $root.firstChild);
                    self.setIcon = function (a) {
                        buttonImgFileExt = $buttonImg.src.match(/^(.*\/)([^\/]*)$/)[1] + a.match(/^(.*)(\.[^\.]*)$/)[1];
                        $buttonImg.src = buttonImgFileExt + ".gif"
                    };
                    self.setCallback = function (func) {
                        callback = $root.onclick = func
                    };
                    self.doCallback = function () {
                        if (callback && !isCallingExternalCallback) {
                            isCallingExternalCallback = trueValue;
                            callback();
                            isCallingExternalCallback = falseValue
                        }
                    };
                    self.hover = $root.onmouseover = function () {
                        $buttonIcon.style.color = $buttonLabel.style.color = buttonLabelBgColor;
                        $buttonIcon.style.backgroundColor = $buttonLabel.style.backgroundColor = buttonLabelColor;
                        $buttonLabel.style[styleNameForBorder] = emptyString;
                        $buttonImg.src = buttonImgFileExt + "_h.gif";
                        if (buttonImgFileExt.indexOf(strSelect) > negativeOne) {
                            $buttonImg.style.marginLeft = "-3px";
                            $buttonImg.style.marginTop = "2px"
                        }
                        if ($voteCountSelect) $voteCountSelect.style.display = strInlineBlock;
                        if (onHover && !isCallingExternalCallback) {
                            isCallingExternalCallback = trueValue;
                            onHover();
                            isCallingExternalCallback = falseValue
                        }
                    };
                    self.unhover = $root.onmouseout = function () {
                        $buttonIcon.style.color = $buttonLabel.style.color = buttonLabelColor;
                        $buttonIcon.style.backgroundColor = $buttonLabel.style.backgroundColor = buttonLabelBgColor;
                        $buttonLabel.style[styleNameForBorder] = whiteColor;
                        $buttonImg.src = buttonImgFileExt + ".gif";
                        if (buttonImgFileExt.indexOf(strSelect) > negativeOne) {
                            $buttonImg.style.marginLeft = zeroPx;
                            $buttonImg.style.marginTop = zeroPx
                        }
                        if ($voteCountSelect) $voteCountSelect.style.display = none;
                        if (onUnhover && !isCallingExternalCallback) {
                            isCallingExternalCallback = trueValue;
                            onUnhover();
                            isCallingExternalCallback = falseValue
                        }
                    };
                    self.setHover = function (func) {
                        onHover = func
                    };
                    self.setUnhover = function (func) {
                        onUnhover = func
                    };
                    self.show = function () {
                        $root.style.display = strBlock
                    };
                    self.hide = function () {
                        $root.style.display = none
                    };
                    self.expand = function () {
                        $buttonLabel.style.display = emptyString
                    };
                    self.collapse = function () {
                        $buttonLabel.style.display = none
                    };
                    self.setLabel = function (labelText, tooltipText) {
                        if (labelText) {
                            $buttonLabel.innerHTML = emptyString;
                            $buttonLabel.appendChild(document.createTextNode(labelText))
                        }
                        if (tooltipText) $root.title = tooltipText;
                        this.tooltip = $root.title
                    }
                }
                var hideTooltip = self.hideTooltip = function () {
                    locked = falseValue;
                    $translatorCommunity.style.display = none;
                    if (mstTooltip) mstTooltip.hide();
                    if ($dashboard && $dashboard.parentNode == document.body) try {
                        document.body.removeChild($dashboard)
                    } catch (a) {}
                };

                function findDescendantWithClassName(node, className, level) {
                    if (!level) level = 0;
                    if (level > 40) return nullValue;
                    var nodeWithClassName;
                    for (var a = 0; a < node.childNodes.length; ++a) {
                        var childNode = node.childNodes[a];
                        if (childNode.className && childNode.className.indexOf(className) > negativeOne) nodeWithClassName = node.childNodes[a];
                        else if (node.childNodes[a].nodeType == 1 && node.childNodes[a].childNodes) nodeWithClassName = findDescendantWithClassName(node.childNodes[a], className, level + 1);
                        if (nodeWithClassName) break
                    }
                    return nodeWithClassName
                }
                var showDashboard = self.showDashboard = function () {
                    hideTooltip();
                    if (mstTooltip) mstTooltip.setLock(trueValue);
                    $dashboard = document.createElement(strDiv);
                    $dashboard.style.position = strAbsolute;
                    $dashboard.style.zIndex = maxZIndex;
                    $dashboard.style.width = "97%";
                    $dashboard.style.margin = "44px 8px";
                    $dashboard.style.borderRight = $dashboard.style.borderBottom = "solid 0px black";
                    $dashboard.style.backgroundColor = whiteColor;

                    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || fourHundred;
                    if (height < fourHundred) height = fourHundred;
                    height -= 60;

                    var $iframe = document.createElement(strIframe);
                    $iframe.style.width = "100%";
                    $iframe.style.height = height.toString() + px;
                    $iframe.src = 'javascript:document.write("Loading...")';
                    $dashboard.appendChild($iframe);

                    var $closeButton = document.createElement("a");
                    try {
                        domUtils.applyProtectiveCss($closeButton)
                    } catch (j) {
                        if (config.debug);
                    }

                    $closeButton.style.display = strInlineBlock;
                    $closeButton.style.position = strAbsolute;
                    $closeButton.style.styleFloat = strRight;
                    $closeButton.style.top = "4px";
                    $closeButton.style.cursor = strPointer;
                    $closeButton.title = "Close dashboard";

                    var $closeButtonSpan = document.createElement(strSpan);
                    $closeButtonSpan.style.display = strInlineBlock;
                    $closeButtonSpan.style.width = "28px";
                    $closeButtonSpan.style.height = "28px";
                    $closeButtonSpan.style.marginRight = "16px";
                    $closeButton.appendChild($closeButtonSpan);

                    var $closeButtonImg = document.createElement(tagImg);
                    try {
                        domUtils.applyProtectiveCss($closeButtonImg)
                    } catch (j) {
                        if (config.debug);
                    }

                    $closeButtonImg.src = config.imagePath + "ctfdashboardclose.gif";
                    $closeButtonImg.style.display = strInlineBlock;
                    $closeButtonImg.style.marginTop = "8px";
                    $closeButtonImg.style.marginLeft = "8px";
                    $closeButtonImg.style.border = zeroPx;
                    $closeButtonSpan.appendChild($closeButtonImg);
                    $closeButton.onclick = function () {
                        if (mstTooltip) mstTooltip.setLock(falseValue);
                        document.body.removeChild($dashboard)
                    };

                    $dashboard.appendChild($closeButton);
                    $dashboard.style.height = height.toString() + px;
                    $dashboard.style.overflow = strHidden;
                    $dashboard.style.textAlign = strLeft;

                    window.scrollTo(0, 0);
                    document.body.insertBefore($dashboard, document.body.firstChild);

                    setTimeout(function () {
                        $closeButton.style.right = "4px";
                        if (!domUtils.isInternetExplorer()) $closeButton.style.left = ($dashboard.offsetWidth - $closeButton.offsetWidth).toString() + px;

                        var encodedUrl = encodeURIComponent(location.href);
                        if (encodedUrl.length > maxUrlLength) encodedUrl = encodedUrl.substr(0, maxUrlLength);

                        var src = dashboardUrl + "?siteData=" + siteData + "&url=" + encodedUrl + "&from=" + encodeURIComponent(config.from) + "&to=" + encodeURIComponent(config.to) + "&category=" + encodeURIComponent(config.category) + "&usr=" + encodeURIComponent(getUser());
                        $iframe.src = src
                    }, 0);

                    return falseValue
                };

                function replaceHtmlTagWithLiteralTag(html) {
                    return html.replace(/<([a-zA-Z]*)(\d*)>/g, function (b, c, a) {
                        return "<tag" + a + gtSign
                    }).replace(/<\/([a-zA-Z]*)(\d*)>/g, function (b, c, a) {
                        return "</tag" + a + gtSign
                    })
                }

                function replaceHtmlTagWithLiteralB(text) {
                    return text.replace(/<([a-zA-Z]*)(\d*)>/g, function (b, c, a) {
                        return "<b" + a + gtSign
                    }).replace(/<\/([a-zA-Z]*)(\d*)>/g, function (b, c, a) {
                        return "</b" + a + gtSign
                    })
                }

                function getUrl() {
                    var result = document.location.href;
                    if (document.location.href.indexOf(config.rootURL) == 0) {
                        var matches = document.location.href.match(/url=([^&]+)/);
                        if (matches) result = decodeURIComponent(matches[1])
                    }
                    return result
                }
                var transItemIndex = 0;

                function startHighlight(domTranslator, langFrom, langTo) {
                    if (!domTranslator.transItems || !domTranslator.transItems.length) return;
                    transItemIndex = 0;
                    recursiveTranslateAndHighlight(domTranslator, langFrom, langTo)
                }

                function recursiveTranslateAndHighlight(domTranslator, langFrom, langTo) {
                    if (transItemIndex >= domTranslator.transItems.length) return;

                    var texts = [],
                        charCount = 0;

                    for (var d = transItemIndex; d < domTranslator.transItems.length && charCount < maxUrlLength && d - transItemIndex < 10; ++d) {
                        var originalText = domTranslator.transItems[d].src._mstNormalize();
                        charCount += domUtils.getStringByteCount(originalText);
                        texts.push(originalText)
                    }
                    if (charCount >= maxUrlLength) texts.pop();

                    config.serviceClient.GetTranslationsArray(config.appId, texts, langFrom, langTo, 3, config.category ? {
                        Category: config.category
                    } : nullValue, function (response) {
                        for (var i = 0; i < response.length; ++i)
                            if (response[i].Translations.length > 1)
                                if (response[i].Translations[0].Rating > 5) domTranslator.transItems[transItemIndex + i].tgt.style.backgroundColor = greyColor;
                                else if (response[i].Translations[1].Count < 0) domTranslator.transItems[transItemIndex + i].tgt.style.backgroundColor = "#E5917F";
                                else domTranslator.transItems[transItemIndex + i].tgt.style.backgroundColor = "#B9E4FC";

                        transItemIndex += texts.length;
                        recursiveTranslateAndHighlight(domTranslator, langFrom, langTo)
                    }, function () {
                        transItemIndex += texts.length > 1 ? texts.length : 1;
                        recursiveTranslateAndHighlight(domTranslator, langFrom, langTo)
                    }, sevenSeconds)
                }
                var sc = self.forceLoad = function () {
                    if (initTranslatorCommunity) initTranslatorCommunity()
                };

                function getUser() {
                    var result = $userId.innerText || $userId.textContent;
                    if (!result) {
                        var matches = document.cookie.match(/mstcid=([^;]+)/i);
                        if (matches) result = matches[1];
                        else {
                            result = Math.floor(Math.random() * 1e9).toString(radixHex);
                            document.cookie = "mstcid=" + result + "; expires=Sun, 01-Jan-2040 01:01:01 GMT; path=" + ((location.host.indexOf("bing") > negativeOne && location.pathname.indexOf("/translator")) > negativeOne ? location.pathname : pathDelimiter)
                        }
                    }
                    return result
                }
                new function () {
                    var matches, ctfLanguages;

                    matches = baseUrl.match(/siteData=([^&]*)/);
                    if (matches) siteData = matches[1];

                    locale = config.locale;
                    matches = baseUrl.match(/loc=([^&]+)/);
                    if (matches) locale = matches[1];

                    matches = baseUrl.match(/ctfLanguages=([^&]*)/);
                    if (matches) ctfLanguages = matches[1];

                    matches = baseUrl.match(/showDashboard=([^&]*)/);
                    if (matches && (matches[1].toLowerCase() == strFalse || matches[1].toLowerCase() == langNorwegian)) {
                        shouldShowDashboard = falseValue;
                    }

                    if (ctfLanguages) {
                        ctfLangDict = {};
                        var langs = ctfLanguages.split(",");
                        for (var d = 0; d < langs.length; ++d) ctfLangDict[langs[d].toLowerCase()] = 1
                    }

                    if (siteData) {
                        initTranslatorCommunity = function () {
                            var communityDivId = "MicrosoftTranslatorCommunity";

                            if (!initTranslatorCommunity) return;
                            initTranslatorCommunity = nullValue;

                            $translatorCommunity = document.getElementById(communityDivId);
                            if ($translatorCommunity) $translatorCommunity.parentNode.removeChild($translatorCommunity);
                            $translatorCommunity = document.createElement(strDiv);
                            $translatorCommunity.id = communityDivId;
                            $translatorCommunity.style.display = none;
                            document.body.insertBefore($translatorCommunity, document.body.firstChild);

                            var inrt = emptyString;
                            if (domUtils.isInternetExplorer() && domUtils.isQuirksMode(document)) inrt = "&inrt=1";
                            jc = sendRequest("/ajax/v3/community.aspx?fmt=js&loc=" + locale + inrt + "&siteData=" + siteData, config.rootURL)
                        };
                    }

                    if (config.tokRef) {
                        window._mstRefTok = function (appId) {
                            config.appId = appId
                        };
                        setInterval(function () {
                            if (_eTokenScript) _eTokenScript.parentNode.removeChild(_eTokenScript);
                            _eTokenScript = sendRequest("/ajax/v3/community.aspx?reftok=1&siteData=" + siteData, config.rootURL)
                        }, config.tokRef * 1e3)
                    }
                };
                config.serviceClient.Community = self
            }(config.baseURL),
            uiController;

        (function (instance) {
            var draggingClassName = "dragging",
                mstToQuery = "__mstto=",
                strValue = "value",
                bracedZero = "{0}",
                strStyle = "style",
                languageMenuKey = "LanguageMenu",
                strTitle = "title",
                strHref = "href",
                langCodeNameMapping = {},
                localLanguageCode, currentLangCode, detectedLangCode = nullValue,
                timer = nullValue,
                isTranslationCompleted = falseValue,
                $widgetFloater, $widgetFloaterPanels, $widgetFloaterCollapsed, $floaterSharePanel, $floaterEmbed, $floaterProgressBar,
                $originalLanguageSpan, mouseX, mouseY, hasForceLoad = falseValue,
                shouldForceLoad = trueValue,
                isMouseOver = falseValue,
                isFloaterVisible = trueValue,
                initialized = falseValue,
                hasShownBefore = falseValue,
                noDetectedLangCode;

            function Initialize(langCode, boolInString, autoDetectedLangCode) {
                var bwmIdKey = "_bwmid",
                    scriptForMouseOver = "Microsoft.Translator.OnMouseOverFloater()",
                    strOnMouseOver = "onmouseover",
                    idForSignOutSpan = "SignOutSpan",
                    idForSignInSpan = "SignInSpan";

                if (typeof boolInString === undefinedTypeString) boolInString = "true";
                if (typeof autoDetectedLangCode === undefinedTypeString) autoDetectedLangCode = emptyString;

                $widgetFloater = Util.GetElement("WidgetFloater");
                $widgetFloaterPanels = Util.GetElement(strWidgetFloaterPanels);
                $widgetFloaterCollapsed = Util.GetElement("WidgetFloaterCollapsed");
                $floaterSharePanel = Util.GetElement("FloaterSharePanel");
                $floaterEmbed = Util.GetElement("FloaterEmbed");
                $floaterProgressBar = Util.GetElement("FloaterProgressBar");
                noDetectedLangCode = autoDetectedLangCode == emptyString;
                detectedLangCode = autoDetectedLangCode;
                //var h = document.createElement("link");
                //h.setAttribute(ab, window[Z].floaterStylePath);
                //h.setAttribute("rel", "stylesheet");
                var q = document.getElementsByTagName(head)[0];
                //q.insertBefore(h, q.firstChild);
                Util.GetElement("HelpLink").setAttribute(strHref, Microsoft.Translator.Widget.Links.Help);

                if (Util.GetElement("CTFAuthPanel")) {
                    Util.GetElement(idForSignInSpan).style.display = none;
                    Util.GetElement(idForSignOutSpan).style.display = none;

                    if (Microsoft.Translator.Widget.Links.SignIn) {
                        Util.GetElement(idForSignInSpan).innerHTML = Microsoft.Translator.Widget.Links.SignIn;
                        Util.GetElement(idForSignInSpan).style.display = strInline
                    } else if (Microsoft.Translator.Widget.Links.SignOut) {
                        Util.GetElement(idForSignOutSpan).style.display = strInlineBlock;
                        Util.GetElement("UsernameLink").innerHTML = Microsoft.Translator.Widget.UserName;
                        Util.GetElement(idForSignOutSpan).innerHTML += "<span> | </span>" + Microsoft.Translator.Widget.Links.SignOut;

                        var lastChild = Util.GetElement(idForSignOutSpan).children[Util.GetElement(idForSignOutSpan).children.length - 1];
                        if (lastChild.innerText) lastChild.setAttribute(strTitle, lastChild.innerText);
                        else lastChild.setAttribute(strTitle, lastChild.textContent)
                    }
                }

                $widgetFloaterPanels.onmousedown = onMouseDown;
                $widgetFloater.setAttribute(strOnMouseOver, scriptForMouseOver);
                $widgetFloater.setAttribute("onmouseout", "Microsoft.Translator.OnMouseOutFloater()");
                $widgetFloaterCollapsed.setAttribute(strOnMouseOver, scriptForMouseOver);

                localLanguageCode = langCode;
                Microsoft.Translator.Widget.GetLanguagesForTranslate(langCode, onSucessGetLanguages, onErrorGetLanguages);

                var inputs = $widgetFloaterPanels.getElementsByTagName("input");

                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("type").toLowerCase() == "text") input.setAttribute("onclick", "this.select()")
                }

                if (boolInString.toLowerCase() == strFalse) shouldForceLoad = falseValue;
                initialized = trueValue;

                if (window[bwmIdKey]) window[bwmIdKey] += ",translator";
                else window[bwmIdKey] = "translator";
                //db("widget/metrics.js", (document.location.protocol == "https:" ? "https://ssl" : "http://www") + ".bing.com/")
            }
            instance.Initialize = Initialize;

            function showFloaterPanels() {
                $widgetFloaterPanels.style.display = strBlock
            }

            function Show(langCode) {
                if (!initialized) {
                    setTimeout(function () {
                        Show(langCode)
                    }, 50);
                    return
                }

                var $laucher;

                if (!hasShownBefore)
                    if ($laucher = document.getElementById("WidgetLauncher")) {
                        var rect = $laucher.getBoundingClientRect();
                        if (window["Util"].IsElementInViewport($laucher))
                            if (rect.left == 0 && rect.top == 0) setTimeout(function () {
                                rect = $laucher.getBoundingClientRect();
                                repositionPanels(rect.left, rect.top)
                            }, 200);
                            else repositionPanels(rect.left, rect.top);
                        else repositionPanels(50, 50)
                    } else if (!$laucher) repositionPanels(50, 50);

                hasShownBefore = trueValue;

                hideFloater();
                showFloaterPanels();

                $widgetFloater.style.display = strBlock;
                currentLangCode = window[languageMappingsKey][langCode.toLowerCase()];

                if (!currentLangCode) currentLangCode = langCode;

                var intervalTimer = setInterval(function () {
                    if (window[languageMenuKey]) {
                        window[languageMenuKey].onChanged = onLanguageChange;
                        try {
                            try {
                                window[languageMenuKey].setValue(currentLangCode)
                            } catch (err) {
                                console.error(err)
                            }
                            $originalLanguageSpan = Util.GetElement("OriginalLanguageSpan");
                            if (detectedLangCode == emptyString) $originalLanguageSpan.parentNode[strStyle].display = none;
                            else {
                                $originalLanguageSpan.parentNode[strStyle].display = strBlock;
                                if (noDetectedLangCode) $originalLanguageSpan.innerHTML = window[mstConfigKey].autoDetected.replace(bracedZero, langCodeNameMapping[detectedLangCode]);
                                else $originalLanguageSpan.innerHTML = langCodeNameMapping[detectedLangCode]
                            }
                        } catch (err) {
                            console.warn(err)
                        }
                        clearInterval(intervalTimer)
                    }
                }, 1);

                isFloaterVisible = trueValue;

                if (timer) clearTimeout(timer);
                if (!isMouseOver) {
                    isTranslationCompleted = trueValue;
                    scheduleAutoHideFloater()
                }
                if (!hasForceLoad && shouldForceLoad) {
                    config.serviceClient.Community.forceLoad();
                    hasForceLoad = trueValue
                }
            }
            instance.Show = Show;

            function hidePanels() {
                $widgetFloaterPanels.style.display = none
            }

            function hideFloater() {
                $widgetFloater.style.display = none;
                $floaterSharePanel.style.display = none;
                $widgetFloaterCollapsed.style.display = none;
                $floaterEmbed.style.display = none;
                isFloaterVisible = falseValue;
                clearTimeout(timer)
            }

            function repositionPanels(a, b) {
                $widgetFloaterPanels.style.top = b + px;
                $widgetFloaterPanels.style.left = a + px
            }

            function TranslationComplete() {
                hideProgress();
                isTranslationCompleted = trueValue;
                scheduleAutoHideFloater()
            }
            instance.TranslationComplete = TranslationComplete;

            function TranslationProgress(g) {
                if (g >= 0 && g < oneHundred) {
                    isTranslationCompleted = falseValue;
                    clearTimeout(timer);
                    showProgress();
                    renderProgress(g)
                }
                var langCode = nullValue;

                try {
                    langCode = Microsoft.Translator.Widget.GetAutoDetectedLanguage()
                } catch (err) {}

                if (langCode && window[languageMenuKey] && window[languageMenuKey].getValue) {
                    detectedLangCode = langCode;
                    $originalLanguageSpan.parentNode[strStyle].display = strBlock;

                    if (noDetectedLangCode) $originalLanguageSpan.innerHTML = window[mstConfigKey].autoDetected.replace(bracedZero, langCodeNameMapping[detectedLangCode]);
                    else $originalLanguageSpan.innerHTML = langCodeNameMapping[detectedLangCode];

                    var langNameFrom = langCodeNameMapping[langCode],
                        langNameTo = langCodeNameMapping[window[languageMenuKey].getValue()],
                        urlWithoutHash = location.href.substr(0, location.href.length - (location.hash || emptyString).length),
                        appendNewQueryWithChar = document.location.search.length == 0 ? "?" : "&",
                        emailSubject = Util.GetElement("EmailSubject").getAttribute(strValue);

                    emailSubject = emailSubject.replace(bracedZero, langNameTo);
                    emailSubject = emailSubject.replace("{1}", langNameFrom);

                    var c = Util.GetElement("EmailBody").getAttribute(strValue);
                    c = c.replace(bracedZero, encodeURIComponent(urlWithoutHash + appendNewQueryWithChar + mstToQuery + window[languageMenuKey].getValue()));
                    c = c.replace("{1}", encodeURIComponent(urlWithoutHash));

                    Util.GetElement("EmailLink").setAttribute(strHref, "mailto:?charset=utf-8&subject=" + emailSubject + "&body=" + c);
                    Util.GetElement("ShareHelpLink").setAttribute(strTitle, Util.GetElement("ShareHelpText").getAttribute(strValue).replace(bracedZero, langNameTo));

                    window["Util"].SetCookie("mstto", window[languageMenuKey].getValue(), falseValue)
                }
            }
            instance.TranslationProgress = TranslationProgress;

            function TranslationError(a) {
                console.log(a)
            }
            instance.TranslationError = TranslationError;

            function OnClose() {
                Microsoft.Translator.Widget.RestoreOriginal();
                hidePanels()
            }
            instance.OnClose = OnClose;

            function OnShareBackClick() {
                hideFloater();
                Show(currentLangCode)
            }
            instance.OnShareBackClick = OnShareBackClick;

            function OnEmbedBackClick() {
                hideFloater();
                Show(currentLangCode)
            }
            instance.OnEmbedBackClick = OnEmbedBackClick;

            function OnMouseOverFloater() {
                clearTimeout(timer);
                isMouseOver = trueValue;
                Show(currentLangCode)
            }
            instance.OnMouseOverFloater = OnMouseOverFloater;

            function OnMouseOutFloater() {
                isMouseOver = falseValue;
                if (isFloaterVisible) scheduleAutoHideFloater()
            }
            instance.OnMouseOutFloater = OnMouseOutFloater;

            function scheduleAutoHideFloater() {
                if (isTranslationCompleted && !isMouseOver && isFloaterVisible) timer = setTimeout(function () {
                    hideIfVisibleAndMouseOut()
                }, sevenSeconds)
            }

            function ShowSharePanel() {
                var shareTextboxId = "ShareTextbox";

                hideFloater();
                showFloaterPanels();

                var urlWithoutHash = location.href.substr(0, location.href.length - (location.hash || emptyString).length);

                if (location.search.length == 0) Util.GetElement(shareTextboxId).setAttribute(strValue, urlWithoutHash + "?__mstto=" + currentLangCode);
                else if (location.search.indexOf("__mstto") != negativeOne) {
                    if (urlWithoutHash.match(/__mstto=(.+)([&]+)/i)) Util.GetElement(shareTextboxId).setAttribute(strValue, urlWithoutHash.replace(/__mstto=(.+)([&&]+)/i, mstToQuery + currentLangCode + "&"));
                    else if (urlWithoutHash.match(/__mstto=(.+)/i)) Util.GetElement(shareTextboxId).setAttribute(strValue, urlWithoutHash.replace(/__mstto=(.+)/i, mstToQuery + currentLangCode))
                } else Util.GetElement(shareTextboxId).setAttribute(strValue, urlWithoutHash + "&amp;__mstto=" + currentLangCode);

                $floaterSharePanel.style.display = strBlock
            }
            instance.ShowSharePanel = ShowSharePanel;

            function ShowEmbed() {
                hideFloater();
                $floaterEmbed.style.display = strBlock
            }
            instance.ShowEmbed = ShowEmbed;

            function hideIfVisibleAndMouseOut() {
                if (isTranslationCompleted && !isMouseOver && isFloaterVisible) {
                    hideFloater();
                    $widgetFloaterCollapsed.style.display = strBlock
                }
            }

            function onSucessGetLanguages(languages) {
                for (var a = 0; a < languages.length; a++) langCodeNameMapping[languages[a].Code] = languages[a].Name
            }

            function onErrorGetLanguages() {
                if (localLanguageCode != langEnglish) {
                    localLanguageCode = langEnglish;
                    Microsoft.Translator.Widget.GetLanguagesForTranslate(langEnglish, onSucessGetLanguages, onErrorGetLanguages)
                }
            }

            function renderProgress(percentage) {
                Util.GetElement("ProgressFill").style.width = percentage + "%"
            }

            function hideProgress() {
                $floaterProgressBar.style.visibility = "hidden"
            }

            function showProgress() {
                $floaterProgressBar.style.visibility = strVisible
            }

            function onLanguageChange() {
                if (currentLangCode.toLowerCase() != window[languageMenuKey].getValue().toLowerCase()) {
                    clearTimeout(timer);
                    Microsoft.Translator.Widget.Translate(detectedLangCode, window[languageMenuKey].getValue());
                    currentLangCode = window[languageMenuKey].getValue();
                    window[languageMenuKey].elemHeader.focus()
                }
            }

            function onMouseDown(e) {
                e = e || event;
                mouseX = e.clientX;
                mouseY = e.clientY;
                document.onmousemove = onMouseMove;
                document.onmouseup = onMouseUp;
                document.body.focus();
                document.onselectstart = function () {
                    return falseValue
                };
                $widgetFloaterPanels.ondragstart = function () {
                    return falseValue
                };
                Util.addClass($widgetFloaterPanels, draggingClassName);
                return falseValue
            }

            function onMouseMove(e) {
                e = e || event;
                var pos = Util.getPosition($widgetFloaterPanels),
                    deltaX = e.clientX - mouseX,
                    deltaY = e.clientY - mouseY;
                repositionPanels(parseInt(pos.left) + deltaX, parseInt(pos.top) + deltaY);
                mouseX = e.clientX;
                mouseY = e.clientY;
                return falseValue
            }

            function onMouseUp(e) {
                e = e || event;
                document.onmousemove = nullValue;
                document.onselectstart = nullValue;
                $widgetFloaterPanels.ondragstart = nullValue;
                Util.removeClass($widgetFloaterPanels, draggingClassName);
                return falseValue
            }
        })(uiController || (uiController = {}));

        self.FloaterInitialize = function (langCode, boolString, autoDetectedLangCode) {
            uiController.Initialize(langCode, boolString, autoDetectedLangCode)
        };
        self.FloaterShowSharePanel = function () {
            uiController.ShowSharePanel()
        };
        self.FloaterShowEmbed = function () {
            uiController.ShowEmbed()
        };
        self.FloaterOnClose = function () {
            uiController.OnClose();
            return falseValue
        };
        self.FloaterOnShareBackClick = function () {
            uiController.OnShareBackClick()
        };
        self.FloaterOnEmbedBackClick = function () {
            uiController.OnEmbedBackClick()
        };
        self.OnMouseOverFloater = function () {
            uiController.OnMouseOverFloater();
            return falseValue
        };
        self.OnMouseOutFloater = function () {
            uiController.OnMouseOutFloater();
            return falseValue
        };
        var el = document.getElementById(strWidgetFloaterPanels);
        if (el != nullValue) el.parentNode.removeChild(el)
    };

    function CUtil() {
        var strCharacter = "character",
            nullValue = null,
            negativeOne = -1,
            self = this,
            ua = navigator.userAgent.toLowerCase();

        self.MSIE = ua.indexOf("msie") != negativeOne && ua.indexOf("opera") == negativeOne;
        self.MSIE6 = self.MSIE && ua.indexOf("msie 6.") != negativeOne;
        self.MSIE7 = self.MSIE && ua.indexOf("msie 7.") != negativeOne;
        self.FIREFOX = ua.indexOf("firefox") != negativeOne;
        self.SAFARI = ua.indexOf("applewebkit") != negativeOne;
        self.GetPath = function () {
            var result = "/";
            if (location.pathname) {
                result = location.pathname.match(/\/\w*/i);
                if (result) result = result[0]
            }
            return result
        };
        self.AddFavorites = function () {
            var title = document.title,
                url = window.location.href;
            if (this.FIREFOX) window.sidebar.addPanel(title, url, "");
            else window.external.AddFavorite(url, title)
        };
        self.SetCookie = function (name, value, longLive, path) {
            if (!path) path = "/";
            document.cookie = name + "=" + value + (longLive ? "; expires=Sun, 01-Jan-2040 01:01:01 GMT" : "") + "; path=" + path
        };
        self.DeleteCookie = function (name, path) {
            if (!path) path = "/";
            document.cookie = name + "=;Thu, 01 Jan 1970 00:00:01 GMT; path=" + path
        };
        self.GetCookie = function (name) {
            var codePrefix = "document.cookie.match(/",
                result = eval(codePrefix + name + "s*=([^;]*)(;|$)/);");
            if (result != nullValue) return result[1];
            else {
                result = eval(codePrefix + name + "s*([^;]*)(;|$)/);");
                if (result != nullValue) return result[1];
                else return nullValue
            }
        };
        self.AddEvent = function (el, eventName, handler) {
            if (el.addEventListener) el.addEventListener(eventName, handler, false);
            else if (el.attachEvent) el.attachEvent("on" + eventName, handler)
        };
        self.AbsXPos = function (el) {
            return el.offsetLeft + (el.offsetParent != nullValue ? this.AbsXPos(el.offsetParent) : 0)
        };
        self.AbsYPos = function (el) {
            return el.offsetTop + (el.offsetParent != nullValue ? this.AbsYPos(el.offsetParent) : 0)
        };
        self.SetDDLByVal = function (selectedValue, $select) {
            for (var i = 0; i < $select.options.length; i++)
                if ($select.options[i].value == selectedValue) {
                    $select.options[i].selected = true;
                    return
                }
        };
        self.GetElement = function (id) {
            if (arguments.length <= 0) return nullValue;
            if (document.getElementById) return document.getElementById(id);
            else if (document.all) return document.all(id);
            else if (document.layers) return window.document.layers[id];
            else return nullValue
        };
        self.GetStyleObject = function (id) {
            if (document.getElementById && document.getElementById(id)) return document.getElementById(id).style;
            else if (document.all && document.all(id)) return document.all(id).style;
            else if (document.layers && document.layers[id]) return document.layers[id];
            else return false
        };
        self.GetStyleValue = function (id, styleName) {
            var el = document.getElementById(id) || document.body,
                result;
            if (el.currentStyle) result = el.currentStyle[styleName] || el.currentStyle.getAttribute(styleName.replace("-"));
            else if (window.getComputedStyle) result = document.defaultView.getComputedStyle(el, nullValue).getPropertyValue(styleName);
            return result
        };
        self.GetScrollBounds = function (el) {
            if (el == nullValue) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            var left, top, width, height;
            if (el.documentElement != nullValue && el.documentElement.scrollTop != nullValue && el.documentElement.scrollTop >= el.body.scrollTop) {
                left = el.documentElement.scrollLeft;
                top = el.documentElement.scrollTop;
                width = el.documentElement.scrollWidth;
                height = el.documentElement.scrollHeight
            } else {
                left = el.body.scrollLeft;
                top = el.body.scrollTop;
                width = el.body.scrollWidth;
                height = el.body.scrollHeight
            }
            return {
                x: left,
                y: top,
                width: width,
                height: height
            }
        };
        self.getLanguageDirStyle = function (langCode) {
            var result;
            if (Microsoft.Translator.languageDirs[langCode] == "rtl") result = {
                direction: "rtl",
                textAlign: "right"
            };
            else result = {
                direction: "ltr",
                textAlign: "left"
            };
            return result
        };
        self.setScrollValue = function (el, absScrollValue, deltaX, deltaY, topOrLeft) {
            var d = el.ownerDocument.defaultView ? el.ownerDocument.defaultView : el.ownerDocument.parentWindow;
            if (d.scrollBy) d.scrollBy(deltaX, deltaY);
            else {
                el["scroll" + topOrLeft] = absScrollValue;
                el.ownerDocument.body["scroll" + topOrLeft] = absScrollValue
            }
        };
        self.GetUrlParameter = function (url, paramName) {
            paramName = paramName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var strReg = "[\\?&]" + paramName + "=([^&#]*)",
                regexp = new RegExp(strReg, "i"),
                result = regexp.exec(url);
            if (result == nullValue) return nullValue;
            else return result[1]
        };

        self.GetDocumentUrl = function (doc) {
            var path = "/bv.aspx",
                query = "a=",
                result = "";
            if (doc.location.hash.length > 1) result = doc.location.hash.substring(1);
            else if (doc.location.search.indexOf(query) > 0) result = decodeURIComponent(doc.location.search.substring(doc.location.search.indexOf(query) + 2));
            while (result && result.toLowerCase().indexOf(path) >= 0 && result.toLowerCase().indexOf(query) >= 0) result = decodeURIComponent(result.substring(result.toLowerCase().indexOf(query) + 2));
            if (result.length > 0) {
                result = result.replace(/^\s*/, "").replace(/\s*$/, "");
                if (result.indexOf("?") == negativeOne) result = result.replace("&", "?")
            }
            if (result && result.indexOf("://") == negativeOne) result = "http://" + result;
            if (result && result.toLowerCase().indexOf(path) >= 0) result = "";
            return result
        };
        self.SendPostRequest = function (action, data, target) {
            var $form = document.createElement("form");
            $form.action = action;
            $form.method = "post";
            $form.target = target;
            for (var key in data)
                if (data.hasOwnProperty(key)) {
                    var b = document.createElement("input");
                    b.name = key;
                    b.value = data[key];
                    b.type = "hidden";
                    $form.appendChild(b)
                }
            document.body.appendChild($form);
            $form.submit();
            document.body.removeChild($form)
        };
        self.Log = function (service, logs) {
            Microsoft.Translator.LoadScript("/sync.ashx?svc=" + service + "&" + logs.join("&"))
        };
        self.GetCaretPosition = function (input) {
            var result = 0;
            if (input.selectionStart || input.selectionStart == "0") result = input.selectionStart;
            else if (document.selection) {
                var range = document.selection.createRange(),
                    start = 0,
                    end = 0;

                if (range && range.parentElement() == input) {
                    var len = input.value.length,
                        k = input.value.replace(/\r\n/g, "\n"),
                        textRange = input.createTextRange();
                    textRange.moveToBookmark(range.getBookmark());
                    var collapsedTextRange = input.createTextRange();
                    collapsedTextRange.collapse(false);
                    if (textRange.compareEndPoints("StartToEnd", collapsedTextRange) > negativeOne) start = end = len;
                    else {
                        start = -textRange.moveStart(strCharacter, -len);
                        if (textRange.compareEndPoints("EndToEnd", collapsedTextRange) > negativeOne) end = len;
                        else end = -textRange.moveEnd(strCharacter, -len)
                    }
                }
                result = start
            }
            return result
        };
        self.SetSelectionRange = function (input, start, end) {
            if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(start, end)
            } else if (input.createTextRange) {
                var b = input.createTextRange();
                b.collapse(true);
                b.moveEnd(strCharacter, end);
                b.moveStart(strCharacter, start);
                b.select()
            }
        };
        self.SetCaretToPosition = function (input, pos) {
            this.SetSelectionRange(input, pos, pos)
        };
        self.addClass = function (el, className) {
            var existingClasses = el.className.split(" ");
            for (var a = 0; a < existingClasses.length; a++)
                if (className == existingClasses[a]) return;
            el.className += " " + className
        };
        self.removeClass = function (el, className) {
            var existingClasses = el.className.split(" ");
            el.className = "";
            for (var a = 0; a < existingClasses.length; a++)
                if (className != existingClasses[a]) {
                    el.className += existingClasses[a];
                    if (a == existingClasses.length - 1) el.className += " "
                }
        };
        self.getPosition = function (el) {
            var left = 0,
                top = 0;
            while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                left += el.offsetLeft - el.scrollLeft;
                top += el.offsetTop - el.scrollTop;
                el = el.offsetParent
            }
            return {
                top: top,
                left: left
            }
        };
        self.IsElementInViewport = function (el) {
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        };
        return self
    }
    var Util = new CUtil;
    var MtPopUpList = function () {
        var self = this;
        self.onChanged = null;
        self.shiftKeyDown = false;
        self.MRUL = [];
        self.MAX_MRUL = 2
    };
    MtPopUpList.prototype = {
        keysBuffer: "",
        Init: function (name, keyMaps, i, onChanged, popupElementId) {
            var self = this;
            self.Items = [];
            self.Keys = [];
            self.KeyMap = " " + keyMaps.join(" ") + " ";
            self.keysBuffer = "";
            var f = 0;
            for (var b = 0; b < keyMaps.length; b++) {
                self.Items[keyMaps[b]] = i[b];
                if (keyMaps[b] != "-") {
                    self.Keys[f] = keyMaps[b];
                    f++
                }
            }
            self.onChanged = onChanged;
            document.onclick = self.HideCurrentPopup;
            self.elemHeader = Util.GetElement("__" + name + "_header");
            self.elemSvID = Util.GetElement(name + "_svid");
            self.elemTextId = Util.GetElement(name + "_textid");
            self.elemPopup = document.getElementById(popupElementId);
            self.cropText();
            if (self.elemPopup != null) {
                self.elemPopup.onkeydown = (new self.doKeyDown(self, self.HideCurrentPopup)).execute;
                self.elemPopup.onkeyup = (new self.doKeyUp(self)).execute;
                self.elemPopup.onkeypress = (new self.doKeyPress(self)).execute
            }
            self.name = name;
            self.mrul_cookie = name + "_lpmru";
            var cookieValue = Util.GetCookie(self.mrul_cookie);
            if (cookieValue != null && cookieValue != "undefined") self.MRUL = cookieValue.split(",");
            else self.MRUL = []
        },
        getLinks: function () {
            return this.elemPopup.getElementsByTagName("a")
        },
        getActiveLink: function () {
            var $links = this.getLinks(),
                svID = this.elemSvID.value;
            if (svID != null)
                for (var i = 0; i < $links.length; i++)
                    if ($links[i].href.indexOf("#" + svID) != -1) return $links[i];
            return $links[0]
        },
        getByLetter: function (i, charCode, elements) {
            var self = this,
                upperChar = String.fromCharCode(charCode).toUpperCase(),
                $activeLink = self.getActiveLink(),
                $links = [],
                b;
            for (b = 0; b < elements.length; b++) $links[b] = elements[b];
            $links.sort(function (el1, el2) {
                var text1 = el1.innerText || el1.textContent,
                    text2 = el2.innerText || el2.textContent;
                if (text1 < text2) return -1;
                if (text1 > text2) return 1;
                return 0
            });
            var c = 0;
            for (; c < $links.length; c++)
                if ($activeLink == $links[c]) {
                    c++;
                    break
                }
            for (; c < $links.length; c++)
                if (self.getFirstChar($links[c]) == upperChar) return self.getHref($links[c]);
            for (b = 0; b < $links.length; b++)
                if (self.getFirstChar($links[b]) == upperChar && $activeLink != $links[b]) return self.getHref($links[b]);
            return null
        },
        getFirstChar: function (el) {
            var text = el.innerText || el.textContent;
            if (text != undefined && text != null && text.length > 0) return text.substr(0, 1).toUpperCase();
            else return ""
        },
        getNextKey: function (key, step) {
            var self = this,
                index = 0;
            for (var c = 0; c < self.Keys.length; c++)
                if (self.Keys[c] == key) {
                    index = c;
                    break
                }
            index = index + step;
            if (index > self.Keys.length) index = 0;
            else if (index < 0) index = self.Keys.length - 1;
            return self.Keys[index]
        },
        getNextSibling: function (g, step) {
            var $activeLink = this.getActiveLink(),
                $parent = $activeLink.parentNode;
            while ($parent.tagName.toLowerCase() != "tr" && $parent.parentNode != null) $parent = $parent.parentNode;
            var $links = $parent.getElementsByTagName("a"),
                index = 0;
            for (var d = 0; d < $links.length; d++)
                if ($activeLink.href == $links[d].href) {
                    index = d;
                    break
                }
            index = index + step;
            if (index < 0) index = 0;
            else if (index >= $links.length) index = $links.length - 1;
            return this.getHref($links[index])
        },
        doKeyUp: function (that) {
            this.execute = function (event) {
                if (!event) event = window.event;
                if (event.keyCode == 16) {
                    that.shiftKeyDown = false;
                    if (event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                    event.cancelBubble = true;
                    return true
                } else return false
            }
        },
        doKeyPress: function (that) {
            this.execute = function (event) {
                if (!event) event = window.event;
                that.keysBuffer += String.fromCharCode(event.charCode || event.keyCode).toLowerCase();
                clearTimeout(that.keyTimeOut);
                that.keyTimeOut = setTimeout(function () {
                    that.keysBuffer = ""
                }, 1e3)
            }
        },
        doKeyDown: function (that, hideCurrentPopup) {
            this.execute = function (event) {
                var falseValue = false,
                    nextKey = null;
                if (!event) event = window.event;
                var $links = that.getLinks(),
                    svID = that.elemSvID.value,
                    noMatch = falseValue;
                switch (event.keyCode) {
                    case 16:
                        that.shiftKeyDown = true;
                        return falseValue;
                    case 9:
                        if (that.shiftKeyDown) nextKey = that.getNextKey(svID, -1);
                        else nextKey = that.getNextKey(svID, 1);
                        break;
                    case 40:
                        nextKey = that.getNextKey(svID, 1);
                        break;
                    case 38:
                        nextKey = that.getNextKey(svID, -1);
                        break;
                    case 39:
                        nextKey = that.getNextSibling(svID, 1);
                        break;
                    case 37:
                        nextKey = that.getNextSibling(svID, -1);
                        break;
                    case 13:
                    case 27:
                        hideCurrentPopup();
                        return falseValue;
                    default:
                        noMatch = true
                }
                if (!noMatch) {
                    var $link = $links[0];
                    for (var h = 0; h < $links.length; h++)
                        if ($links[h].href.indexOf("#" + nextKey) != -1) {
                            $link = $links[h];
                            break
                        }
                    try {
                        $link.focus();
                        $link.onclick()
                    } catch (k) {}
                    return falseValue
                } else {
                    window.evt = event;
                    setTimeout(function () {
                        if (!event) event = window.evt;
                        var $links = that.getLinks(),
                            $link;
                        for (var b = 0; b < $links.length; b++) {
                            var f = $links[b].outerText || $links[b].text;
                            if (f.toLowerCase().indexOf(that.keysBuffer) == 0 && f != (that.getActiveLink().outerText || that.getActiveLink().text)) {
                                $link = $links[b];
                                break
                            }
                        }
                        try {
                            if ($link) {
                                $link.focus();
                                $link.onclick()
                            }
                        } catch (g) {}
                    }, 30)
                }
                return true
            }
        },
        Hide: function () {
            this.HideCurrentPopup()
        },
        Show: function (el, event) {
            var trueValue = true,
                self = this;
            if (event) {
                if (event.keyCode == 27) {
                    self.Hide(el, event);
                    return trueValue
                }
                if (event.keyCode && event.keyCode != 40) return false;
                if (window.curDisplayedPopup == el) {
                    self.HideCurrentPopup();
                    return trueValue
                }
                self.HideCurrentPopup();
                event.cancelBubble = trueValue;
                if (self.ChangeObjectDisplay(el, "block")) {
                    window.curDisplayedDDHeader = self.elemHeader;
                    window.curDisplayedPopup = el;
                    self.getActiveLink().focus();
                    Util.addClass(self.elemHeader, "DDSActive");
                    return trueValue
                }
            }
            return false
        },
        cropText: function () {
            var strOverflow = "overflow",
                self = this,
                ellipsis = "...",
                headerHtml = self.elemHeader.innerHTML;
            self.elemHeader.title = headerHtml;
            self.elemHeader.innerHTML += "____";
            self.elemHeader.style[strOverflow] = "hidden";
            var g = self.elemHeader.clientWidth,
                h = self.elemHeader.scrollWidth,
                d = g * 1 / h * 1;
            if (d < 1) {
                var e = Math.ceil(d * headerHtml.length);
                if (e < headerHtml.length) headerHtml = String(headerHtml).substring(0, e - ellipsis.length) + ellipsis
            }
            self.elemHeader.style[strOverflow] = "visible";
            self.elemHeader.innerHTML = headerHtml
        },
        getHref: function ($link) {
            return $link.href.substr($link.href.indexOf("#") + 1)
        },
        setValue: function (svID, boolString) {
            var self = this;
            if (svID) {
                var match = (new RegExp(" (" + svID + ") ", "i")).exec(self.KeyMap);
                if (match && match[1]) svID = match[1]
            }
            if (self.Items[svID] == null) throw new Error("Value is not in the current list.");
            self.elemSvID.value = svID;
            self.elemHeader.value = self.Items[svID];
            if (boolString != "true") self.addMRUL(svID);
            var e = document.getElementById(self.name);
            if (e.tagName == "SELECT")
                for (var d = 0; d < e.options.length; d++) {
                    var g = e.options[d];
                    if (g.value == svID) {
                        g.selected = "selected";
                        break
                    }
                }
            self.setText(self.Items[svID], boolString)
        },
        getValue: function () {
            return this.elemSvID.value
        },
        setText: function (text, boolString) {
            var self = this,
                el = document.getElementById(self.name);
            if (el.tagName.toLowerCase() == "select")
                if (el.value == "") el.options[0].text = text;
                else if (el.options[0].value == "") el.options[0].text = self.Items[""];
            self.elemTextId.value = text;
            self.elemHeader.innerHTML = text;
            self.cropText();
            if (boolString != "true") self.onChanged(text, self.Items[text])
        },
        getText: function () {
            return this.elemTextId.value
        },
        onclick: function (svID) {
            this.setValue(svID);
            return false
        },
        ondragstart: function (event) {
            if (!event) event = window.event;
            if (event.preventDefault) event.preventDefault()
        },
        OnSelectedValueChanged: function () {
            return this.onChanged
        },
        HideCurrentPopup: function () {
            if (window.curDisplayedPopup) {
                Util.GetElement(window.curDisplayedPopup).style.display = "none";
                Util.removeClass(window.curDisplayedDDHeader, "DDSActive");
                window.curDisplayedPopup = false;
                window.curDisplayedDDHeader = null
            }
            this.shiftKeyDown = false
        },
        ChangeObjectDisplay: function (id, displayValue) {
            var styles = Util.GetStyleObject(id);
            if (styles && styles.display) {
                styles.display = displayValue;
                return true
            } else return false
        },
        addMRUL: function (newValue) {
            var self = this;
            if (!newValue) return;
            if (self.MRUL[0] == newValue) return;
            var index = 0,
                b;
            for (b = 1; b < self.MRUL.length; b++)
                if (self.MRUL[b] == newValue) {
                    index = b;
                    break
                }
            if (index == 0) self.MRUL.unshift(newValue);
            else {
                var value = index > 0 ? self.MRUL[index] : newValue;
                for (b = index; b > 0; b--) self.MRUL[b] = self.MRUL[b - 1];
                self.MRUL[0] = value
            }
            while (self.MRUL.length > self.MAX_MRUL) self.MRUL.pop();
            Util.SetCookie(self.mrul_cookie, self.MRUL, true, Util.GetPath())
        }
    };
    window['_mstConfig'].floaterStylePath = 'https://www.microsofttranslator.com/static/197997/css/WidgetV3_fail.css'; //'http://www.microsofttranslator.com/static/197997/css/WidgetV3.css';
    window['_mstConfig'].translateWithBing = 'TRANSLATE with {0}';
    window['_mstConfig'].withBing = 'with {0}';
    window['_mstConfig'].autoDetected = '{0} (Auto-Detected)';

    function loadAllScripts(fn) {
        /*var intervalID = setInterval(function () {
         if (document.readyState != 'complete') return;
         clearInterval(intervalID);
         fn();
         }, 10);*/
        fn();
    }

    // mate note
    // this is called when scripts are included
    // ukr mova break
    function onloadCallback() {
        var head = document.getElementsByTagName('head')[0];
        try {
            var body = document.getElementsByTagName('body')[0];

            // bail out if it's an iframe
            if (body.ownerDocument !== document) {
                return;
            }

            var numChildren = body.children.length;
            var numScripts = body.getElementsByTagName('script').length;

            function appendHTMLToBody(html) {
                var temp = document.createElement('div');
                temp.innerHTML = html;
                for (var i = 0; i < temp.children.length; i++) {
                    body.appendChild(temp.children[i]);
                }
            }

            appendHTMLToBody(decodeURIComponent('%3ctitle%3e%20%3c%2ftitle%3e'));

            appendHTMLToBody(decodeURIComponent('%20%3cdiv%20id%3d%22WidgetFloaterPanels%22%20translate%3d%22no%22%20style%3d%22display%3a%20none%3btext-align%3a%20left%3bdirection%3a%20ltr%22%20class%3d%22LTRStyle%22%20%3e%20%3cdiv%20id%3d%22WidgetFloater%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22WidgetLogoPanel%22%3e%20%3cspan%20id%3d%22WidgetTranslateWithSpan%22%3e%3cspan%3eTRANSLATE%20with%20%3c%2fspan%3e%3cimg%20id%3d%22FloaterLogo%22%20%2f%3e%3c%2fspan%3e%20%3cspan%20id%3d%22WidgetCloseButton%22%20title%3d%22Exit%20Translation%22%20onclick%3d%22Microsoft.Translator.FloaterOnClose()%22%3ex%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22LanguageMenuPanel%22%3e%20%3cdiv%20class%3d%22DDStyle_outer%22%3e%3cinput%20name%3d%22LanguageMenu_svid%22%20type%3d%22text%22%20id%3d%22LanguageMenu_svid%22%20style%3d%22display%3anone%3b%22%20autocomplete%3d%22on%22%20value%3d%22en%22%20%2f%3e%20%3cinput%20name%3d%22LanguageMenu_textid%22%20type%3d%22text%22%20id%3d%22LanguageMenu_textid%22%20style%3d%22display%3anone%3b%22%20autocomplete%3d%22on%22%20%2f%3e%20%3cspan%20onselectstart%3d%22return%20false%22%20tabindex%3d%220%22%20class%3d%22DDStyle%22%20id%3d%22__LanguageMenu_header%22%20onclick%3d%22return%20LanguageMenu%20%26amp%3b%26amp%3b%20!LanguageMenu.Show(%26%2339%3b__LanguageMenu_popup%26%2339%3b%2c%20event)%3b%22%20onkeydown%3d%22return%20LanguageMenu%20%26amp%3b%26amp%3b%20!LanguageMenu.Show(%26%2339%3b__LanguageMenu_popup%26%2339%3b%2c%20event)%3b%22%3eEnglish%3c%2fspan%3e%20%3cdiv%20style%3d%22position%3arelative%3btext-align%3aleft%3bleft%3a0%3b%22%3e%3cdiv%20style%3d%22position%3aabsolute%3bwidth%3a%3bleft%3a0px%3b%22%3e%3cdiv%20class%3d%22DDStyle%22%20style%3d%22display%3anone%3b%22%20id%3d%22__LanguageMenu_popup%22%3e%20%3ctable%20id%3d%22LanguageMenu%22%20border%3d%220%22%3e%20%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bar%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ar%22%3eArabic%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhe%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23he%22%3eHebrew%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bpl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23pl%22%3ePolish%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bbg%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23bg%22%3eBulgarian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23hi%22%3eHindi%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bpt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23pt%22%3ePortuguese%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bca%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ca%22%3eCatalan%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bmww%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23mww%22%3eHmong%20Daw%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bro%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ro%22%3eRomanian%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bzh-CHS%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23zh-CHS%22%3eChinese%20Simplified%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhu%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23hu%22%3eHungarian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bru%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ru%22%3eRussian%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bzh-CHT%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23zh-CHT%22%3eChinese%20Traditional%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bid%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23id%22%3eIndonesian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsk%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sk%22%3eSlovak%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bcs%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23cs%22%3eCzech%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bit%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23it%22%3eItalian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sl%22%3eSlovenian%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bda%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23da%22%3eDanish%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bja%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ja%22%3eJapanese%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bes%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23es%22%3eSpanish%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bnl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23nl%22%3eDutch%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3btlh%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23tlh%22%3eKlingon%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsv%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sv%22%3eSwedish%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3ben%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23en%22%3eEnglish%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bko%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ko%22%3eKorean%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bth%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23th%22%3eThai%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bet%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23et%22%3eEstonian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3blv%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23lv%22%3eLatvian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3btr%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23tr%22%3eTurkish%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fi%22%3eFinnish%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3blt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23lt%22%3eLithuanian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3buk%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23uk%22%3eUkrainian%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfr%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fr%22%3eFrench%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bms%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ms%22%3eMalay%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bur%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ur%22%3eUrdu%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bde%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23de%22%3eGerman%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bmt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23mt%22%3eMaltese%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bvi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23vi%22%3eVietnamese%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bel%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23el%22%3eGreek%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bno%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23no%22%3eNorwegian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bcy%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23cy%22%3eWelsh%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bht%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ht%22%3eHaitian%20Creole%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfa%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fa%22%3ePersian%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3c%2ftd%3e%20%3c%2ftr%3e%20%3c%2ftable%3e%20%3cimg%20alt%3d%22%22%20style%3d%22height%3a7px%3bwidth%3a17px%3bborder-width%3a0px%3bleft%3a20px%3b%22%20%2f%3e%20%3c%2fdiv%3e%3c%2fdiv%3e%3c%2fdiv%3e%3c%2fdiv%3e%20%3cscript%20type%3d%22text%2fjavascript%22%3e%20var%20LanguageMenu%3b%20var%20LanguageMenu_keys%3d%5b%22ar%22%2c%22bg%22%2c%22ca%22%2c%22zh-CHS%22%2c%22zh-CHT%22%2c%22cs%22%2c%22da%22%2c%22nl%22%2c%22en%22%2c%22et%22%2c%22fi%22%2c%22fr%22%2c%22de%22%2c%22el%22%2c%22ht%22%2c%22he%22%2c%22hi%22%2c%22mww%22%2c%22hu%22%2c%22id%22%2c%22it%22%2c%22ja%22%2c%22tlh%22%2c%22ko%22%2c%22lv%22%2c%22lt%22%2c%22ms%22%2c%22mt%22%2c%22no%22%2c%22fa%22%2c%22pl%22%2c%22pt%22%2c%22ro%22%2c%22ru%22%2c%22sk%22%2c%22sl%22%2c%22es%22%2c%22sv%22%2c%22th%22%2c%22tr%22%2c%22uk%22%2c%22ur%22%2c%22vi%22%2c%22cy%22%5d%3b%20var%20LanguageMenu_values%3d%5b%22Arabic%22%2c%22Bulgarian%22%2c%22Catalan%22%2c%22Chinese%20Simplified%22%2c%22Chinese%20Traditional%22%2c%22Czech%22%2c%22Danish%22%2c%22Dutch%22%2c%22English%22%2c%22Estonian%22%2c%22Finnish%22%2c%22French%22%2c%22German%22%2c%22Greek%22%2c%22Haitian%20Creole%22%2c%22Hebrew%22%2c%22Hindi%22%2c%22Hmong%20Daw%22%2c%22Hungarian%22%2c%22Indonesian%22%2c%22Italian%22%2c%22Japanese%22%2c%22Klingon%22%2c%22Korean%22%2c%22Latvian%22%2c%22Lithuanian%22%2c%22Malay%22%2c%22Maltese%22%2c%22Norwegian%22%2c%22Persian%22%2c%22Polish%22%2c%22Portuguese%22%2c%22Romanian%22%2c%22Russian%22%2c%22Slovak%22%2c%22Slovenian%22%2c%22Spanish%22%2c%22Swedish%22%2c%22Thai%22%2c%22Turkish%22%2c%22Ukrainian%22%2c%22Urdu%22%2c%22Vietnamese%22%2c%22Welsh%22%5d%3b%20var%20LanguageMenu_callback%3dfunction()%7b%20%7d%3b%20var%20LanguageMenu_popupid%3d%27__LanguageMenu_popup%27%3b%20%3c%2fscript%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22CTFLinksPanel%22%3e%20%3cspan%20id%3d%22ExternalLinksPanel%22%3e%3ca%20id%3d%22HelpLink%22%20title%3d%22Help%22%20target%3d%22_blank%22%3e%20%3cimg%20id%3d%22HelpImg%22%20%2f%3e%3c%2fa%3e%20%3ca%20id%3d%22EmbedLink%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterShowEmbed()%22%20title%3d%22Get%20this%20widget%20for%20your%20own%20site%22%3e%20%3cimg%20id%3d%22EmbedImg%22%20%2f%3e%3c%2fa%3e%20%3ca%20id%3d%22ShareLink%22%20title%3d%22Share%20translated%20page%20with%20friends%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterShowSharePanel()%22%3e%20%3cimg%20id%3d%22ShareImg%22%20%2f%3e%3c%2fa%3e%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterProgressBar%22%3e%20%3cspan%20id%3d%22ProgressFill%22%20%3e%3c%2fspan%3e%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22WidgetFloaterCollapsed%22%20style%3d%22display%3a%20none%22%3e%20%3cspan%3eTRANSLATE%20with%20%3c%2fspan%3e%3cimg%20id%3d%22CollapsedLogoImg%22%20%2f%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterSharePanel%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22ShareTextDiv%22%3e%20%3cspan%20id%3d%22ShareTextSpan%22%3e%20COPY%20THE%20URL%20BELOW%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareTextboxDiv%22%3e%20%3cinput%20name%3d%22ShareTextbox%22%20type%3d%22text%22%20id%3d%22ShareTextbox%22%20readonly%3d%22readonly%22%20%2f%3e%20%3c!--a%20id%3d%22TwitterLink%22%20title%3d%22Share%20on%20Twitter%22%3e%20%3cimg%20id%3d%22TwitterImg%22%20%2f%3e%3c%2fa%3e%20%3ca--%20id%3d%22FacebookLink%22%20title%3d%22Share%20on%20Facebook%22%3e%20%3cimg%20id%3d%22FacebookImg%22%20%2f%3e%3c%2fa--%3e%20%3ca%20id%3d%22EmailLink%22%20title%3d%22Email%20this%20translation%22%3e%20%3cimg%20id%3d%22EmailImg%22%20%2f%3e%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareFooter%22%3e%20%3cspan%20id%3d%22ShareHelpSpan%22%3e%3ca%20id%3d%22ShareHelpLink%22%3e%20%3cimg%20id%3d%22ShareHelpImg%22%20%2f%3e%3c%2fa%3e%3c%2fspan%3e%20%3cspan%20id%3d%22ShareBackSpan%22%3e%3ca%20id%3d%22ShareBack%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterOnShareBackClick()%22%20title%3d%22Back%20To%20Translation%22%3e%20Back%3c%2fa%3e%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cinput%20name%3d%22EmailSubject%22%20type%3d%22hidden%22%20id%3d%22EmailSubject%22%20value%3d%22Check%20out%20this%20page%20in%20%7b0%7d%20translated%20from%20%7b1%7d%22%20%2f%3e%20%3cinput%20name%3d%22EmailBody%22%20type%3d%22hidden%22%20id%3d%22EmailBody%22%20value%3d%22Translated%3a%20%7b0%7d%250d%250aOriginal%3a%20%7b1%7d%250d%250a%250d%250aAutomatic%20translation%20powered%20by%20Microsoft%c2%ae%20Translator%250d%250ahttp%3a%2f%2fwww.bing.com%2ftranslator%3fref%3dMSTWidget%22%20%2f%3e%20%3cinput%20type%3d%22hidden%22%20id%3d%22ShareHelpText%22%20value%3d%22This%20link%20allows%20visitors%20to%20launch%20this%20page%20and%20automatically%20translate%20it%20to%20%7b0%7d.%22%2f%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterEmbed%22%20style%3d%22display%3a%20none%22%3e%20%3cdiv%20id%3d%22EmbedTextDiv%22%3e%20%3cspan%20id%3d%22EmbedTextSpan%22%3eEMBED%20THE%20SNIPPET%20BELOW%20IN%20YOUR%20SITE%3c%2fspan%3e%20%3ca%20id%3d%22EmbedHelpLink%22%20title%3d%22Copy%20this%20code%20and%20place%20it%20into%20your%20HTML.%22%3e%20%3cimg%20id%3d%22EmbedHelpImg%22%2f%3e%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedTextboxDiv%22%3e%20%3cinput%20name%3d%22EmbedSnippetTextBox%22%20type%3d%22text%22%20id%3d%22EmbedSnippetTextBox%22%20readonly%3d%22readonly%22%20value%3d%22%26lt%3bdiv%20id%3d%26%2339%3bMicrosoftTranslatorWidget%26%2339%3b%20class%3d%26%2339%3bDark%26%2339%3b%20style%3d%26%2339%3bcolor%3awhite%3bbackground-color%3a%23555555%26%2339%3b%3e%26lt%3b%2fdiv%3e%26lt%3bscript%20type%3d%26%2339%3btext%2fjavascript%26%2339%3b%3esetTimeout(function()%7bvar%20s%3ddocument.createElement(%26%2339%3bscript%26%2339%3b)%3bs.type%3d%26%2339%3btext%2fjavascript%26%2339%3b%3bs.charset%3d%26%2339%3bUTF-8%26%2339%3b%3bs.src%3d((location%20%26amp%3b%26amp%3b%20location.href%20%26amp%3b%26amp%3b%20location.href.indexOf(%26%2339%3bhttps%26%2339%3b)%20%3d%3d%200)%3f%26%2339%3bhttps%3a%2f%2fssl.microsofttranslator.com%26%2339%3b%3a%26%2339%3bhttp%3a%2f%2fwww.microsofttranslator.com%26%2339%3b)%2b%26%2339%3b%2fajax%2fv3%2fWidgetV3.ashx%3fsiteData%3dueOIGRSKkd965FeEGM5JtQ**%26amp%3bctf%3dtrue%26amp%3bui%3dtrue%26amp%3bsettings%3dmanual%26amp%3bfrom%3den%26%2339%3b%3bvar%20p%3ddocument.getElementsByTagName(%26%2339%3bhead%26%2339%3b)%5b0%5d%7c%7cdocument.documentElement%3bp.insertBefore(s%2cp.firstChild)%3b%20%7d%2c0)%3b%26lt%3b%2fscript%3e%22%20%2f%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedNoticeDiv%22%3e%3cspan%20id%3d%22EmbedNoticeSpan%22%3eEnable%20collaborative%20features%20and%20customize%20widget%3a%20%3ca%20href%3d%22http%3a%2f%2fwww.bing.com%2fwidget%2ftranslator%22%20target%3d%22_blank%22%3eBing%20Webmaster%20Portal%3c%2fa%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedFooterDiv%22%3e%3cspan%20id%3d%22EmbedBackSpan%22%3e%3ca%20href%3d%22javascript%3aMicrosoft.Translator.FloaterOnEmbedBackClick()%22%20title%3d%22Back%20To%20Translation%22%3eBack%3c%2fa%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3cscript%20type%3d%22text%2fjavascript%22%3e%20var%20intervalId%20%3d%20setInterval(function%20()%20%7b%20if%20(MtPopUpList)%20%7b%20LanguageMenu%20%3d%20new%20MtPopUpList()%3b%20var%20langMenu%20%3d%20document.getElementById(LanguageMenu_popupid)%3b%20var%20origLangDiv%20%3d%20document.createElement(%22div%22)%3b%20origLangDiv.id%20%3d%20%22OriginalLanguageDiv%22%3b%20origLangDiv.innerHTML%20%3d%20%22%3cspan%20id%3d%27OriginalTextSpan%27%3eORIGINAL%3a%20%3c%2fspan%3e%3cspan%20id%3d%27OriginalLanguageSpan%27%3e%3c%2fspan%3e%22%3b%20langMenu.appendChild(origLangDiv)%3b%20LanguageMenu.Init(%27LanguageMenu%27%2c%20LanguageMenu_keys%2c%20LanguageMenu_values%2c%20LanguageMenu_callback%2c%20LanguageMenu_popupid)%3b%20window%5b%22LanguageMenu%22%5d%20%3d%20LanguageMenu%3b%20clearInterval(intervalId)%3b%20%7d%20%7d%2c%201)%3b%20%3c%2fscript%3e%20%3c%2fdiv%3e%20'));
            
            var code = '';
            var scripts = body.getElementsByTagName('script');
            //console.log(scripts);
            for (var i = numScripts; i < scripts.length; i++) {
                if (scripts[i].innerHTML.length != 0) {
                    code += scripts[i].innerHTML;
                }
            }
            //eval(code);
        } catch (e) {
            console.error(e);
        }

        Microsoft.Translator.FloaterInitialize('en', 'true', '');
    }

    loadAllScripts(onloadCallback);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //The codes above are local copy of translate scripts;

    function onTranslateProgress(value)
    {
        var msg = Math.round(value) + '%';
        showMessageBox(msg, "OnProgress");
    }

    function onTranslateError(error)
    {
        //Kept only for debugging;
        //alert('Translate Error: ' + error);
    }

    function onTranslateComplete()
    {
        var msg = BFI_DONEMSG;

        if( Microsoft.Translator.Widget.GetAutoDetectedLanguage().toUpperCase() === BFI_TOLANG.toUpperCase() )
        {
            msg = BFI_SAMELANGMSG;
        }

        showMessageBox(msg, 'OnFinished');
    }

    function showMessageBox(msg, msgType)
    {
        if (msgType === 'OnProgress' && !$('.' + ke.getPrefix() + 'fp-translate').hasClass(ke.getPrefix() + 'in-progress')) {
            // old stuff: .css('width', $('.' + ke.getPrefix() + 'fp-translate').width() + parseInt($('.' + ke.getPrefix() + 'fp-translate').css('padding-left')) * 2)
            $('.' + ke.getPrefix() + 'spinner').fadeIn(100);
            $('.' + ke.getPrefix() + 'fp-translate')
                .addClass(ke.getPrefix() + 'in-progress')
                .html('&nbsp;');
            $('.' + ke.getPrefix() + 'fp-options').slideUp(125);
            $('.' + ke.getPrefix() + 'mate-fp-bar .' + ke.getPrefix() + 'ui_selector').slideUp(75);
            $('.' + ke.getPrefix() + 'change-language').fadeOut(75, () => {
                    $('.' + ke.getPrefix() + 'stop-fp').fadeIn(75).css("display", "inline-block");
            });
            $('.' + ke.getPrefix() + 'toggle-iphone-settings').fadeOut(75, () => {
                
            });
        } else if (msgType === 'OnFinished') {
            $('.' + ke.getPrefix() + 'current-page-lang').html(ke.getLocale('FullPage_WeTranslatedIt').replace('{{language}}', ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(BFI_TOLANG))));
            $('.' + ke.getPrefix() + 'stop-fp').fadeOut(75, () => {
                const beaut_source_lang = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(last_detected_page_lang));

                $('.' + ke.getPrefix() + 'spinner').fadeOut(100);
                $('.' + ke.getPrefix() + 'fp-translate')
                    .removeClass(ke.getPrefix() + 'in-progress')
                    .addClass(ke.getPrefix() + 'show-original')
                    .html(ke.getLocale('FullPage_SwitchBackTo').replace('{{language}}', beaut_source_lang));
            });

            if ($('#' + ke.getPrefix() + 'always-translate').prop('checked') == true && !auto_hide_on_auto_translation_performed_once) {
                // indicate that auto-translation is there in a noticeable way
                // and then hide it not to obstruct the window
                // Ns after the translation is done
                //
                // upd, august 13th: don't hide on iPhone
                if (!iPhone) {
                    setTimeout(hideFPBar, 1500);
                    auto_hide_on_auto_translation_performed_once = true;
                }
            }
        }
    }

    /**
     * Load an external resource to the DOM to evaluate more scripts.
     */
    function loadScript(scriptName, onload) {
        // RDB

        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', scriptName);

        if (onload) {
            script.addEventListener('load', onload, false);
        }

        document.body.appendChild(script);
    }

    // above is the translator widget wrapper;
    function onTranslateTimer()
    {
        var transferDOM = document.getElementById('BFI_DATA');

        if(!transferDOM || !transferDOM.value || transferDOM.value === '') {
            //setTimeout(onTranslateTimer, 100);
        } else if (transferDOM.value === 'restore_original') {
            Microsoft.Translator.Widget.RestoreOriginal();
            transferDOM.value = '';
        } else if (transferDOM.value.indexOf(',') > -1) {
            var msg = transferDOM.value.split(',');

            BFI_TOLANG = msg[0];
            BFI_DONEMSG = msg[1];
            BFI_SAMELANGMSG = msg[2];
            BFI_LOADINGMSG = msg[3];
            BFI_CANCEL = msg[4];
            BFI_APPID = msg[5];

            // message transfer done.
            // clear data dom;
            //document.body.removeChild(transferDOM);

            // reset value instead of removing from DOM
            transferDOM.value = '';

            // start loading;
            onTranslateProgress(0);

            // the loaded script is filling latest BFI_APPID;

            // 1 indicates app id is successfully loaded;
            onTranslateProgress(1);

            Microsoft.Translator.Widget.Translate(null, BFI_TOLANG, onTranslateProgress, onTranslateError, onTranslateComplete, null, 3600000);
        }

        setTimeout(onTranslateTimer, 100);
    }

    // start to monitor transfer data;
    setTimeout(onTranslateTimer, 100);
}

function injectScript(fn) {
    //var script = document.createElement('script');
    //script.appendChild(document.createTextNode('(' + fn + ')();'));
    //document.body.appendChild(script);
    fn();
}

/**
 * Bing adds branding to the page when the translator has begun. This will
 * use Mutation Observers to listen on the newly added DOM and
 * remove it from display.
 */
function brandingRemoval() {
    // return;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || windows.MozMutationObserver;
    var observer = new MutationObserver(function onMutationObserver(mutations) {
        mutations.forEach(function(mutationNode) {
            if (mutationNode.addedNodes) {
                for (var n = 0; n < mutationNode.addedNodes.length; n++) {
                    var node = mutationNode.addedNodes[n];
                    if (node.id === 'WidgetFloaterPanels') {
                        node.style.display = 'none';
                        node.style.visibility = 'hidden';
                    }
                }
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: false });
}


var transferDom;
/**
 * Create shared DOM to transfer between two worlds
 */
function embedTransferDom()
{
    // return;
    transferDom = document.createElement('textarea');
    transferDom.id = 'BFI_DATA';
    transferDom.style.width='1px';
    transferDom.style.height='1px';
    transferDom.style.display='none';
    document.body.appendChild(transferDom);
}

/**
 * Fires an event to the Browser context for cross context messaging.
 */
function dispatch(msg) {
    transferDom = document.getElementById('BFI_DATA');
    transferDom.value = msg;

    // also dispatch it to all iframes
    // they have their own TransferDOMs
    // it's more robust than to use one in the parent frame because of weird solutions that clear out the textarea
    // could have led to race conditions
    let iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; ++i) {
        let iframeTransferDom = iframes[i].contentWindow.document.getElementById('BFI_DATA');
        if (iframeTransferDom !== null) {
            iframeTransferDom.value = msg;
        }
    }
}

// Initialize the extension communications shared DOM states.
$(() => {
    let ignore_this_page = false;
    for (let i = 0; i < WEBSITES_TO_IGNORE.length; ++i) {
        if (document.location.hostname.match(new RegExp(WEBSITES_TO_IGNORE[i])) !== null) {
            ignore_this_page = true;
            break;
        }
    }

    if (ignore_this_page) {
        // console.log('do not inject communication dom or something');
        return;
    }

    embedTransferDom();
    brandingRemoval();
    injectScript(fpTranslate);
});

function checkCommunication() {
    var data = document.getElementById('BFI_DATA');

    if (!data || !data.value) {
        // do nothing
    } else if (data.value === 'init_mate') {
        data.value = 'restore_original';

        $('.TnITTtw-fullpage-bar').animate({
            bottom: -100
        }, 150, function() {
            $(this).remove();

            init();
        });
    }

    setTimeout(checkCommunication, 100);
}

setTimeout(checkCommunication, 100);

const WEBSITES_TO_IGNORE = [
    "paddle.com",
	"(.*).youtube.com",
	"www.google.(.*)",
	"(.*).facebook.com",
	"localhost",
	"(.*).google.com",
	"github.com",
	"127.0.0.1",
	"outlook.live.com",
	"twitter.com",
	"www.twitch.tv",
	"www.instagram.com",
	"web.whatsapp.com",
	"www.netflix.com",
	"www.baidu.com",
	"outlook.office.com",
	"www.xvideos.com",
	"vk.com",
	"www.amazon.com",
	"(.*)pornhub.com",
	"www.figma.com",
	"teams.microsoft.com",
	"nhentai.net",
	"outlook.office365.com",
	"scholar.google.com",
	"www.notion.so",
	"www.pinterest.com",
	"192.168.1.1",
	"mail.protonmail.com",
	"www.linkedin.com",
	"www.reddit.com",
	"app.memrise.com",
	"yandex.ru",
	"www.pornhub.com",
	"gitlab.com",
	"bitbucket.org",
	"chaturbate.com",
    "(.*).bilibili.com",
    "www.canva.com",
    "www.speedtest.net",
    "weibo.com",
    "(.*).qq.com",
    "tradingview.com",
    "www.tiktok.com",
    "web.telegram.org"
];

const BING_LANGS = {
    "bs": "bs-Latn",
    "sr": "sr-Cyrl",
    "zh-TW": "zh-CHT",
    "zh-CN": "zh-CHS",
    "iw": "he"
};

function getBingCompatibleLang(lang) {
    return BING_LANGS[lang] || lang;
}

function getLocale(msg) {
    return msg;
}

function translateFullpage(to) {
    dispatch(getBingCompatibleLang(to) + ',Translated to ' + getLocale(to) + ',' + 'Already in ' + getLocale(to) + ',' + getLocale("Translating...") + ',' + 'cancel' + ',' + '000000000A9F426B41914349A3EC94D7073FF941');
    //shutExtensionDown(true);
    //sendAmplitudeEvent('actext_translate_fullpage');
}

const SKIPPED_HTML_TAGS = {
    style: true, svg: true, script: true, noscript: true, 
    figure: true, path: true, img: true, canvas: true, 
    rect: true, iframe: true, tspan: true, use: true
};

function detectPageLanguage(callback) {
    // mate note
    // safari workaround bc it doesn't have chrome.i18n
    
    if (isIOS()) {
        browser.runtime.sendMessage({
            action: "detect_tab_language"
        }).then((response) => {
            let lang = response.language;
            if (lang === 'zh') {
                lang = 'zh-CN';
            }
            // console.log('page lang:', lang);
            callback(lang);
        });
    } else {
        console.time('page lang detection');
        
        let page_text = '';
        $('body *').each(function() {
            if ($(this).is(':visible')
                && ($(this).attr('class') || '').indexOf(ke.getPrefix()) === -1
                && $(this).children().length === 0
                && !(this.tagName.toLowerCase() in SKIPPED_HTML_TAGS)) {

                page_text += '\n' + $(this).text();
            }
        });
        
        chrome.i18n.detectLanguage(page_text, (data) => {
            console.timeEnd('page lang detection');
            let lang = data.languages[0].language;
            if (lang === 'zh') {
                lang = 'zh-CN';
            }
            callback(lang);

            // console.log(lang + ':', data.languages[0].percentage + '% probability');
            // console.log(data.languages);
        });
    }
}

let last_detected_page_lang = '';
auto_hide_on_auto_translation_performed_once = false;

// `forced_show` is for when we need to show it regardless of exceptions
// via context menu for example
// override all exceptions then and just show it
function tryShowingMateBar(forced_show, forced_auto_translate) {
    // iframes, fuck off
    if (window.location.href !== window.parent.location.href) {
        return;
    }

    // if it's collapsed & someone tries to re-open it via context menu
    // most likely they could not find that little floating button
    // don't disappoint them with a non-working CM button
    if (forced_show && $('.' + ke.getPrefix() + 'mate-fp-bar').length > 0) {
        showFPBarAgain();
        return;
    }

    // 
    let ignore_this_page = false;
    for (let i = 0; i < WEBSITES_TO_IGNORE.length; ++i) {
        if (document.location.hostname.match(new RegExp(WEBSITES_TO_IGNORE[i])) !== null) {
            ignore_this_page = true;
            break;
        }
    }

    // if they want to, they surely can translate it though: via context menu's `forced_show`
    if (!forced_show && ignore_this_page) {
        return;
    }

    ke.ext.util.storageUtil.chainRequestBackgroundOption([
        {fn: 'getVal', args:['fp_to_lang']},
        {fn: 'getDecodedVal', args:['fp_always_translate']},
        {fn: 'getDecodedVal', args:['fp_never_translate_langs']},
        {fn: 'getDecodedVal', args:['fp_never_translate_sites']},
        {fn: 'isTrueOption', args:['dark_mode']},
        {fn: 'isTrueOption', args:['fullpage']} // auto show the banner?
    ], function (responses) {
        const to_lang = responses[0].response;
        const always_translate = responses[1].response;
        const never_translate_langs = responses[2].response;
        const never_translate_sites = responses[3].response;
        const dark_mode = responses[4].response;
        const is_auto_show_enabled = responses[5].response;

        if (forced_show || forced_auto_translate || (is_auto_show_enabled && !(document.location.hostname in never_translate_sites))) {
            detectPageLanguage((page_lang) => {
                // check if it's supported at all
                if (!ke.ext.util.langUtil.getLangNameByKey(page_lang)) {
                    return;
                }
                
                // Override page language for when user tries to re-open FP via context menu
                // If auto-translation is enabled, it will try to detect page's language when it's already been translated
                // Take previously detected language, thus
                if (forced_show && last_detected_page_lang) {
                    page_lang = last_detected_page_lang;
                }

                //console.log('Preferred lang vs page lang:', to_lang, page_lang);
        
                if (forced_show || forced_auto_translate || !(page_lang in never_translate_langs)) {
                    last_detected_page_lang = page_lang;
        
                    if (forced_show || forced_auto_translate || to_lang !== page_lang) {
                        // mate bar w=352, h=167
                        const pop_up_to_window_ratio =  (352 * 167) / ($(window).width() * $(window).height());
                        const auto_translate = (page_lang in always_translate && to_lang in always_translate[page_lang] && !forced_show);
                        let instant_hide = false;

                        // don't show the full-sized bar sometimes:
                        // 1. if the window is too small
                        // 2. if user didn't translate anything on the index page,
                        // it's unlikely we should keep bothering them after they click links and go deeper
                        // https://gikken.slack.com/archives/G586J07L3/p1626081123004700
                        if (!auto_translate && (pop_up_to_window_ratio > 0.12 || (localStorage['friends_with_mate'] == "true" && localStorage['mate_worked'] == undefined))) {
                            instant_hide = true;
                        }

                        //console.log('pop up to window ratio:', pop_up_to_window_ratio);

                        showMateBar(page_lang, to_lang, dark_mode, instant_hide);

                        if (document.location.hostname in never_translate_sites) {
                            $('#' + ke.getPrefix() + 'never-translate-site').prop('checked', true);
                        }

                        if (page_lang in never_translate_langs) {
                            $('#' + ke.getPrefix() + 'never-translate-lang').prop('checked', true);
                        }

                        ke.ext.util.storageUtil.requestProStatus(is_pro => {
                            // if user starts free trial, they can enable auto-translation
                            // if trial ends, the option still remains enabled
                            // and they can keep using auto-translate for free past their free trial
                            // to prevent that, we need to check on their Pro status
                            // it's not that relevant for extensions that are still not sub-based, but still works

                            // automatic translation for certain language pairs
                            // if user opens it from context menu (`forced_show` == true), don't auto-translate
                            if (auto_translate && is_pro) {
                                $('#' + ke.getPrefix() + 'always-translate').prop('checked', true);
                                translateFullpage(to_lang);
                                
                                // prevent from idle auto-hide bc if it's translated automatically, it hides itself
                                stop_triggers = true;

                                localStorage['mate_worked'] = true;

                                chrome.runtime.sendMessage({
                                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                                    cat: 'translation',
                                    event: 'fullpage',
                                    subevent: 'automatic'
                                });

                                chrome.runtime.sendMessage({
                                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                                    cat: 'full-page',
                                    event: 'automatic-translate',
                                    subevent: page_lang + ' -> ' + to_lang
                                });
                            } else if (forced_auto_translate) {
                                translateFullpage(to_lang);
                            }
                        });
                    }
                }                
            });
        }
    });
}

const MATE_FP_BAR_HTML = '\
<div class="' + ke.getPrefix() + 'fp-collapsed-button"></div>\
<div class="' + ke.getPrefix() + 'mate-fp-bar" translate="no">\
    <div class="' + ke.getPrefix() + 'hide-fp-bar"></div>\
    <div class="' + ke.getPrefix() + 'current-page-lang"><%=current_page_lang%></div>\
    <div class="' + ke.getPrefix() + 'cta-button-layout">\
        <div class="' + ke.getPrefix() + 'spinner">\
            <div class="' + ke.getPrefix() + 'bounce1"></div>\
            <div class="' + ke.getPrefix() + 'bounce2"></div>\
            <div class="' + ke.getPrefix() + 'bounce3"></div>\
        </div>\
        <div class="' + ke.getPrefix() + 'mw-button ' + ke.getPrefix() + 'fp-translate ' + ke.getPrefix() + 'high-cta"><%=translate_to%></div>\
    </div>\
    <div class="' + ke.getPrefix() + 'change-language ' + ke.getPrefix() + 'select" data-for-serial="3"></div>\
    <div class="' + ke.getPrefix() + 'stop-fp"></div>\
    <div class="' + ke.getPrefix() + 'toggle-iphone-settings"></div>\
    <div class="' + ke.getPrefix() + 'ui_selector">\
        <div class="' + ke.getPrefix() + 'options-arrow"></div>\
        <div class="' + ke.getPrefix() + 'options ' + ke.getPrefix() + 'opt-3 ' + ke.getPrefix() + 'standalone" data-serial="3">\
            <div class="' + ke.getPrefix() + 'dd-search">\
                <input class="' + ke.getPrefix() + 'dd-input" type="text" data-dir="to" placeholder="<%=lang_search%>">\
            </div>\
            <div id="selVisibleScroll-3">\
                <div id="selEntireScroll-3">\
                    <div class="' + ke.getPrefix() + 'inner-options-layout">\
                        <ul class="' + ke.getPrefix() + 'list"></ul>\
                    </div>\
                </div>\
                <div id="sel-scrollbar-3">\
                    <div id="sel-track-3">\
                        <div id="sel-dragBar-3"></div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="' + ke.getPrefix() + 'fp-options">\
        <input type="checkbox" id="' + ke.getPrefix() + 'always-translate"><label for="' + ke.getPrefix() + 'always-translate" class="' + ke.getPrefix() + 'always-translate-label"><span class="' + ke.getPrefix() + 'always-translate-inner-label"><%=always_translate%></span><span class="' + ke.getPrefix() + 'pro-label">PRO</span></label>\
        <br>\
        <input type="checkbox" id="' + ke.getPrefix() + 'never-translate-lang"><label for="' + ke.getPrefix() + 'never-translate-lang" class="' + ke.getPrefix() + 'never-translate-lang-label"><%=never_translate_lang%></label>\
        <br>\
        <input type="checkbox" id="' + ke.getPrefix() + 'never-translate-site"><label for="' + ke.getPrefix() + 'never-translate-site" class="' + ke.getPrefix() + 'never-translate-site-label"><%=never_translate_site%></label>\
    </div>\
</div>';

const maxZ = Math.max.apply(null,
    $.map($('body *'), function (e, n) {
        if ($(e).css('position') != 'static')
            return parseInt($(e).css('z-index')) || 1;
    }));
const iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;

if (typeof isIOS !== 'function') {
    function isIOS() {
        return iPhone || isIpad();
    }
}

if (typeof isIpad !== 'function') {
    function isIpad() {
    const ua = window.navigator.userAgent;

    if (ua.indexOf('iPad') > -1) {
        return true;
    }

    if (ua.indexOf('Macintosh') > -1) {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {}
    }

    return false;
    }
}

function showMateBar(page_lang, target_lang, dark_mode, instant_hide) {
    // remove previous bars if there were any
    // for example when user reinstalls the extension
    // `mate_bar_shown` flag would be false, yet HTML would be still there
    $('.' + ke.getPrefix() + 'mate-fp-bar').remove();

    const beaut_source = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(page_lang));
    const beaut_target = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(target_lang));

    let bar_inserting_method = 'append';
    
    if (iPhone) {
        bar_inserting_method = 'prepend';
    }

    $('body')[bar_inserting_method](ke.ext.tpl.compile(MATE_FP_BAR_HTML, {
        current_page_lang: ke.getLocale('FullPage_CurrentPageLang').replace('{{page_lang_beautiful}}', beaut_source),
        translate_to: ke.getLocale('FullPage_TranslateTo').replace('{{target_lang_beautiful}}', beaut_target),
        change_lang: ke.getLocale('FullPage_ChangeLanguage'),
        lang_search: ke.getLocale('Kernel_SearchPlaceholder'),
        always_translate: ke.getLocale('FullPage_AlwaysTranslate')
            .replace('{{page_lang_beautiful}}', beaut_source)
            .replace('{{target_lang_beautiful}}', beaut_target),
        never_translate_lang: ke.getLocale('FullPage_NeverTranslate').replace('{{page_lang_beautiful}}', beaut_source),
        never_translate_site: ke.getLocale('FullPage_NeverTranslate').replace('{{page_lang_beautiful}}', document.location.hostname)
    }));

    if (iPhone) {
        $('.' + ke.getPrefix() + 'mate-fp-bar').addClass(ke.getPrefix() + 'iphone-version');
    }
    
//    alert(isIOS())
    
    if (isIOS()) {
        $('.' + ke.getPrefix() + 'fp-options').remove();
    }

    // sometimes we know that we should show the full-sized banner
    // for example in windows that are too small
    if (instant_hide) {
        hideFPBar(1);
    } else {
        localStorage['friends_with_mate'] = true;
    }

    $('.' + ke.getPrefix() + 'mate-fp-bar').css('z-index', maxZ + 1);

    if (dark_mode) {
        $('.' + ke.getPrefix() + 'mate-fp-bar').addClass(ke.getPrefix() + 'dark-mode');
    }

    $('.' + ke.getPrefix() + 'toggle-iphone-settings').on('click', toggleiPhoneSettings);
    $('.' + ke.getPrefix() + 'hide-fp-bar').on('click', hideFPBar);
    $('.' + ke.getPrefix() + 'fp-collapsed-button').on('click', showFPBarAgain);
    $('.' + ke.getPrefix() + 'fp-translate').on('click', function() {
        if ($(this).hasClass(ke.getPrefix() + 'in-progress')) {
            return;
        }

        if ($(this).hasClass(ke.getPrefix() + 'show-original')) {
            stopFP();

            chrome.runtime.sendMessage({
                action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                cat: 'full-page',
                event: 'show-original',
                subevent: last_detected_page_lang
            });
        } else {
            ke.ext.util.storageUtil.requestBackgroundOption('getVal', ['fp_to_lang'], (to_lang) => {
                translateFullpage(to_lang);

                localStorage['mate_worked'] = true;

                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                    cat: 'translation',
                    event: 'fullpage',
                    subevent: 'manual'
                });

                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                    cat: 'full-page',
                    event: 'manual-translate',
                    subevent: last_detected_page_lang + ' -> ' + to_lang
                });
            });
        }
    });
    $('.' + ke.getPrefix() + 'stop-fp').on('click', stopFP);
    $('#' + ke.getPrefix() + 'always-translate').change(alwaysTranslateOptionClicked);
    $('#' + ke.getPrefix() + 'never-translate-lang').change(neverTranslateLangOptionClicked);
    $('#' + ke.getPrefix() + 'never-translate-site').change(neverTranslateSiteOptionClicked);

    ke.app.initDropdowns();
    initAutoHideTriggers();

    ke.ext.util.storageUtil.requestProStatus((is_pro) => {
        if (is_pro) {
            $('.' + ke.getPrefix() + 'pro-label').remove();
            $('.' + ke.getPrefix() + 'always-translate-inner-label').css('max-width', '297px');
        } else {
            const openProUpgradePrompt = () => {
                let sub_upgrade_plan = '';
                if (ke.IS_FIREFOX) {
                    sub_upgrade_plan = 'annual,';
                }

                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'opt', 'newTab'),
                    url: chrome.extension.getURL('/pages/public/options.html#start_purchase,' + sub_upgrade_plan + 'automatic-full-page')
                });

                // replace last_detected_page_lang with user's country here
                ke.ext.util.storageUtil.requestBackgroundOption('getVal', ['user_country'], user_contry => {
                    chrome.runtime.sendMessage({
                        action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                        cat: 'full-page',
                        event: 'upgrade-to-pro-for-auto-translation',
                        subevent: user_contry //last_detected_page_lang
                    });
                });
            };

            $('#' + ke.getPrefix() + 'always-translate').attr('readonly', 'readonly').on('click', openProUpgradePrompt);
            $('#' + ke.getPrefix() + 'always-translate + label').addClass(ke.getPrefix() + 'not-pro');
            $('#' + ke.getPrefix() + 'always-translate, #' + ke.getPrefix() + 'always-translate + label');//.on('click', openProUpgradePrompt);
        }
    });

    // most likely there's something going on with styles if FP pop-up's height gets fucked up
    if ($('.' + ke.getPrefix() + 'mate-fp-bar').height() >= 140) {
        chrome.runtime.sendMessage({
            action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
            cat: 'full-page',
            event: 'conflicting-styles',
            subevent: document.location.hostname
        });
    }
}

function toggleiPhoneSettings() {
    $('.' + ke.getPrefix() + 'ios-options').slideToggle(125);
}

// Not to be too annoying, the bar shouldn't sit all-expanded all the time.
// So, we'll put the following triggers in place to auto-hide it:
//   * timer, if cursor not in FP window (3s)
//   * click somewhere on the page
//   * scroll more than 100px
let is_mouse_above_fp_bar = false;
let stop_triggers = false;

function initAutoHideTriggers() {
    if (iPhone) {
        return;
    }

    $('.' + ke.getPrefix() + 'mate-fp-bar').on('mouseover', () => {
        is_mouse_above_fp_bar = true;
    }).on('mouseout', () => {
        is_mouse_above_fp_bar = false;
    });

    // timer, if cursor not in FP window (3s)
    setTimeout(() => {
        if (!is_mouse_above_fp_bar && !stop_triggers) {
            // console.log('trying to hide the bar after 3s');
            hideFPBar();
        }
    }, 3000);

    // click somewhere on the page, that's not FP bar, of course
    $('body').on('click', function(event) {
        if (!stop_triggers && typeof event.target.className === 'string' && event.target.className.indexOf(ke.getPrefix()) === -1) {
            hideFPBar();
        } else if (typeof event.target.className === 'string' && event.target.className.indexOf(ke.getPrefix()) > -1) {
            stop_triggers = true;
        }
    });

    // scroll more than 100px
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100 && !stop_triggers) {
            hideFPBar();
            stop_triggers = true;
        }
    });
}

function onFPLangSelectorValueChanged(serial, v) {
    const beaut_source = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(last_detected_page_lang));
    const beaut_target = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(v));
        
    $('.' + ke.getPrefix() + 'fp-translate').html(ke.getLocale('FullPage_TranslateTo').replace('{{target_lang_beautiful}}', beaut_target));
    $('.' + ke.getPrefix() + 'always-translate-inner-label').html(ke.getLocale('FullPage_AlwaysTranslate')
        .replace('{{page_lang_beautiful}}', beaut_source)
        .replace('{{target_lang_beautiful}}', beaut_target));

    // since we change the target language, the old Always Translate selection becomes irrelevant – refresh it
    ke.ext.util.storageUtil.requestBackgroundOption('getDecodedVal', ['fp_always_translate'], (always_translate) => {
        const is_enabled = last_detected_page_lang in always_translate && v in always_translate[last_detected_page_lang];
        $('#' + ke.getPrefix() + 'always-translate').prop('checked', is_enabled);
    });

    chrome.runtime.sendMessage({
        action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
        cat: 'full-page',
        event: 'change-language',
        subevent: v
    });
}

let prev_fp_bar_height = 0;

// hide it (temporarily) to free up the viewport
function hideFPBar(timeout) {
    if (iPhone) {
        $('.' + ke.getPrefix() + 'mate-fp-bar').slideUp(125);
    } else {
        // can't double hide
        if (!$('.' + ke.getPrefix() + 'mate-fp-bar').is(':visible')) {
            // console.log('not gonna hide it twice');
            return;
        }

        // 135 is its normal height
        // sometimes it may return 0 – when it's an instant hide and the bar hasn't been expanded properly
        // we could wait a few milliseconds to read the correct value
        // but then it blickers, so better hard-code its normal value for smooth experience
        prev_fp_bar_height = $('.' + ke.getPrefix() + 'mate-fp-bar').height() || 135;

        $('.' + ke.getPrefix() + 'mate-fp-bar *').each(function() {
            if ($(this).is(':visible')) {
                $(this).fadeOut(timeout || 175);
            } else {
                $(this).data('was-hidden', true);
            }
        });

        $('.' + ke.getPrefix() + 'mate-fp-bar').animate({
            width: 0,
            height: 0,
            opacity: 0
        }, timeout || 175, function() {
            $(this).hide();
        });

        $('.' + ke.getPrefix() + 'fp-collapsed-button').fadeIn(timeout || 125);
    }

    if (this instanceof HTMLElement) {
        chrome.runtime.sendMessage({
            action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
            cat: 'full-page',
            event: 'manual-hide',
            subevent: ''
        });
    }
}

function showFPBarAgain() {
    // console.log(prev_fp_bar_height);

    $('.' + ke.getPrefix() + 'fp-collapsed-button').fadeOut(125);

    $('.' + ke.getPrefix() + 'mate-fp-bar').show().animate({
        width: 320,
        height: prev_fp_bar_height,
        opacity: 1.0
    }, 175, function() {
        // switch back button expands the options which causes problems if the height is hard-coded
        $(this).css('height', 'auto'); 
    });

    $('.' + ke.getPrefix() + 'mate-fp-bar *').each(function() {
        if ($(this).data('was-hidden') !== true) {
            $(this).fadeIn(175);
        }
    });
}

// shuw it down entirely, e.g. when user doesn't want to translate on a certain hostname or between certain languages
function shutdownFP() {
    document.getElementById('BFI_DATA').value = 'init_mate';

    $('.' + ke.getPrefix() + 'mate-fp-bar').animate({
        opacity: 0.0,
        top: -300
    }, 175, function() {
        $(this).remove();
    });
}

function stopFP() {
    document.getElementById('BFI_DATA').value = 'init_mate';

    ke.ext.util.storageUtil.requestBackgroundOption('getVal', ['fp_to_lang'], function (to_lang) {
        const beaut_source = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(last_detected_page_lang));
        const beaut_target = ke.getLocale('Kernel_Lang_' + ke.ext.util.langUtil.getLangNameByKey(to_lang));
        
        $('.' + ke.getPrefix() + 'mate-fp-bar .' + ke.getPrefix() + 'ui_selector').slideDown(75);
        $('.' + ke.getPrefix() + 'current-page-lang').html(ke.getLocale('FullPage_CurrentPageLang').replace('{{page_lang_beautiful}}', beaut_source));
        $('.' + ke.getPrefix() + 'fp-translate')
            .removeClass(ke.getPrefix() + 'show-original')
            .removeClass(ke.getPrefix() + 'in-progress')
            .removeClass(ke.getPrefix() + 'show-original')
            .html(ke.getLocale('FullPage_TranslateTo').replace('{{target_lang_beautiful}}', beaut_target));

        $('.' + ke.getPrefix() + 'spinner').fadeOut(100);
        
        if ($('.' + ke.getPrefix() + 'mate-fp-bar').hasClass(ke.getPrefix() + 'iphone-version')) {
            $('.' + ke.getPrefix() + 'toggle-iphone-settings').fadeIn(75).css('display', 'inline-block');
        } else {
            if (isIOS()) {
                $('.' + ke.getPrefix() + 'ios-options').slideDown(125);
            } else {
                $('.' + ke.getPrefix() + 'fp-options').slideDown(125);
            }
        }

        // because button width changing animation takes 250ms via .css
        setTimeout(() => {
            $('.' + ke.getPrefix() + 'stop-fp').fadeOut(75, () => {
                $('.' + ke.getPrefix() + 'change-language').fadeIn(75).css("display", "inline-block");
            });
        }, 250);
    });
}

function alwaysTranslateOptionClicked() {
    var is_read_only = $(this).attr("readonly") === undefined ? false : true;

    if (is_read_only) {
        this.checked = !this.checked;
        return;
    } 

    const always_option_value = this.checked;
    
    ke.ext.util.storageUtil.chainRequestBackgroundOption([
        {fn: 'getDecodedVal', args: ['fp_always_translate']},
        {fn: 'getVal', args: ['fp_to_lang']}
    ], function (responses) {
        let always_translate = responses[0].response;
        const to_lang = responses[1].response;

        always_translate[last_detected_page_lang] = always_translate[last_detected_page_lang] || {};
        
        if (always_option_value) {
            always_translate[last_detected_page_lang][to_lang] = always_option_value;
        } else {
            delete always_translate[last_detected_page_lang][to_lang];
        }

        ke.ext.util.storageUtil.requestBackgroundOption('encodeAndSet', ['fp_always_translate', always_translate], function () {
            if (always_option_value) {
                translateFullpage(to_lang);

                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                    cat: 'full-page',
                    event: 'always-translate',
                    subevent: last_detected_page_lang + ' -> ' + to_lang
                });
            }
        });
    });
}

function neverTranslateLangOptionClicked() {
    // Switched from `if (this.checked)` because there should also be a way to remove a language from exceptions
    const never_translate_option = this.checked;

    ke.ext.util.storageUtil.requestBackgroundOption('getDecodedVal', ['fp_never_translate_langs'], function (never_translate_langs) {
        if (never_translate_option) {
            never_translate_langs[last_detected_page_lang] = true;
        } else {
            delete never_translate_langs[last_detected_page_lang];
        }

        ke.ext.util.storageUtil.requestBackgroundOption('encodeAndSet', ['fp_never_translate_langs', never_translate_langs], function () {
            if (never_translate_option) {
                shutdownFP();
                
                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                    cat: 'full-page',
                    event: 'never-translate-lang',
                    subevent: last_detected_page_lang
                });
            }
        });
    });
}

function neverTranslateSiteOptionClicked() {
    // Switched from `if (this.checked)` because there should also be a way to remove a site from exceptions
    const never_translate_option = this.checked;

    ke.ext.util.storageUtil.requestBackgroundOption('getDecodedVal', ['fp_never_translate_sites'], function (never_translate_sites) {
        if (never_translate_option) {
            never_translate_sites[document.location.hostname] = true;
        } else {
            delete never_translate_sites[document.location.hostname];
        }
        ke.ext.util.storageUtil.requestBackgroundOption('encodeAndSet', ['fp_never_translate_sites', never_translate_sites], function () {
            if (never_translate_option) {
                shutdownFP();

                chrome.runtime.sendMessage({
                    action: ke.processCall('app', 'commands', 'sendAnalyticsEvent'),
                    cat: 'full-page',
                    event: 'never-translate-site',
                    subevent: document.location.hostname
                });
            }
        });
    });
}