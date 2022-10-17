<?php

header('Access-Control-Allow-Origin: *');
header ('Content-Type: application/json');

include_once '../../config/database.php';
include_once '../../models/frizer.php';

$database = new database();

$db = $database -> connect();

    $frizer -> id = isset($_GET['id']) ? $_GET['id'] : die();
    if($frizer -> get_frizer_by_id()){
        $frizer_arr = array(
        'id' => $frizer->id,
        'ime' => $frizer -> ime,
        );
        print_r(json_encode($frizer_arr));
        http_response_code(200);
    }else{
        http_response_code(400);
    }


?>