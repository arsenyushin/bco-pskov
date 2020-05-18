$(function(){
    var $elemScroller = $('#top-scroller');

    $(document).on('scroll', function() {
        var pos = $(window).scrollTop();
        if (pos > 0 && !$elemScroller.is(':visible')) {
            $elemScroller.fadeIn('slow');
        } else if (pos == 0 && $elemScroller.is(':visible')) {
            $elemScroller.fadeOut('slow');
        }
    }).scroll();

    $elemScroller.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

});
