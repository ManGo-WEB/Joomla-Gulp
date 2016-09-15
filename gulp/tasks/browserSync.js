// Подключаем плагин browserSync
var browserSync = require('browser-sync');
// Подключаем gulp
var gulp        = require('gulp');
// Подключаем конфиг из файла
var config      = require('../config').browserSync;

// Таск для browserSync
gulp.task('browserSync', function() {
	'use strict';
	// Конфиг
	browserSync.init(config);
});