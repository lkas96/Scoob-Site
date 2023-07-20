<?php
include('LoginController.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  //CHECK IF LOGIN BUTTON IS CLICKED
  if (isset($_POST['Login'])) {
    $type = $_POST['type'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $userlogin = new Login();
    $success = $userlogin->login($type, $email, $password);

    if ($type === "System Admin" && $success === true) {
      echo "<script>alert('Login Successful. Welcome ". $type.".'); window.location.href = 'systemadmin/manage-applications-home.php';</script>";
      exit();
    } else if ($type === "School Admin" && $success === true) {
      echo "<script>alert('Login Successful. Welcome ". $type.".'); window.location.href = 'schooladmin/school-home.php';</script>";
      exit();
    } else if ($type === "Transport Admin" && $success === true) {
      echo "<script>alert('Login Successful. Welcome ". $type.".'); window.location.href = 'transportadmin/transport-home.php';</script>";
      exit();
    } else {
      echo "<script>alert('Invalid login Credentials or Account Status Pending.');</script>";
    }
  }

}
?>

<html>
<head>
  <title>Scoob Web Portal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery-3.5.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>

<body>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="login.php">
      <img src="img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp Scoob Admin Portal
    </a>
    <a href="onboarding/onboard-home.php">Signup</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <!--Login Form-->
  <div class="container">
    <form method="post">
    &nbsp&nbsp&nbsp<label>Login as: </label>
      <select id="type" name="type" style="width:300px;" required>
        <option default hidden selected></option>
        <option value="System Admin">System Admin</option>
        <option value="School Admin">School Admin</option>
        <option value="Transport Admin">Transport Admin</option>
      </select><br>
        <!--<option value="TransportAdmin">Transport Admin</option>-->
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>Email: </label>
      <input id="email" name="email" type="text" maxlength="30" style="width:300px;"><br>
      &nbsp<label>Password: </label>
      <input id="password" name="password" type="password" style="width:300px;"><br><br>
      <input type="submit" id="submit" name="Login" value="Login" style="width:100px; height:30px;">
    </form>
  </div>
</body>
</html>





<style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #ffa404;
    }

    .container {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    form {
      text-align: center;
    }
  </style>