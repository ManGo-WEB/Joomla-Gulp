# Базовый шаблон для Joomla созданный с Gulp

## Начало работы

 1. Установить [Node.js](https://nodejs.org/en/) последнюю версию
 2.  Установить [gulpjs](http://gulpjs.com/)
 `npm install --g gulp` и [browsersync](http://browsersync.io) `npm install -g browser-sync`
 3. В консоли перейти в директорию с проектом с помощью команды `cd путь/до/шаблона`
 4. Запустить команду `npm install --save-dev`
 5. После этого можно запустить дефолтную задачу командой `gulp` (в директории с шаблоном)

## Задачи

Все задачи находятся в папке [gulp/tasks](gulp/tasks), файл [gulp/config.js](gulp/config.js) отвечает за конфигурацию задач.
### Список задач

1.  `gulp javascript` - файл [gulp/tasks/javascript.js](gulp/tasks/javascript.js) отвечает за сборку js файлов, забирая исходники из этой папки **source/js**, собирает в один файл, сжимает с помощью uglifyjs (настройки сжатия находятся в файле [gulp/config.js](gulp/config.js#L132)).
**Внимание:** сами файлы для объедения и их порядок настраивается в файле [gulp/tasks/javascript.js](gulp/tasks/javascript.js#L36)
2. `gulp sass` запускает генерацию из **source/sass/*.scss** файлов в css и отправляет их в папку **/css**, генерируются только файлы в корне и без префикса _ в имени (т.е. файл _test.scss останется нетронутым, а файл test.scss сгенерируется в файл test.css). Настройки сжатия генерируемых файлов находится в файле [gulp/config.js](gulp/config.js#L32). Подробнее о типах сжатия на сайте [sass-lang.com](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style). Так же в папке **/css/map** создается карта css (source map), она помогает найти где находятся css свойства в оригинальных scss файлах (поддержку карт нужно выключить в настройках инструментов разработчиков [Chrome](https://developer.chrome.com/devtools/docs/settings)/[FireFox](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)), поэтому имеет смысл загружать на сервер и css и исходники scss.
Отдельно заслуживает упоминание тo, что сгенерированный файл обрабатывается с помощью [postcss](https://github.com/postcss/postcss), а конкретно плагином [autoprefixer](https://github.com/postcss/autoprefixer) (он добавляет вендорные префиксы в зависимости от параметров [gulp/config.js](gulp/config.js#L52)) и  [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) (помогает избежать багов при использовании flexbox)
3. `gulp images` - файл [gulp/tasks/images.js](gulp/tasks/images.js) отвечает за сжатие изображений, эта задаче берет файлы из папки **source/images/assets** сжимает их и переносит в папку **images/**
4. `gulp browserSync` - файл [gulp/tasks/browserSync.js](gulp/tasks/browserSync.js) запускает прокси сервер для livereload (обновления css/js/изображений сразу после их изменения в проекте автоматически). Настройки для него находятся в файле [gulp/config.js](gulp/config.js#L8). Внимательно прочитайте комментарии к настройками в этом файле и только после этого запускайте задачу
6. Стоит отдельно в нем отметить параметр `serverReloadDelay: 2000,` [gulp/config.js](gulp/config.js#L4) это время задержки при обновлении страницы, вы должны настроить его под себя, так он подразумевает что ваш локальный проект синхронизирован с удаленным сервером и когда вы сохраняете например scss файл, он и css который был сгенерирован отправляется по ftp (к примеру) на сервер, этому вам нужно установить ту задержку которая нужно для загрузки файла иначе browserSync обновит страницу до того как файл физически окажется на сервере.
[Подробнее о browserSync](https://www.browsersync.io/)
5. `gulp` - стандартная задача, запускает все задачи описанные выше и следит за изменениями в файлах запуская перегерацию/обновление контента

### Вспомогательные задачи
1. `gulp sprite-image` - задача генерирует спрайты из файлов в папке **source/images/sprite** и сохраняет их в папку **/images/png/** при этом генерирует файл с scss переменными в  [source/sass/helpers/_sprite.scss](source/sass/helpers). Умеет работать как с чистым css так и с less/scss/styl. Настройки в файле [gulp/config.js](gulp/config.js#L70)
2. `gulp sprite-svg` - задача генерирует спрайты из svg в папке **source/images/sprite** и сохраняет их в папку **/images/svg/** при этом генерирует файл с scss переменными в [source/sass/helpers/_sprite-svg.scss](source/sass/helpers). Умеет работать как с чистым css так и с less/scss/styl. Настройки в файле [gulp/config.js](gulp/config.js#L91)
2.  `gulp production` - подготавливает файл css к продакшену, убирая все лишнее из него согласно http://cssnano.co/ Настройки в файле [gulp/config.js](gulp/config.js#L147). Так же объеденяет все одинаковые медиа запросы разбросанные по файлу и создает файл с префиксом .min.css
3. `gulp clear-cache` - необходим для очистки кеша в котором сохранились пути до js файлов при их удалении, если ваш файл js генерируется не верно (там есть файлы которых физически уже нет на диске) попробуйте запустить эту команду

Все строки  в файлах задач имеют комментарии, поэтому не стесняйтесь их читать что бы лучше понять как и что работает.

### Проблемы

 1. Если зависимости не устанавливаются попробуйте обновить `npm install npm -g` (из под администратора) и [npm-gyp](https://github.com/nodejs/node-gyp/wiki/Updating-npm%27s-bundled-node-gyp)
 2. При работе с phpStorm/webStrom необходимо запускать задачи через внутренний таск ранер
 ![enter image description here](http://i.imgur.com/eIC1Eg2.png)
-Upload changed files automatically to the default server - Always
-Upload external changes - Yes
 ![enter image description here](http://i.imgur.com/sVHDAdS.png)
 В противном случае не всегда при изменении scss файла, на сервер сразу отправляется и css.

### Копирайты

 - Шаблон основан на базе http://www.blank.vc/
 - Gulp задачи на базе [Gulp Starter](https://github.com/vigetlabs/gulp-starter)

## Licence

The Joomla Gulp is opensource software released under the [GPL](LICENSE).
