<?php

/* 
Single Event Template

*/

get_header(); ?>

<div class="os-container">
    <h1><?php the_title(); ?></h1>
    <a href="<?php echo get_post_type_archive_link('event'); ?>" class="os-back-events">Back to All Events</a>
    <div class="os-event-date">
        <strong>Event Date:</strong> <?php echo get_post_meta(get_the_ID(), 'cs_event_date', true); ?>
    </div>
    <div class="os-event-time">
        <strong>Event Time:</strong> <?php echo get_post_meta(get_the_ID(), 'cs_event_time', true); ?>
    </div>

    <!-- timer for event -->
    <div class="os-event-timer">
        <strong>Time Remaining:</strong>
        <div id="os-event-timer" data-event-date="<?php echo get_post_meta(get_the_ID(), 'cs_event_date', true); ?>" data-event-time="<?php echo get_post_meta(get_the_ID(), 'cs_event_time', true); ?>"></div>
    </div>
    <article>

        <div class="os-event-content">
            <?php the_content(); ?>
        </div>
    </article>






</div>

<?php get_footer(); ?>