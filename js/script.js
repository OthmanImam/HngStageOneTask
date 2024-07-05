//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

// Function to get current time in UTC
function getCurrentTimeUTC() {
    const now = new Date();
    return now.toUTCString();
}
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
 
 // Function to get current time in UTC
 function getCurrentTimeUTC() {
    const now = new Date();
    return now.toUTCString();
}

// Function to get current day of the week
function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    // return days[now.getDay()];
}

// Function to display Slack profile picture
function displayProfilePicture() {
    const img = document.createElement('img');
    img.src = 'img/FB_IMG_1720158123758.jpg'; // Replace with actual path
    img.alt = 'Slack Profile Picture';
    img.setAttribute('data-testid', 'slackProfilePicture');
    document.getElementById('profile-picture').appendChild(img);
}

// Update content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('slack-name').textContent = '@AUthman';
    document.getElementById('current-time-utc').textContent = "Current Time: "+ getCurrentTimeUTC();
    document.getElementById('current-time-utc').style.boxShadow = " 0 2px 22px 0.2px black";
    document.getElementById('current-time-utc').style.padding = "";
    document.getElementById('current-time-utc').style.color = "azure";
    document.getElementById('current-time-utc').style.margin = "auto";
    document.getElementById('current-time-utc').style.width = "fit-content";
    document.getElementById('current-time-utc').style.background = "linear-gradient(90deg, #000, brown,#000)";

    document.getElementById('current-day').textContent = getCurrentDay();
    document.getElementById('slack-email').textContent = 'Slack-Email: imkargi@gmail.com';
    document.getElementById('slack-email').style.fontSize = '16px';

    displayProfilePicture();
});
