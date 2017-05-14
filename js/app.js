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

});
