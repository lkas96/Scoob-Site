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

    //FUNCTION TO IMPORT THE 3 DATA FILES
    public function importTransport($csv_file_1, $csv_file_2, $csv_file_3)
    {
      ob_start();
  
      //SETTING TO ENSURE NO MEMORY LIMITS AND EXECUTION TIME LIMITS
      ini_set('memory_limit', '-1');
      ini_set('max_execution_time', 0);
  
      //DATABASE CONNECTION SETTINGS
      $servername = "scoob-database.c8k5fhmymkis.ap-southeast-1.rds.amazonaws.com";
      $username = "admin";
      $password = "admin123";
      $dbname = "scoob";
  
      //INITIALISE DATABASE CONNECTION
      $conn = new mysqli($servername, $username, $password, $dbname);
  
      //FUNCTION TO INSERT CSV DATA EACH LINE INTO THE DATABASE
      function insertCSVData($conn, $table, $columns, $data)
      {
        $values = array();
        foreach ($data as $row) {
          $values[] = "('" . implode("','", $row) . "')";
        }
  
        //ROW TO STRING CONVERSION
        $values_str = implode(",", $values);
  
        //INSERT INTO DATABASE AND SKIP DUPLICATES
        $query = "INSERT IGNORE INTO $table ($columns) VALUES $values_str";
        return $conn->query($query);
      }
  
      // Process and insert CSV file 1 (CLASSES)
      $csv_file_1 = $_FILES['csv_file_1']['tmp_name'];
      $data_1 = array_map('str_getcsv', file($csv_file_1));
      $header_1 = array_shift($data_1);
      $query1_success = insertCSVData($conn, 'bus', implode(', ', $header_1), $data_1);
  
      // Process and insert CSV file 2 (TEACHERS)
      $csv_file_2 = $_FILES['csv_file_2']['tmp_name'];
      $data_2 = array_map('str_getcsv', file($csv_file_2));
      $header_2 = array_shift($data_2);
      $query2_success = insertCSVData($conn, 'driver', implode(', ', $header_2), $data_2);
  
      // Process and insert CSV file 3 (STUDENTS)
      $csv_file_3 = $_FILES['csv_file_3']['tmp_name'];
      $data_3 = array_map('str_getcsv', file($csv_file_3));
      $header_3 = array_shift($data_3);
      $query3_success = insertCSVData($conn, 'bus_driver', implode(', ', $header_3), $data_3);
  
      // Close the database connection
      $conn->close();
  
      if ($query1_success == true && $query2_success == true && $query3_success == true) {
        return true;
      } else {
        return false;
      }
    }
}
