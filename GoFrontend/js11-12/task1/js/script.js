$(document).ready(function() {
  $('.carousel-hider').carousel(1,300);
});



(function( $ ){
  $.fn.carousel = function(numberImgCur, widthImgCur) {  

  return this.each(function() {

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var imgMargin = 25;
    numberImg = numberImgCur ? numberImgCur : 5;
    widthImg = widthImgCur ? widthImgCur : 100;
    var widthHider = numberImg*(widthImg+imgMargin)-imgMargin;
    $('.carousel-element img').css('max-width',widthImg+'px');
    $('.carousel-hider').css('width', widthHider+'px');

    var pixelsOffset = widthImg+imgMargin;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - numberImg) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {        
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    rightUIEl.click(function() {        
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }     
    });
    $('.carousel-arrow').click(function() {
      $('.carousel-arrow').removeClass('carousel-arrow--disabled');
      if (currentLeftValue == minimumOffset)
        $('.carousel-arrow-right').addClass('carousel-arrow--disabled');
      if (currentLeftValue == maximumOffset)
        $('.carousel-arrow-left').addClass('carousel-arrow--disabled');
      console.log(currentLeftValue);
    });
  });

  };
})( jQuery );