// © Copyright 2017 - Delizus by Designesia
jQuery(document).ready(function () {
		// revolution slider
	jQuery("#revolution-slider").revolution({
			sliderType: "standard",
			sliderLayout: "fullscreen",
			delay: 3300,
			navigation: {
					arrows: { enable: false }
			},
			spinner: "off",
			gridwidth: 1140,
			gridheight: 600,
			disableProgressBar: "on"
	});
});

jQuery(document).ready(function() {
	'use strict';				// use strict mode

	$("body").show();

	// template options
  var de_font_style 		= 1; // 1 - default, 2 - alternate font style
	var de_header_style 	= 2; // 1 - solid, 2 - transparent
	var de_header_layout	= 1; // 1 - default, 2 - extended
	var de_menu_separator	= 2; // 1 - dotted, 2 - border, 3 - circle, 4 - square, 5 - plus, 6 - strip, 0 - none
	var de_header_color		= 1; // 1 - dark, - 2 light
	var de_header_scroll_color	= 1; // 1 - dark, - 2 light

	if(de_header_style==2){$('header').addClass('transparent')}
	if(de_menu_separator==2){$('#mainmenu').addClass('line-separator');
	}else if(de_menu_separator==3){$('#mainmenu').addClass('circle-separator');
	}else if(de_menu_separator==4){$('#mainmenu').addClass('square-separator');
	}else if(de_menu_separator==5){$('#mainmenu').addClass('plus-separator');
	}else if(de_menu_separator==6){$('#mainmenu').addClass('strip-separator');
	}else if(de_menu_separator==0){$('#mainmenu').addClass('no-separator');}
	if(de_header_layout==2){$('header').addClass('de_header_2');$('header .info').show();}
	if(de_header_color==2){$('header').addClass('light');}
	if(de_header_scroll_color==2){$('header').addClass('scroll-light')}

	var mobile_menu_show    = 0;
	var v_count = '0';

// --------------------------------------------------
// paralax background
// --------------------------------------------------
	var $window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
			console.log(this);
    var $bgobj = jQuery(this); // assigning the object

    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed'));
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });

	});
 	});
	document.createElement("article");
	document.createElement("section");


// --------------------------------------------------
// magnificPopup
// --------------------------------------------------

	jQuery('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll'
    });

    jQuery('.simple-ajax-popup').magnificPopup({
        type: 'ajax'
    });

	// zoom gallery
	jQuery('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
				//return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	// image popup
	$('.image-popup').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		closeOnContentClick: true,
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.image-popup-gallery').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
				//return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		}

	});

// --------------------------------------------------
// init
// --------------------------------------------------
	function init_de(){

	// gallery hover
	jQuery(".item .picframe").on("mouseenter", function () {
	 jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width"));
	 jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height"));
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(200, .9);
	 var picheight = jQuery(this).find("img").css("height");
	 var newheight;
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-10;
	 //alert(newheight);
	 //jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight},200,'easeOutCubic');
	 jQuery(this).parent().find(".pf_text").css('margin-top', newheight);
	 jQuery(this).parent().find(".pf_text").stop(true).animate({'opacity': '1'},1000,'easeOutCubic');

	 var w = jQuery(this).find("img").css("width");
	 var h = jQuery(this).find("img").css("height");
	 var w = parseInt(w, 10);
	 var h = parseInt(h, 10);
	 var $scale = 1.1;
	 //alert(w);

	jQuery(this).find("img").stop(true).animate({
            width:  w*$scale,
            height: h*$scale,
            'margin-left': -w*($scale - 1)/2,
            'margin-top':  -h*($scale - 1)/2
     }, 400,'easeOutCubic');


  	}).on("mouseleave", function () {
	 var newheight;
	 var picheight = jQuery(this).find("img").css("height");
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-10;
	 //jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight - 30},200,'easeOutCubic');
	 jQuery(this).parent().find(".pf_text").stop(true).animate({'opacity': '0'},400,'easeOutCubic');
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(200, 0);
	 jQuery(this).find("img").stop(true).animate({
            width:  '100%',
            height: '100%',
            'margin-left': 0,
            'margin-top': 0
     }, 400,'easeOutQuad');
	})

	jQuery('.center-xy').each(function () {

            jQuery(this).parent().find("img").on('load', function () {
                var w = parseInt(jQuery(this).parent().find(".center-xy").css("width"),10);
				var h = parseInt(jQuery(this).parent().find(".center-xy").css("height"),10);

				var pic_w = jQuery(this).css("width");
                var pic_h = jQuery(this).css("height");

				jQuery(this).parent().find(".center-xy").css("left",parseInt(pic_w,10)/2-w/2);
				jQuery(this).parent().find(".center-xy").css("top",parseInt(pic_h,10)/2-h/2);

				jQuery(this).parent().find(".bg-overlay").css("width", pic_w);
                jQuery(this).parent().find(".bg-overlay").css("height", pic_h);


            }).each(function () {
                if (this.complete) $(this).load();
            });
        });
	}

	init_de();
	init_resize();

