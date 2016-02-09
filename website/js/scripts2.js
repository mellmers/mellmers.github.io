var zoomLevel = 1;
var routenplanerForm = "<form class='routenplaner-form' id='routenplaner'>" +
    "<div class='input-group' class='routenplaner'>" +
    "<input type='text' class='form-control input-lg' placeholder='Route hierher berechnen (Geben Sie hier Ihre Adresse ein)' id='get-route-input'>" +
    "<span class='input-group-btn'><button class='btn btn-primary' type='submit'><i class='icon-magnifier'></i></button></span>" +
    "</div>" +
    "</form>";

(function($) {
    "use strict";

    /**
     * Scroll to hash, when page loaded with hash
     */

    if(window.location.hash) {
        $('html,body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 2000);
    }

    /* -------------------
    Revolution Sliders
    ---------------------*/
    $('.tp-banner').show().revolution({
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        dottedOverlay: "none",
		hideTimerBar: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });
    $('.tp-banner-video').show().revolution({
        dottedOverlay: "none",
        delay: 9000,
        startheight: 700,
        hideTimerBar: "on",
        navigationType: "none",
		navigationStyle: "preview4",
		touchenabled: "on",
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
		keyboardNavigation: "on",
		fullScreen: "on",
		spinner: "spinner1",
		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,
		forceFullWidth: "off",
		fullScreenAlignForce: "off",
		minFullScreenHeight: "400",
		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off"
    });
    /* -------------------
    Owl Slider callings
    ---------------------*/
    // AJAX project slider
    $(document).ajaxComplete(function(){
        $("#project-slider").owlCarousel({
            autoPlay : true,
            singleItem : true,
            pagination: true,
            navigation: false,
            autoHeight:true,
            loop: true,
            stopOnHover: true,
            lazyLoad : true
        });
    });
    $("#owl-slider").owlCarousel({
        autoPlay : true,
        singleItem : true,
        pagination: true,
        navigation: false,
        navigationText : ['<i class="icon ion-chevron-left"></i>','<i class="icon ion-chevron-right"></i>']
    });
    /* -------------------
    Parallax Sections
    ---------------------*/
    if(!Modernizr.touch){
        $('#home-parallax-fullscreen').parallax("50%", 0.5); 
        $('#home-parallax-fullwidth').parallax("50%", 0.5); 
        $('.parallax-section-1').parallax("50%", 0.5);
        $('.parallax-section-2').parallax("50%", 0.5);
        $('.parallax-section-3').parallax("50%", 0.5);
        $('.parallax-section-4').parallax("50%", 0.5);
        $('.parallax-section-5').parallax("50%", 0.5);
        $('.parallax-section-6').parallax("50%", 0.5);
        $('.parallax-section-7').parallax("50%", 0.5); 
        $('.parallax-section-8').parallax("50%", 0.5); 
        $('#home-landing').parallax("50%", 0.5);
        
        /* -------------------
        Animation.css calling
        ---------------------*/
        new WOW().init(); 
    }
    /* -------------------
    Google map
    ---------------------*/
    $("#map")
        .gmap3({
            marker:{
                latLng:[53.224490, 8.670277],
                options:{ icon: "img/assets/marker.png"},
                events:{ // events trigged by markers
                    click: function(){
                        this.gmap3('get').setCenter(new google.maps.LatLng(53.224490, 8.670277));
                    }
                }
            },
            map:{
                options:{
                    styles: [ {
                        stylers: [ { "saturation":-90 }, { "lightness": 0 }, { "gamma": 0.0 }]
                    } ],
                    zoom: 15,
                    scrollwheel:false,
                    draggable: true,
                    center: [53.228146, 8.668893]
                }
            }
        })
        .append(routenplanerForm);
    /* -------------------
     Back to top button popup
     ---------------------*/
    if($(window).scrollTop() > 400){
        $("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
    }
    else{
        $("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
    }
    /* -------------------
    Scroll functions
    ---------------------*/
    $(window).scroll(function(){
        parallax();
        /* -------------------
        Header Animation
        ---------------------*/
        if ($(this).scrollTop() > window.innerHeight-107){
            $("nav").addClass("navbar-small");
            $(".logo-big").hide();
            $("#zoom-button").stop().animate({width: "36px", padding: "5px 3px"},200);
        }
        else{
            $("nav").removeClass("navbar-small");
            $(".logo-big").show();
            $("#zoom-button").stop().animate({width: "0px", padding: "0px"},200);
        }
        /* -------------------
        Back to top button popup
        ---------------------*/
        if($(window).scrollTop() > 400){
        $("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
        }
        else{
            $("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
        }
    });
    /* -------------------
    Preloader
    ---------------------*/
    $(window).load(function(){
        // Preloader 
        $('.loader').fadeOut();
        $('#preloader').delay(350).fadeOut();
    }); // End Window Load
    /* -------------------
    Page Hero Parallax
    ---------------------*/
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.hero').css('top',-(scrolled*0.0515)+'rem');
        $('.home-container').css('bottom',-(scrolled*0.0515)+'rem');
        $('.op-1,.op-2,.op-3').css('opacity',1-(scrolled*.00110));            
    }; 
    /* -------------------
    Smooth scrolling to anchor
    ---------------------*/
    $('.to-section a,.btn-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 54
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    /* -------------------
    Back to top button function
    ---------------------*/
    $('#back-to-top,.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });
    /* -------------------
    Active menu item on page scroll
    ---------------------*/
    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('current');
          sections.removeClass('current');
          $(this).addClass('current');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
        }
      });
    });
    /* -------------------
    Auto-close responsive navbar
    ---------------------*/
    function close_toggle() {
        if ($(window).width() <= 992) {
          $('.navbar-collapse a').on('click', function(){
              $('.navbar-collapse').collapse('hide')
          }); 
        }
        else {
         $('.navbar .navbar-default a').off('click')
        }
    }
    close_toggle();
    $(window).resize(close_toggle); 
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    /* -------------------
    Contact form
    ---------------------*/
    $('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(250,function() {
            $('#message').hide();
            $('#submit')
                .after('<img src="img/assets/contact-form-loader.gif" class="loader" />')
                .attr('disabled','disabled');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                comments: $('#comments').val(),
            },
                function(data){
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown(250);
                    $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
                }
            );
		});
		return false;
	});
    /* -------------------
    Subscribe form
    ---------------------*/
    $( document ).on( 'ready', function() {
        $( '#subscribe-form' ).on( 'submit', function( e ) {
            e.preventDefault();
            var $el = $( this ),
                $alert = $el.find( '.form-validation' ),
                $submit = $el.find( 'button' ),
                action = $el.attr( 'action' );
            $submit.button( 'loading' );
            $alert.removeClass( 'alert-danger alert-success' );
            $alert.html( '' );
            $.ajax({
                type     : 'POST',
                url      : action,
                data     : $el.serialize() + '&ajax=1',
                dataType : 'JSON',
                success  : function( response ) {
                    if ( response.status == 'error' ) {
                        $alert.html( response.message );
                        $alert.addClass( 'alert-danger' ).fadeIn( 500 );
                    } 
                    else {
                        $el.trigger( 'reset' );
                        $alert.html( response.message );
                        $alert.addClass( 'alert-success' ).fadeIn( 500 );
                    }
                    $submit.button( 'reset' );
                },
            })
        });
    });
    /* -------------------
    Bootstrap Tooltip, Alert, Tabs
    ---------------------*/
    $(function () { $("[data-toggle='tooltip']").tooltip();  
        $(".alert").alert()
    });
    $(function () {
        var active = true;
        $('#collapse-init').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Close All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Open All');
            }
        });
        $('#accordion').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });
    });
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    /* -------------------
     Gray-Scale Hovering
     ---------------------*/
    $(".gray-scale")
        .on("mouseover", function(){
            $(this).removeClass("gray-scale");
        })
        .on("mouseout", function(){
            $(this).addClass("gray-scale");
        });

    // Remove Hash from URL
    history.pushState("", document.title, window.location.pathname);



})(jQuery);

