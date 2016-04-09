$(document).ready(function(){
    $('.tooltip').hide();
    $('input').hover(function() {
        $(this).next(".tooltip").animate({opacity: "show"}, "slow");
        }, function() {
            $(this).next(".tooltip").stop().animate({opacity: "hide"}, "fast");
    });
    $('.help').click(function() {
        $('.tooltip').animate({opacity: "show"}, "slow");
    })
 });