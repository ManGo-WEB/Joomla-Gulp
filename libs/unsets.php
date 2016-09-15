<?php defined('_JEXEC') or die;
// get html head data
$head = $doc->getHeadData();
// remove deprecated meta-data (html5)
unset($head['metaTags']['http-equiv']);
unset($head['metaTags']['standard']['title']);
unset($head['metaTags']['standard']['rights']);
unset($head['metaTags']['standard']['language']);

// remove core js
$dontInclude = array(
	'/media/jui/js/jquery-noconflict.js',
	'/media/jui/js/jquery-migrate.js',
	'/media/jui/js/jquery-migrate.min.js',
	'/media/jui/js/bootstrap.js',
	'/media/system/js/core-uncompressed.js',
	'/media/system/js/tabs-state.js',
	'/media/system/js/mootools-core.js',
	'/media/system/js/mootools-more.js',
	'/media/jui/js/bootstrap.min.js',
	'/media/system/js/mootools-core-uncompressed.js',
	'/media/system/js/mootools-core-uncompressed.js',
);

foreach ($doc->_scripts as $key => $script) {
	if (in_array($key, $dontInclude)) {
		unset($doc->_scripts[ $key ]);
	}
}