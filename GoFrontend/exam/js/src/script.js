(function ($) {
	'use strict';
	$(function () {

		var glide = $('.slider').glide({
			autoplay: false,
			arrowRightText: "",
			arrowLeftText: "",
		});
		
//		mounting massonry
		
//		i use setInterval - bacause images on request 
//		do not have time to load 
//		and the plugin is not activated
		
		var mas = setInterval(function() {
			$('.grid').masonry({
				itemSelector: '.grid-item', 
				columnWidth: '.grid-sizer',
				gutter: 10
//				isFitWidth: true
			});
		}, 100);
			
		
		function getPictures (request) {
			var q = request ? '&q='+encodeURIComponent(request) : '';
			$.ajax({

				url: "https://pixabay.com/api/?key=2654122-2e7cfe65e4216a71a55f9c97a&image_type=photo"+q+"&callback=?",
				dataType: "jsonp",
				success: function (data) {
					
					if (data) {
						var data = {'data': data}; //a direct from data the request is not working
						var template = $('#search_template').html();
						$('.search_results').html(tmpl(template, data));			
					} else {
							$('.search_results').html("Error");
					}
					
				}
				
			});
			
		}

		getPictures('travelling'); //the default request

		$('.search_button').on('click', function (e) {
			var request = $('.search_input').val();
			getPictures(request);
			
		});
			
	});
})(jQuery);