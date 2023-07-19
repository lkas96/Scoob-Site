<?php

class User {

  //VARIBLES
  private $type;
  private $email;
  private $password;
  private $name;
  private $status;
	private $conn = NULL;
  
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

  //FUNCTION TO LOGIN
  public function login($type, $email, $password)
  {
    if ($type == "System Admin") {
      $query = "SELECT * FROM systemadmins WHERE email = '$email' AND password = '$password'";
      $result = $this->conn->query($query);
      $num_rows = mysqli_num_rows($result);
      if ($num_rows == 1){
        $this->type = $type;
        $this->email = $email;
        $this->password = $password;
        return true;
      } else {
        return false;
      }
    }

    if ($type == "School Admin") {
      $query = "SELECT * FROM schooladmins left join schools on schooladmins.uen = schools.uen WHERE email = '$email' AND password = '$password' AND status = 'Approved'";
      $result = $this->conn->query($query);
      $num_rows = mysqli_num_rows($result);
      if ($num_rows == 1){
        $this->type = $type;
        $this->email = $email;
        $this->password = $password;
        return true;
      } else {
        return false;
      }
    }

    if ($type == "Transport Admin") {
      $query = "SELECT * FROM transportadmins WHERE email = '$email' AND password = '$password' AND status = 'Approved'";
      $result = $this->conn->query($query);
      $num_rows = mysqli_num_rows($result);
      if ($num_rows == 1){
        $this->type = $type;
        $this->email = $email;
        $this->password = $password;
        return true;
      } else {
        return false;
      }
    }
    
    else {
      return false;
    }
  }

  //BASIC FUNCTION - GET TYPE OF USER
  public function getType()
  {
    return $this->type;
  }

  //BASIC FUNCTION - GET EMAIL OF USER
  public function getEmail()
  {
    return $this->email;
  }

  //BASIC FUNCTION - GET USERNAME OF USER
  public function getUsername()
  {
    return $this->username;
  }

  //BASIC FUNCTION - GET UEN OF USER
  public function getUen()
  {
    return $this->uen;
  }





}

?>