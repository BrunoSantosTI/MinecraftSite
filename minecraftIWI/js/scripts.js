/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Timeline with integrated range slider
    const timelineRange = document.getElementById('timelineRange');
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    const timelineProgress = document.querySelector('.timeline-progress');

    if (timelineRange && timelineEvents.length > 0) {
        // Initialize first event and marker
        timelineEvents[0].classList.add('active');
        timelineMarkers[0].classList.add('active');
        updateTimelineProgress();

        // Handle range input
        timelineRange.addEventListener('input', (e) => {
            const currentIndex = parseInt(e.target.value);
            
            // Update active event
            timelineEvents.forEach((event) => {
                event.classList.remove('active');
            });
            timelineEvents[currentIndex].classList.add('active');
            
            // Update active marker
            timelineMarkers.forEach((marker) => {
                marker.classList.remove('active');
            });
            timelineMarkers[currentIndex].classList.add('active');
            
            // Update progress bar
            updateTimelineProgress();
        });

        // Handle marker clicks
        timelineMarkers.forEach((marker, index) => {
            marker.addEventListener('click', () => {
                timelineRange.value = index;
                timelineRange.dispatchEvent(new Event('input'));
            });
        });

        function updateTimelineProgress() {
            const value = (timelineRange.value / timelineRange.max) * 100;
            timelineProgress.style.width = value + '%';
        }

        // Update progress on window resize
        window.addEventListener('resize', updateTimelineProgress);
    }

});

