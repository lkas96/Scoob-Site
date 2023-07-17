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

?>