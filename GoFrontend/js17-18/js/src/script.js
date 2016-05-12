$(function() {
    
//CAROUSEL
    
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
        return '<a href="#' + page + '">' + page + '</a>';
      }
    });
    
//MENU    
    
    $('.topLi').hover(
        function() { $(this).children().slideDown(); },
        function() { $(this).find('ul').slideUp('fast'); }
    );
    $('.innerLi').hover(
	    function() { $(this).find('ul:first').slideDown(); },
	    function() { $(this).find('ul:first').slideUp('fast'); }
    );
    
    $('.topLi:has(ul)').find('a:first').append('<span class="arrow"> &#9660;</span>');
    $('.innerLi:has(ul)').find('a:first').append('<span class="arrow arrow--inner"> &#9658;</span>');

//CHECKBOXES
    
    $(".niceCheck").each(function() {
         changeCheckStart($(this));
    });
    $(".niceCheck").mousedown(function() {
         changeCheck(jQuery(this));
    });

//SELECT
  
  	$("#default-usage-select").selectbox();

});

function changeCheck(el) {
     var el = el,
          input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -17px");    
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");    
        input.attr("checked", false)
    }
     return true;
}
function changeCheckStart(el) {
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked"))
        el.css("background-position","0 -17px");    
     return true;
}