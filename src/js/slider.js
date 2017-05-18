// 1. I n finns det .posts img som definierar max-width: 100px: ta bort detta
// 2. Ta bort max-width på img i slider-css:en
// 3. Problemet: loopen gör bara random på den allra första bilden, sedan blir alla därefter samma bredd. Verkar som att margin inte fungerar alls

//document.addEventListener('DOMContentLoaded', function(e) {
    

 //(function() {
// // Loop through all images
// //Animate the images/make them slide

var section = document.querySelector('section.top-list');
var images = section.getElementsByTagName('img');
console.log(images.length);
var arr = [].slice.call(images);
let arry = [...images]; 
//console.log(arr);

var options = {
    margin: {
        min: 2,
        max: 50,
        unit: '%'
    },
        width: {
        min: 150,
        max: 300,
        unit: 'px'
    }
}

// get random number based on max & min
function getRandomInt(min, max, unit) {
    return Math.floor(Math.random() * (max - min + 1)) + min + unit;
}

// set randomized width and margin
//PROBLEM all images gets the same width AND no margin????????
//function randomize(images) {
    // for (var i = 0, x = images; i < 5; i++) {
    //     images[i].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    //     images[i].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    // }
    images[0].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[0].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    images[1].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[1].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    images[2].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[2].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    images[3].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[3].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    images[4].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[4].style.width = getRandomInt(options.width.min, options.width.max, options.width.unit);
    images[5].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
    images[5].style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
//}

//randomize();
    
// set animation duration based on image width
// function speed(width, images) {
//     var animationDur = 'animation-duration';
//     if (width < 190) {
//         images.style.animationDur = '26s';
// 				console.log(images);
//     } else if (width > 190 && width < 230) {
//         images.style.animationDur = '24s';
// 				console.log(images);
//     } else if (width > 230 && width < 270) {
//         images.style.animationDur = '22s';
// 				console.log(images);
//     } else {
//         images.style.animationDur = '20s';
//         //console.log(images);
//     }
// }
//
// // Get the width of the image & removes unit
// for (var i = 0, x = images.length; i < x; i++) {
//     var imageWidth = window.getComputedStyle(images[i], null).getPropertyValue('width');
//     speed(imageWidth.slice(0, -2), images[i]);
// }


// for (var i = 0, x = images.length; i < x; i++) {
//     (function(index) {
//         images[index].addEventListener('click', function() {
//             pause(index);
//         });
//
//     })(i);
// }
// })();

//});

// (function(){
//     
//     const images = document.querySelectorAll('.posts img');
//     //console.log(images);
//     var i = 0;
//     for( i in images) {
//         console.log(images[i]);
//     }
//     
// })();
// 
// var imgHover = document.querySelectorAll('.test');
// 
// for (var i = 0, x = imgHover.length; i < x; i++) {
//   function(index) {
//       imgHover[index].addEventListener('click', function() {
//       console.log(index);
//       pause(index);
//     });
//   }(i);
// }
// 
// function pause(i) {
//   console.log(i);
//     imgHover[i].classList.toggle('play');
// }

