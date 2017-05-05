<?php
//Filter on tag #coachellafestival
$url = 'https://www.instagram.com/explore/tags/coachellafestival/?__a=1';

//Get data from Instagram
$data = file_get_contents($url);
?>

<script>
    //Transform to JS object
    var dataObj = <?php echo $data; ?>;
</script>
<?php

// Saves the data in json file
file_put_contents("src/json/toplist.json", json_encode($data));



/*
for ($i = 0; $i < 10; $i++) {

    //Each post
    $postdata = $data->tag->media->nodes[$i];
    $date = $postdata->date;
    $publishdate = date('m/d/Y', $date);

    
    echo '<img src="'.$postdata->thumbnail_src.'">';
    echo '<p>Owner: '.$postdata->owner->id.'</p>';
    echo '<p>Caption: '.$postdata->caption.'</p>';
    echo '<p>Likes: '.$postdata->likes->count.'</p>';
    echo '<p>Published: '.$publishdate.'</p>';
    

}
*/







