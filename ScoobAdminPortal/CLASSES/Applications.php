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
    $query = "SELECT 'School' AS type, name, uen, dismissal, region, size FROM schools where UEN='$uen'";

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

  //FUNCTION TO APPROVE SCHOOL APPLICATION
  public function approveSchool($uen)
  {
      $query = "UPDATE schools SET status = 'Approved' WHERE UEN = '$uen'";
  
      // Debugging: Output the query to see if it's correct
      // echo $query;
  
      $result = $this->conn->query($query);
  
      // Debugging: Output any error messages from the query execution
      // if (!$result) {
      //     echo "Query Error: " . $this->conn->error;
      // }
  
      $row_affected = mysqli_affected_rows($this->conn);
  
      if ($result && $row_affected > 0) {
          return true;
      } else {
          return false;
      }
  }

  //FUNCTION TO REJECT SCHOOL APPLICATION
  public function rejectSchool($uen)
  {
    $query = "UPDATE schools SET status = 'Rejected' WHERE UEN = '$uen'";

    $result = $this->conn->query($query);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO A VIEW TRANSPORT APPLICATION
  public function viewTransportApplication($uen)
  {
    $query = "SELECT 'Transport' AS type, name, uen, region, size FROM transports where UEN='$uen'";

    $result = $this->conn->query($query);

    $num_rows = mysqli_num_rows($result);

    if ($result && $num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewTransportApplicationSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO APPROVE TRANSPORT APPLICATION
  public function approveTransport($uen)
  {
      $query = "UPDATE transports SET status = 'Approved' WHERE UEN = '$uen'";
  
      // Debugging: Output the query to see if it's correct
      // echo $query;
  
      $result = $this->conn->query($query);
  
      // Debugging: Output any error messages from the query execution
      // if (!$result) {
      //     echo "Query Error: " . $this->conn->error;
      // }
  
      $row_affected = mysqli_affected_rows($this->conn);
  
      if ($result && $row_affected > 0) {
          return true;
      } else {
          return false;
      }
  }

  //FUNCTION TO REJECT TRANSPORT APPLICATION
  public function rejectTransport($uen)
  {
    $query = "UPDATE transports SET status = 'Rejected' WHERE UEN = '$uen'";

    $result = $this->conn->query($query);

    if ($result) {
      return true;
    } else {
      return false;
    }
  }


}
?>