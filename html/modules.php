<?php
function modChrome_box( $module, &$params, &$attribs ) {
	echo '<div class="module module--box ' .$params->get( 'moduleclass_sfx' ) .'" >';
		if (isset( $attribs['headerLevel'] ))
		{
			$headerLevel = $attribs['headerLevel'];
		} else {
			$headerLevel = 3;
		}

		if ($module->showtitle)
		{
			echo '<h' .$headerLevel .' class="module__title module__title--box">' .$module->title .'</h' .$headerLevel .'>';
		}

		echo $module->content;

	echo '</div>';
}
?>