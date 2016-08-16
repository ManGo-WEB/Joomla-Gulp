// Подключаем gulp
var gulp     = require('gulp');
// Подключаем конфиг из файла
var config   = require('../config');
// Не стандартный вачер работает быстрее по методу chokidar
var watch    = require('gulp-watch');
var browserSync = require('browser-sync');

// Ватчеры +  стартуем browserSync
gulp.task('watch', ['browserSync'], function() {
	// Sass
	watch(config.sass.watch, function() {
		gulp.start('sass');
	});
	// Images
	watch(config.images.src, function() {
		gulp.start('images');
	});
	// JS
	watch(config.js.src, function() {
		gulp.start('js');
	});

	// Отслеживаем измения в php файлах и перезагружаем страницу
	watch('./**/*.php').on('change', browserSync.reload);
});