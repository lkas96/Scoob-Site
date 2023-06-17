<?php
include("../CLASSES/User.php");






//DATABASE SETTINGS
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SCOOB";

//DATABASE CONNECTION
$mysqli = mysqli_connect($servername, $username, $password, $dbname);

//DATABASE CONNECTION ERROR HANDLING
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}
?>