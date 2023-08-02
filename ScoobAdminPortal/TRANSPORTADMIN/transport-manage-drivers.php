<?php
include 'TransportAdminController.php';
include '../LogoutController.php';
session_start();

//VERIFY IF SYSTEMADMIN SESSION TYPE
if ($_SESSION['type'] != "Transport Admin") {
  header("Location: ../login.php");
}

if (isset($_POST["logout"])) {
  $logout = new LogoutController();
  $logout->logout();
}
?>

<html>

<head>
  <title>Transport Admin</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/custom.css">
  <script src="../js/jquery-3.5.1.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/live-clock.js"></script>
</head>

<body>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="transport-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp Transport Admin - Managing Drivers</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--Navigation Shortcuts-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a style="color:white;" id="current-time"></a></li>
      </ul>
    </div>
  </nav>

  <!-- Main Container -->
  <div class="bodyContainer">
    <div class="leftPanel">
      <button class="customButton" type="button" onclick="window.location.href='transport-manage-buses.php'"> <span>Manage Buses</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='transport-manage-drivers.php'"> <span>Manage Drivers</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='transport-import.php'"> <span>Import Data</span></button><br><br>
      <form method="post">
        <button class="logoutButton" tpe="button" name="logout">Logout</button>
      </form>
    </div>

    <div class="rightPanel">
      <?php
      $aaa = viewAllDrivers::viewAllDrivers();
      $result = NULL; //PLACEHOLDER

      if (isset($_SESSION['viewAllDriversSQLTable'])) {
        $result = $_SESSION['viewAllDriversSQLTable'];
      }

      if ($result == NULL) {
        echo 'No drivers found.';
      } else {
        //PRINT TABLE HEADERS
        echo '<table class="table table-bordered table-sm" style="text-align: center">';
        echo '<thead class="thead-dark">';
        echo '<tr>';
        echo '<th scope="col">S/N</th>';
        echo '<th scope="col">Driver Name</th>';
        echo '<th scope="col">Assigned Bus</th>';
        echo '<th scope="col">Action</th>';
        echo '</tr>';
        echo '</thead>';

        $rowNumber = 1;

        while ($row = mysqli_fetch_assoc($result)) {
          echo '<tbody>';
          echo '<tr>';
          echo '<td>' . $rowNumber . "</td>";
          echo '<td>' . $row['drivername'] . "</td>";
          echo '<td>' . $row['busid'] . "</td>";

          //BUTTON FORM TO SEND POST UEN TO NEXT PAGE
          echo '<td><form action="transport-manage-drivers-view.php" method="post">';
          echo '<input type="hidden" name="class" value="' . $row['driverid'] . '">';
          echo '<button class="view-button" type="submit">View</button>';
          echo '</form></td>';
          echo "</tr>";
          echo '</tr>';
          echo '</tbody>';
          $rowNumber++;
        }
        echo '</table>';
      }
      ?>
    </div> <!-- End of RightPanel -->

  </div> <!-- End of Container -->
</body>

</html>