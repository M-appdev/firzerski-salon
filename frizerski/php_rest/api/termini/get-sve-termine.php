<?php

header('Access-Control-Allow-Origin: *');
header ('Content-Type: application/json');

include_once '../../config/database.php';
include_once '../../models/termin.php';

$database = new database();

$db = $database -> connect();

    $termin = new termin($db);

    $result = $termin -> get_sve_termine();
    $num = $result -> rowCount();
    if($num > 0){
        $termini_arr = array();
        
        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            // var_dump($row);
            extract($row);
            $termin = array(
                        'Frizer' => $Frizer,
                        'Zauzetost' => $Zauzetost,
                        'Datum' => $Datum,
                        'Termin' => $Termin
                    );
            array_push($termini_arr, $termin);
        }
        echo json_encode($termini_arr);
        http_response_code(200);
    } else {
        http_response_code(204);
    }

    // // $termin -> Frizer = isset($_GET['Frizer']) ? $_GET['Frizer'] : die();
    // if($termin -> get_termine_po_frizeru()){
    //     $sviTermini = array();
    //     $termin_arr = array(
    //         'Frizer' => $termin->Frizer,
    //         'Zauzetost' => $termin -> Zauzetost,
    //         'Datum' => $termin -> Datum,
    //         'Termin' => $termin -> Termin
    //     );
    //     print_r(json_encode($termin_arr));
    //     http_response_code(200);
    // }else{
    //     http_response_code(400);
    // }
