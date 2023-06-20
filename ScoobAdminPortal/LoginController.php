<?php
include("CLASSES/User.php");

class LoginController{
  function login($email, $password)
  {
    $userLogin = new User();

    $bool = $userLogin ->login($email, $password);

    return $userLogin->getType();
  }
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SCOOB";

// Create connection
$mysqli = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}
?>