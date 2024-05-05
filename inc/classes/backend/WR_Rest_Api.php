<?php


namespace OS_Event_Calendar\Backend;


class WR_Rest_Api
{
    public function __construct()
    {
        add_action('rest_api_init', [__CLASS__, 'create_api_posts_meta_field']);
    }

    public static  function create_api_posts_meta_field()
    {
        register_rest_field(
            'event',
            'post-meta-fields',
            array(
                'get_callback'    => [__CLASS__, 'get_post_meta_for_api'],
                'schema'          => null,
            )
        );
    }

    static public function get_post_meta_for_api($object)
    {
        //get the id of the post object array
        $post_id = $object['id'];

        //return the post meta
        return get_post_meta($post_id);
    }
}
