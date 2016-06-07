(function ($) {
	'use strict';
	$(function () {

		var glide = $('.slider').glide({
			autoplay: false,
			arrowRightText: "",
			arrowLeftText: "",
		});
		
//	$('.container').masonry({
//	  itemSelector: '.container_item',
//		singleMode: false,
//	  isResizable: true,
//	  isAnimated: true,
//		animationOptions: { 
//			queue: false, 
//			duration: 500 
//	  }
//	}); 

		function getPictures (request) {
			var q = request ? '&q='+encodeURIComponent(request) : '';
			$.ajax({

				url: "https://pixabay.com/api/?key=2654122-2e7cfe65e4216a71a55f9c97a&image_type=photo"+q+"&callback=?",
				dataType: "jsonp",
				success: function (data) {
					
					if (data) {
						var data = {'data': data};
						var template = $('#search_template').html();
						$('.search_results').html(tmpl(template, data));			
					} else {
							$('.search_results').html("Ошибка");
					}
						
					var $gridItem = $('.grid_item');
					if ($gridItem.imagefill) {
						$gridItem.imagefill();
					} else {
						$gridItem.find('.grid_img').css({"width": "100%"});
					}
				}
			});

		}

			getPictures('travelling');

		$('.search_button').on('click', function (e) {
			var r = $('.search_input').val();
			getPictures(r);
		});

		$('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
		
	});
})(jQuery);