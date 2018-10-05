jQuery('#carousel-homepage-latestnews').carousel('pause');

var windowWidth = jQuery(window).width();
if ( windowWidth <= 460 ) {
    jQuery('#carousel-homepage-latestnews').css( 'height', '1672px');
}