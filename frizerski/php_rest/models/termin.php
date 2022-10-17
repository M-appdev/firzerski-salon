<?php

class termin
{
    private $conn;
    private $table = 'termini';
    public $ID;
    public $Frizer;
    public $Zauzetost;
    public $Datum;
    public $Termin;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function get_sve_termine()
    {

        $query = 'SELECT 
                u.ID,
                u.Frizer,
                u.Zauzetost,
                u.Datum,
                u.Termin,
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

    public function dodaj_termin()
    {
        $query = 'INSERT INTO ' . $this->table . '
            SET
			Frizer = :Frizer,
			Zauzetost = :Zauzetost,
			Datum = :Datum,
			Termin = :Termin
            ';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':Frizer', $this->Frizer);
        $stmt->bindParam(':Zauzetost', $this->Zauzetost);
        $stmt->bindParam(':Datum', $this->Datum);
        $stmt->bindParam(':Termin', $this->Termin);

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
