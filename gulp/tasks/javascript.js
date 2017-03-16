// Подключаем gulp
var gulp        = require('gulp');
// Подключаем concat - Объединение файлов
var concat      = require('gulp-concat');
// Подключаем uglify - углификация файла
var uglify      = require('gulp-uglify');
// Подключаем rename - переименования файла
var rename      = require('gulp-rename');
// Подключаем cache - кешируем файлы
var cache       = require('gulp-cache');
// Подключаем header - используется для добаление текста в шапку файла
var header      = require('gulp-header');
// Не падаем при ошибки
var handleErrors      = require('../util/handleErrors');
// Подключаем конифг из файла
var config      = require('../config').js;
// Читаем параметры из package.json
var pkg         = require('../../package.json');
// Подключаем конифг с настройками углификации
var compress    = require('../config').uglify;
// Размер файла
var fileSize    = require('gulp-size');
// Подключаем browserSync
var browserSync = require('browser-sync');

// Это баннер который добавляется вверх файла финальным js .min т.к. углификации убирает комменты сюда можно добавить необходимый копирайт
var banner = [
	'/**',
	' <%= pkg.name %>' +
	' @author <%= pkg.maintainers.name %>' +
	' @version v<%= pkg.version %>' +
	'External lib: ' +
	' jQuery Placeholder Plugin v2.3.1  https://github.com/mathiasbynens/jquery-placeholder Copyright 2011, 2015 Mathias Bynens Released under the MIT license' +
	' FastClick: polyfill to remove click delays on browsers with touch UIs. The Financial Times Limited [All Rights Reserved] MIT License' +
	' jQuery Form Styler https://github.com/Dimox/jQueryFormStyler Copyright 2012-2017 Dimox (http://dimox.name/) Released under the MIT license.' +
	//' Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net' +
	' jquery.mask.js v1.14.10 Igor Escobar' +
	' Magnific Popup - v1.1.0 - 2016-02-20 http://dimsemenov.com/plugins/magnific-popup/ Copyright (c) 2016 Dmitry Semenov;' +
	' **/'
].join('\n');

// Таск сжатия JS
gulp.task('js', function () {
	'use strict';
	// Перечесление в нужном порядке файлов которые нужно объеденить
	return gulp.src([
		'source/js/lib/jquery.placeholder.js',
		'source/js/lib/fastclick.js',
		'source/js/lib/float-label.js',
		'source/js/lib/jquery.formstyler.js',
		//'source/js/lib/sticky-kit.js',
		'source/js/lib/jquery.mask.js',
		'source/js/lib/popup.js',
		'source/js/main.js'
		])
		// Объеденяем в файл app.js
		.pipe(concat('app.js'))
		// не даем упасть gulp с ошибкой
		.on('error', handleErrors)
		// Кидаем его в папку назначения
		.pipe(gulp.dest(config.dest))
		// Создаем новый файл с префиксом .min.js
		.pipe(rename({suffix: '.min'}))
		// Сжимаем и делаем углификацию
		.pipe(cache(uglify(compress.settings)))
		// не даем упасть gulp с ошибкой
		.on('error', handleErrors)
		// Добавляем наверх баннер с текстом
		.pipe(header(banner, {pkg: pkg}))
		// Измеряем размер файла
		.pipe(fileSize({
			gzip     : false,
			showFiles: true
		}))
		// Отправляем в папку назначения
		.pipe(gulp.dest(config.dest))
		// Даем комманду browserSync обновить js
		.pipe(browserSync.reload({stream: true}));
});

// Очистка кеша файлов иногда при смене локации пишется все еще старый путь
gulp.task('clear-cache', function (done) {
	'use strict';
	return cache.clearAll(done);
});
