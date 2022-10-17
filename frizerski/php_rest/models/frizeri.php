<?php

class frizer
{
    private $conn;
    private $table = 'frizeri';
    public $id;
    public $ime;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function get_sve_frizere()
    {

        $query = 'SELECT 
                u.id,
                u.ime,
            FROM
                ' . $this->table . ' u
            ';

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        if ($stmt->execute())
            return $stmt;
        else
            return false;
    }

    public function get_frizer_by_id()
    {

        $query = 'SELECT 
                u.id,
                u.ime,
            FROM
                ' . $this->table . ' u
            WHERE
                u.id = ?
            ';

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->username = $row['ime'];

        return $stmt;
    }

    public function dodaj_frizera()
    {
        $query = 'INSERT INTO ' . $this->table . '
            SET
			ime = :ime
            ';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':ime', $this->ime);

        if ($stmt->execute()) {
            return true;
        }

        printf("Error: %s. \n", $stmt->error);
        return false;
    }


    public function obrisi_frizera()
    {

        $query = 'DELETE FROM ' . $this->table . '
            WHERE 
                id = ?
            ';

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }

        printf("Error: %s. \n", $stmt->error);
        return false;
    }
}
