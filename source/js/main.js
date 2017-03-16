(function ($) {
	$(function () {
		function getWindowWidth() {
			var windowWidth = 0;
			if (typeof(window.innerWidth) === 'number') {
				windowWidth = window.innerWidth;
			} else {
				if (document.documentElement && document.documentElement.clientWidth) {
					windowWidth = document.documentElement.clientWidth;
				} else {
					if (document.body && document.body.clientWidth) {
						windowWidth = document.body.clientWidth;
					}
				}
			}
			return windowWidth;
		}

		// FastClick
		FastClick.attach(document.body);
		// IE9<= placeholder
		$('input[placeholder], textarea[placeholder]').placeholder();

		$('input[type="radio"], input[type="checkbox"], input[type="number"], select').not('.not-styled').styler();

		// Sticky
		$('.demo-aside').stick_in_parent({
			offset_top: 15
		});

		// Reset button
		$('[type="reset"]').on('click', function () {
			var currentForm =  $(this).closest('form');
			currentForm.not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
			currentForm.find('.focused').removeClass('focused');
		});

		// Mask input
		$('.phone-mask').mask('+7(000)000-00-00', {
			placeholder: '+7(___)___-__-__'
		});

		// Modal windows
		$('[data-lightbox="inline"]').on('click', function () {
			var link         = $(this),
			    linkSrc      = link.attr('href'),
			    linkSrcClear = linkSrc.replace('#', '');
			$(this).magnificPopup({
				items       : {
					src : linkSrc,
					type: 'inline'
				},
				midClick    : true,
				removalDelay: 500,
				mainClass   : 'modal-animation',
				showCloseBtn: false,
				tClose      : 'Закрыть (Esc)',
				tLoading    : 'Загрузка...',
				callbacks   : {
					beforeOpen : function () {
						$('body').addClass(linkSrcClear);
					},
					open       : function () {
						$('.mfp-content').prepend('<button title="Закрыть (Esc)" type="button" class="mfp-close">×</button>');
					},
					beforeClose: function () {
						$('.mfp-close').remove();
					},
					close      : function () {
						$('body').removeClass(linkSrcClear);
					}
				}
			}).magnificPopup('open');
			return false;
		});

		$('[data-lightbox="ajax"]').magnificPopup({
			type           : 'ajax',
			midClick       : true,
			removalDelay   : 500,
			mainClass      : 'modal-animation',
			showCloseBtn   : false,
			preloader      : false,
			tClose         : 'Закрыть (Esc)',
			tLoading       : 'Загрузка...',
			callbacks      : {
				open            : function () {
					$('.mfp-content').prepend('<button title="Закрыть (Esc)" type="button" class="mfp-close">×</button>');
				},
				beforeClose     : function () {
					$('.mfp-close').remove();
				}
			}
		});

		$('[data-lightbox="iframe"]').magnificPopup({
			type           : 'iframe',
			midClick       : true,
			removalDelay   : 500,
			mainClass      : 'modal-animation',
			showCloseBtn   : false,
			preloader      : false,
			tClose         : 'Закрыть (Esc)',
			tLoading       : 'Загрузка...',
			callbacks      : {
				open       : function () {
					$('.mfp-content').prepend('<button title="Закрыть (Esc)" type="button" class="mfp-close">×</button>');
				},
				beforeClose: function () {
					$('.mfp-close').remove();
				}
			}
		});

		$('[data-lightbox="image"]').magnificPopup({
			type               : 'image',
			closeOnContentClick: false,
			closeBtnInside     : false,
			midClick           : true,
			showCloseBtn       : false,
			removalDelay       : 500,
			mainClass          : 'modal-animation',
			tClose             : 'Закрыть (Esc)',
			tLoading           : 'Загрузка...',
			image              : {
				verticalFit: true,
				tError     : '<a href="%url%">Изображение</a> не может быть загружено.'
			},
			gallery            : {
				enabled: false
			}
		});


		$('[data-lightbox="gallery"]').magnificPopup({
			delegate           : 'a',
			type               : 'image',
			closeOnContentClick: false,
			closeBtnInside     : false,
			midClick           : true,
			showCloseBtn       : false,
			removalDelay       : 500,
			mainClass          : 'modal-animation',
			tClose             : 'Закрыть (Esc)',
			tLoading           : 'Загрузка...',
			image              : {
				verticalFit: true,
				tError     : '<a href="%url%">Изображение</a> не может быть загружено.'
			},
			gallery            : {
				tPrev   : 'Назад (Стрелка влево)',
				tNext   : 'Вперед (Стрелка в право)',
				tCounter: '%curr% из %total%',
				enabled : true
			},
			callbacks          : {
				open       : function () {
					$('.mfp-content').prepend('<button title="Закрыть (Esc)" type="button" class="mfp-close">×</button>');
				},
				beforeClose: function () {
					$('.mfp-close').remove();
				}
			}
		});
	});
})(jQuery);