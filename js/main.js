$(document).ready(function () {
    // This activates the cookcodesmenu jQuery plugin, creating the collapsible menu for small screen sizes.
    $(function () {
        $('#menu').cookcodesmenu();
    });

    // This activates the backstretch jQuery plugin, adding a resizeable tiger stripe pattern for the background (only visible on large screen sizes).
    $.backstretch('img/tiger-pattern2.jpg');

    // This code makes the navigation menu sticky when the user scrolls past it.
    var stickyNavTop = $('nav').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });

    // This is custom JavaScript to add the days of the week (and align them with the 'day' CSS class) before every other <time> element on the About page.
    var hours = document.getElementsByTagName('time');
    var days = ['MON: ', 'TUE: ', 'WED: ', 'THU: ', 'FRI: ', 'SAT: ', 'SUN: '];
    var dayIndex = 0;
    for (var i = 0; i < hours.length; i++) {
        if (i % 2 === 0) {
            var daySpan = document.createElement('span');
            daySpan.setAttribute('class', 'day');
            var dayNode = document.createTextNode(days[dayIndex]);
            daySpan.appendChild(dayNode);
            document.getElementById('hours').insertBefore(daySpan, hours[i]);
            dayIndex += 1;
        }
    }

    // This is custom jQuery to listen for a click on any image, then play a tiger roaring sound.
    var audio = new Audio('tiger.mp3');
    $('img').on('click', function () {
        audio.play();
    });
});
