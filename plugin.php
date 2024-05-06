<?php

/**
 * Plugin Name: OS Event Calendar
 * Plugin URI: https://github.com/osmansufy/events-calender-plugin
 * Description: A plugin to manage events and display them in a calendar.
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
    const VERSION = '0.0.1';
    public function __construct()
    {
        $this->init();
        $this->constants();
        register_activation_hook(__FILE__, [__CLASS__, 'activate']);
        register_deactivation_hook(__FILE__, [__CLASS__, 'deactivate']);
        bootstrap();
    }



    public function constants()
    {
        define('OS_EVENT_CALENDAR_VERSION', self::VERSION);
        define('OS_EVENT_CALENDAR_FILE', __FILE__);
        define('OS_EVENT_CALENDAR_PATH', __DIR__);
        define('OS_EVENT_CALENDAR_URL', plugins_url('', OS_EVENT_CALENDAR_FILE));
        define('OS_EVENT_CALENDAR_ASSETS', OS_EVENT_CALENDAR_URL . '/assets');
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
