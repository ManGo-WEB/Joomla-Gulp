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