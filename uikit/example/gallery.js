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