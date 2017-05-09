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

        // Add/remove class for active section
        var mId = $(this).attr('class').substring(-1,7);
        $("a").removeClass('active');
        if ( !$( this ).hasClass( 'active' ) ) {
            $("a."+mId).addClass('active');
        }
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');

        //TODO: Fixa så att 'active' tas bort för alla sections vid klick på "to top"
    
        // Does a scroll target exist?
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
// $('a.to-top').click(function(){

// });
});