$(function() {
	'use strict';

	$('#getProgramButton').on('click', function(event) {
		$.ajax({
			url: "https://api.ovva.tv/v2/ua/tvguide/1plus1",
			success: 
				function(data){
					if (data === null) {
          				$('.results').html("Ошибка");
					} else {
						var template = $('#program_generate').html();
						var html = tmpl(template, data.data);
						$('#results').html(html);
					}
				}
		});
		$('#results-image--box').html("");
	});

	$('#html2canvasButton').on('click', function(event) {
		html2canvas($('#results'), {
			allowTaint: true,
		  	onrendered: function(canvas) {
		    	$('#results-image--box').append(canvas);
		  	}
		});
		$('#results').html("");
	});
});