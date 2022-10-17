<?php

header('Access-Control-Allow-Origin: *');
header ('Content-Type: application/json');

include_once '../../config/database.php';
include_once '../../models/user.php';

$database = new database();

$db = $database -> connect();

    $user = new user($db);
    $result = $user -> get_all_users();
    $num = $result -> rowCount();

    if($num > 0){
        $users_arr = array();
        $users_arr = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $user_item = array(
                'id' => $id,
                'username' => $username,
                'role' => $role,
                'active' => $active,
                'createdAt' => $createdAt,
			    'name' => $name
            );
            array_push($users_arr, $user_item);
        }
        echo json_encode($users_arr);
        http_response_code(200);
    } else {
        http_response_code(204);
    }

?>