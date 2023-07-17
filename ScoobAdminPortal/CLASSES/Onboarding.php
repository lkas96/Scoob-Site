<?php
include("../dbconn.php");

class Onboarding {

  //VARIABLES
  private $conn = null;



  //INITIALISE DATABASE CONNECTION
  function __construct()
  {
    global $servername, $username, $password, $dbname;
    $this->conn = new mysqli($servername, $username, $password, $dbname);
    if ($this->conn->connect_error) {
      die("Connection failed: " . $this->conn->connect_error);
    }
  }



  //FUNCTION TO CREATE NEW SCHOOL APPLICATION AND SCHOOL ADMIN ACCOUNT
  public function createSchoolApplication($name, $uen, $dismissal, $region, $size, $email, $password)
  {
    $query = "
      INSERT INTO schools (status, name, uen, dismissal, region, size)
      VALUES ('Pending', '$name', '$uen', '$dismissal', '$region', '$size');
    ";
  
    $result = $this->conn->query($query);
  
    $num_rows = mysqli_affected_rows($this->conn);
  
    if ($result && $num_rows > 0) {
      $query = "
        INSERT INTO schooladmins (uen, email, password)
        VALUES ('$uen', '$email', '$password');
      ";
  
      $result = $this->conn->query($query);
  
      $num_rows = mysqli_affected_rows($this->conn);
  
      if ($result && $num_rows > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }



  //FUNCTION TO CREATE NEW TRANSPORT APPLICATION AND TRANSPORT ADMIN ACCOUNT
  public function createTransportApplication($name, $uen, $region, $size, $email, $password)
  {
    $query = "
      INSERT INTO transports (status, name, uen, region, size)
      VALUES ('Pending', '$name', '$uen', '$region', '$size');
    ";
  
    $result = $this->conn->query($query);
  
    $num_rows = mysqli_affected_rows($this->conn);
  
    if ($result && $num_rows > 0) {
      $query = "
        INSERT INTO transportadmins (uen, email, password)
        VALUES ('$uen', '$email', '$password');
      ";
  
      $result = $this->conn->query($query);
  
      $num_rows = mysqli_affected_rows($this->conn);
  
      if ($result && $num_rows > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }



  //FUNCTION TO CREATE NEW PARENT/GUARDIAN ACCOUNT
  public function createParentGuardianAccount($fname, $lname, $nric, $email, $password)
  {
    $query = "
      INSERT INTO parentguardians (fname, lname, nric, email, password)
      VALUES ('$fname', '$lname', '$nric', '$email', '$password');
    ";
  
    $result = $this->conn->query($query);
  
    $num_rows = mysqli_affected_rows($this->conn);
  
    if ($result && $num_rows > 0) {
      return true;
    } else {
      return false;
    }
  }



}

?>