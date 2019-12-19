(function ($) {
	'use strict';
	$(function () {

	$('.about_slider').slick({
		dots: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		nextArrow: '<div class="icon icon-arrow icon-arrow-right">&#8594;</div>',
		prevArrow: '<div class="icon icon-arrow icon-arrow-left">&#8592;</div>'
	});

	$('.gifts_slider').slick({
		dots: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '<div class="icon icon-arrow icon-arrow-right">&#8594;</div>',
		prevArrow: '<div class="icon icon-arrow icon-arrow-left">&#8592;</div>',
		responsive: [
		{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1060,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.sale_slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="icon icon-arrow icon-arrow-right">&#8594;</div>',
		prevArrow: '<div class="icon icon-arrow icon-arrow-left">&#8592;</div>',
		responsive: [
		{
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.item_slider').slick({
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<div class="icon icon-arrow icon-arrow-right">&#8594;</div>',
		prevArrow: '<div class="icon icon-arrow icon-arrow-left">&#8592;</div>',
		responsive: [
		{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1060,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 790,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.brands_slider').slick({
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<div class="icon icon-arrow icon-arrow-right">&#8594;</div>',
		prevArrow: '<div class="icon icon-arrow icon-arrow-left">&#8592;</div>',
		responsive: [
		{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 1060,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 790,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
		
		$('.accordeon_item').on('click', function(e) {
			var expandedItem = ($(this).find('.accordeon_mark').html() === '&#9658;');
			$('.accordeon_item--expanded')
				.toggleClass('accordeon_item--expanded', false)
				.find('.accordeon_mark')
				.html('&#9658;');
			if (expandedItem) {
				$(this)
					.find('.accordeon_mark')
					.html('&#9660;')
					.closest('.accordeon_item')
					.toggleClass('accordeon_item--expanded', true);
			};
			return false;
		});

		$('.icon-menu').on('click', function(e) {
			$('section').hide();
			$('.menu').show();
		});

		$('.icon-close').on('click', function(e) {
			$('section').show();
			$('.head--tablet').hide();
			$('.menu').hide();
		});

		$('.gifts_header').on('click', function(e) {
			$('.gifts_slider').toggle('slow');
		});

		$('.head--tablet .icon-search').on('click', function(e) {
			$('.head--tablet .input').show();
		});

	});
})(jQuery);