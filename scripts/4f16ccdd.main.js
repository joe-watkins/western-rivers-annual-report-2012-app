!function(a){"use strict";var b=a("nav.main-nav");if(0!==b.length){var c=a('<button type="button" class="navigation-toggler">Toggle Navigation</button>');c.on("click",function(b){b.preventDefault(),a("html").toggleClass("nav-hidden")}),b.append(c),a("body").swipe({swipeLeft:function(){a("html").addClass("nav-hidden")},swipeRight:function(){a("html").removeClass("nav-hidden")}})}}(jQuery,window),function(a){"use strict";a("a.back-to-top").on("click",function(b){b.preventDefault(),a.scrollTo({top:0,left:0},500)})}(jQuery,window),function(a){"use strict";var b=a('<button type="button" class="footer-toggler">Toggle Footer</button'),c=a("footer"),d=c.find("div.footer-container"),e=!1;c.prepend(b),b.swipe({swipeUp:function(){d.slideUp(),setTimeout(function(){a.scrollTo(d,400)},400),e=!0},swipeDown:function(){d.slideDown(),e=!1}}),b.on("click",function(b){b.preventDefault(),d.slideToggle(),e=!e,e&&setTimeout(function(){a.scrollTo(d,400)},400)})}(jQuery,window);