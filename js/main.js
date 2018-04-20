var checkDevice = function() {
	return (window.innerWidth < 768) ? 'mobile' : 'desktop';
}

$(document).ready(function() {
	$(window).resize(function() {
		if(checkDevice() === 'mobile') {
			$('#page-navbar .menu').addClass('hidden');
		}
		else if(checkDevice() === 'desktop' && $('#page-navbar .menu.hiden')) {
			$('#page-navbar .menu').removeClass('hidden');
		}
	});
	
	$('.accordion').on('hide.bs.collapse show.bs.collapse', '.accordion-item', function (e) {
		$(this).toggleClass('active');
	})

	$('#page-navbar .menu-toggle-btn').on('click', function() {
		$('#page-navbar .menu').toggleClass("hidden");
	})

	if(checkDevice() === 'desktop') {
		$('#page-navbar .menu').removeClass('hidden');
	}
});