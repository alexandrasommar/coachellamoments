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

//Highlight active section on scroll
// var home = $('#home').scrollTop();
// var info = $(window).scrollTop();
// var topList = $('#top-list').scrollTop();
// var coachella = $('#coachella').scrollTop();
// var mostRecent = $('#most-recent').scrollTop();

// $(window).scroll(function() {

//     if(info >= 1000) {
//         $('#info').addClass('active');
//     }

// });

//$(window).scroll(function() {

    // var scroll = $(window).scrollTop();
    //var windowHeight = $(window).height();

    // if (scrollPosition >= windowHeight) {
    //     $('a[href*="#"]').removeClass('active');
    //     $('section[class*="active"]').removeClass('active');
    //     $('#info-btn').addClass('active');
    //     $('#info').addClass('active');
    // } else {
    //     $('#info-btn').removeClass('active');
    //     $('#info').removeClass('active');
    // }

//});

// var scrollPosition = $('section.active').offset({top:0, left:0});

//TEST

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






