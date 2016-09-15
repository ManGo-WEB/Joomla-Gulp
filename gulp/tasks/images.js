// Подключаем changed - отслеживает только новые или измененые файлы
var changed    = require('gulp-changed');
// Подключаем gulp
var gulp       = require('gulp');
// Подключаем imagemin - сжатие изображение для всех платформ
var imagemin   = require('gulp-imagemin');
// Размер файла
var fileSize     = require('gulp-size');
// Подключаем конфиг из файла
var config     = require('../config').images;

// Таск сжатия изображений
gulp.task('images', function() {
	'use strict';
	// Обращаемся в папку с исходниками
	return gulp.src(config.src)
		.pipe(changed(config.dest)) // Проверяет изменения в финальной папке
		.pipe(imagemin({
			// Сжимаем файлы, для jpg прогрессивное сжатие
			progressive: true
		}))
		// Измеряем размер файла
		.pipe(fileSize({
			gzip     : true,
			showFiles: true
		}))
		// Выгружаем в папку назначения
		.pipe(gulp.dest(config.dest));
});