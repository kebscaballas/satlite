$(document).ready(function() {
	$('#faq-accordion').on('hide.bs.collapse show.bs.collapse', '.faq-item', function (e) {
		$(this).toggleClass('active');
	})
});