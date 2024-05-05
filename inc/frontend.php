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
	// add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_script');

	// enqueue_script in admin page
	add_action('admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_script');
	// add_action( 'wp_footer', __NAMESPACE__ . '\\render_app' );
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
