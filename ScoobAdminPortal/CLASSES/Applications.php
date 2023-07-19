<?php

class Applications {

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

  //FUNCTION TO VIEW ALL PENDING SCHOOL AND TRANSPORT APPLICATIONS
  public function viewPendingApplications()
  {
    $query = "SELECT 'School' AS type , name, uen FROM schools WHERE status = 'Pending'
              UNION ALL
              SELECT 'Transport' AS type , name, uen FROM transports WHERE status = 'Pending';
    ";

    $result = $this->conn->query($query);

    $num_rows = mysqli_num_rows($result);

    if ($result && $num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewPendinglApplicationsSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO A VIEW SCHOOL APPLICATION
  public function viewSchoolApplication($uen)
  {
    $query = "SELECT * FROM schools where UEN='$uen'";

    $result = $this->conn->query($query);

    $num_rows = mysqli_num_rows($result);

    if ($result && $num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewSchoolApplicationSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

}
?>