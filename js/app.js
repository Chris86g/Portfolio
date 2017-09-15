$(function() {

// scroll
  var menu = $('.menu');
  var links = menu.find('a');
  var href = menu.find('href');

  links.on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
  });

// sidemenu
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

// visibility
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

// show modules
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

// welcome animations
  var intro = $(".intro"),
      welcome = $(".welcome");

  if (intro.visible(true)) {
    welcome.addClass("welcome-animation");
  }

  var allShades = $(".shade");

  win.scroll(function(event) {

    allShades.each(function(i, el) {
      var el = $(el);

      if (el.visible(true)) {
        el.addClass("shade-in");
      }
    });
  });

// spinner
  var unknown = $(".unknown"),
      qMark = $(".q-mark");

  unknown.mouseenter(function() {
    qMark.addClass("rotate");
  })

  unknown.mouseleave(function() {
    qMark.removeClass("rotate");
  })

// slide-in project images
  var projImg = $(".project").find('img');

  win.scroll(function(event) {

    projImg.each(function(i, el) {
      var el = $(el);

      if (el.visible(true)) {
        el.addClass("slide-in");
      }
    });
  });

// hamburger
  var hamburger = $("#hamburger"),
      mobileNav = $("#mobileNav");
      closeMobileNav = mobileNav.find('li');

  hamburger.on('click', function() {
    mobileNav.toggleClass('hide');
  });

  closeMobileNav.on('click', function() {
    mobileNav.addClass('hide');
  });

// form validation

  var form = $('form'),
      nameInput = form.find('#nameInput'),
      emailInput = form.find('#emailInput'),
      messageInput = form.find('#messageInput'),
      error = form.find('.error'),
      success = form.find('.success'),
      submit = form.find('input[type=submit]');

  error.innerText = '';
  success.innerText = '';

  submit.on('click',function () {
    event.preventDefault();
    error.innerText = '';
    success.innerText = '';
    error.removeClass('show');
    success.removeClass('show');

    var name = nameInput.val(),
        email = emailInput.val(),
        message = messageInput.val();

    var isNameValid = function () {
      if (name.length <= 2) {
          error.addClass('show');
          error.text('name is to short ');
          return false;
      } else {
          return true;
      }
    }
    isNameValid();

    var isAtPresent = function () {
      if (email.indexOf('@') == -1) {
          error.addClass('show');
          error.text("email is not valid ");
          return false;
      } else {
          return true;
      }
    }
    isAtPresent();

    var isDotPresent = function () {
      if (email.indexOf('.') == -1) {
          error.addClass('show');
          error.text("email is not valid ");
          return false;
      } else {
          return true;
      }
    }
    isDotPresent();

    var isMessageLongEnough = function () {
      if (message.length <= 10) {
          error.addClass('show');
          error.text("message is too short ");
          return false;
      } else {
          return true;
      }
    }
    isMessageLongEnough();

    function checkForm() {
      var isValid = isNameValid() && isAtPresent() && isDotPresent() && isMessageLongEnough ();
      if (isValid === false) {
        event.preventDefault();
      }
      if (isValid === true) {
        success.addClass('show');
        success.text('Message sent! ');
      }
    }
    checkForm();
  })

});
