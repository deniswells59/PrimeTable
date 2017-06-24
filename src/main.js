(function() {

  $(document).ready(init);

  function init() {
    window.animatingMenu = false;
    var animatingGallery = false;
    var galleryGrowing = false;

    var galleryItem;
    galleryWrapperInit();

    // Events
    $('#menu-btn').click(showMenu);
    $('.nav-link').click(navScroll);
    $('.header-btn').click(navScroll);
    $('.arrow-wrapper').click(galleryChange);
    $('.img-btn').click(galleryGrow);

    // Scroll Events
    $(window).scroll(function() {
      var top = $(this).scrollTop();
      if(top === 0) {
        $('header.transparent').removeClass('clone');
      } else {
        showMenu();
      }
      checkAnimation();
    })

    if($(window).width() > 430) {
      $('.about-left').css('background-image', 'url("/images/about-left.png")');
      $('.about-right').css('background-image', 'url("/images/about-right.png")');
      $('#header').attr('src', 'images/header.jpg');
    } else {
      $('#header').attr('src', 'images/header_mobile.jpg');
    }
    // Function declarations
    function showMenu() {
      $('header.transparent').addClass('clone');
    }

    function galleryWrapperInit() {
      var galleryWrap = $('.gallery-wrapper');
      var galleryWrapHeight = $(galleryWrap).height();
      $(galleryWrap).css('min-height', galleryWrapHeight);
      $(galleryWrap).children('.container').css('min-height', galleryWrapHeight);

      galleryItem = $($(galleryWrap).children('.container').children('.col-md-3')[0]).clone();
      $(galleryItem).removeClass('wow fadeInLeft animated');
    }

    function navScroll(e) {
      e.preventDefault();
      var section = $(this).data('nav');

      if($(window).width() < 1025) {
        toggleMenu();
      }

      if(section === 'home-section') {
        return scrollToEl('body');
      }
      scrollToEl('.' + section);
    }

    function scrollToEl(el) {
      $('html, body').animate({
        scrollTop: $(el).offset().top,
      }, 2000);
    }

    function toggleMenu() {
  		if(window.animatingMenu) return;
  		window.animatingMenu = true;

			jQuery('#mainmenu').slideUp();
			jQuery('header').animate({
				'height': '75px',
			}, 100);

  		setTimeout(function() { window.animatingMenu = false; }, 400)
  	}

    function galleryChange() {
      if($(this).hasClass('right-arrow')) {
        galleryNext();
      } else {
        galleryPrev();
      }
    }

    function galleryGrow() {
      var newRow;

      if(galleryGrowing || galleryCurrent === gallery.length - 4) return;
      galleryGrowing = true;

      galleryCurrent += 4;
      newRow = newGalleryRow(galleryCurrent);
      $(newRow).each(function() {
        $(this).children('.menu-item').css('opacity', 0);
        $(this).find('img.img-responsive').load(function() {
          $(this).children('.menu-item').animate({ 'opacity': 1 }, 300);
        }.bind(this));
      });

      $(this).before(newRow);

      if(galleryCurrent === gallery.length - 4) {
        $(this).remove();
      }

      galleryInit();
      galleryGrowing = false;
    }

    function galleryPrev() {
      if(animatingGallery) return;
      animatingGallery = true;

      galleryCurrent -= 4;
      if(galleryCurrent < 0) galleryCurrent = gallery.length - 4;

      var galleryItems = $('.gallery-wrapper').children('.container').children('div.col-md-3');
      galleryLeaveRight(galleryItems);
    }

    function galleryNext() {
      if(animatingGallery) return;
      animatingGallery = true;

      galleryCurrent += 4;
      if(galleryCurrent >= gallery.length) galleryCurrent = 0;

      var galleryItems = $('.gallery-wrapper').children('.container').children('div.col-md-3');
      galleryLeaveLeft(galleryItems);
    }

    function galleryLeaveLeft(galleryItems) {
      var currentRight = 0;
      var currentOpacity = 1

      var manualAnimation = setInterval(function() {
        currentRight += 20;
        currentOpacity -= 0.02;
        $(galleryItems).each(function() {

          $(this).css({
            'right': currentRight + 'px'
          });

          $(this).children('div.menu-item').css({
            'opacity': currentOpacity,
          });
        });

        if(currentRight >= 1500) {
          clearInterval(manualAnimation);
          galleryEnterRight(galleryItems, newGalleryRow(galleryCurrent));
        }
      }, 7);
    }

    function galleryLeaveRight(galleryItems) {
      var currentLeft = 0;
      var currentOpacity = 1

      var manualAnimation = setInterval(function() {
        currentLeft += 20;
        currentOpacity -= 0.02;
        $(galleryItems).each(function() {

          $(this).css({
            'left': currentLeft + 'px'
          });

          $(this).children('div.menu-item').css({
            'opacity': currentOpacity,
          });
        });

        if(currentLeft >= 1500) {
          clearInterval(manualAnimation);
          galleryEnterLeft(galleryItems, newGalleryRow(galleryCurrent));
        }
      }, 7);
    }

    function galleryEnterRight(oldRow, newRow) {
      var currentLeft = '2000';
      var currentOpacity = '0.2';

      $(newRow).each(function() { $(this).css({ left: '2000px' }) });
      $('div.gallery-wrapper').children('.container').append(newRow);
      $(oldRow).each(function() { $(this).remove() });

      var manualAnimation = setInterval(function() {
        currentLeft -= 20;
        currentOpacity += 0.02;
        $(newRow).each(function() {

          $(this).css({
            'left': currentLeft + 'px'
          });

          $(this).children('div.menu-item').css({
            'opacity': currentOpacity,
          });
        });

        if(currentLeft <= 0) {
          $(newRow).each(function() {
            $(this).css({ left: '' });
            galleryInit();
            animatingGallery = false;
          });
          clearInterval(manualAnimation);
        }
      }, 7);
    }

    function galleryEnterLeft(oldRow, newRow) {
      var currentRight = '2000';
      var currentOpacity = '0.2';

      $(newRow).each(function() { $(this).css({ right: '2000px' }) });
      $('div.gallery-wrapper').children('.container').append(newRow);
      $(oldRow).each(function() { $(this).remove() });

      var manualAnimation = setInterval(function() {
        currentRight -= 20;
        currentOpacity += 0.02;
        $(newRow).each(function() {

          $(this).css({
            'right': currentRight + 'px'
          });

          $(this).children('div.menu-item').css({
            'opacity': currentOpacity,
          });
        });

        if(currentRight <= 0) {
          $(newRow).each(function() {
            $(this).css({ right: '' });
            galleryInit();
            animatingGallery = false;
          });
          clearInterval(manualAnimation);
        }
      }, 7);
    }

    function newGalleryRow(indexStart) {
      var newGalleryRow = [];

      for(var i = 0; i < 4; i++) {
        var index = indexStart + i;
        var newGalleryItem = $(galleryItem).clone();

        $(newGalleryItem).find('a.image-popup')
          .attr('href', 'images/gallery/' + gallery[index] + '.jpg');
        $(newGalleryItem).find('img.img-responsive')
          .attr('src', 'images/gallery/' + gallery[index] + '_thumb.jpg');

        newGalleryRow.push(newGalleryItem);
      }

      return newGalleryRow;
    }

    function checkAnimation() {
      $('.animated').each(function() {
        if(isScrolledIntoView(this)) {
          $(this).addClass($(this).data('animation'));
        }
      })

    }

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function galleryInit() {
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
    }

    var galleryCurrent = 0;
    var gallery = ['bar', 'plates', 'entry', 'steak3', 'bacon', 'fireplace', 'steak1', 'dessert', 'shrimp', 'interior', 'steak2', 'bottles'];
  }
})();
