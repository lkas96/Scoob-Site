<?php

class LogoutController{
  function __construct(){
    session_unset();
    session_destroy();
    header("Location: ../login.php");
  }
}

?>