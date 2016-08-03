var elm = (function($){
	var count = 0;
	var genId = function(){
		return "box"+(++count);
	};
	var create = function(tagName,uid){
		// var el = document.createElement(tagName);
		var el = $("<"+tagName+"/>").html(uid || genId());
		// console.log(el.html());
			return el;
	};
	return {
		pubCreate : create
	}
})(jQuery);