	function go_to(hash){ jQuery('html, body').animate({scrollTop: (jQuery('#'+hash).offset().top - 90)}, 800); }

	jQuery(function(){
		var hash = (''+window.location.hash).replace("#bloco", "img");
		go_to(hash);
	});