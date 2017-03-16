(function ($) {
	$(function () {
		$('.b-form__float-label').each(function () {
			var labelConteiner = $(this),
			    labelTextarea  = labelConteiner.find('textarea'),
			    labelInput     = labelConteiner.find('input, textarea');
			labelTextarea.closest('.b-form__float-label').addClass('is-textarea');
			if (labelInput.val().length > 0) {
				labelInput.addClass('focused');
			}

			labelInput.on('focus blur', function (e) {
				labelConteiner.toggleClass('focused', (e.type === 'focus' || $(this).val().length > 0));
			}).trigger('blur');
		});
	});
})(jQuery);