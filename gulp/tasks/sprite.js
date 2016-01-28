// Подключаем gulp
var gulp        = require('gulp');
// Подключаем spritesmith - генератор спрайтов
var spritesmith = require('gulp.spritesmith');
// Подключаем imagemin - сжатие изображий
var imagemin    = require('gulp-imagemin');
var buffer      = require('vinyl-buffer');
// Подключаем конифг из файла
var config      = require('../config').sprite;
var configParam = require('../config').spriteParam;

// Таск создания спрайтов
gulp.task('images-sprite', function () {
	var spriteData =
		    gulp.src(config.src)
			    // Настройки https://github.com/twolfson/gulp.spritesmith
			    .pipe(spritesmith(configParam));
	// Сжимаем файлы изобржения, затем располагаем в месте назначения
	spriteData.img
		// Достает из потока для imagemin
		.pipe(buffer())
		.pipe(imagemin({
			optimizationLevel: 5,
			progressive      : true,
			interlaced       : true
		})).pipe(gulp.dest(config.dest));
	// Указываем где сохранить файл стилей
	spriteData.css.pipe(gulp.dest(config.css));
});