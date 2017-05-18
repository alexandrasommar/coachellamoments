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

    //Display result in HTML element
    function displayResults(result, element) {

        var options = {
            margin: {
                min: 2,
                max: 50,
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

            element.innerHTML += `<div class="single"><a href="https://instagram.com/p/${result[i].code}"><img src="${result[i].thumbnail_src}" class="active"></a></div>`;
            element.innerHTML += `<p>Likes: ${result[i].likes.count}</p>`;

            imgArr = element.querySelectorAll('.single');
            currentImg = imgArr[i];

            currentImg.style.height = getRandomInt(options.height.min, options.height.max, options.height.unit);

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
