/**
 * @version		0.1
 * @package		Fluide Fade
 * @author    	Ben Clarke - http://www.fluide.co.uk
 * @copyright	Copyright (c) 2012 Ben Clarke / Fluide Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

(function($){
    $.fn.extend({ 
        fadeHover: function(options) {
        	var defaults = {
        	    fadeSpeed: 500,
        	    fadeAmountTo: 0.5,
        	    fadeAmountOut: 1
        	};
        	     
        	var options =  $.extend(defaults, options);
 
            return this.each(function() {
         	   var o = options;
           	   var obj = $(this);  
           	   var item = $(obj);
            
	            obj.mouseover(function()  {
	            	 $(this).siblings().stop().fadeTo(o.fadeSpeed,o.fadeAmountTo);
	            }).mouseout(function()  {
	            	 $(this).siblings().stop().fadeTo(o.fadeSpeed,o.fadeAmountOut);
	            });
          });
      }
  });
       
})(jQuery);