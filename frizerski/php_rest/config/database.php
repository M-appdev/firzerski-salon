<?php
class Database {

    private $db_host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db_name = 'frizerski_salon';
    private $conn;

    public function connect() {
        $this -> conn = null;

        try {
            $this -> conn = new PDO('mysql:host=' . $this->db_host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this -> conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (PDOException $e) {
            echo 'Connection  Error: ' . $e -> getMessage();
        } 

        return $this -> conn;
    }
}
?>