<?php
include("../CLASSES/User.php");


//FOR CREATING NEW USER PROFILE TYPES - Profile Class
class ACnewProfile{
  function newProfile($type){
    $creatingProfile = new Profile();
    $bool = $creatingProfile -> createType($type);

    if($bool == true){
      return true;
    } else {
      return false;
    }
  }
}

//SHOW ALL USER PROFILE TYPES - Profile Class
class ACshowAll{
  static function showAll(){
    $viewProfile = new Profile();
    $results = $viewProfile -> showType();
    return $results;
  }
}

//CREATING NEW USER ACCOUNT - Profile Class User Class
class ACnewAcc{
  static function showProActive(){
    $viewProfile = new Profile();
    $results = $viewProfile -> showActivePro();
    return $results;
  }

  static function newAcc($profile, $name, $username, $password){
    $creatingUser = new User();
    $bool = $creatingUser -> createAcc($profile, $name, $username, $password);

    if($bool == true){
      return true;
    } else {
      return false;
    }
  }
}

//UPDATE PASSWORD FOR ANY USER WITH USERNAME - User Class
class ACmyNewPass{
  function myNewPass($username, $newpassword){
    $editingAdminPw = new User();
    $bool = $editingAdminPw -> editMyNewPass($username, $newpassword);

    if($bool == true){
      return true;
    } else {
      return false;
    }
  }
}

//CHANGE CURRENT ADMIN PASSWORD - User Class
class ACnewPass{
  function newPass($username, $newpassword){
    $editingUser = new User();
    $bool = $editingUser -> editAccPw($username, $newpassword);

    if($bool == true){
      return true;
    } else {
      return false;
    }
  }  
}

//SUSPEND ACCOUNT BY USERNAME - User Class
class ACnewStat{
  function newStat($username){
    $statusUser = new User();
    $bool = $statusUser -> susAcc($username);

    if($bool == true){
      return true;
    } else {
      return false;
    }
  }
}



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