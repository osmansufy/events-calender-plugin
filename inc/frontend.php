<?php

declare(strict_types=1);

namespace OS_Event_Calendar;

use Kucrut\Vite;

/**
 * Frontend bootstrapper
 *
 * @return void
 */
function bootstrap(): void
{
	add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\frontend_enqueue_script');

	// enqueue_script in admin page
	add_action('admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_script');
}



/**
 * Enqueue script
 */
function enqueue_script(): void
{
	Vite\enqueue_asset(
		dirname(__DIR__) . '/js/dist',
		'js/src/main.jsx',
		[
			'dependencies' => ['react', 'react-dom'],
			'handle' => 'vite-for-wp-react',
			'in-footer' => true,
		]
	);
}


/**
 * Enqueue script for frontend
 */

function frontend_enqueue_script(): void
{
	wp_enqueue_script('os-event-calendar', OS_EVENT_CALENDAR_ASSETS . '/js/script.js', [], OS_EVENT_CALENDAR_VERSION, true);
	wp_enqueue_style('os-event-calendar', OS_EVENT_CALENDAR_ASSETS . '/css/style.css', [], OS_EVENT_CALENDAR_VERSION);
}
