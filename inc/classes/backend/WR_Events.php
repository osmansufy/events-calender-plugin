<?php

namespace OS_Event_Calendar\Backend;


class WR_Events
{

    public function __construct()
    {
        add_action('init', [__CLASS__, 'cs_register_event_post_type']);
        add_action('add_meta_boxes', array($this, 'cs_add_event_metabox'));
        add_action('save_post', array($this, 'cs_save_event_metabox'));
    }


    public static function cs_register_event_post_type()
    {
        $labels = array(
            'name' => 'Events',
            'singular_name' => 'Event',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'new_item' => 'New Event',
            'all_items' => 'All Events',
            'view_item' => 'View Event',
            'search_items' => 'Search Events',
            'not_found' => 'No events found',
            'not_found_in_trash' => 'No events found in Trash',
            'parent_item_colon' => '',
            'menu_name' => 'Events'
        );

        $args = array(
            'label' => 'Events',
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'event'),
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => 5,
            'show_in_admin_bar' => true,
            'show_in_rest' => true,
            'rest_base' => 'events',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
        );

        register_post_type('event', $args);
    }

    // add metabox for event date and time
    public static function cs_add_event_metabox()
    {
        add_meta_box(
            'cs_event_date_time',
            'Event Date & Time',
            array(__CLASS__, 'cs_event_date_time_callback'),
            'event',
            'side',
            'default'
        );
    }

    public static function cs_event_date_time_callback()
    {

        $event_date = get_post_meta(get_the_ID(), 'cs_event_date', true);
        $event_time = get_post_meta(get_the_ID(), 'cs_event_time', true);

?>

        <div class="wrap">
            <label for="cs_event_date">Event Date</label>
            <input type="date" name="cs_event_date" id="cs_event_date" value="<?php echo isset($event_date) ? $event_date : date('Y-m-d'); ?>" required>
            <br>
            <label for="cs_event_time">Event Time</label>
            <input type="time" name="cs_event_time" id="cs_event_time" value="<?php echo isset($event_time) ? $event_time : date('H:i'); ?>" required>
        </div>
<?php
    }

    public static function cs_save_event_metabox($post_id)
    {
        if (array_key_exists('cs_event_date', $_POST)) {
            update_post_meta(
                $post_id,
                'cs_event_date',
                $_POST['cs_event_date']
            );
        }

        if (array_key_exists('cs_event_time', $_POST)) {
            update_post_meta(
                $post_id,
                'cs_event_time',
                $_POST['cs_event_time']
            );
        }
    }
}
