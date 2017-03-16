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