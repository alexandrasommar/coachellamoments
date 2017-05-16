//DESKTOP NAVIGATION
// Scroll indicator - On click

// Select all links with hashes
$('a[href*="#"]').click(function(event) {
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

        //Hide main-nav in section: home
        hideNav(targetName);

        // Highlight active section
        var mId = $(this).attr('class').substring(-1,7);

        
        $("a").removeClass('active');
        
        if (!$( this ).hasClass('active')) {
            $("a."+mId).addClass('active');
        }
        
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');

        //Check if scroll target exists
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

//TODO: fixa blink på to-top knapp

//Hide navigation
function hideNav(element) {

    var mainNav = $('.main-nav.desktop');

    var toTop = $('a.to-top');

    if(element === 'home') {

        mainNav.css('visibility', 'hidden');
        toTop.css('visibility', 'hidden');

    } else if (element === 'footer') {

        mainNav.css('visibility', 'hidden');
        toTop.css('visibility', 'visible');

    } else {
        
        mainNav.css('visibility', 'visible');
        toTop.css('visibility', 'visible');
    }

}


// Scroll indicator - On scroll

var currentPage;

//Get user position
function getUserPosition() {
    return $(window).scrollTop();
}

//On scroll
$(window).on('scroll', elementPositions);

//Get element positions
function elementPositions() {

    var scrollTop = getUserPosition();
    var homeMarker = $('.desktop > .nav-items > a.nav-item.home');
    var infoTop = $('#info').offset().top;
    var infoMarker = $('.desktop > .nav-items > a.nav-item.info');
    var topListTop = $('#top-list').offset().top;
    var topListMarker = $('.desktop > .nav-items > a.nav-item.top-list');
    var coachellaTop = $('#coachella').offset().top;
    var coachellaMarker = $('.desktop > .nav-items > a.nav-item.coachella');
    var mostRecentTop = $('#most-recent').offset().top;
    var mostRecentMarker = $('.desktop > .nav-items > a.nav-item.most-recent');
    var footerTop = $('footer').offset().top;

    if (scrollTop > (footerTop - 500)) {
        
        hideNav('footer');

    } else if (scrollTop > (mostRecentTop - 200)) {

        currentElement('most-recent', mostRecentMarker);
        hideNav('most-recent');

    } else if (scrollTop > (coachellaTop - 200)) {

        currentElement('coachella', coachellaMarker);
        hideNav('coachella');

    } else if (scrollTop > (topListTop - 200)) {

        currentElement('top-list', topListMarker);
        hideNav('top-list');

    } else if (scrollTop > (infoTop - 200)) {

        currentElement('info', infoMarker);
        hideNav('info');

    } else if (scrollTop < (infoTop - 200)) {

        currentElement('home', homeMarker);
        hideNav('home');
    } 

}

//Highlight marker for current element
function currentElement($el, $marker) {
    $('a.nav-item').removeClass('active');
    $marker.addClass('active');
    currentUrl($el);
}

//Change url to current element
function currentUrl(element) {

    if (element === currentPage) {
        return false;
    }

    currentPage = element;

    if (window.history.replaceState) {
       window.history.replaceState(element, element, '/' + element);
    }

}

//MOBILE NAVIGATION

//Change menu depending on browser width
function setMenu() {

    var mainNav = $('.main-nav');
    var browserWidth = $(window).width();

    if (browserWidth >= 1200) {

        //Use desktop menu
        mainNav.removeClass('mobile');
        mainNav.addClass('desktop');

    } else {

        //Use mobile menu
        mainNav.removeClass('desktop');
        mainNav.addClass('mobile');

    }

}

$(window).on('load resize scroll', setMenu);

//Close menu when a section is selected
$('.main-nav.mobile a').on('click', function() {

    $('#menu').prop('checked', false);

});

