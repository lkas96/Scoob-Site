<?php
//Placeholder error message
$errorMessage = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the user has selected an option
    if (isset($_POST["dropdown"]) === 'hidden' || empty($_POST["dropdown"])) {
      $errorMessage = "Please select an option.";

    } else {
        $selectedOption = $_POST['dropdown'];

        // Perform the redirection based on the selected option
        if ($selectedOption === 'school') {
            header('Location: onboard-school.php');
            exit();
        } elseif ($selectedOption === 'transport') {
            header('Location: onboard-transport.php');
            exit();
        } elseif ($selectedOption === 'parentguardian') {
          header('Location: onboard-parentguardian.php');
          exit();
      }
    }
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
    <form method="post">

      <h3>Onboarding As</h3>
      <select name="dropdown" id="dropdown">
          <option selected hidden disabled>Select</option>
          <option value="school">School</option>
          <option value="transport">Transport Services</option>
          <option value="parentguardian">Parent/Guardian</option>
      </select>
      
      <input type="submit" id="next" name="next" value="Next" style="width:100px; height:30px;"></td>
    
      <p id="error-message" style="color: red;"><?php echo $errorMessage; ?></p>
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