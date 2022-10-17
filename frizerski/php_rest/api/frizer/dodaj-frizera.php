<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/database.php';
include_once '../../models/frizeri.php';

$database = new database();

$db = $database->connect();

$frizer = new Frizer($db);
$data = json_decode(file_get_contents("php://input"),true);
$frizer->ime = $data['ime'];

if ($frizer->dodaj_frizera()) {
    http_response_code(201);
} else {
    http_response_code(400);
}