// Zoom IN and Zoom OUT Button
$('#zoom-in').click(function() {
    updateZoom(0.1);
    console.log(zoomLevel);
    if(zoomLevel >= 1.4) {
        $(this).attr("disabled", "disabled");
    }
    else {
        $("#zoom-out").removeAttr("disabled");
    }
});

$('#zoom-out').click(function() {
    updateZoom(-0.1);
    console.log(zoomLevel);
    if(zoomLevel <= 1) {
        $(this).attr("disabled", "disabled");
    }
    else {
        $("#zoom-in").removeAttr("disabled");
    }
});

var updateZoom = function(zoom) {
    zoomLevel += zoom;
    $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
};
var setZoom = function(zoom) {
    $('body').css({ zoom: zoom, '-moz-transform': 'scale(' + zoom + ')' });
};

/**
 * MAP Routenberechnung
 */

$(".routenplaner-form").on("submit", function(e) {
    e.preventDefault();
    var origin = $("#get-route-input").val();
    console.log(origin);

    var map = $("#map");
    map.gmap3("destroy");
    map
        .gmap3({
            marker:{
                latLng:[53.224490, 8.670277],
                options:{ icon: "img/assets/marker.png"},
                events:{ // events trigged by markers
                    click: function(){
                        this.gmap3('get').setCenter(new google.maps.LatLng(53.224490, 8.670277));
                    }
                }
            },
            map:{
                options:{
                    styles: [ {
                        stylers: [ { "saturation":-90 }, { "lightness": 0 }, { "gamma": 0.0 } ]
                    } ],
                    zoom: 14,
                    scrollwheel:false,
                    draggable: true }
            },
            getroute: {
                options: {
                    origin: origin,
                    destination: "Lesumer Kirchweg 30 28790 Schwanewede",
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                },
                callback: function (results) {
                    if (!results) return;
                    $(this).gmap3({
                        directionsrenderer: {
                            options: {
                                directions: results
                            }
                        }
                    });
                }
            }
        })
        .append(routenplanerForm);

    $("#routenplaner").css("opacity", ".4")
        .mouseenter(function () {
            $(this).css("opacity", ".8");
        })
        .mouseleave(function () {
            $(this).css("opacity", ".4");
        });
});

