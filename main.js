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

// Footer
$(document).ready(function() {
	
  siteFooter();
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('#main');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		console.log('Content Height = ' + siteContentHeight + 'px');
		console.log('Content Width = ' + siteContentWidth + 'px');
		console.log('Footer Height = ' + siteFooterHeight + 'px');
		console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 50
		});
	};
});

// PARTICULAS

particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 160,
		"density": {
		  "enable": true,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 1,
		"random": true,
		"anim": {
		  "enable": true,
		  "speed": 1,
		  "opacity_min": 0,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 4,
		  "size_min": 0.3,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 1,
		"direction": "top-right",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 600
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "bubble"
		},
		"onclick": {
		  "enable": true,
		  "mode": "repulse"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 250,
		  "size": 0,
		  "duration": 2,
		  "opacity": 0,
		  "speed": 3
		},
		"repulse": {
		  "distance": 400,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  })

// var count_particles, stats, update; stats = new Stats; 
// stats.setMode(0); 
// stats.domElement.style.position = 'absolute'; 
// stats.domElement.style.left = '0px'; 
// stats.domElement.style.top = '0px'; 
// document.body.appendChild(stats.domElement); 
// count_particles = document.querySelector('.js-count-particles'); 

// update = function() { stats.begin(); stats.end(); 
// 	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
// 		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
// 	} 
// 	requestAnimationFrame(update); 
// }; 
// requestAnimationFrame(update);