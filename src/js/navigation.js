// SCROLL INDICATOR - ON CLICK

// Select all links with hashes
$('a[href*="#"]')
// Remove empty links
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {

        // Find element to scroll to
        var target = $(this.hash);
        var targetName = target[0].id;
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        // Update url
        if (window.history.replaceState) {
           //Prevents browser from storing history with each change:
           window.history.replaceState(targetName, targetName, '/' + targetName);
        }

        // Highlight active section
        var mId = $(this).attr('class').substring(-1,7);
        
        $("a").removeClass('active');
        
        if (!$( this ).hasClass('active')) {
            $("a."+mId).addClass('active');
        }
        
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    
        // Check if scroll target exists
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
            });
        }
    }
});


// SCROLL INDICATOR - ON SCROLL

//TEST 1

// $(window).scroll(function() {

//     var scroll = $(window).scrollTop();
//     //var currentSection = $('section.active').height();
//     var windowHeight = $(window).height();
//     var breakpoint = windowHeight * 0.7;
//     var marker = $('a.nav-item');

//     if (scroll < breakpoint) {
        
//         marker.removeClass('active');
//         $('#home-btn').addClass('active');

//         if (window.history.replaceState) {
//            window.history.replaceState('home', 'Home', '/home');
//         }

//     } else if (scroll >= breakpoint) {

//         marker.removeClass('active');
//         $('#info-btn').addClass('active');

//         if (window.history.replaceState) {
//            window.history.replaceState('info', 'Info', '/info');
//         }

//     } //forstättning för övriga sections

// });


//TEST 2

// var scrollPosition = $('section.active').offset().top;
// var screenHeight = $(window).height();
// var activationOffset = 0;
// var maxScrollHeight = $('body').height() + screenHeight;
// //var scrollActivationPoint = scrollPosition - (screenHeight * activationOffset);
// var scrollActivationPoint = screenHeight * 0.7;

// $(window).scroll(function() {
    
//     var scrollPosY = window.pageYOffset;
//     var elementInView = scrollPosY > scrollActivationPoint;
//     var bottomOfPage = maxScrollHeight <= scrollPosY && !elementInView;

//     if(elementInView || bottomOfPage) {
            
//         $('section.active').next('section').addClass('active');

//         // elementInView.next('.new-page').addClass('active');
//         // elementInView.prev('new-page.active').removeClass('active');

//         $('a.active').next('a').addClass('active');

//         //$('section').addClass('active');
//         //$('a[href*="#"]').addClass('active');
//     }

// });

//TEST 3

// $(window).on('load resize scroll', function() {
//     addClassToElementInViewport($('#home'), 'active');
//     addClassToElementInViewport($('#info'), 'active');
//     addClassToElementInViewport($('#top-list'), 'active');
//     addClassToElementInViewport($('#coachella'), 'active');
//     addClassToElementInViewport($('#most-recent'), 'active');
// });

// function addClassToElementInViewport(element, newClass) {
    
//     var marker = $('a.nav-item');

//     if (inViewport(element)) {
        
//         element.addClass(newClass);
//         console.log('ELEMENT');
//         console.log(element);
        
//         if (element === '#home') {
//             marker.removeClass('active');
//             $('#home-btn').addClass('active');
//         } else if (element === '#info') {
//             marker.removeClass('active');
//             $('#info-btn').addClass('active');
//         } else if (element === '#top-list') {
//             marker.removeClass('active');
//             $('#top-list-btn').addClass('active');
//         } else if (element === '#coachella') {
//             marker.removeClass('active');
//             $('#coachella-btn').addClass('active');
//         } else if (element === '#most-recent') {
//             marker.removeClass('active');
//             $('#most-recent-btn').addClass('active');
//         }

//     }

// }

// function inViewport(element) {
    
//     if (typeof jQuery === "function" && element instanceof jQuery) {
//         element = element[0];
//     }
    
//     var elementBounds = element.getBoundingClientRect();
    
//     return (
//         elementBounds.top >= 0 &&
//         elementBounds.left >= 0 &&
//         elementBounds.bottom <= $(window).height() &&
//         elementBounds.right <= $(window).width()
//     );

// }





