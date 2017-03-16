$('[data-validation="type1"]').each(function () {
	var currentForm = $(this),
	    formSubmit = currentForm.find('[type="submit"]');
	$(this).validate({
		errorElement  : 'div',
		errorPlacement: function (error, element) {
			$(element).closest('.b-form__row').append(error);
		},
		errorClass    : 'b-form__error',
		showErrors    : function (errorMap, errorList) {
			this.defaultShowErrors();
		},
		highlight     : function (element) {
			$(element).addClass('error').removeClass('success');
		},
		unhighlight   : function (element) {
			$(element).removeClass('error').addClass('success');
		},
		submitHandler : function (form) {
			formSubmit.addClass('loading');
			$.ajax({
				type   : 'POST',
				data   : currentForm.serialize(),
				success: function (response) {
					if (response === 'OK') {
						currentForm.prepend('<div class="b-alert success">Сообщение отправлено</div>');
						currentForm.not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
						currentForm.find('.focused').removeClass('focused');
					} else {
						currentForm.prepend('<div class="b-alert error">Ошибка при отправке сообшения</div>');
					}
					formSubmit.removeClass('loading');
				},
				error  : function () {
					currentForm.prepend('<div class="b-alert error">Ошибка при отправке сообшения</div>');
					formSubmit.removeClass('loading');
				}
			});
		}
	});
});