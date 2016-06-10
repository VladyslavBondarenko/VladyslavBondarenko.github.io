$(document).ready(function() {
  $('.carousel-hider').carousel(5,100);
  $('.carousel--infinity-hider').carouselInfinity(3,200);
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
    });
  });

  };
  
  
  
  
  $.fn.carouselInfinity = function(numberImgCur, widthImgCur) {  

    return this.each(function() {

      var leftUIEl = $('.carousel--infinity-arrow-left');
      var rightUIEl = $('.carousel--infinity-arrow-right');
      var elementsList = $('.carousel--infinity-list');
      var elements = $('.carousel--infinity-element');
      
      var imgMargin = 25;
      numberImg = numberImgCur ? numberImgCur : 5;
      widthImg = widthImgCur ? widthImgCur : 100;
      var widthHider = numberImg*(widthImg+imgMargin)-imgMargin;
      $('.carousel--infinity-element img').css('max-width',widthImg+'px');
      $('.carousel--infinity-hider').css('width', widthHider+'px');

      var pixelsOffset = widthImg+imgMargin;
      var currentLeftValue = 0;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - numberImg) * pixelsOffset);
      var maximumOffset = -elementsCount*pixelsOffset;

      leftUIEl.click(function() {   
        if (currentLeftValue % maximumOffset == 0) {
          currentLeftValue = maximumOffset;
          elementsList.css("left",currentLeftValue+"px");
          elements.clone().prependTo(elementsList);
        }
        currentLeftValue += pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      });

      rightUIEl.click(function() { 
        if ((currentLeftValue % minimumOffset == 0) && currentLeftValue) {
          elements.clone().appendTo(elementsList);
        }
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      });

    });

  };
  
})( jQuery );