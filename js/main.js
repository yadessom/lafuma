$(function(){
    
    /* *************************************** */
    $('.m_gnb>li').click(function(){
        $(this).find('.m_depth2').slideToggle(300);
        $(this).siblings().find('.m_depth2').slideUp(300);
    });
    /* *************************************** */

    $('.m_btn').click(function(){
        $('.m_menu').animate({'left':0},300);
        $('.blackout').fadeIn(300);
        $('body,html').css('overflow','hidden');
    });
    $('.blackout').click(function(){
        $('.m_menu').animate({'left':'-100%'},300);
        $('.blackout').fadeOut(300);
        $('.m_depth2').slideUp();
        $('body,html').css('overflow','auto');
    });

    /* *************************************** */
    $('.visual').slick({
        autoplay: true,
        dots:true
    });

    $('.gnb>li').mouseenter(function(){
        $(this).find('.depth2').stop().slideDown(200);
    });
    $('.gnb>li').mouseleave(function(){
        $('.depth2').stop().slideUp(200);
    });

    /* *************************************** */

    $(window).resize(function(){
        let num = $(this).width();

        if(num <= 750){
            $('.slick-prev, .slick-next').hide();

            $('.visual_01 img').attr('src','images/m_visual_a.jpg');
            $('.visual_02 img').attr('src','images/m_visual_b.jpg');

            $('.sec_02_up li:first-child img').attr('src','images/m_catalogue.jpg');
            $('.sec_02_up li:last-child img').attr('src','images/m_video.jpg');

            $('.sec_02_down li:first-child img').attr('src','images/m_product.jpg');
            $('.sec_02_down li:nth-child(2) img').attr('src','images/m_athletic.jpg');
            $('.sec_02_down li:last-child img').attr('src','images/m_camping.jpg');
        }else{
            $('.slick-prev, .slick-next').show();

            $('.visual_01 img').attr('src','images/visual_a.jpg');
            $('.visual_02 img').attr('src','images/visual_b.jpg');

            $('.sec_02_up li:first-child img').attr('src','images/cata_ot.jpg');
            $('.sec_02_up li:last-child img').attr('src','images/video_ot.jpg');

            $('.sec_02_down li:first-child img').attr('src','images/product_ot.jpg');
            $('.sec_02_down li:nth-child(2) img').attr('src','images/athletic_ot.jpg');
            $('.sec_02_down li:last-child img').attr('src','images/camping_ot.jpg');
        }
    });

    /* *************************************** */

    let num = $(window).width();
    if(num <= 750){
        $('.slick-prev, .slick-next').hide();

        $('.visual_01 img').attr('src','images/m_visual_a.jpg');
        $('.visual_02 img').attr('src','images/m_visual_b.jpg');

        $('.sec_02_up li:first-child img').attr('src','images/m_catalogue.jpg');
        $('.sec_02_up li:last-child img').attr('src','images/m_video.jpg');

        $('.sec_02_down li:first-child img').attr('src','images/m_product.jpg');
        $('.sec_02_down li:nth-child(2) img').attr('src','images/m_athletic.jpg');
        $('.sec_02_down li:last-child img').attr('src','images/m_camping.jpg');
    }else{
        $('.slick-prev, .slick-next').show();

        $('.visual_01 img').attr('src','images/visual_a.jpg');
        $('.visual_02 img').attr('src','images/visual_b.jpg');

        $('.sec_02_up li:first-child img').attr('src','images/cata_ot.jpg');
        $('.sec_02_up li:last-child img').attr('src','images/video_ot.jpg');

        $('.sec_02_down li:first-child img').attr('src','images/product_ot.jpg');
        $('.sec_02_down li:nth-child(2) img').attr('src','images/athletic_ot.jpg');
        $('.sec_02_down li:last-child img').attr('src','images/camping_ot.jpg');
    }
    /* *************************************** */

    $('.sec_02_up li a, .sec_02_down li a').mouseenter(function(){
        let pre_src = $(this).find('img').attr('src');
        
        let next_src = pre_src.replace('ot','ov');

        $(this).find('img').attr('src',next_src);
    });
    $('.sec_02_up li a, .sec_02_down li a').mouseleave(function(){
        let pre_src = $(this).find('img').attr('src');
        
        let next_src = pre_src.replace('ov','ot');

        $(this).find('img').attr('src',next_src);
    });
    /* *************************************** */

    $('.sec_03_inner li a').mouseenter(function(){
        $(this).find('.sec_03_cover').show();
    });
    $('.sec_03_inner li a').mouseleave(function(){
        $(this).find('.sec_03_cover').hide();
    });

    /* *************************************** */
    $('.f_family_btn').click(function(){
        $('.f_family_list').slideToggle(200);
    });
























});