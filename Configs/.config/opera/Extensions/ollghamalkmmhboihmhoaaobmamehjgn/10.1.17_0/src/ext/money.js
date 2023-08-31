/**
 * Created by chernikovalexey on 18/09/17.
 */

(function (undefined) {

    // for commented currencies, ECB does not provide any data on conversion rates
    const CURRENCIES = {
        //"ALL": "Lek",
        //"AWG": "ƒ",
        "AUD": "$",
        //"AZN": "ман",
        //"BSD": "$",
        //"BBD": "$",
        //"BZD": "BZ$",
        //"BMD": "$",
        //"BAM": "KM",
        //"BWP": "P",
        //"BGN": "лв",
        "BRL": "R$",
        //"BND": "$",
        //"KHR": "៛",
        "CAD": "$",
        //"KYD": "$",
        "CNY": "¥",
        //"COP": "$",
        "HRK": "kn",
        "CZK": "Kč",
        "DKK": "kr",
        //"DOP": "RD$",
        //"XCD": "$",
        //"EGP": "£",
        //"SVC": "$",
        "EUR": "€",
        //"FKP": "£",
        //"FJD": "$",
        //"GIP": "£",
        //"GTQ": "Q",
        //"GYD": "$",
        //"HNL": "L",
        "HKD": "$",
        "HUF": "Ft",
        //"ISK": "kr",
        "INR": "INR",
        //"IDR": "Rp",
        //"ILS": "₪",
        //"JMD": "J$",
        //"KZT": "₸",
        //"KGS": "сом",
        //"LAK": "₭",
        //"LBP": "£",
        //"LRD": "$",
        //"MKD": "ден",
        //"MYR": "RM",
        //"MUR": "₨",
        //"MXN": "$",
        //"MNT": "₮",
        //"MZN": "MT",
        //"NAD": "$",
        //"NPR": "₨",
        //"ANG": "ƒ",
        "NZD": "$",
        //"NIO": "C$",
        //"NGN": "₦",
        //"NOK": "kr",
        //"PKR": "₨",
        //"PAB": "B/.",
        //"PEN": "S/.",
        //"PHP": "₱",
        "PLN": "zł",
        //"QAR": "﷼",
        //"RON": "lei",
        "RUB": "руб",
        //"SHP": "£",
        //"SAR": "﷼",
        //"RSD": "Дин.",
        //"SCR": "₨",
        "SGD": "$",
        //"SBD": "$",
        //"SOS": "S",
        "ZAR": "R",
        //"LKR": "₨",
        "SEK": "kr",
        "CHF": "CHF",
        //"SRD": "$",
        //"TWD": "NT$",
        //"THB": "฿",
        //"TTD": "TT$",
        //"TRY": "TRY",
        //"UAH": "₴",
        "GBP": "£",
        "USD": "$"
        //"UYU": "$U",
        //"UZS": "сўм",
        //"YER": "﷼"
    };

    pl.extend(ke.ext.money, {
        currencyCodeToSymbol: function (code) {
            return CURRENCIES[code] || code;
        },

        getCurrencyForCountryCode: function (cc) {
            return C2C[cc] || 'USD';
        },

        updateCurrencyRates: function (callback) {
            $.ajax({
                url: 'https://api.fixer.io/latest',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    base: 'EUR'
                },
                success: function (r) {
                    if (r.rates) {
                        ke.ext.util.storageUtil.setVal('conversion_rates', JSON.stringify(
                            r.rates
                        ));

                        if (callback) callback();
                    }
                }
            });
        }
    });

})();