$(function(){
    $(function(){
        $('.c_left_hot').click(function(){
            $('.c_hot_pink').css({'opacity':'1'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_sky_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_left_pink').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'1'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_sky_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_left_orange').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'1'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_sky_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_left_yellow').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'1'});
            $('.c_sky_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_left_blue').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_sky_blue').css({'opacity':'1'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_left_mint').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_syu_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'1'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_right_black').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_syu_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'1'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_right_white').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_syu_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'1'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_right_silver').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_syu_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'1'});
            $('.c_gold').css({'opacity':'0'});
        })
    });

    $(function(){
        $('.c_right_gold').click(function(){
            $('.c_hot_pink').css({'opacity':'0'});
            $('.c_pink').css({'opacity':'0'});
            $('.c_orange').css({'opacity':'0'});
            $('.c_yellow').css({'opacity':'0'});
            $('.c_syu_blue').css({'opacity':'0'});
            $('.c_mint').css({'opacity':'0'});
            $('.c_black').css({'opacity':'0'});
            $('.c_white').css({'opacity':'0'});
            $('.c_silver').css({'opacity':'0'});
            $('.c_gold').css({'opacity':'1'});
        })
    });


    
    $('.c_left li').click(function(){
       $('.c_left li, .c_right li').removeClass('on')
       $(this).addClass('on');
    })

    $('.c_right li').click(function(){
        $('.c_left li, .c_right li').removeClass('on')
        $(this).addClass('on');
     })


   

     $('.section_slider').slick({
        autoplay:false,
        arrows:true,
        infinite:false,
        slidesToShow:1,
        infinite:true
        
     })







    // 스크롤 이벤트

    $('.section1 .btn_down').click(function(){
        $('body,html').animate({'scrollTop':1277},1000);
    })

    
    $('.section2 .se2_down').click(function(){
        $('body,html').animate({'scrollTop':2302},1000);
    })

    $('.section3 .se3_down').click(function(){
        $('body,html').animate({'scrollTop':3302},1000);
    })

    $('.section4 .se4_down').click(function(){
        $('body,html').animate({'scrollTop':4442},1000);
    })

    $('.section5 .se5_down').click(function(){
        $('body,html').animate({'scrollTop':5482},1000);
    })

    $('.section6 .se6_down').click(function(){
        $('body,html').animate({'scrollTop':6482},1000);
        console.log('클릭')
    })

    $('.section7 .se7_down').click(function(){
        $('body,html').animate({'scrollTop':7482},1000);
    })

    $('.section_slide .slide_down').click(function(){
        $('body,html').animate({'scrollTop':8465},1000);
    })

    $('.section8 .se8_down').click(function(){
        $('body,html').animate({'scrollTop':9615},1000);
    })

    $('.section9 .se9_down').click(function(){
        $('body,html').animate({'scrollTop':10775},1000);
    })

    $('.section10 .se10_down').click(function(){
        $('body,html').animate({'scrollTop':11740},1000);
    })




    $('.quick li').click(function(){
        var num = $(this).index()
        console.log('클릭')
        if(num==0){
            $('body,html').stop().animate({'scrollTop':0},1000);

        }else if(num==1){
            $('body,html').stop().animate({'scrollTop':1277},1000);
        }else if(num==2){
            $('body,html').stop().animate({'scrollTop':2302},1000);
        }else if(num==3){
            $('body,html').stop().animate({'scrollTop':3302},1000);
        }else if(num==4){
            $('body,html').stop().animate({'scrollTop':4442},1000);
        }else if(num==5){
            $('body,html').stop().animate({'scrollTop':5482},1000);
        }else if(num==6){
            $('body,html').stop().animate({'scrollTop':6482},1000);
        }else if(num==7){
            $('body,html').stop().animate({'scrollTop':7482},1000);
        }else if(num==8){
            $('body,html').stop().animate({'scrollTop':8465},1000);
        }else if(num==9){
            $('body,html').stop().animate({'scrollTop':9615},1000);
        }else if(num==10){
            $('body,html').stop().animate({'scrollTop':10775},1000);
        }else if(num==11){
            $('body,html').stop().animate({'scrollTop':11740},1000);
        }else if(num==12){
            $('body,html').stop().animate({'scrollTop':12590},1000);
        }

        
    })

    // 스크롤바의 위치에 따라서 헤더를 고정시키기
    $(window).scroll(function(){
        var num = $(document).scrollTop();
        console.log(num)
        if(num > 1277){
            $('.header').addClass('on')
        }else{
            $('.header').removeClass('on')
        }

        if(num>=0 && num<=1276){
            $('.quick li').removeClass('on');
            $('.quick li').eq(0).addClass('on')
        }else if(num>=1277 && num<=2301){
            $('.quick li').removeClass('on');
            $('.quick li').eq(1).addClass('on');
        }else if(num>=2302 && num<=3301){
            $('.quick li').removeClass('on');
            $('.quick li').eq(2).addClass('on')
        }else if(num>=3302 && num<=4441){
            $('.quick li').removeClass('on');
            $('.quick li').eq(3).addClass('on')
        }else if(num>=4442 && num<=5481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(4).addClass('on')
        }else if(num>=5482 && num<=6481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(5).addClass('on')
        }else if(num>=6482 && num<=7481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(6).addClass('on')
        }else if(num>=7482 && num<=8464){
            $('.quick li').removeClass('on');
            $('.quick li').eq(7).addClass('on')
        }  else if(num>=8465 && num<=9614){
            $('.quick li').removeClass('on');
            $('.quick li').eq(8).addClass('on')
        }else if(num>=9615 && num<=10774){
            $('.quick li').removeClass('on');
            $('.quick li').eq(9).addClass('on')
        }else if(num>=10775 && num<=11739){
            $('.quick li').removeClass('on');
            $('.quick li').eq(10).addClass('on')
        }else if(num>=11740 && num<=15000){
            $('.quick li').removeClass('on');
            $('.quick li').eq(11).addClass('on')
        }


        // 스크롤바에 따라서 애니메이션 실행 
        if(num>840 && num<=2302){
            $('.pho').addClass('on')
        }else if(num>0 && num<=1277){
            $('.pho').removeClass('on')
        }
        
        if(num>840 && num<=3302){
            $('.cat , .phone').addClass('on')
        }else if(num>0 && num>3302){
            $('.cat , .phone').removeClass('on')
        }

        // if(num>840 && num<=4442){
        //     $('.pocket_wrap').addClass('on')
        // }else if(num>0 && num>4442){
        //     $('.pocket_wrap').removeClass('on')
        // }

        
        
        
    });
});