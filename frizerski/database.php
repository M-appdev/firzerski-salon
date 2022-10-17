<?php


$db_host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'frizerski_salon';
$conn = mysqli_connect($db_host, $username, $password, $db_name);

$query = "INSERT INTO frizeri (ime) VALUES('Zeljko')";

if (mysqli_query($conn, $query)) {
    echo "RADI";
} else {
    echo "Ne radi";
}
