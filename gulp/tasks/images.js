// Подключаем changed - отслеживает только новые или измененые файлы
var changed    = require('gulp-changed');
// Подключаем gulp
var gulp       = require('gulp');
// Подключаем imagemin - сжатие изображение для всех платформ
var imagemin   = require('gulp-imagemin');
// Подключаем конфиг из файла
var config     = require('../config').images;

// Таск сжатия изображений
gulp.task('images', function() {
	// Обращаемся в папку с исходниками
	return gulp.src(config.src)
		.pipe(changed(config.dest)) // Проверяет изменения в финальной папке
		.pipe(imagemin({
			// Сжимаем файлы, для jpg прогрессивное сжатие
			progressive: true
		}))
		// Выгружаем в папку назначения
		.pipe(gulp.dest(config.dest));
});