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

  // owl-carousel init
  $(".owl-carousel[data-type='objarka__steps']").owlCarousel({
  	items: 3,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	nav: true,
	dots: false,
  	navText: [
  		"<span class='icon icon-arrow-left_big'></span>",
  		"<span class='icon icon-arrow-right_big'></span>"
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

  // owl-carousel init
  var $cafe_about_carousel = $(".owl-carousel[data-type='cafe__about']");

	$cafe_about_carousel.on('initialized.owl.carousel', function (e) {
		console.log("init")
		$(".owl-carousel[data-type='cafe__about']").find('.owl-item.active').eq(0).addClass('mini');
		$(".owl-carousel[data-type='cafe__about']").find('.owl-item.active').eq(2).addClass('mini');
	});

	$cafe_about_carousel.owlCarousel({
  	items: 3,
  	loop: true,
  	smartSpeed: 1000,
  	autoHeight: true,
  	// nav: true,
  	navText: [
  		"<span class='icon icon-arrow-left_big'></span>",
  		"<span class='icon icon-arrow-right_big'></span>"
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
  }).on('translated.owl.carousel', function (e) {
	  $(".owl-carousel[data-type='cafe__about']").find('.owl-item').removeClass('mini');
	  $(".owl-carousel[data-type='cafe__about']").find('.owl-item.active').eq(0).addClass('mini');
	  $(".owl-carousel[data-type='cafe__about']").find('.owl-item.active').eq(2).addClass('mini');
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


	//product__button
	$(".product__button[role='open:form']").click(function () {
		var $this = $(this),
			$form = $this.siblings(".products__item-form"),
			$img = $this.parents(".product__img-holder").children(".products__img");

		$this.hide();
		$form.show().children('input').first().focus();
		$img.addClass("products__img_sm");

	});

	$(".products__item .product__img-holder").mouseleave(function () {
		var $this = $(this),
			$btn = $this.find(".product__button[role='open:form']"),
			$form = $this.find(".products__item-form"),
			$img = $this.children(".products__img");

		$btn.show();
		$form.hide();
		$img.removeClass("products__img_sm");
	});

	//.categories__item .categories__link
	$(".categories__item .categories__link").click(function (e) {
		e.preventDefault();

		var $this = $(this),
			$sublist = $this.siblings(".categories__sublist");

		$sublist.slideToggle();

	})

});



