<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/database.php';
include_once '../../models/termin.php';

$database = new database();

$db = $database->connect();

$termin = new termin($db);
$data = json_decode(file_get_contents("php://input"), true);
echo($data["Zauzetost"]);
$termin->Frizer = $data['Frizer'];
$termin->Zauzetost = $data['Zauzetost'];
$termin->Datum = $data['Datum'];
$termin->Termin = $data['Termin'];

if ($termin->dodaj_termin()) {
    http_response_code(201);
} else {
    http_response_code(400);
}
