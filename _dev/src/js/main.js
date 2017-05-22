'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel init
  $(".owl-carousel[data-type='products_new'], " +
  	".owl-carousel[data-type='products_popular']").owlCarousel({
  	items: 3,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	// nav: true,
  	navText: [
  		"<span class='fa fa-chevron-left fa-2x owl-nav_arrow'></span>",
  		"<span class='fa fa-chevron-right fa-2x owl-nav_arrow'></span>"
  	],
  	responsive: {
  		992: {
        items: 3
      },

      550: {
      	items: 2
      },

      0: {
      	items: 1
      }
  	}
  });


	// burger-menu
	$(".menu").on("click", ".burger", function() {
		$(".menu__list").toggleClass('menu__list_active');
		$(".burger").toggleClass('burger_close');
	});

	$(".menu__link").click(function() {
		$(".menu__list").removeClass('menu__list_active');
		$(".burger").removeClass('burger_close');
	});

	$(window).resize(function(){
		var width = $(window).outerWidth();
		if(width >= 768) {
			$(".menu__list").addClass('menu__list_active');
			$(".burger").removeClass('burger_active');
		} else {
			$(".menu__list").removeClass('menu__list_active');
			$(".burger").addClass('burger_active');
			$(".burger").removeClass('burger_close');
		}
	});
});



