// Подключаем gulp
var gulp         = require('gulp');
// Подключаем Sass
var sass         = require('gulp-sass');
// Подключаем css карта для браузера
var sourcemaps   = require('gulp-sourcemaps');
// Загружаем post-css
var post         = require('gulp-postcss');
// Загрузка autoprefixer
var prefixer     = require('autoprefixer');
// Загружаем post-flexbox-fixes - без него можно случайно уранить IE при несоблюдении всех свойств
var flexboxBug   = require('postcss-flexbugs-fixes');
// Загружаем post-short-font-size - автоматически сварачивает font-size, line-height, font-weight font-family в font
var postFontSize = require('postcss-short-font-size');
// Не падаем при ошибки
var handleErrors = require('../util/handleErrors');
// Загрузка конфига sass
var config       = require('../config').sass;
var configPrefix = require('../config').prefix;
// Подключаем browserSync
var browserSync  = require('browser-sync');

// Создаем конфиг для post-css
var processors = [
	prefixer(configPrefix),
	// Исправляем баг в флексбоксах
	flexboxBug,
	// Сворачиваем свойства семейства font-size, line-height, font-weight font-family в font
	postFontSize
];


// Таск по сборке Sass
gulp.task('sass', function () {
	// Указываем откуда читать scss файлы
	return gulp.src(config.src)
		// Инициализируем css карту
		.pipe(sourcemaps.init())
		// Подключаем Sass c конфигом
		.pipe(sass(config.settings))
		// не даем упасть gulp с ошибкой
		.on('error', handleErrors)
		// Применяем конфиг Post-css
		.pipe(post(processors))
		// Пишем карту css в финальный файл,
		// !!!! Внимание файл может быть с ней очень большим, нужно ее отключать на финальной стадией разработки или использовать Production версию css
		.pipe(sourcemaps.write(config.map))
		// Пишем финальный css в папку
		.pipe(gulp.dest(config.dest))
		// Даем комманду browserSync обновить css без перезагрузки страницы
		.pipe(browserSync.reload({stream: true}));
});