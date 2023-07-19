<?php
include 'SystemAdminController.php';
include '../LogoutController.php';
session_start();

if (isset($_POST["logout"]))
{
  new LogoutController();
}
?>

<html>
<head>
  <title>System Admin</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/custom.css">
  <script src="../js/jquery-3.5.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/live-clock.js"></script>

  <!-- Logout Function -->
  <?php
    if (isset($_POST["logout"]))
    {
      new LogoutController();
    }
  ?>

</head>

<body>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="manage-applications-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp Scoob System Admin</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--Navigation Shortcuts-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto"><li class="nav-item"><a style="color:white;" id="current-time"></a></li></ul>
    </div>
	</nav>

  <!-- Main Container -->
  <div class="bodyContainer">
    <div class="leftPanel">
      <button class="customButton" type="button" onclick="window.location.href='manage-applications-home.php'"> <span>Manage Applications</span></button><br><br>
      <form method="post">
	      <button class="logoutButton" tpe="button" name="logout">Logout</button>
	    </form>
    </div>
    <div class="rightPanel">   
      <div class="data">
        <?php
          if(isset($_POST['uen'])){
            $uen = $_POST['uen'];
            $execute = ViewSchoolApplication::viewSchoolApplications($uen);

            if ($execute === true){
              //GET RESULTS FROM SESSION VARIABLE
              $result = $_SESSION['viewSchoolApplicationsSQLTable'];
            } else {
              echo "<script>alert('Error Retrieving Data. Invalid UEN.');</script>";
            }
          }
        ?>]
      </div> <!-- End of Data -->
    </div> <!-- End of RightPanel -->
    
  </div> <!-- End of Container -->
</body>
</html>


<style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        
        .view-button {
            background-color: #4CAF50;
            color: white;
            padding: 6px 10px;
            border: none;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 12px;
            cursor: pointer;
        }
    </style>