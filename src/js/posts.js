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
    return (number + (2.5 * (Math.random()+1)) + 's');
  }

  // set animation duration based on image height
  function speed(height, images) {
      // var animationDur = 'animation-duration';
      if (height < 190) {
          images.style.animationDuration = aLittleBitRandomness(36);
          images.style.animationDelay = '-3s';
          images.style.zIndex = '2';
          console.log(images.style);
      } else if (height > 190 && height < 230) {
          images.style.animationDuration = aLittleBitRandomness(32);
          images.style.zIndex = '3';
          console.log(images.style);
      } else if (height > 230 && height < 270) {
          images.style.animationDuration = aLittleBitRandomness(28);
          images.style.animationDelay = '-6s';
          images.style.zIndex = '4';
          console.log(images.style);
      } else {
          images.style.animationDuration = aLittleBitRandomness(24);
          images.style.animationDelay = '-9s';
          images.style.zIndex = '5';
          //console.log(images);
      }
  }

  var moreInfo = [];
  //Display result in HTML element
  function displayResults(result, element) {

      var options = {
          margin: {
              min: 0,
              max: 30,
              unit: '%'
          },
          height: {
            min: 150,
            max: 400,
            unit: 'px'
          }
      };

      var currentImg;
      var imgArr;

      for(let i = 0; i < 9; i++) {

          element.innerHTML += `<div class="single">
                                  <!--<a href="https://instagram.com/p/${result[i].code}">!-->
                                  <img src="${result[i].thumbnail_src}">
                                  <div class="content">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <p>${result[i].likes.count}</p>
                                  </div>
                                </div>`;

          imgArr = element.querySelectorAll('.single');
          currentImg = imgArr[i];
          moreInfo.push([result[i].thumbnail_src, result[i].caption, result[i].comments.count]);
          currentImg.style.height = getRandomInt(options.height.min, options.height.max, options.height.unit);
          currentImg.style.marginTop = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
          currentImg.style.marginLeft = getRandomInt(options.margin.min, options.margin.max, options.margin.unit);
          var imageHeight = window.getComputedStyle(currentImg, null).getPropertyValue('height');
          speed(imageHeight.slice(0, -2), currentImg);
      }

  }
  console.log(moreInfo);

  // Display more info
  function showImageContent() {
    var popupImages = document.querySelectorAll('.single');
    for(let i = 0; i < popupImages.length; i++) {
      popupImages[i].addEventListener('click', function() {
        var img = popupImages[i].querySelector('img');
        var popupDiv = document.querySelector('.pop-up');
        popupDiv.appendChild(img);
        if(img.src === moreInfo[i][0]) {
          popupDiv.innerHTML += `<p>Caption: ${moreInfo[i][1]}</p>`;
        }
      });
    }
  }

  function waitForElement(className, callback){
    var poops = setInterval(function(){
        if(document.querySelectorAll(className)){
            clearInterval(poops);
            callback();
        }
    }, 100);
  }

  waitForElement('.single', showImageContent);

  // var img = document.querySelectorAll('.posts .single');
  // console.log(img);

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
