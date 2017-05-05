for (var i = 0; i < 10; i++ ) {

    var postData = dataObj.tag.media.nodes[i];
    var toplist = document.querySelector('.toplist');
    var newest = document.querySelector('.newest');

    toplist.innerHTML += '<img src="' + postData.thumbnail_src + '">';
    // toplist.posts.innerHTML += '<img src="' + postData.thumbnail_src + '">';

}