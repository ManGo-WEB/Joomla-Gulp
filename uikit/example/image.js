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