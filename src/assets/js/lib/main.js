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