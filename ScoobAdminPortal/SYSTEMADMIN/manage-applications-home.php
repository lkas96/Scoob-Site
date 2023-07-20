<?php
include 'SystemAdminController.php';
include '../LogoutController.php';
session_start();

//VERIFY IF SYSTEMADMIN SESSION TYPE
if ($_SESSION['type'] != "System Admin") {
  header("Location: ../login.php");
}

if (isset($_POST["logout"])) {
  $logout = new LogoutController();
  $logout->logout();
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a style="color:white;" id="current-time"></a></li>
      </ul>
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
      <div class="header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h1 style="margin: 0;">Viewing All Applications</h1>
        <div style="display: flex; align-items: center;">
          <form action="manage-applications-view-search.php" method="post">
            <input type="text" name="searchQuery" placeholder="Search Applications" style="margin-right: 5px;" required>
            <input type="submit" value="search">
          </form>
        </div>
      </div>

      <div class="data">

        <?php
        $aaa = ViewPendingApplications::viewPendingApplications();
        $result = NULL; //PLACEHOLDER

        if (isset($_SESSION['viewPendinglApplicationsSQLTable'])) {
          $result = $_SESSION['viewPendinglApplicationsSQLTable'];
        }

        if ($result == NULL) {
          echo "No pending applications at the moment.";
        } else {

          //PRINT TABLE HEADERS
          echo '<table class="table table-bordered table-sm" style="text-align: center">';
          echo '<thead class="thead-dark">';
          echo '<tr>';
          echo '<th scope="col">Type</th>';
          echo '<th scope="col">Organisation</th>';
          echo '<th scope="col">UEN</th>';
          echo '<th scope="col">Applied On</th>';
          echo '<th scope="col">Action</th>';
          echo '</tr>';
          echo '</thead>';

          $rowNumber = 1;

          while ($row = mysqli_fetch_assoc($result)) {
            echo '<tbody>';
            echo '<tr>';
            echo '<td>' . $row['type'] . "</td>";
            echo '<td>' . $row['name'] . "</td>";
            echo '<td>' . $row['uen'] . "</td>";
            echo '<td>' . $row['timestamp'] . "</td>";

            //BUTTON FORM TO SEND POST UEN TO NEXT PAGE
            echo '<td><form action="manage-applications-view-' . $row['type'] . '.php" method="post">';
            echo '<input type="hidden" name="uen" value="' . $row['uen'] . '">';
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

      </div>
    </div> <!-- End of RightPanel -->

  </div> <!-- End of Container -->
</body>

</html>



<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
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
    margin-bottom: 0px;
  }

  form {
    margin-bottom: 0;
  }
</style>