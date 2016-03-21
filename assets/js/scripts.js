(function($) {
    $.material.init();
    /* -------------------
     Scroll functions
     ---------------------*/
    $(window).scroll(function() {
        /* -------------------
         Header Animation
         ---------------------*/
        if ($(this).scrollTop() > 10) {
            $('nav').addClass("navbar-small")
        }
        else {
            $('nav').removeClass("navbar-small")
        }
    });
    /* -------------------
     Back to top button popup
     ---------------------*/
    if($(window).scrollTop() > 400){
        $("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
    }
    else{
        $("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
    }
})(jQuery);