// --------------------------------------------------
// sticky header
// --------------------------------------------------

	function init_resize(){
	enquire.register("screen and (min-width: 993px)", {
		match : function() {
			jQuery('#mainmenu').show();
			mobile_menu_show = 1;
		},
		unmatch : function() {
			jQuery('#mainmenu').hide();
			mobile_menu_show = 0;
			jQuery("#menu-btn").show();
		}
		});

		enquire.register("screen and (max-width: 993px)", {
		match : function() {
			$('header').addClass("header-mobile");
		},
		unmatch : function() {
			$('header').removeClass("header-mobile");
		}
		});

		init();
		init_de();
		jQuery('#gallery').isotope('reLayout');

		$('header').removeClass('smaller');
		$('header').removeClass('logo-smaller');
		$('header').removeClass('clone');
	};

	window.onresize = function(event) {
		init_resize();
	};


	function init() {

		var sh = jQuery('#de-sidebar').css("height");
		var dh = jQuery(window).innerHeight();

		var h = parseInt(sh) - parseInt(dh);

		function scrolling(){
				var mq = window.matchMedia( "(min-width: 993px)" );
				var ms = window.matchMedia( "(min-width: 768px)" );

				if (mq.matches) {
					var distanceY = window.pageYOffset || document.documentElement.scrollTop,
					shrinkOn = 55,
					header = document.querySelector("header");
					jQuery("header").css("height","70px");
				if (distanceY > shrinkOn) {
					$(header).addClass("smaller");
				} else {
					if ($(header).hasClass("smaller")) {
						$(header).removeClass("smaller");
					}

				}
				}


				if (mq.matches) {

				if(jQuery("header").hasClass("side-header")){
					if(jQuery(document).scrollTop()>=h){
						jQuery('#de-sidebar').css("position","fixed");
						if(parseInt(sh)>parseInt(dh)){
						jQuery('#de-sidebar').css("top",-h);
						}
						jQuery('#main').addClass("col-md-offset-3");
						jQuery('h1#logo img').css("padding-left","7px");
						jQuery('header .h-content').css("padding-left","7px");
						jQuery('#mainmenu li').css("width","103%");
					}else{
						jQuery('#de-sidebar').css("position","relative");
						if(parseInt(sh)>parseInt(dh)){
						jQuery('#de-sidebar').css("top",0);
						}
						jQuery('#main').removeClass("col-md-offset-3");
						jQuery('h1#logo img').css("padding-left","0px");
						jQuery('header .h-content').css("padding-left","0px");
						jQuery('#mainmenu li').css("width","100%");
					}
				}

				}
			}

        window.addEventListener('scroll', function(e){
			scrolling();
        });

		scrolling();
    }


