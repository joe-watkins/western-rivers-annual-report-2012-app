$(document).ready(function(){var a={ui:{navigationSliding:function(){var a=$("nav.main-nav");if(0!==a.length){var b=$('<button type="button" class="navigation-toggler"></button>');b.on("click",function(a){a.preventDefault(),$("html").toggleClass("nav-hidden")}),a.append(b),$("body").swipe({swipeLeft:function(){$("html").addClass("nav-hidden")},swipeRight:function(){$("html").removeClass("nav-hidden")}})}},footerToggle:function(){var a=$('<button type="button" class="footer-toggler">Toggle Footer</button'),b=$("footer"),c=b.find("div.footer-container"),d=!1;b.prepend(a),a.swipe({swipeUp:function(){c.slideUp(),setTimeout(function(){$.scrollTo(c,400)},400),d=!0},swipeDown:function(){c.slideDown(),d=!1}}),a.on("click",function(a){a.preventDefault(),c.slideToggle(),d=!d,d&&setTimeout(function(){$.scrollTo(c,400)},400)})},siteIncludes:function(){var b="includes/",c="nav.html",d="form-search.html",e="footer.html",f=$(".search-handle"),g=$(".nav-handle"),h=$(".footer-handle");g.load(b+c,function(){a.ui.navSelectedState("nav")}),f.load(b+d),h.load(b+e,function(){a.ui.footerToggle()})},navSelectedState:function(a){$(a+" ul li").each(function(){$(this).find("a").attr("href")===window.location.pathname&&($(this).addClass("selected"),$(this).parents("li").addClass("selected"))})}}};a.ui.navigationSliding(),a.ui.siteIncludes()});