/* -------------------
 Portfolio
 ---------------------*/
(function($, window, document, undefined) {
    "use strict";

    /********************************
     imagelightbox plugin
     *******************************/

    // ACTIVITY INDICATOR
    var activityIndicatorOn = function() {
        $( '<div class="imagelightbox-loading"></div>' ).appendTo( 'body' );
    };
    var activityIndicatorOff = function() {
        $( '.imagelightbox-loading' ).remove();
    };


    // OVERLAY
    var overlayOn = function() {
        $( '<div class="imagelightbox-overlay"></div>' ).appendTo( 'body' );
    };
    var overlayOff = function() {
        $( '.imagelightbox-overlay' ).remove();
    };


    // CLOSE BUTTON
    var closeButtonOn = function( instance ) {
        $( '<div class="imagelightbox-close" title="Schließen (Esc)" />' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
    };
    var closeButtonOff = function() {
        $( '.imagelightbox-close' ).remove();
    };

    // ARROWS
    var arrowsOn = function( instance, selector ) {
        var $arrows = $( '<div class="imagelightbox-arrow imagelightbox-arrow-left"></div><div class="imagelightbox-arrow imagelightbox-arrow-right"></div>' );
        if(instance.length > 1) {
            $arrows.appendTo('body');
            $arrows.on('click touchend', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
                    index = $target.index(selector);

                if ($this.hasClass('imagelightbox-arrow-left')) {
                    index = index - 1;
                    if (!$(selector).eq(index).length)
                        index = $(selector).length;
                }
                else {
                    index = index + 1;
                    if (!$(selector).eq(index).length)
                        index = 0;
                }

                instance.switchImageLightbox(index);
                return false;
            });
        }
    };
    var arrowsOff = function() {
        $( '.imagelightbox-arrow' ).remove();
    };

    // Initialize Plugin
    var selector = 'a.lightbox';
    var instance = $( selector ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( instance ); activityIndicatorOn(); arrowsOn( instance, selector ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });

    var selector1 = 'a.lightbox-1', selector2 = 'a.lightbox-2', selector3 = 'a.lightbox-3', selector4 = 'a.lightbox-4', selector5 = 'a.lightbox-5', selector6 = 'a.lightbox-6', selector7 = 'a.lightbox-7', selector8 = 'a.lightbox-8', selector9 = 'a.lightbox-9';
    var inst1 = $( selector1 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst1 ); activityIndicatorOn(); arrowsOn( inst1, selector1 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst2 = $( selector2 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst2 ); activityIndicatorOn(); arrowsOn( inst2, selector2 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst3 = $( selector3 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst3 ); activityIndicatorOn(); arrowsOn( inst3, selector3 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst4 = $( selector4 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst4 ); activityIndicatorOn(); arrowsOn( inst4, selector4 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst5 = $( selector5 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst5 ); activityIndicatorOn(); arrowsOn( inst5, selector5 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst6 = $( selector6 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst6 ); activityIndicatorOn(); arrowsOn( inst6, selector6 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst7 = $( selector7 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst7 ); activityIndicatorOn(); arrowsOn( inst7, selector7 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst8 = $( selector8 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst8 ); activityIndicatorOn(); arrowsOn( inst8, selector8 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });
    var inst9 = $( selector9 ).imageLightbox({
        onStart:		function() { setZoom(1); overlayOn(); closeButtonOn( inst9 ); activityIndicatorOn(); arrowsOn( inst9, selector9 ); },
        onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); arrowsOff()},
        onLoadStart: function(){ activityIndicatorOn(); },
        onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
    });

})(jQuery, window, document);


/* -------------------
 Contact
 ---------------------*/
(function($, window, document, undefined) {
    "use strict";

    $("#contactform .radio-buttons input").on("click", function () {
        var val = $(this).val();
        $("#contactform .contacting input").prop("required", false);
        if(val == "radio-phone")
            $("#phone").prop("required", true);
        else if(val == "radio-mobile")
            $("#mobile").prop("required", true);
        else if(val == "radio-email")
            $("#email").prop("required", true);
    });

})(jQuery, window, document);