// --------------------------------------------------
// owlCarousel
// --------------------------------------------------

	jQuery("#gallery-carousel").owlCarousel({
    items : 4,
    navigation : false,
	pagination : false
    });

	jQuery(".carousel-gallery").owlCarousel({
    items : 4,
    navigation : false,
	pagination : false
    });

	jQuery("#blog-carousel").owlCarousel({
    items : 3,
    navigation : false,
	pagination : true
    });



	jQuery("#testimonial-carousel").owlCarousel({
    items : 2,
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    navigation : false,
    });

	jQuery("#logo-carousel").owlCarousel({
    items : 6,
    navigation : false,
	pagination : false,
	autoPlay : true
    });

	jQuery("#contact-carousel").owlCarousel({
    items : 1,
	singleItem:true,
    navigation : false,
	pagination : false,
	autoPlay : true
    });


	jQuery(".text-slider").owlCarousel({
    items : 1,
	singleItem:true,
    navigation : false,
	pagination : false,
	mouseDrag : false,
	touchDrag : false,
	autoPlay : 4000,
	transitionStyle : "fade"
    });

	jQuery(".blog-slide").owlCarousel({
    items : 1,
	singleItem:true,
    navigation : false,
	pagination : false,
	autoPlay : false
    });

	jQuery(".project-slide").owlCarousel({
    items : 1,
	singleItem:true,
    navigation : false,
	pagination : false,
	autoPlay : false,
	mouseDrag : false,
	touchDrag : true,
	transitionStyle : "fade"
    });

	jQuery(".testimonial-list").owlCarousel({
    items : 1,
	singleItem:true,
    navigation : false,
	pagination : true,
	autoPlay : false
    });

	// Custom Navigation owlCarousel
	$(".next").on("click", function() {
		$(this).parent().parent().find('.blog-slide').trigger('owl.next');
	});
	$(".prev").on("click", function() {
		$(this).parent().parent().find('.blog-slide').trigger('owl.prev');
	});



