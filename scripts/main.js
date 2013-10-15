/* Navigation sliding */
(function($, window, undefined){

  'use strict';

  var nav = $('nav.main-nav');

  if (nav.length === 0){
    return;
  }

  var toggler = $('<button type="button" class="navigation-toggler">Toggle Navigation</button>');

  toggler.on('click', function(e){
    e.preventDefault();
    $('html').toggleClass('nav-hidden');
  });

  nav.append(toggler);

  // slide events

  $('body').swipe({
    swipeLeft : function(){
      $('html').addClass('nav-hidden');
    },
    swipeRight : function(){
      $('html').removeClass('nav-hidden');
    }
  });

}(jQuery, window));

// Scroll to top
(function($, window, undefined){

  'use strict';

  $('a.back-to-top').on('click', function(e){
    e.preventDefault();

    $.scrollTo({ top: 0, left: 0 }, 500);
  });
}(jQuery, window));


// Footer toggling
(function($, window, undefined){

  'use strict';

  var
    toggler = $('<button type="button" class="footer-toggler">Toggle Footer</button'),
    footer = $('footer'),
    container = footer.find('div.footer-container'),
    state = false;

  footer.prepend(toggler);

  toggler.swipe({
    swipeUp : function(){
      container.slideUp();
      setTimeout(function(){
        $.scrollTo(container, 400);
      }, 400);
      state = true;
    },
    swipeDown : function(){
      container.slideDown();
      state = false;
    }
  });

  toggler.on('click', function(e){
    e.preventDefault();
    container.slideToggle();

    state = !state;

    if (state) {
      setTimeout(function(){
        $.scrollTo(container, 400);
      }, 400);
    }
  });

}(jQuery, window));
