/* 
* Copyright (c) 2012 Johannes Mittendorfer (http://jmittendorfer.hostingsociety.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 0.1
*/
(function ($) {
	$.extend({
        	whereitgoes: function () {
			var elem = $("a");
			var before = "";			
		
			elem.hover(function(){
				before = elem.html();				
				$(this).text(elem.attr("href"));
			},
			function(){
				elem.html(before);
			});
        	}
    	});
})(jQuery);
