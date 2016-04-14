$(document).ready(function(){
    $("input").hover(function() {
        $(this).next(".tooltip").animate({opacity: "show"}, "slow");
    }, function() {
        $(this).next(".tooltip").stop().animate({opacity: "hide"}, "fast");
    });
    
    $(".help").on("click", function(e) {
        e.preventDefault();
        $(".tooltip").animate({opacity: "show"}, "slow"); })
});