// --------------------------------------------------
// custom positiion
// --------------------------------------------------
	var $doc_height = jQuery(window).innerHeight();
	jQuery('#homepage #content.content-overlay').css("margin-top", $doc_height);
	jQuery('.full-height').css("height", $doc_height);
	var picheight = jQuery('.center-y').css("height");
	picheight = parseInt(picheight, 10);
	jQuery('.center-y').css('margin-top', (($doc_height - picheight)/2)-90);
	jQuery('.full-height .de-video-container').css("height",$doc_height);


	//  logo carousel hover
	jQuery("#logo-carousel img").on("mouseenter", function () {
	 jQuery(this).fadeTo(150,.5);
	}).on("mouseleave", function () {
	 jQuery(this).fadeTo(150,1);
  	})

	jQuery(window).load(function() {

// --------------------------------------------------
// filtering gallery
// --------------------------------------------------
	var $container = jQuery('#gallery','.masonry');
		$container.isotope({
			itemSelector: '.item',
			filter: '*'
	});
	jQuery('#filters a').on("click", function() {
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		var selector = jQuery(this).attr('data-filter');
		$container.isotope({
		filter: selector
	});
	return false;
	});

// --------------------------------------------------
// tabs
// --------------------------------------------------
	jQuery('.de_tab').find('.de_tab_content > div').hide();
	jQuery('.de_tab').find('.de_tab_content > div:first').show();
	jQuery('li').find('.v-border').fadeTo(150,0);
	jQuery('li.active').find('.v-border').fadeTo(150,1);

	jQuery('li.menu-changer').on("click", function() {
		var dtc = jQuery(this).parent().parent().find('.de_tab_content');
		var	dtc_h = dtc.css("height");

		if(!jQuery(this).hasClass('cust-map-toggle')){
			jQuery(this).parent().parent().find('.de_tab_content').fadeTo(150,1);
			jQuery(this).parent().parent().find('.de_tab_content > div').hide();
			var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
			jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box
			dtc.parent().parent().css("margin-bottom","0");
		}else if(jQuery(this).hasClass('cust-map-toggle')){
			dtc.fadeTo(150,0,function(){
            dtc.hide();
			dtc.parent().parent().css("margin-bottom",dtc_h);
			});
		}

		jQuery(this).parent().find('li').removeClass("active");
		jQuery(this).addClass("active");
		jQuery(this).parent().parent().find('.v-border').fadeTo(150,0);
		jQuery(this).find('.v-border').fadeTo(150,1);
	});


// --------------------------------------------------
// toggle
// --------------------------------------------------
	jQuery(".toggle-list h2").addClass("acc_active");
	jQuery(".toggle-list h2").toggle(
	function() {
	 jQuery(this).addClass("acc_noactive");
     jQuery(this).next(".ac-content").slideToggle(200);
	},
    function() {
	 jQuery(this).removeClass("acc_noactive").addClass("acc_active");
	 jQuery(this).next(".ac-content").slideToggle(200);
  	})

	var mb;

	// --------------------------------------------------
	// navigation for mobile
	// --------------------------------------------------


	window.animatingMenu = false;
	jQuery('#menu-btn').on("click", function() {
		if(window.animatingMenu) return;
		window.animatingMenu = true;

		if(mobile_menu_show == 0){
			jQuery('header').css('height','auto');
			jQuery('#mainmenu').slideDown();
			mobile_menu_show = 1;
		} else {
			jQuery('#mainmenu').slideUp();
			jQuery('header').animate({
				'height': '75px',
			},100);
			mobile_menu_show = 0;
		}

		setTimeout(function() { window.animatingMenu = false; }, 400)
	});

// one page navigation
	      /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */

        jQuery("#homepage nav a, .scroll-to").on("click", function(evn) {

			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash);
			}
        });

		jQuery("a.btn").on("click", function(evn) {

			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash);
			}
        });

		jQuery('.de-gallery .item .icon-info').on("click", function() {
			jQuery('.page-overlay').show();
			url = jQuery(this).attr("data-value");

			jQuery("#loader-area .project-load").load(url, function() {
			jQuery("#loader-area").slideDown(500,function(){
				jQuery('.page-overlay').hide();
			jQuery('html, body').animate({
				scrollTop: jQuery('#loader-area').offset().top - 70
			}, 500, 'easeOutCubic');

		//

			jQuery(".image-slider").owlCarousel({
			items : 1,
			singleItem:true,
			navigation : false,
			pagination : true,
			autoPlay : false
			});

			jQuery(".container").fitVids();

			jQuery('#btn-close-x').on("click", function() {
			jQuery("#loader-area").slideUp(500,function(){
			jQuery('html, body').animate({
				scrollTop: jQuery('#section-portfolio').offset().top - 70
			}, 500, 'easeOutCirc');
			});

			return false;

				});

			});
		});
		});

		jQuery('.de-gallery .item').on("click", function() {
			$('#navigation').show();
		});


