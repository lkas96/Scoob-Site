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
            from bus left join bus_driver on bus.busid = bus_driver.busid left join driver on bus_driver.driverid = driver.driverid
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

  //FUNCTION TO VIEW A BUS
  public function viewBus($busid)
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT bus.busid, CONCAT(driver.fname, ' ', driver.lname) AS drivername, driver.driverid
            from bus left join bus_driver on bus.busid = bus_driver.busid left join driver on bus_driver.driverid = driver.driverid
            WHERE bus.busid = '$busid' AND bus.uen = '$uen';
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewBusSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO ADD A BUS
  public function addBus($busID)
  {
    $uen = $_SESSION['uen'];

    $sql = "INSERT INTO bus (busid, uen)
            VALUES ('$busID', '$uen');
    ";

    $result = $this->conn->query($sql);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO DELETE A BUS
  //DELETE FROM BUS TABLE AND BUS_DRIVER TABLE
  public function deleteBus($busID)
  {
    $uen = $_SESSION['uen'];

    $sql1 = "DELETE FROM bus WHERE busid = '$busID' AND uen = '$uen';
    ";

    $result1 = $this->conn->query($sql1);

    $sql2 = "DELETE FROM bus_driver WHERE busid = '$busID' AND uen = '$uen';
    ";

    $result2 = $this->conn->query($sql2);

    if ($result1 && $result2) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO VIEW ALL DRIVERS
  public function viewAllDrivers()
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT driver.driverid, CONCAT(driver.fname, ' ', driver.lname) AS drivername, bus.busid
            from driver left join bus_driver on driver.driverid = bus_driver.driverid left join bus on bus_driver.busid = bus.busid
            WHERE bus.uen = '$uen';
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewAllDriversSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO VIEW A DRIVER
  public function viewDriver($driverID)
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT driver.driverid, CONCAT(driver.fname, ' ', driver.lname) AS drivername, driver.phone, driver.email, bus.busid
            from driver left join bus_driver on driver.driverid = bus_driver.driverid left join bus on bus_driver.busid = bus.busid
            WHERE driver.driverid = '$driverID' AND bus.uen = '$uen';
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewDriverSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO ADD A DRIVER
  public function addDriver($driverID, $fname, $lname, $phone, $email, $password)
  {
    $uen = $_SESSION['uen'];

    $sql = "INSERT INTO driver (driverid, fname, lname, phone, email, password, uen)
            VALUES ('$driverID', '$fname', '$lname', '$phone', '$email', '$password', '$uen');
    ";

    $result = $this->conn->query($sql);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO ASSIGN DRIVER TO A BUS
  public function assignDriver($driverID, $busID)
  {
    $uen = $_SESSION['uen'];

    $sql = "INSERT INTO bus_driver (uen, driverid, busid)
            VALUES ('$uen' ,'$driverID', '$busID');
    ";

    $result = $this->conn->query($sql);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO UNASSIGN DRIVER FROM A BUS
  public function unassignDriver($driverID, $busID)
  {
    $uen = $_SESSION['uen'];

    $sql = "DELETE FROM bus_driver WHERE uen = '$uen' AND driverid = '$driverID' AND busid = '$busID';
    ";

    $result = $this->conn->query($sql);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO DELETE A DRIVER
  //DELETE DRIVER FROM DRIVER TABLE AND ASSIGNED BUS TABLE
  public function deleteDriver($driverID)
  {
    $uen = $_SESSION['uen'];

    $sql2 = "DELETE FROM bus_driver WHERE driverid = '$driverID' AND uen = '$uen';
    ";

    $result2 = $this->conn->query($sql2);

    $sql1 = "DELETE FROM driver WHERE driverid = '$driverID' AND uen = '$uen';
    ";

    $result1 = $this->conn->query($sql1);

    if ($result1 && $result2) {
      return true;
    } else {
      return false;
    }
  }
}
