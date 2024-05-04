<?php

/* 

Class responsible for the admin page of the calendar.
*/

namespace OS_Event_Calendar\Backend;


class WR_Calendar
{
    public function __construct()
    {
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    public function add_admin_menu()
    {
        add_menu_page(
            'WR Calendar',
            'WR Calendar',
            'manage_options',
            'wr-calendar',
            array($this, 'render_app'),
            'dashicons-calendar-alt',
            6
        );
    }
    /**
     * Render application's markup
     */
    public function render_app(): void
    {
        printf('<div id="my-app" class="my-app"></div>');
    }
}
