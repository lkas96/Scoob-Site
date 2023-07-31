<?php

class Transport
{

  //VARIABLES
  private $conn = null;

  //INITIALISE DATABASE CONNECTION
  function __construct()
  {
    $servername = "scoob-database.c8k5fhmymkis.ap-southeast-1.rds.amazonaws.com";
    $username = "admin";
    $password = "admin123";
    $dbname = "scoob";

    // Create connection
    $mysqli = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (mysqli_connect_errno()) {
      die("Connection failed: " . mysqli_connect_error());
    }
    $this->conn = $mysqli;
  }

  //FUNCITON TO VIEW ALL BUSES
  public function viewAllBuses()
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT bus.busid, CONCAT(driver.fname, ' ', driver.lname) AS drivername
            from bus left join bus_used on bus.busid = bus_used.busid left join driver on bus_used.driverid = driver.driverid
            WHERE bus.uen = '$uen';
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewAllBusesSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  

}