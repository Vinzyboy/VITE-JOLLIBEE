<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/developer/Developer.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$developer = new Developer($conn);
$response = new Response();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $developer->developer_search = $data['searchValue'];

    http_response_code(200);
    if ($data['isFilter']) {
        $developer->user_developer_is_active = checkIndex($data, 'statusFilter');
        if ($developer->developer_search != '') {
            $query = checkFilterActiveSearch($developer);
            getQueriedData(($query));
        }
        $query = checkFilterActive($developer);
        getQueriedData(($query));
    }

    $query = checkSearch($developer);
    http_response_code(200);
    getQueriedData(($query));
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
