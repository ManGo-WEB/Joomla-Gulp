// Подключаем gulp
var gulp              = require('gulp');
// Подключаем Sass
var css2sass          = require('gulp-sass');
// Подключаем css карта для браузера
var sourcemaps        = require('gulp-sourcemaps');
// Загружаем post-css
var post              = require('gulp-postcss');
// Загрузка autoprefixer
var prefixer          = require('autoprefixer');
// Загружаем post-flexbox-fixes - без него можно случайно уранить IE при несоблюдении всех свойств
var flexboxBug        = require('postcss-flexbugs-fixes');
// Исправляем градиенты для старых webkit браузеров
var postGradientFixer = require('postcss-gradientfixer');
// Добавляем префиксы для новых типов полей
var postInputStyle    = require('postcss-input-style');
// Не падаем при ошибки
var handleErrors      = require('../util/handleErrors');
// Загрузка конфига sass
var config            = require('../config').sass;
// Загрузка конфига autoprefixer
var configPrefix      = require('../config').prefix;

// Создаем конфиг для post-css
var processors = [
	prefixer(configPrefix),
	// Исправляем баг в флексбоксах
	flexboxBug,
	// Исправляем градиенты для старых webkit браузеров
	postGradientFixer,
	// Добавляем префиксы для новых типов полей
	postInputStyle
];


// Таск по сборке Sass
gulp.task('sass', function () {
	'use strict';
	// Указываем откуда читать scss файлы
	return gulp.src(config.src)
	// Инициализируем css карту
		.pipe(sourcemaps.init())
		// Подключаем Sass c конфигом
		.pipe(css2sass(config.settings))
		// не даем упасть gulp с ошибкой
		.on('error', handleErrors)
		// Применяем конфиг Post-css
		.pipe(post(processors))
		// Пишем карту css в финальный файл,
		.pipe(sourcemaps.write(config.map))
		// Пишем финальный css в папку
		.pipe(gulp.dest(config.dest));
});