var dest = './';
var src  = './source';

module.exports = {
	// Конфиг для browserSync
	browserSync: {
		// Адрес сайта на который нужно кинуть прокси
		proxy      : 'joomla-test.loc',
		// IP в локальной сети используется для открытия на других устройствах например
		// http://192.168.1.101:3000 - сам сайт,
		// http://192.168.1.101:9090 - webkit инспектор
		// http://localhost:3001 - UI где все настраивается
		// Если у вас несколько сетевых карт то имеет смыл указать нужный вам ip ниже, автоматически не всегда верно определятеся
		host       : '192.168.1.101',
		// Таймаут для релоада в зависимости от скорости FTP, необходимо настроить под себя
		reloadDelay: 1000,
		'ui'       : {
			// Кастомный порт для webkit инспектора, можно использовать любой не занятый
			'weinre': {
				'port': 9090
			}
		}
	},

	// Конфиг для Sass
	sass: {
		// Путь до исходника
		src     : src + '/sass/*.scss',
		// Путь до отслеживаемых файлов где могут происходить изменения
		watch   : src + '/sass/**/*',
		// Путь куда положить сгенерированный файл
		dest    : dest + '/css',
		settings: {
			// Стиль выдаваемого файла
			outputStyle    : 'compressed',
			// Писать логи, но не падать
			errLogToConsole: true
		},
		map     : dest + '/map'
	},

	// Конфиг для autoprefixer
	prefix: {
		// Указываем какие префиксы добавлять согласно caniuse.com
		browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'iOS 7'],
		// Выстраивать преффиксы каскадом - нет
		cascade : false
	},

	// Конфиг для обработки и сжатия картинки
	images: {
		// Следить за этой папкой
		src : src + '/images/assets/**',
		// Выгружать при обнаружении сюда
		dest: dest + '/images'
	},

	// Конфиг для сборки спрайта (запускать вручную т.к. много ресурсов требует)
	sprite     : {
		// Следить за этой папкой
		src : src + '/images/sprite/*.*',
		// Выгружать при обнаружении сюда
		dest: dest + '/images',
		// Записать в scss файл стили для спрайта
		css : src + '/sass/helpers'
	},
	spriteParam: {
		// Растоение между изображением в спрайте оно не обходимо из за проблем при зуме в браузере
		padding  : 5,
		// Имя файла спрайта
		imgName  : 'sprite.png',
		// адрес который пишется внутрь css
		imgPath  : '../images/sprite.png',
		// Название файла css, можно использовать расширения, css, less, scss
		cssName  : '_sprite.scss',
		// Алгоритм расположения иконок (top-down, left-right, diagonal, alt-diagonal, binary-tree)
		algorithm: 'binary-tree'
	},
	// Конфиг для сборки js
	js         : {
		// Следить за этой папкой
		src : src + '/js/*.js',
		// Выгружать при обнаружении сюда
		dest: dest + 'js'
	},
	// Конфиг усиленной углификации js
	uglify     : {
		settings: {
			compress: {
				sequences   : true,
				dead_code   : true,
				conditionals: true,
				booleans    : true,
				unused      : true,
				if_return   : true,
				join_vars   : true,
				drop_console: true
			}
		}
	},
	// Адреса для продакшен файла, у плагина какие то проблемы с переменными, поэтому нужно указать полный путь от корня
	production : {
		// Следить за этим файлом
		src : "./css/app.css",
		// Выгружать сюда с преффиксом min
		dest: "./css"
	},
	// Конфиг CSSNano - http://cssnano.co/
	productionNano : {
		normalizeUrl     : false,
		zindex           : false,
		mergeIdents      : false,
		reduceIdents     : false,
		minifyFontValues : false,
		discardComments  : true,
		discardEmpty     : true,
		discardDuplicates: true,
		normalizeCharset : true,
		mergeLonghand    : true,
		autoprefixer     : false,
		minifySelectors  : true,
		convertValues    : false,
		discardUnused    : false
	}
};