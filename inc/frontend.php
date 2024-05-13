<?php

declare(strict_types=1);


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

	// if is admin page slug is wr-calendar

	$screen = get_current_screen();

	if ($screen->id === 'toplevel_page_wr-calendar') {
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
}


/**
 * Enqueue script for frontend
 */

function frontend_enqueue_script(): void
{

	// check if the page is a single post page and if the post type is event post type
	if (is_single() && get_post_type() === 'event') {
		wp_enqueue_script('os-event-calendar', OS_EVENT_CALENDAR_ASSETS . '/js/script.js', [], OS_EVENT_CALENDAR_VERSION, true);
		wp_enqueue_style('os-event-calendar', OS_EVENT_CALENDAR_ASSETS . '/css/style.css', [], OS_EVENT_CALENDAR_VERSION);
	}
}
