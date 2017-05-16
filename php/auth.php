<?php 

$code = isset($_GET['code']) ? $_GET['code'] : null;
$redirectURI = "http://localhost:3000/php/auth.php";
$clientID = "2897e5ded7e548479dc6184b505ada50";
$clientSecret = "c0563d3400fb49e3a5480e6010bdf0d4";


// fetch data from json-files
$jsonFile = "../json/mostrecent.json";
$data = json_decode(file_get_contents($jsonFile));
$test = $data[0]->id;
//var_dump($test);
//var_dump($data);

if (is_null($code)) {
    $authURL = "https://api.instagram.com/oauth/authorize/?client_id=$clientID&redirect_uri=$redirectURI&response_type=code";  
      
    header("location: $authURL");
    
} else {
    
    $params = array(
        'client_id' => $clientID,
        'client_secret' => $clientSecret,
        'grant_type' => 'authorization_code',
        'redirect_uri' => $redirectURI,
        'code' => $code
    );
    
    $curlHandler = curl_init();
    curl_setopt($curlHandler, CURLOPT_URL, "https://api.instagram.com/oauth/access_token");
    curl_setopt($curlHandler, CURLOPT_POST, true);
    curl_setopt($curlHandler, CURLOPT_POSTFIELDS, $params);
    curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);
    $response = json_decode(curl_exec($curlHandler));
    
    $accessT = $response->access_token;
    
    //error_log($response);
    error_log(print_r( $response, true ));
    
    // till för like-knappen
    
    $params = array(
        'access_token' => $accessT,
        'client_id' => $clientID,
        'client_secret' => $clientSecret,
        'grant_type' => 'authorization_code',
        'redirect_uri' => $redirectURI
    );
    

    $curlHandler = curl_init();
    curl_setopt($curlHandler, CURLOPT_URL, "https://api.instagram.com/v1/media/$test/likes");
    curl_setopt($curlHandler, CURLOPT_POST, true);
    curl_setopt($curlHandler, CURLOPT_POSTFIELDS, $params);
    curl_setopt($curlHandler, CURLOPT_RETURNTRANSFER, true);
    $response = json_decode(curl_exec($curlHandler));
    //var_dump($response);
    
    error_log(print_r( $response, true ));
    
    
    
    
    setcookie('access_token', $response->access_token);
//    echo "FOO: ".$response->access_token;
    header("location: /");
    
}






 ?>