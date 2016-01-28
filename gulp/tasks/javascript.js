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
// Подключаем конифг из файла
var config      = require('../config').js;
// Читаем параметры из package.json
var pkg         = require('../../package.json');
// Подключаем конифг с настройками углификации
var compress    = require('../config').uglify;
// Подключаем browserSync
var browserSync = require('browser-sync');

// Это баннер который добавляется вверх файла финальным js .min т.к. углификации убирает комменты сюда можно добавить необходимый копирайт
var banner = [
	'/**',
	' <%= pkg.name %>' +
	' @author <%= pkg.author %>' +
	' @version v<%= pkg.version %>' +
	'External lib: ' +
	' http://mths.be/placeholder v2.1.1 by @mathias' +
	' **/'
].join('\n');

// Таск сжатия JS
gulp.task('js', function () {
	// Перечесление в нужном порядке файлов которые нужно объеденить
	return gulp.src(['source/js/main.js'])
		// Объеденяем в файл app.js
		.pipe(concat('app.js'))
		// Кидаем его в папку назначения
		.pipe(gulp.dest(config.dest))
		// Создаем новый файл с префиксом .min.js
		.pipe(rename({suffix: '.min'}))
		// Сжимаем и делаем углификацию
		.pipe(cache(uglify(compress.settings)))
		// Добавляем наверх баннер с текстом
		.pipe(header(banner, {pkg: pkg}))
		// Отправляем в папку назначения
		.pipe(gulp.dest(config.dest))
		// Даем комманду browserSync обновить js
		.pipe(browserSync.reload({stream: true}));
});

// Очистка кеша файлов иногда при смене локации пишется все еще старый путь
gulp.task('clear-cache', function (done) {
	return cache.clearAll(done);
});