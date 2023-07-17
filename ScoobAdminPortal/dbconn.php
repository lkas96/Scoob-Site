<?php
$servername = "scoob-db1.czjyxcigkdil.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "admin123";
$dbname = "scoob";

// Create connection
$mysqli = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}
?>