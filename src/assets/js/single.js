import $ from 'jquery';

var $el = $('#bottom');
var bottom = $el.position().top + $el.outerHeight(true);
var getMax = function() {
    return $el.position().top + $el.outerHeight(true);
}

var getValue = function() {
    return $(window).scrollTop();
}

if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $('progress');

    // Set the Max attr for the first time
    progressBar.attr({
        max: getMax()
    });

    $(document).on('scroll', function() {
        // On scroll only Value attr needs to be calculated
        progressBar.attr({
            value: getValue()
        });
    });

    $(window).resize(function() {
        // On resize, both Max/Value attr needs to be calculated
        progressBar.attr({
            max: getMax(),
            value: getValue()
        });
    });
} else {
    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;

    var getWidth = function() {
        // Calculate width in percentage
        value = getValue();
        width = (value / max) * 100;
        width = width + '%';
        return width;
    }

    var setWidth = function() {
        progressBar.css({
            width: getWidth()
        });
    }

    $(document).on('scroll', setWidth);
    $(window).on('resize', function() {
        // Need to reset the Max attr
        max = getMax();
        setWidth();
    });
}

// // Social Sticky
function sticky_relocate() {

    var window_top = $(this).scrollTop();
    var div_top = $('#side_sticky').offset().top;
    var footer_top = $('#bottom').offset().top + (-500);

    if (window_top > div_top) {
        $('#side_sticky').addClass('fade');
    } else {
        $('#side_sticky').removeClass('fade');
    }
    if (window_top > footer_top) {
        $('#side_sticky').addClass('fade');
    }

}
$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

$(window).resize(function() {
    console.log('resize called');
    var width = $(window).width();
    if (width >= 320 && width <= 1365) {
        $('#side_sticky #menu').removeClass('vertical').addClass('expanded');
    } else {
        $('#side_sticky #menu').removeClass('expanded').addClass('vertical');
    }
}).resize();

var headroom = new Headroom(document.querySelector('#side_sticky'), {
  "tolerance": 1,
    "classes": {
    "initial": "animated",
    "pinned": "socialDown",
    "unpinned": "socialUp"
  }
});
headroom.init();

