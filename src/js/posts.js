(function(){

  const mostRecent = document.querySelector('.most-recent .posts');
  const topList = document.querySelector('.top-list .posts');
  const jsonTopList = '../json/toplist.json';
  const jsonMostRecent = '../json/mostrecent.json';

  // Fetch request file
  function fetchRequest() {
      fetch('./php/request.php')
          .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  // Fetch results from json files
  function fetchResults(filename, element) {
      fetch(filename)
      .then(function(result) {
          return result.json();
      }).then(function(result) {
          displayResults(result, element);
      });
  }

  // get random number based on max & min
  function getRandomInt(min, max, unit) {
      return Math.floor(Math.random() * (max - min + 1)) + min + unit;
  }

  function aLittleBitRandomness(number) {
    return (number + (2 * (Math.random()+1)) + 's');
  }

  // set animation duration based on image height
  function speed(height, images) {
      // var animationDur = 'animation-duration';
      if (height < 190) {
          images.style.animationDuration = aLittleBitRandomness(36);
          images.style.zIndex = '2';
          console.log(images.style);
      } else if (height > 190 && height < 230) {
          images.style.animationDuration = aLittleBitRandomness(32);
          images.style.zIndex = '3';
          console.log(images.style);
      } else if (height > 230 && height < 270) {
          images.style.animationDuration = aLittleBitRandomness(28);;
          images.style.zIndex = '4';
          console.log(images.style);
      } else {
          images.style.animationDuration = aLittleBitRandomness(24);;
          images.style.zIndex = '5';
          //console.log(images);
      }
  }

  //Display result in HTML element
  function displayResults(result, element) {

      var options = {
          margin: {
              min: 2,
              max: 20,
              unit: '%'
          },
          height: {
            min: 150,
            max: 300,
            unit: 'px'
          }
      };

      var currentImg;
      var imgArr;

      for(let i = 0; i < 5; i++) {

          element.innerHTML += `<div class="single active">
                                  <a href="https://instagram.com/p/${result[i].code}">
                                  <img src="${result[i].thumbnail_src}"></a>
                                  <div class="content">
                                    <p>Likes: ${result[i].likes.count}</p>
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                  </div>
                                </div>`;

          imgArr = element.querySelectorAll('.single');
          currentImg = imgArr[i];

          currentImg.style.height = getRandomInt(options.height.min, options.height.max, options.height.unit);
          currentImg.style.margin = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
          var imageHeight = window.getComputedStyle(currentImg, null).getPropertyValue('height');
          speed(imageHeight.slice(0, -2), currentImg);
      }

  }

  //fetchRequest();
  fetchResults(jsonTopList, topList);
  fetchResults(jsonMostRecent, mostRecent);

  // get latest info from instagram
  setTimeout(function() {
      fetchRequest();
      fetchResults(jsonTopList, topList);
      fetchResults(jsonMostRecent, mostRecent);
  },(1000 * 60 * 10) );


})();
