<?php

/**
 * Plugin Name: OS Event Calendar
 * Description: A plugin to demonstrate Vite for WP integration.
 * Author: Osman Sufy
 * Author URI: osmansufy.com
 * License: GPLv2
 * Version: 0.0.1
 */

namespace OS_Event_Calendar;

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/frontend.php';

bootstrap();

new BACKEND\WR_Calendar();
