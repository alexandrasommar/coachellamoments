<?php
//Filter on tag #coachellafestival
$baseurl = 'https://www.instagram.com/explore/tags/coachellafestival/?__a=1';
$url = $baseurl;

//Get data from Instagram
$data = json_decode(file_get_contents($url));

//Get most recent posts
for ($i = 0; $i < 10; $i++) {
    $mostRecent = $data->tag->media->nodes[$i];
}

// Saves the data in json file
file_put_contents("src/json/mostrecent.json", json_encode($mostRecent));

//Get top posts
for ($i = 0; $i < 10; $i++) {
    $topPosts = $data->tag->top_posts->nodes[$i];
}

// Saves the data in json file
file_put_contents("src/json/top.json", json_encode($topPosts));

?>





