/**
 * Created by Bogdan Yaremchuk on 18.05.2016.
 */
$(function () {
    $('ul#simpleSlider').children('li').eq(0).addClass('Active');
    $('#nextImg').on('click',function(){
        $('ul#simpleSlider li.Active').fadeOut(1000, function () {
            if($(this).next().is('li')) {
                $(this).removeClass('Active');
                $(this).next().fadeIn(1000).addClass('Active');
            }else{
                $(this).removeClass('Active');
                $('ul#simpleSlider li:first').fadeIn(1000).addClass('Active');
            }
        });
    });
    $('#prevImg').on('click',function(){
        $('ul#simpleSlider li.Active').fadeOut(1000, function () {
            if($(this).prev().is('li')) {
                $(this).removeClass('Active');
                $(this).prev().fadeIn(1000).addClass('Active');
            }else{
                $(this).removeClass('Active');
                $('ul#simpleSlider li:last').fadeIn(1000).addClass('Active');
            }
        });
    });
});

