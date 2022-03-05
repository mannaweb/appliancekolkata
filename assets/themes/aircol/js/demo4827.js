(function($) {

    "use strict";

    /*------search-when-toggle-js---------------------*/
    $(function() {
        $('a[href="#search"]').on("click", function(event) {
            event.preventDefault();
            $("#search").addClass("open");
            $('#search > form > input[type="search"]').focus();
        });

        $("#search, #search button.close").on("click keyup", function(event) {
            if (
                event.target == this ||
                event.target.className == "close" ||
                event.keyCode == 27
            ) {
                $(this).removeClass("open");
            }
        });

    });



    /*------counter-js-----------------*/
	if($('#counter').length){
    var a = 0;
    $(window).scroll(function() {
	
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });
	}
    /*--------------owl------------------*/
    $(document).ready(function() {
        $('.two_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            center: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<span class="fa flaticon-up-arrow"></span>', '<span class="fa flaticon-angle-arrow-down"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },

                1000: {
                    items: 2
                },
                1600: {
                    items: 2
                }
            }
        });
    });

    /*--------------------------------*/
    $(document).ready(function() {
        $('.three_items').owlCarousel({
            loop: true,
            margin: 5,
            nav: true,
            dots: false,
            center: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<span class="fa flaticon-left-arrow-1"></span>', '<span class="fa flaticon-right-arrow-1"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                650: {
                    items: 2
                },

                992: {
                    items: 2,
                    margin: 30,
                },
                1200: {
                    items: 3
                }
            }
        });
    });



    /*--------------------------------*/
    $(document).ready(function() {
        $('.client_logo_img').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            center: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<span class="fa flaticon-up-arrow"></span>', '<span class="fa flaticon-angle-arrow-down"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },

                1000: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    });



    /*--------------------------------*/
    $(document).ready(function() {
        $('.testimonial_carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            center: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            navText: ['<span class="fa flaticon-up-arrow"></span>', '<span class="fa flaticon-angle-arrow-down"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    });

	//Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.header_outer').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.header_outer');
            var sticky_header = $('.header_outer .new-header-lower');
            if (windowpos > 200) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
            }
        }
    }
    
    headerStyle();

    //Submenu Dropdown Toggle
    if($('.header_outer .new-navigation li.dropdown ul').length){
        
        
    }

    //Mobile Nav Hide Show
    if($('.menu-depend').length){
		
		var mobileMenuContent = $('.menu-depend').html();
		$('.mobile-menu .menu-box .menu-outer .mobile-navigation').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
        $('.mobile-menu .mobile-navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

        $(window).on("load",function(){
            $('.mobile-menu .menu-box').mCustomScrollbar();
        });
    }

    headerStyle();
    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }


    /* ==========================================================================
    When document is Scrollig, do
    ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });


})(window.jQuery);;