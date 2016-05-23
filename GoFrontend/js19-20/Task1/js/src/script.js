$(function() {
    
	$('.jcarousel').jcarousel({
	});

	$('.jcarousel-prev')
	.on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	})
	.on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	})
	.jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-next')
	.on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	})
	.on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	})
	.jcarouselControl({
		target: '+=1'
	});

	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	})
	.jcarouselPagination({
		item: function(page) {
			return '<a href="#' + page + '"><div class="point"></div></a>';
		}
	});
	
	$('.accordeon__item-mark').on('click', function(e) {
		$('.accordeon__item--expanded')
			.toggleClass('accordeon__item--expanded', false)
			.find('.accordeon__item-mark')
			.html('+');
		$(this)
			.html('-')
			.closest('.accordeon__item')
			.toggleClass('accordeon__item--expanded', true);
		return false;
	});
	
});
