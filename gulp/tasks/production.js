// // Подключаем gulp
// var gulp       = require('gulp');
// // Подключаем rename - переименовываем
// var rename     = require('gulp-rename');
// // Подключаем combine-mq - Объеденяем все одинаковые медая запросы (одинаковые по разеру), затем переносим в низ файла
// var mq         = require('gulp-combine-mq');
// // Подключаем cssnano - сжатие файла
// var nano       = require('gulp-cssnano');
// // Размер файла
// var fileSize     = require('gulp-size');
// // Загружаем конфиг из файла
// var config     = require('../config').production;
// var configNano = require('../config').productionNano;
//
// // Таск сжатия css для продакшена
// gulp.task('producion', function () {
// 	'use strict';
// 	// Указываем файл с которым работаем
// 	return gulp.src(config.src)
// 		// Объеденяем все одинаковые медиа запросы
// 		.pipe(mq())
// 		// Сжимаем файл настройки тут - http://cssnano.co/
// 		.pipe(nano(configNano))
// 		// Добавляем префикс .min.css
// 		.pipe(rename({
// 			suffix: '.min'
// 		}))
// 		// Измеряем размер файла
// 		.pipe(fileSize({
// 			gzip     : false,
// 			showFiles: true
// 		}))
// 		// Отправляем в папку назначения
// 		.pipe(gulp.dest(config.dest));
// });