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

        for(var i = 0; i < 5; i++) {
            element.innerHTML += `<a href="https://instagram.com/p/${result[i].code}"><img src="${result[i].thumbnail_src}"></a>`;
            element.innerHTML += `<p>Likes: ${result[i].likes.count}</p>`;
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
    },(1000 * 60 * 1) );


})();
