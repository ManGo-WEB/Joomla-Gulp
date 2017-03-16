(function( $ ) {
	$(function() {
		// FastClick
		FastClick.attach(document.body);
		// IE9<= placeholder
		$('input[placeholder], textarea[placeholder]').placeholder();

		$('.demo-code__link').each(function () {
			var accordingLink    = $(this),
				accordingContent = accordingLink.closest('.demo-code').find('.demo-code__wrapper');

			accordingLink.click(function (e) {
				e.preventDefault();
				if ($(this).hasClass('is-active')) {
					accordingLink.removeClass('is-active');
					accordingContent.removeClass('is-active');
					accordingLink.text('Показать код');
					return false;
				} else {
					accordingLink.addClass('is-active');
					accordingContent.addClass('is-active');
					accordingLink.text('Скрыть код');
					return false;
				}
			});
		});
	});
})(jQuery);