<?php
/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_BASE') or die;

$msgList = $displayData['msgList'];

?>
<?php if (is_array($msgList) && !empty($msgList)) : ?>
<div id="system-message-container" class="b-message-container">
	<div id="system-message">
		<?php foreach ($msgList as $type => $msgs) : ?>
			<div class="b-alert <?php echo $type; ?>">
				<div class="wrapper">
					<?php // This requires JS so we should add it trough JS. Progressive enhancement and stuff. ?>
					<a class="b-alert__close" data-dismiss="alert">×</a>

					<?php if (!empty($msgs)) : ?>
						<h4 class="b-alert__title"><?php echo JText::_($type); ?></h4>
					<?php foreach ($msgs as $msg) : ?>
							<div class="b-alert__message"><?php echo $msg; ?></div>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
<?php endif; ?>
