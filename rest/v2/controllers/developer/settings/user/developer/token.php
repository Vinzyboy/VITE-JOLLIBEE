<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require '../../../../../jwt/vendor/autoload.php';
// require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/developer/Developer.php';
// get payload

// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$developer = new Developer($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();

  $password = $data['token'];
  $key = 'jwt_admin_ko_ito';

  extract($row);

  tokenDeveloper($developer, $token, $key);
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
