// Toggle Navbar
$(".BotaoTopo").click (function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
});

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
	  // Outras Animações
	  // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
	});
});