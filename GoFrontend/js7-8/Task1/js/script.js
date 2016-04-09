$(document).ready(function(){
    $('.header:first').addClass('active');
    $('.box p:not(:first)').hide();  
    $('.header').click(function(){
        $(this).addClass('active')
            .siblings('.active').removeClass('active');
        $('.text').eq($('.header').index(this)).show()
            .siblings('.text').hide();
    })
 });