// --------------------------------------------------
// custom page with background on side
// --------------------------------------------------
	jQuery('.side-bg').each(function(){
		jQuery(this).find(".image-container").css("height",jQuery(this).find(".image-container").parent().css("height"));
	});

	var target = $('.center-y');
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});

	jQuery(document).scroll(function() {
		jQuery('#homepage nav li a').each(function(){
			if (this.href.indexOf('#') != -1) {
			var href = jQuery(this).attr('href');
				if(jQuery(window).scrollTop() > jQuery(href).offset().top - 140){
					jQuery('nav li a').removeClass('active');
					jQuery(this).addClass('active');
				}
			}
		});
	});

	init();

		// btn arrow up
		jQuery(".arrow-up").on("click", function() {
			jQuery(".coming-soon .coming-soon-content").fadeOut("medium",function(){
				jQuery("#hide-content").fadeIn(600,function(){
					jQuery('.arrow-up').animate({'bottom': '-40px' },"slow");
					jQuery('.arrow-down').animate({'top': '0' },"slow");
				});
			});
		});

		// btn arrow down
		jQuery(".arrow-down").on("click", function() {
			jQuery("#hide-content").fadeOut("slow",function(){
				jQuery(".coming-soon .coming-soon-content").fadeIn(800,function(){
					jQuery('.arrow-up').animate({'bottom': '0px' },"slow");
					jQuery('.arrow-down').animate({'top': '-40' },"slow");
				});
			});
		});

		// isotope
		jQuery('#gallery').isotope('reLayout');

		// hide preloader after loaded
		jQuery('#preloader').delay(500).fadeOut(500);
});

	jQuery(window).scroll(function() {

// --------------------------------------------------
// progress bar
// --------------------------------------------------
		jQuery('.de-progress').each(function(){
		var pos_y = jQuery(this).offset().top;
		var value = jQuery(this).find(".progress-bar").attr('data-value');

		var topOfWindow = jQuery(window).scrollTop();
			if (pos_y < topOfWindow+500) {
				jQuery(this).find(".progress-bar").animate({'width': value },"slow");
			}
		});

		jQuery(".nav-exit").on("click", function() {
			$.magnificPopup.close();
        });

	});

	jQuery('.center-xy').each(function () {

            jQuery(this).parent().find("img").on('load', function () {
                var w = parseInt(jQuery(this).parent().find(".center-xy").css("width"),10);
				var h = parseInt(jQuery(this).parent().find(".center-xy").css("height"),10);

				var pic_w = jQuery(this).css("width");
                var pic_h = jQuery(this).css("height");

				jQuery(this).parent().find(".center-xy").css("left",parseInt(pic_w,10)/2-w/2);
				jQuery(this).parent().find(".center-xy").css("top",parseInt(pic_h,10)/2-h/2);

				jQuery(this).parent().find(".bg-overlay").css("width", pic_w);
                jQuery(this).parent().find(".bg-overlay").css("height", pic_h);


            }).each(function () {
                if (this.complete) $(this).load();
            });
        });

	if ($('#back-to-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


}

$("div,section").css('background-color', function () {
    return jQuery(this).data('bgcolor');
	});

	$("div,section").css('background-image', function () {
    return jQuery(this).data('bgimage');
	});
	$("div,section").css('background-size', function() {
		return 'cover';
	});

	// mainmenu create span
    jQuery('#mainmenu li a').each(function () {
        if ($(this).next("ul").length > 0) {
            $("<span></span>").insertAfter($(this));
        }
    });

    // mainmenu arrow click
    jQuery("#mainmenu > li > span").on("click", function () {
        $('header').css("height", "auto");
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).addClass("active");
                $(this).parent().find("ul:first").css("height", "auto");
                var curHeight = $(this).parent().find("ul:first").height();
                $(this).parent().find("ul:first").css("height", "0");
                $(this).parent().find("ul:first").animate({ 'height': curHeight }, 400, 'easeInOutQuint');

                break;

            case 2:
                $(this).removeClass("active");
                $(this).parent().find("ul:first").animate({ 'height': "0" }, 400, 'easeInOutQuint');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });

	jQuery("#mainmenu > li > ul > li > span").on("click", function () {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).addClass("active");
                $(this).parent().find("ul:first").css("height", "auto");
				$(this).parent().parent().parent().find("ul:first").css("height", "auto");
                var curHeight = $(this).parent().find("ul:first").height();
                $(this).parent().find("ul:first").css("height", "0");
                $(this).parent().find("ul:first").animate({ 'height': curHeight }, 400, 'easeInOutQuint');

                break;

            case 2:
                $(this).removeClass("active");
                $(this).parent().find("ul:first").animate({ 'height': "0" }, 400, 'easeInOutQuint');
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });

	jQuery('.owl-custom-nav').each(function () {
        var owl = $('.owl-custom-nav').next();
        var ow = parseInt(owl.css("height"), 10);
        $(this).css("margin-top", (ow / 2) - 25);

        owl.owlCarousel();

        // Custom Navigation Events
        $(".btn-next").on( "click", function() {
            owl.trigger('owl.next');
        });
        $(".btn-prev").on( "click", function() {
            owl.trigger('owl.prev');
        });
    });

});
