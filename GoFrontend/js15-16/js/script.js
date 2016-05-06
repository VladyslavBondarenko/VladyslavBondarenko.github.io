$(function() {
	'use strict';
	$('.search form').on('submit', function(event) {
		$.ajax({
			url: "https://www.googleapis.com/customsearch/v1?q="+encodeURIComponent(this.elements[0].value)+"&key=AIzaSyDQq5I1_jJG2eKE78NEUM8GCBRwgXRW0F4&cx=000283222127530457480:fcqttmqm5o0&callback=?",
			dataType: "jsonp",
			success: 
				function(data){
					if (data === null) {
          	$('.results').html("Ошибка");
					} else {
						var template = $('#search-results').html();
						var html = tmpl(template, data);
						$('.results').html(html);
						$('.search').addClass('search--results');
						$('.search_header').hide();
						$('.search_input').addClass('search_input--results');
					}
				}
		});
		
		event.preventDefault();
		
	});
});