<?php

/**
 * Plugin Name: OS Event Calendar
 * Description: A plugin to demonstrate Vite for WP integration.
 * Author: Osman Sufy
 * Author URI: osmansufy.com
 * License: GPLv2
 * Version: 0.0.1
 * Text Domain: os-event-calendar
 */

namespace OS_Event_Calendar;

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/frontend.php';



final class OS_Event_Calendar
{

    public function __construct()
    {
        $this->init();
        register_activation_hook(__FILE__, [__CLASS__, 'activate']);
        register_deactivation_hook(__FILE__, [__CLASS__, 'deactivate']);
        bootstrap();
    }


    public static function init()
    {

        new Backend\WR_Rest_Api();
        new Backend\WR_Events();
        new Backend\WR_Calendar();
    }

    public static function activate()
    {
        flush_rewrite_rules();
    }

    public static function deactivate()
    {
        flush_rewrite_rules();
    }
}

new OS_Event_Calendar();
