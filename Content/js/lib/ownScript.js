jQuery(document).ready(function(){
/*global jQuery:false */
/*jshint devel:true, laxcomma:true, smarttabs:true */
"use strict";


  
	  // change header - depends o scroll
	  var $document = jQuery(document),
		  $element = jQuery('#header'),
		  className = 'header_scroll boxshadow';
	  
	  $document.scroll(function() {
		$element.toggleClass(className, $document.scrollTop() >= 600);
	  });



	// add header class on mobile screens
	  jQuery(function() {
	  /* Check width on page load*/
		  if ( jQuery(window).width() < 740) {
			   jQuery('#header').addClass('headbg');
			  }
		  else {}
	  });
	  
	  jQuery(window).resize(function() {
	  /*If browser resized, check width again */
		  if (jQuery(window).width() < 740) {
			   jQuery('#header').addClass('headbg');
			  }
		  else {jQuery('#header').removeClass('headbg');}
	  });
	  
	  
	// hide menu on mobile screens
	  jQuery(function() {
	  /* Check width on page load*/
		  if ( jQuery(window).width() < 639) {
			   jQuery('#nav').addClass('hidenav');
			   jQuery('#main-nav').addClass('hidenav');
			   jQuery('a#trigger').addClass('showtrig');
			  }
		  else {}
	  });
	
	
	// trigger + show menu on fire
	  jQuery(window).resize(function() {
	  /*If browser resized, check width again */
		  if (jQuery(window).width() < 639) {
			   jQuery('#nav').addClass('hidenav');
			   jQuery('#main-nav').addClass('hidenav');
			   jQuery('a#trigger').addClass('showtrig');
			  }
		  else {
			  jQuery('#nav').removeClass('hidenav');
			  jQuery('#main-nav').removeClass('hidenav');
			  jQuery('a#trigger').removeClass('showtrig');}
	  });
	  
        jQuery('a#trigger').click(function(){ 
                jQuery('#nav').toggleClass('shownav'); 
                jQuery('#main-nav').toggleClass('shownav'); 
                jQuery(this).toggleClass('active'); 
                return false; 
        }); 
	  	  
	  
	  
	// add current class
	  jQuery(function() {
		jQuery('#nav li:first').addClass('current');
	  });
  


	  // initiate page scroller plugin
	  jQuery('#nav').onePageNav({
		  begin: function() {
		  console.log('start');
		  },
		  end: function() {
		  console.log('stop');
		  },
		  filter: ':not(.external a)'
	  });


	  // fading out/in slider stuff
	  var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
		  ,fadeUntil=500 // 200px scroll or more will equiv to 0 opacity
		  ,fading = jQuery('.stuff')
	  ;
	  
	  jQuery(window).bind('scroll', function(){
		  var offset = jQuery(document).scrollTop()
			  ,opacity=0
		  ;
		  if( offset<=fadeStart ){
			  opacity=1;
		  }else if( offset<=fadeUntil ){
			  opacity=1-offset/fadeUntil;
		  }
		  fading.css('opacity',opacity);
	  });



	  /* default hovers */

	  jQuery('.clients li img,ul.widget-folio li img').hover(function() {
		  jQuery(this).animate({opacity: 0.6}, "normal");
		  }, function() {
		  jQuery(this).animate({opacity: 1}, "normal");
		  });
		  
	  jQuery('.gallery-item img,li.format-image img').hover(function() {
		  jQuery(this).animate({opacity: 0.1}, "normal");
		  }, function() {
		  jQuery(this).animate({opacity: 1}, "normal");
		  });



		/* portfolios hovers */

		jQuery('#portfolio-list').on('mouseenter', 'li', function() {
			jQuery(this).find('img.attachment-folio-4col,img.attachment-folio-3col,img.attachment-folio-3col-s,img.attachment-folio-2col,img.attachment-folio-2col-s').stop(true, true).animate({'opacity': '0.2',width: '103%'}, {duration:350});
		});
		jQuery('#portfolio-list').on('mouseleave', 'li', function() {
			jQuery(this).find('img.attachment-folio-4col,img.attachment-folio-3col,img.attachment-folio-3col-s,img.attachment-folio-2col,img.attachment-folio-2col-s').stop(true, true).animate({'opacity': '1',width: '100%'}, {duration:350});                           
		}); 



		jQuery('.homeblog').on('mouseenter', 'li', function() {
			jQuery(this).find('img.attachment-homeblog').stop(true, true).animate({'opacity': '0.1',width: '103%'}, {duration:350});
	
		});
		jQuery('.homeblog').on('mouseleave', 'li', function() {
			jQuery(this).find('img.attachment-homeblog').stop(true, true).animate({'opacity': '1',width: '100%'}, {duration:350});                           
		}); 


		jQuery('#services-wrap').on('mouseenter', 'li', function() {
			jQuery(this).find('h3 i').stop(true, true).animate({'font-size': '25px','padding': '18px','line-height': '1.15','left': '-12px','top': '-10px'}, {duration:350});
	
		});
		jQuery('#services-wrap').on('mouseleave', 'li', function() {
			jQuery(this).find('h3 i').stop(true, true).animate({'font-size': '22px','padding': '10px','line-height': '1.2','left': '-4px','top': '0'}, {duration:350});                           
		}); 



	/* Tooltips */
		jQuery("body").prepend('<div class="tooltip"><p></p></div>');
		var tt = jQuery("div.tooltip");
		
		jQuery(".flickr_badge_image a img,ul.social-menu li a").hover(function() {								
			var btn = jQuery(this);
			
			tt.children("p").text(btn.attr("title"));								
						
			var t = Math.floor(tt.outerWidth(true)/2),
				b = Math.floor(btn.outerWidth(true)/2),							
				y = btn.offset().top - 35,
				x = btn.offset().left - (t-b);
						
			tt.css({"top" : y+"px", "left" : x+"px", "display" : "block"});			
			   
		}, function() {		
			tt.hide();			
		});


	function lightbox() {
		// Apply PrettyPhoto to find the relation with our portfolio item
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			// Parameters for PrettyPhoto styling
			animationSpeed:'fast',
			slideshow:5000,
			theme:'pp_default',
			show_title:false,
			overlay_gallery: false,
			social_tools: false
		});
	}
	
	if(jQuery().prettyPhoto) {
		lightbox();
	}

});