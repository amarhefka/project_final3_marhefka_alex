$(document).ready(function () {
    $(function () {
        $('#menu').cookcodesmenu();
    });

    var stickyNavTop = $('nav').offset().top;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });

    $.backstretch('img/tiger-pattern2.jpg');

    // this is plain custom JavaScript to add the days of the week (and align them with the 'day' CSS class) before every other <time> element on the About page
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
});
