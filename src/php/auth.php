<?php 
setcookie("testcookie","hejhej");

$code = isset($_GET['code']) ? $_GET['code'] : null;
$redirectURI = "http://localhost:3000/src/php/auth.php";
$clientID = "2897e5ded7e548479dc6184b505ada50";
$clientSecret = "c0563d3400fb49e3a5480e6010bdf0d4";

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
    
    //var_dump($response);
    
    setcookie('access_token', $response->access_token);
    
    header("location: /");
    
}

 ?>