import $ from 'jquery';

// Navigation slide up
var headroom = new Headroom(document.querySelector("#navigation"), {
  "offset": 0,
  "tolerance": 1,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroom.init();

// Navigation dropdown closes when scrolling
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".dropdown-pane").removeClass("is-open");
    $(".menu_controls").removeClass("hover");
    $(".hamburger").removeClass("hover");
  }
});

// Initialize wow.js
if (typeof WOW == 'function') {
  new WOW().init();
}

// scroll-to-top button
var headroom = new Headroom(document.querySelector(".scroll-top-wrapper"), {});
headroom.init();

$(".scroll-top-wrapper").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "swing");
  return false;
});

// // Masonry on photo category pages
// if (typeof masonry == 'function') {
//   $('.grid').masonry({
//     // options...
//     itemSelector: '.photo_item'
//   });
// }

$(function() {
  $("#video-1, #video-2, #video-3").on("click", function(event) {
    event.preventDefault();
    $(".responsive-embed iframe").prop("src", $(event.currentTarget).attr("href"));
  });
  $(".playlist").on('click', '.video_item', function() {
    // remove classname 'active' from all who already has classname 'active'
    $(".playlist .video_item.active").removeClass("active");
    // adding classname 'active' to current click li
    $(this).addClass("active");
  });
});

// Video category page playlist switcher
$("#video-1, #video-2, #video-3, #video-4, #video-5, #video-6").on("click", function(event) {
  event.preventDefault();
  $(".responsive-embed #main_video").prop("src", $(event.currentTarget).attr("href"));
});
$(".playlist").on('click', '.video_item', function() {
  // remove classname 'active' from all who already has classname 'active'
  $(".playlist .video_item.active").removeClass("active");
  // adding classname 'active' to current click li
  $(this).addClass("active");
});

// var $el = $('#bottom');
// var bottom = $el.position().top + $el.outerHeight(true);
// var getMax = function() {
//     return $el.position().top + $el.outerHeight(true);
// }

// var getValue = function() {
//     return $(window).scrollTop();
// }

// if ('max' in document.createElement('progress')) {
//     // Browser supports progress element
//     var progressBar = $('progress');

//     // Set the Max attr for the first time
//     progressBar.attr({
//         max: getMax()
//     });

//     $(document).on('scroll', function() {
//         // On scroll only Value attr needs to be calculated
//         progressBar.attr({
//             value: getValue()
//         });
//     });

//     $(window).resize(function() {
//         // On resize, both Max/Value attr needs to be calculated
//         progressBar.attr({
//             max: getMax(),
//             value: getValue()
//         });
//     });
// } else {
//     var progressBar = $('.progress-bar'),
//         max = getMax(),
//         value, width;

//     var getWidth = function() {
//         // Calculate width in percentage
//         value = getValue();
//         width = (value / max) * 100;
//         width = width + '%';
//         return width;
//     }

//     var setWidth = function() {
//         progressBar.css({
//             width: getWidth()
//         });
//     }

//     $(document).on('scroll', setWidth);
//     $(window).on('resize', function() {
//         // Need to reset the Max attr
//         max = getMax();
//         setWidth();
//     });
// }

// // Social Sticky
// function sticky_relocate() {

//     var window_top = jQuery(this).scrollTop();
//     var div_top = jQuery('#side_sticky').offset().top;
//     var footer_top = jQuery('#bottom').offset().top + (-500);

//     if (window_top > div_top) {
//         jQuery('#side_sticky').addClass('fade');
//     } else {
//         jQuery('#side_sticky').removeClass('fade');
//     }
//     if (window_top > footer_top) {
//         jQuery('#side_sticky').addClass('fade');
//     }

// }
// jQuery(function() {
//     jQuery(window).scroll(sticky_relocate);
//     sticky_relocate();
// });

// $(window).resize(function() {
//     console.log('resize called');
//     var width = $(window).width();
//     if (width >= 320 && width <= 1405) {
//         $('#side_sticky #menu').removeClass('vertical').addClass('expanded');
//     } else {
//         $('#side_sticky #menu').removeClass('expanded').addClass('vertical');
//     }
// }).resize();

// var headroom = new Headroom(document.querySelector("#side_sticky"), {
//   "tolerance": 1
// });

