/* 
* Copyright (c) 2012 Johannes Mittendorfer (http://jmittendorfer.hostingsociety.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 0.3.2
*/
(function ($) {
	$.fn.whereitgoes = function() {
		var elem = $(this).children("a");
		var before = "";			
	
		elem.hover(function(){
			before = elem.html();				
			$(this).text(elem.attr("href"));
		},
		function(){
			elem.html(before);
		});
    	}
})(jQuery);
