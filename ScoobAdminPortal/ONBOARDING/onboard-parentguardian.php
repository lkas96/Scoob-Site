<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  //IF HIT SUBMIT
  //SUCCESSFULLY CREATED POPUP.
  
  echo "<script type='text/javascript'>alert('Onboarding as a parent/guardian successful!'); window.location.href = 'onboard-home.php';</script>";
}
?>

<html>
<head>
  <title>Scoob Onboarding Signup</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <script src="../js/jquery-3.5.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
</head>

<body>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="onboard-home.php">
      <img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp Scoob Onboarding Signup
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <!--REGISTER FORM-->
  <div class="container">

  <table>
    <form method="post">
      <tr>
        <td style="text-align: center;"><h3>Parent/Guardian Details</h3></td>
      </tr>

      <tr>
        <td><input id="name" name="name" type="text" maxlength="30" style="width:400px;" placeholder="First Name" ></td>
      </tr>

      <tr>
        <td><input id="name" name="name" type="text" maxlength="30" style="width:400px;" placeholder="Last Name" ></td>
      </tr>

      <tr>
        <td><input id="id" name="id" type="text" maxlength="30" style="width:400px;" placeholder="ID" ></td>
      </tr>

      <tr><td>&nbsp</td></tr>
      <tr><td>&nbsp</td></tr>

      <tr>
        <td style="text-align: center;"><h3>Account Creation</h3></td>
      </tr>

      <tr>
        <td><input id="email" name="email" type="text" maxlength="30" style="width:400px;" placeholder="Email" ></td>
      </tr>

      <tr>
        <td><input id="password" name="password" type="password" style="width:400px;" placeholder="Password" ><br></td>
      </tr>

      <tr><td>&nbsp</td></tr>
      <tr><td>&nbsp</td></tr>

      <tr>
        <td colspan="2" style="text-align: center;"><input type="submit" id="submit" name="Submit" value="Submit" style="width:100px; height:30px;"></td>
      </tr>
      
    </form>
  </table>

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