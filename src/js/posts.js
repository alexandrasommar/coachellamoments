(function(){

	const mostRecent = document.querySelector('.most-recent .posts');
	const topList = document.querySelector('.top-list .posts');
	const jsonTopList = 'src/json/toplist.json';
	const jsonMostRecent = 'src/json/mostrecent.json';

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

		for(var i = 0; i < 9; i++) {
			element.innerHTML += `<img src="${result[i].thumbnail_src}">`;
		}
	}

	fetchResults(jsonTopList, topList);
	fetchResults(jsonMostRecent, mostRecent);

})();

