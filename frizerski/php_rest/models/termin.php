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
    public $Musterija;
    public $BrojTelefona;
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function get_sve_termine()
    {

        $query = 'SELECT * FROM termini';

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->Frizer);
        $stmt->execute();
        if ($stmt->execute())
            return $stmt;
        else
            return false;
    }
    public function get_termine_po_frizeru()
    {
        $query = 'SELECT * FROM termini WHERE Frizer = ?';

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->Frizer);
        $stmt->execute();
        //   echo json_encode( $stmt->fetch(PDO::FETCH_ASSOC));
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->Frizer = $row['Frizer'];
        $this->Datum = $row['Datum'];
        $this->Termin = $row['Termin'];
        $this->BrojTelefona = $row['BrojTelefona'];
        $this->Musterija = $row['Musterija'];

        return $stmt;
    }

    public function dodaj_termin()
    {
        $query = 'INSERT INTO ' . $this->table . '
            SET
			Frizer = :Frizer,
			Zauzetost = :Zauzetost,
			Datum = :Datum,
			Termin = :Termin,
			Musterija = :Musterija,
			BrojTelefona = :BrojTelefona
            ';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':Frizer', $this->Frizer);
        $stmt->bindParam(':Zauzetost', $this->Zauzetost);
        $stmt->bindParam(':Datum', $this->Datum);
        $stmt->bindParam(':Termin', $this->Termin);
        $stmt->bindParam(':Musterija', $this->Musterija);
        $stmt->bindParam(':BrojTelefona', $this->BrojTelefona);

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
