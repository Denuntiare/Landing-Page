// Group
jQuery(document).ready(function() {
  
	$('.more-btn').on('click', function(e){
	  e.preventDefault();
	  $(this).toggleClass('opened')
	  $(this).parent().parent().find('.Member-Info-Plus').slideToggle();
	});
});

//Scroll anchor
$(function() {
	$('a').bind('click',function(event){
	  var $anchor = $(this);
	  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
	});
});

// Botão Back to Top
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});