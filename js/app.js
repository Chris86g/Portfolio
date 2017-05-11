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

});
