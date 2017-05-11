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

var currentPage;

function getUserPosition() {
    return $(window).scrollTop();
}

function getElementPos(element) {
    console.log('GET ELEMENT POSITION');
    console.log(element);
    var offset = element.offset();
    return offset.top;
}

$(window).on('scroll', function() {

    var scrollTop = getUserPosition();

    var infoTop = $('#info').offset().top;
    var infoMarker = $('a.nav-item.info');
    var topListTop = $('#top-list').offset().top;
    var topListMarker = $('a.nav-item.top-list');
    var coachellaTop = $('#coachella').offset().top;
    var coachellaMarker = $('a.nav-item.coachella');
    var mostRecentTop = $('#most-recent').offset().top;
    var mostRecentMarker = $('a.nav-item.most-recent');

    if (scrollTop < (infoTop - 200)) {

        $('a.nav-item').removeClass('active');
        $('a.nav-item.home').addClass('active');

        currentElement('home');

    } 

    if (scrollTop > (infoTop - 200)) {

        $('a.nav-item').removeClass('active');
        infoMarker.addClass('active');

        currentElement('info');

    } 

    if (scrollTop > (topListTop - 200)) {

        $('a.nav-item').removeClass('active');
        topListMarker.addClass('active');

        currentElement('top-list');

    } 

    if (scrollTop > (coachellaTop - 200)) {

        $('a.nav-item').removeClass('active');
        coachellaMarker.addClass('active');

        currentElement('coachella');

    } 

    if (scrollTop > (mostRecentTop - 200)) {

        $('a.nav-item').removeClass('active');
        mostRecentMarker.addClass('active');

        currentElement('most-recent');

    }

});

function currentElement(element) {

    if (element === currentPage) {
        return false;
    }

    console.log("variabeln ändrades " + element);

    currentPage = element;

    console.log(currentPage);

    if (window.history.replaceState) {
        console.log("Set url to " + element);
       window.history.replaceState(element, element, '/' + element);
    }

} 







