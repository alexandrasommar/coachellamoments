<?php

$media = "media";
$fn_mostrecent = "mostrecent";
$topposts = "top_posts";
$fn_toplist = "toplist";


function saveJson($filter, $filename) {
    //Filter on tag #coachellafestival
    $baseurl = 'https://www.instagram.com/explore/tags/coachellafestival/?__a=1';
    $url = $baseurl;
    //Get data from Instagram
    $data = json_decode(file_get_contents($url));
    
    // get post data
    $outdata = array();
    for ($i = 0; $i < 10; $i++) {
        $outdata[] = $data->tag->$filter->nodes[$i];
        
        // Saves the data in json file
    }
    var_dump($data);
    file_put_contents("src/json/".$filename.".json", json_encode($outdata));
}
saveJson($media, $fn_mostrecent);
saveJson($topposts, $fn_toplist);








?>





