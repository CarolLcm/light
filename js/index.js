$(function(){
    $('.bottom .bBottom a').mouseenter(function(){
        $(this).animate({'opacity':0.5},800)
        $(this).find('span').animate({'position':'absolute','top':'50%'},800).show();
    })
    $('.bottom .bBottom a').mouseleave(function(){
        $(this).animate({'opacity':1},800)
        $(this).find('span').animate({'position':'absolute','top':0},300).hide(200);
    })
    $('.bottom-xs .bBottom-xs a').mouseenter(function(){
        $(this).animate({'opacity':0.5},800)
        $(this).find('span').animate({'position':'absolute','top':'50%'},800).show();
    })
    $('.bottom-xs .bBottom-xs a').mouseleave(function(){
        $(this).animate({'opacity':1},800)
        $(this).find('span').animate({'position':'absolute','top':0},300).hide(200);
    })
    $( "#toTop").click( function () {
        $( "html,body").animate({ "scrollTop" : 0 }, 1000);
    });
    $( "#f-toTop").click( function () {
        $( "html,body").animate({ "scrollTop" : 0 }, 1000);
    });
    $('.bottom .bBottom-sm a').mouseenter(function(){
        $(this).animate({'opacity':0.5},800)
        $(this).find('span').animate({'position':'absolute','top':'50%'},800).show();
    })
    $('.bottom .bBottom-sm a').mouseleave(function(){
        $(this).animate({'opacity':1},800)
        $(this).find('span').animate({'position':'absolute','top':0},300).hide(200);
    })
    $('.bottom-xs .bBottom-xs a').mouseenter(function(){
        $(this).animate({'opacity':0.5},800)
        $(this).find('span').animate({'position':'absolute','top':'50%'},800).show();
    })
    $('.bottom-xs .bBottom-xs a').mouseleave(function(){
        $(this).animate({'opacity':1},800)
        $(this).find('span').animate({'position':'absolute','top':0},300).hide(200);
    })
    var flag = 1;
    $('#menu-sm').click(function(){     
        if(flag){
            $('#div-sm').animate({'left':'0px'},500);
            $('#div-sm>li').animate({'paddingLeft':'20px'},500);
            flag = 0;
        }else{
            $('#div-sm').animate({'left':'-30%'},500);
            $('#div-sm>li').animate({'paddingLeft':'30px'},500);
            flag = 1;
        }
    })
    var flag1 = 1;
    $('#menu-xs').click(function(){     
        if(flag1){
            $('#div-xs').animate({'left':'0px'},500);
            flag1 = 0;
        }else{
            $('#div-xs').animate({'left':'-30%'},500);
            flag1 = 1;
        }
    })
})