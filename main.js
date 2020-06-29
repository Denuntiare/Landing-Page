// Grup
jQuery(document).ready(function() {
  
	$('.more-btn').on('click', function(e){
	  e.preventDefault();
	  $(this).toggleClass('opened')
	  $(this).parent().parent().find('.member-info-plus').slideToggle();
	});
});

//Scroll anchor
$(function() {
	$('a').bind('click',function(event){
	  var $anchor = $(this);
	  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
	});
});