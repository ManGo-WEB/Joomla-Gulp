<?php defined('_JEXEC') or die;

include_once JPATH_THEMES . '/' . $this->template . '/libs/logic.php';
include_once JPATH_THEMES . '/' . $this->template . '/libs/unsets.php';

?><!doctype html>

<html lang="<?php echo $this->language; ?>">
<head>
	<jdoc:include type="head"/>
</head>

<body
	class="<?php echo (($menu->getActive() == $menu->getDefault()) ? ('front') : ('site')) . ' ' . $active->alias . ' ' . $pageclass; ?>">
<div class="wrapper">
	<?php if ($this->countModules('logo') || $this->countModules('headerbar')) : ?>
		<header class="header" role="banner">
			<?php if ($this->countModules('logo')) : ?>
				<a class="logo" href="<?php echo JURI::base(); ?>">
					<jdoc:include type="modules" name="logo" style="raw"/>
				</a>
			<?php endif; ?>

			<?php if ($this->countModules('headerbar')) : ?>
				<div class="headerbar">
					<jdoc:include type="modules" name="headerbar" style="raw"/>
				</div>
			<?php endif; ?>
		</header>
	<?php endif; ?>
	<?php if ($this->countModules('menu')) : ?>
		<nav class="jb-nav">
			<jdoc:include type="modules" name="menu" style="raw"/>
		</nav>
	<?php endif; ?>

	<main class="jb-blog">
		<jdoc:include type="message"/>
		<jdoc:include type="component"/>
	</main>
</div>
<jdoc:include type="modules" name="debug" style="none"/>
</body>
</html>
