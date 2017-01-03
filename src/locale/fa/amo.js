module.exports = { domain:"messages",
  locale_data:{ messages:{ "":{ domain:"messages",
        plural_forms:"nplurals=1; plural=0;",
        lang:"fa" },
      "%(addonName)s %(startSpan)sby %(authorList)s%(endSpan)s":[ "%(addonName)s %(startSpan)s از %(authorList)s %(endSpan)s" ],
      "Extension Metadata":[ "فرادادهٔ ضمیمه" ],
      Screenshots:[ "تصاویر صفحه" ],
      "About this extension":[ "درباره این ضمیمه" ],
      "Rate your experience":[ "به تجربه خود امتیاز بدهید" ],
      Category:[ "دسته‌بندی" ],
      "Used by":[ "استفاده شده توسط" ],
      Sentiment:[ "تمایل" ],
      Back:[ "برگشت" ],
      Submit:[ "ارسال" ],
      "Please enter some text":[ "لطفا متنی وارد کنید" ],
      "Write a review":[ "یک بررسی بنویسید" ],
      "Tell the world why you think this extension is fantastic!":[ "به همه دنیا بگویید که چرا این ضمیمه باحال است!" ],
      "Privacy policy":[ "سیاست‌های حریم‌خصوصی" ],
      "Legal notices":[ "نکات حقوقی" ],
      "View desktop site":[ "نمایش میزکار وب‌سایت" ],
      "Browse in your language":[ "مرور به زبان شما" ],
      "Firefox Add-ons":[ "افزونه‌های فایرفاکس" ],
      "How are you enjoying your experience with %(addonName)s?":[ "از تجربه خود در استفاده از %(addonName)s چه فکری می‌کنید؟" ],
      "screenshot %(imageNumber)s of %(totalImages)s":[ "تصویر صفحهٔ %(imageNumber)s از %(totalImages)s" ],
      "Average rating: %(rating)s out of 5":[ "میانگین امتیازها: %(rating)s از ۵" ],
      "No ratings":[ "بدون امتیاز" ],
      "%(users)s user":[ "%(users)s کاربر" ],
      "Log out":[ "خروج" ],
      "Log in/Sign up":[ "ورود/ثبت‌نام" ],
      "Add-ons for Firefox":[ "افزونه‌های فایرفاکس" ],
      "What do you want Firefox to do?":[ "می‌خواهید فایرفاکس برای شما چه کار کند؟" ],
      "Block ads":[ "مسدود کردن تبلیغات" ],
      Screenshot:[ "گرفتن عکس از صفحه" ],
      "Save stuff":[ "ذخیره چیزها" ],
      "Shop online":[ "خرید آنلاین" ],
      "Be social":[ "اجتماعی بودن" ],
      "Share stuff":[ "اشتراک‌گذاری چیزها" ],
      "Browse all extensions":[ "مرور تمام ضمیمه‌ها" ],
      "How do you want Firefox to look?":[ "می‌خواهید فایرفاکس چه شکلی باشد؟" ],
      Wild:[ "خشن" ],
      Abstract:[ "انتضاعی" ],
      Fashionable:[ "مُدِ روز" ],
      Scenic:[ "خوش منظر" ],
      Sporty:[ "ورزشی" ],
      Mystical:[ "مرموز" ],
      "Browse all themes":[ "مرور تمام تم‌ها" ],
      "Downloading %(name)s.":[ "در حال دریافت %(name)s." ],
      "Installing %(name)s.":[ "در حال نصب %(name)s." ],
      "%(name)s is installed and enabled. Click to uninstall.":[ "%(name)s نصب و فعال شده است. برای حذف کلیک کنید." ],
      "%(name)s is disabled. Click to enable.":[ "%(name)s غیر فعال است. برای فعال‌سازی کلیک کنید." ],
      "Uninstalling %(name)s.":[ "در حال حذف %(name)s." ],
      "%(name)s is uninstalled. Click to install.":[ "%(name)s حذف شد. برای نصب کلیک کنید." ],
      "Install state for %(name)s is unknown.":[ "وضعیت نصب %(name)s نامشخص است." ],
      Previous:[ "قبلی" ],
      Next:[ "بعدی" ],
      "Page %(currentPage)s of %(totalPages)s":[ "صفحه %(currentPage)s از %(totalPages)s" ],
      "Your search for \"%(query)s\" returned %(count)s result.":[ "جستجو شما برای «%(query)s» تعداد %(count)s نتیجه برگرداند." ],
      "Searching...":[ "در حال جستجو…" ],
      "No results were found for \"%(query)s\".":[ "هیچ نتیجه‌ای برای «%(query)s» پیدا نشد." ],
      "Please supply a valid search":[ "لطفا یک متن معتبر برای جستجو وارد کنید" ] } },
  _momentDefineLocale:function anonymous() {
//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
};
var numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
};

var fa = moment.defineLocale('fa', {
    months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function (input) {
        return /بعد از ظهر/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'قبل از ظهر';
        } else {
            return 'بعد از ظهر';
        }
    },
    calendar : {
        sameDay : '[امروز ساعت] LT',
        nextDay : '[فردا ساعت] LT',
        nextWeek : 'dddd [ساعت] LT',
        lastDay : '[دیروز ساعت] LT',
        lastWeek : 'dddd [پیش] [ساعت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'در %s',
        past : '%s پیش',
        s : 'چندین ثانیه',
        m : 'یک دقیقه',
        mm : '%d دقیقه',
        h : 'یک ساعت',
        hh : '%d ساعت',
        d : 'یک روز',
        dd : '%d روز',
        M : 'یک ماه',
        MM : '%d ماه',
        y : 'یک سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/[۰-۹]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    ordinalParse: /\d{1,2}م/,
    ordinal : '%dم',
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12 // The week that contains Jan 1st is the first week of the year.
    }
});

return fa;

})));

} }