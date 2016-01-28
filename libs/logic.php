<?php defined('_JEXEC') or die;

// variables
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$active = $app->getMenu()->getActive();
$params = $app->getParams();
$pageclass = $params->get('pageclass_sfx');
$url = rtrim(JUri::base(), '/');
$tpath = $url . '/templates/' . $this->template;
$option = $app->input->getCmd('option', '');
$view = $app->input->getCmd('view', '');
$social_title = $doc->getTitle();

// New meta
$doc->setMetadata('X-UA-Compatible', 'IE=edge,chrome=1');
$doc->setMetadata('viewport', 'width=device-width, initial-scale=1.0');

// Copyrights
$doc->setMetadata('copyright', htmlspecialchars($app->getCfg('sitename')));

// Simplay SEO
$google_title = '<meta name="google:title" itemprop="name" content="' . $social_title . '" />';

// Load
$doc->addCustomTag($site_title);

// template css
$doc->addStyleSheet($tpath . '/css/app.css');
