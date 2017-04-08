$(document).ready(function(){
	
{  //inview

  var inviewObjects = [], viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects.push({ data: data, $element: $(this), element: this });

      if (!timer && inviewObjects.length) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      for (var i=0; i<inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      if (!inviewObjects.length) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    if (!inviewObjects.length) {
      return;
    }

    var i = 0, $elements = $.map(inviewObjects, function(inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      return selector ? $element.find(selector) : $element;
    });

    viewportSize   = viewportSize   || getViewportSize();
    viewportOffset = viewportOffset || getViewportOffset();

    for (; i<inviewObjects.length; i++) {
      // Ignore elements that are not in the DOM tree
      if (!$.contains(documentElement, $elements[i][0])) {
        continue;
      }

      var $element      = $($elements[i]),
          elementSize   = { height: $element[0].offsetHeight, width: $element[0].offsetWidth },
          elementOffset = $element.offset(),
          inView        = $element.data('inview');

      if (elementOffset.top + elementSize.height > viewportOffset.top &&
          elementOffset.top < viewportOffset.top + viewportSize.height &&
          elementOffset.left + elementSize.width > viewportOffset.left &&
          elementOffset.left < viewportOffset.left + viewportSize.width) {
        if (!inView) {
          $element.data('inview', true).trigger('inview', [true]);
        }
      } else if (inView) {
        $element.data('inview', false).trigger('inview', [false]);
      }
    }
  }

  $(w).on("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });
}


{  //spincrement
	// Custom easing function
	$.extend( $.easing, {
		spincrementEasing: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		}
	});
 
	// Spincrement function
	$.fn.spincrement = function() {
		
		// Function for formatting number
		var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
		function format(num) {
			num = num.toFixed(0); // converts to string!
			
			while(re_thouSep.test(num)) {
				num = num.replace(re_thouSep, '$1'+' '+'$2');
			}
			return num;
		}
	
		return this.each(function() {

			var obj = $(this);
			
			// Set params FOR THIS ELEM
			var from = 0;
			var to = parseFloat(obj.html()); 

			// Start
			obj.css('counter', from);
			obj.css('opacity', 0 );
			obj.animate(
				{ counter: to, opacity: 1 },
				{
					easing: 'spincrementEasing',
					duration: 3000,
					step: function(progress) {
						obj.css('visibility', 'visible'); 
						obj.html(format(progress * to));
					},
					complete: function() {
						obj.css('counter', null);
						obj.html(format(to));
					}
				}
			);
		});

	};
}

{ //circliful

	$.fn.circliful = function (options) {

		var settings = $.extend({
			percent: 75,
		}, options);

		return this.each(function () {
			var circleContainer = $(this);

			mergeDataAttributes(settings, circleContainer.data());

			var percent = settings.percent;
			var percentageY = settings.percentageY;
			var percentageX = settings.percentageX;
			var additionalCss;
			var elements;
			var backgroundBorderWidth = settings.backgroundBorderWidth;


			circleContainer
				.addClass('svg-container')
				.append(
					$('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' +
						elements +
						'<circle cx="100" cy="100" r="57" class="border" fill="none" stroke="' + settings.backgroundColor + '" stroke-width="' + backgroundBorderWidth + '" stroke-dasharray="360" transform="rotate(-90,100,100)" />' +
						'<circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + settings.foregroundColor + '" stroke-width="' + settings.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" />' +
						'<circle cx="100" cy="100" fill="none" />' +
						'<text class="timer" text-anchor="middle" x="' + percentageX + '" y="' + percentageY + '" style="font-size: ' + settings.percentageTextSize + 'px; ' + additionalCss + ';" fill="' + settings.fontColor + '"><tspan class="number">' + 0 + '</tspan><tspan class="percent">%</tspan></text>')
				);

			var circle = circleContainer.find('.circle');
			var myTimer = circleContainer.find('.timer');
			var interval = 30;
			var angle = 0;
			var angleIncrement = settings.animationStep;
			var last = 0;
			var summary = 0;
			var oneStep = 0;
			var text = percent;
			var calculateFill = (360 / 100 * percent);

			animate();

			function animate() {
				var timer = window.setInterval(function () {
					if ((angle) >= calculateFill) {
						window.clearInterval(timer);
						last = 1;
						if (typeof callback == 'function') {
							callback.call(this);
						}
					} else {
						angle += angleIncrement;
						summary += oneStep;
					}

					if (angle / 3.6 >= percent && last == 1) {
						angle = 3.6 * percent;
					}

					text = parseFloat((100 * angle / 360));
					text = text.toFixed(0);
					if (!(percent == 0 || (percent > 1 && last != 1))) {
						text = parseInt(text);
					}

					circle
						.attr("stroke-dasharray", angle + ", 20000");

						myTimer
							.find('.number')
							.text(text);

				}.bind(circle), interval);
			}

			
			function mergeDataAttributes(settings, dataAttributes) {
				$.each(settings, function(key, value) {
					if(key.toLowerCase() in dataAttributes) {
						settings[key] = dataAttributes[key.toLowerCase()];
					}
				});
			}
		});
	}
}

// { //slider 
// 	$.fn.carouselInfinity = function(numberImgCur, widthImgCur) {  

//     return this.each(function() {

//       var leftUIEl = $('.carousel--infinity-arrow-left');
//       var rightUIEl = $('.carousel--infinity-arrow-right');
//       var elementsList = $('.carousel--infinity-list');
//       var elements = $('.carousel--infinity-element');
      
//       var imgMargin = 25;
//       numberImg = numberImgCur ? numberImgCur : 5;
//       widthImg = widthImgCur ? widthImgCur : 100;
//       var widthHider = numberImg*(widthImg+imgMargin)-imgMargin;
//       $('.carousel--infinity-element img').css('max-width',widthImg+'px');
//       $('.carousel--infinity-hider').css('width', widthHider+'px');

//       var pixelsOffset = widthImg+imgMargin;
//       var currentLeftValue = 0;
//       var elementsCount = elementsList.find('li').length;
//       var minimumOffset = - ((elementsCount - numberImg) * pixelsOffset);
//       var maximumOffset = -elementsCount*pixelsOffset;

//       leftUIEl.click(function() {   
//         if (currentLeftValue % maximumOffset == 0) {
//           currentLeftValue = maximumOffset;
//           elementsList.css("left",currentLeftValue+"px");
//           elements.clone().prependTo(elementsList);
//         }
//         currentLeftValue += pixelsOffset;
//         elementsList.animate({ left : currentLeftValue + "px"}, 500);
//       });

//       rightUIEl.click(function() { 
//         if ((currentLeftValue % minimumOffset == 0) && currentLeftValue) {
//           elements.clone().appendTo(elementsList);
//         }
//         currentLeftValue -= pixelsOffset;
//         elementsList.animate({ left : currentLeftValue + "px"}, 500);
//       });

//     });

//   };
// }

{  //sliders


	$('.slider--main').slick({
		speed: 300,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 3000,
		nextArrow: '<i class="slider-arrow slider-arrow--right icon-angle-double-right"></i>',
		prevArrow: '<i class="slider-arrow slider-arrow--left icon-angle-double-left"></i>'
	});
	// $('.slider--main .slider-arrow').click(function(){
	// 	$('.slider--main').slick('unslick');
	// 	$('.slider--main').slick({
	// 		speed: 300,
	// 		slidesToShow: 1,
	// 		infinite: true,
	// 		autoplay: false,
	// 		nextArrow: '<i class="slider-arrow slider-arrow--right icon-angle-double-right"></i>',
	// 		prevArrow: '<i class="slider-arrow slider-arrow--left icon-angle-double-left"></i>'
	// 		});
	// 		clearTimeout(timer);
	// 	var timer = setTimeout(function() {
	// 		$('.slider--main').slick('unslick');
	// 		$('.slider--main').slick({
	// 			speed: 300,
	// 			slidesToShow: 1,
	// 			infinite: true,
	// 			autoplay: true,
	// 	  		autoplaySpeed: 1000,
	// 			nextArrow: '<i class="slider-arrow slider-arrow--right icon-angle-double-right"></i>',
	// 			prevArrow: '<i class="slider-arrow slider-arrow--left icon-angle-double-left"></i>'
	// 		});
	// 	}, 2000);
	// });

	$('.slider--quote').slick({
		speed: 300,
		slidesToShow: 1,
		infinite: true,
		dots: true,
		nextArrow: false,
		prevArrow: false
	});
	$('.slider--logo').slick({
		speed: 300,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: false,
		prevArrow: false,
		autoplay: true,
  		autoplaySpeed: 3000,
		responsive: [
		{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 990,
	      settings: {
	        slidesToShow: 3,
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
}


	//animate moving to anchor

	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
		scrollTop: $(el).offset().top}, 1000);
		return false;
	});


	//icon hover-resizing

	$('.icon-anim').hover(
		function() {
			$(this).animate({
				fontSize:'110%'
			},'1000');
		},
		function() {
			$(this).animate({
				fontSize:'100%'
			},'1000');
	});


	//anim numbers

	var show_facts = true;
	var $init = $('.facts-box');
	if ($init.length) {
	    $init.bind('inview', function(event, isInView) {
	          if (isInView && show_facts) {
	              $(".spincrement").spincrement();
	              show_facts = false;
	          }
	    })
	};


	//anim draving charts

	var show_chart = [];
	var i = 0;
	$('.skills-list').each(function() {
		show_chart[i] = true;
		i++;
	});
	var $init = $('.skills-list');
	if ($init.length) {
	    $init.bind('inview', function(event, isInView) {
			var i = $('.skills-list').index(this)
			if (isInView && show_chart[i]) {
				$(this).find('.chart').circliful({
					animationStep: 5,
					fontColor: '#ffe600',
					foregroundColor: '#ffe600',
					backgroundColor: '#fff',
					foregroundBorderWidth: 5,
					backgroundBorderWidth: 5,
					percentageY: 110,
					percentageX: 105,
					percentageTextSize: 32
				});
				show_chart[i] = false;
			}
	    })
	};


	//works-tab

	$('.nav-link--works').click(function(event) {
		event.preventDefault();
		var $active = $('.nav-link--works.active');
		if ($(this) != $active) {
			if ($(this).html() == 'all') {
				$('.works-item').show();
			} else {
				var category = $(this).html();
				$('.works-item').hide();
				$('.works-item[category="'+category+'"]').show();
			}
			$active.removeClass('active');
			$(this).addClass('active');
		}
	});


	//team-tab

	$('.team-item').click(function(event) {
		event.preventDefault();
		$(this).addClass('active')
            .siblings('.active').removeClass('active');
        $('.member-info').eq($('.team-item').index(this)).show()
            .siblings('.member-info').hide();
	});


	//form validation

	$('.input-name').keyup(function() {
		var val = $(this).val();
		if ((val != "") && (!(/^[a-zA-Z]+$/.test(val)))) {
        	$(this).addClass('input--error');
			$('.input-error--name').show()
			.html('Only English letters are allowed!')         
	    } else {
	    	$(this).removeClass('input--error');
	    	$('.input-error--name').html('');
	    }
	});

	$('.input-email').keyup(function() {
		var val = $(this).val();
		if ((val != "") && (!(/^[a-zA-Z0-9_@]+$/.test(val)))) {
        	$(this).addClass('input--error');
			$('.input-error--email').show()
				.html('Only English letters, numbers \'_\' and \'@\' are allowed!')         
	    } else {
	    	$(this).removeClass('input--error');
	    	$('.input-error--email').html('');
	    }
	});

	$('.input-subject').keyup(function() {
		var val = $(this).val();
		if ((val != "") && (!(/^[a-zA-Z0-9]+$/.test(val)))) {
        	$(this).addClass('input--error');
			$('.input-error--subject').show()
			.html('Only English letters and numbers are allowed!')         
	    } else {
	    	$(this).removeClass('input--error');
	    	$('.input-error--subject').html('');
	    }
	});

});