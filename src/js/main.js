//Link to coachella official website

const visitBtn = document.querySelector('#visit-coachella');

visitBtn.addEventListener('click', function() {
	window.location="https://www.coachella.com/";
});

//TODO: Få export och import att funka

//Animations

//Get user position
function getUserPosition() {
    return $(window).scrollTop();
}

//On scroll
$(window).scroll(function(){

	var scrollTop = getUserPosition();
	var infoTop = $('#info').offset().top;
	var coachellaTop = $('#coachella').offset().top;
	var infoImg = $('img.info-img');
	var textBlock = $('div.animated-text');
	var imgBlock = $('div.img-block');

	//Section: Info animation
	if (scrollTop > (infoTop - 300)) {
		infoImg.css({'margin-top': '0', 'opacity': '1'});
	} else if (scrollTop < (infoTop - 400)) {
		infoImg.css({'margin-top': '300px', 'opacity': '0'});
	}

	//Section: Coachella animation
	if (scrollTop > (coachellaTop - 150)) {
		textBlock.addClass('slide-in');
	} else if(scrollTop < (coachellaTop - 500)) {
		textBlock.removeClass('slide-in');
	}
});




