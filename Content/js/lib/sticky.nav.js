jQuery(document).ready(function(){
/*global jQuery:false */
/*jshint devel:true, laxcomma:true, smarttabs:true */
"use strict";

	// add header_scroll class when refresh
	  jQuery(function() {
	  
		  // grab the initial top offset of the navigation 
		  var sticky_navigation_offset_top = jQuery('.flexfull_wrap').offset().top;
		  
		  // our function that decides weather the navigation bar should have "fixed" css position or not.
		  var sticky_navigation = function(){
			  var scroll_top = jQuery(window).scrollTop() > 600; // our current vertical position from the top
			  
			  // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
			  if (scroll_top > sticky_navigation_offset_top) { 
				  jQuery('#header').addClass('boxshadow header_scroll');
			  } else {
			  }   
		  };
  
		  // run our function on load
		  sticky_navigation();
		  
		  // and run it again every time you scroll
		  jQuery(window).scroll(function() {
			   sticky_navigation();
		  });
		  
	  });

});