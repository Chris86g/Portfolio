$(function() {

  var menu = $('.menu');
  var links = menu.find('a');
  var href = menu.find('href');

  links.on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
  });

  var sideMenu = $('#sideMenu');
  var close = menu.find('#close');

  close.on('click',function closeSideMenu() {
    sideMenu.addClass('hide_menu');
  })

  var lastScrollTop = 0;
  $(window).on('scroll', function() {
      st = $(this).scrollTop();
      if(st < lastScrollTop) {
          console.log('up');
      }
      else {
          sideMenu.removeClass('hide_menu');
      }
      lastScrollTop = st;
  });

  (function($) {
    $.fn.visible = function(partial) {

    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  var win = $(window),
      allMods = $(".module");

  allMods.each(function(i, el) {
    var el = $(el);

    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

    allMods.each(function(i, el) {
      var el = $(el);

      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

  var intro = $(".intro"),
      welcome = $(".welcome");

  if (intro.visible(true)) {
    welcome.addClass("welcome-animation");
  }


  var allShades = $(".shade");

  // allShades.each(function(i, el) {
  //   var el = $(el);
  //
  //   if (el.visible(true)) {
  //     el.addClass("already-visible");
  //   }
  // });

  win.scroll(function(event) {

    allShades.each(function(i, el) {
      var el = $(el);

      if (el.visible(true)) {
        el.addClass("shade-in");
      }
    });
  });
});
