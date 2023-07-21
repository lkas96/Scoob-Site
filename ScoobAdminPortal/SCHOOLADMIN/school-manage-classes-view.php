<?php
include 'SchoolAdminController.php';
include '../LogoutController.php';
session_start();

//VERIFY IF SYSTEMADMIN SESSION TYPE
if ($_SESSION['type'] != "School Admin") {
  header("Location: ../login.php");
}

if (isset($_POST["logout"])) {
  $logout = new LogoutController();
  $logout->logout();
}
?>

<html>

<head>
  <title>School Admin</title>
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
    <a class="navbar-brand" href="school-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp School Admin - View Class</a>
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
      <button class="customButton" type="button" onclick="window.location.href='school-manage-classes.php'"> <span>Manage Classes</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='school-manage-teachers.php'"> <span>Manage Teachers</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='school-manage-students.php'"> <span>Manage Students</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='school-import.php'"> <span>Import Data</span></button><br><br>
      <form method="post">
        <button class="logoutButton" tpe="button" name="logout">Logout</button>
      </form>
    </div>

    <div class="rightPanel">
      <h1>Viewing Class Details</h1>
      <div class="data">
        <?php
        if (isset($_POST['class'])) {
          $class = $_POST['class'];
          $execute = ViewClass::viewClass($class);

          $result = NULL; //PLACEHOLDER
          $result2 = NULL; //PLACEHOLDER

          if ($execute === true) {
            $result = $_SESSION['viewClassSQLTable'];
            $result2 = $_SESSION['viewClassListSQLTable'];
          } else {
            echo "<script>alert('Error Retrieving Class Details.');</script>";
          }

          //PRINT TABLE ONE
          //CLASS-TEACHER-NUMBER-ACTIONS
          //PRINT TABLE HEADERS
          echo '<table class="table table-bordered table-sm" style="text-align: center">';
          echo '<thead class="thead-dark">';
          echo '<tr>';
          echo '<th scope="col">Class</th>';
          echo '<th scope="col">Teacher</th>';
          echo '<th scope="col">Number of Students</th>';
          echo '<th scope="col">Action</th>';
          echo '</tr>';
          echo '</thead>';

          while ($row = mysqli_fetch_assoc($result)) {
            echo '<tbody>';
            echo '<tr>';
            echo '<td>' . $row['class'] . "</td>";
            echo '<td>' . $row['teacher'] . "</td>";
            echo '<td>' . $row['number of students'] . "</td>";

            //BUTTON FORM TO SEND POST UEN TO NEXT PAGE
            echo '<td><form action="school-manage-classes-view.php" method="post">';
            echo '<input type="hidden" name="class" value="' . $row['class'] . '">';
            echo '<button class="view-button" type="submit">View</button>';
            echo '</form></td>';
            echo "</tr>";
            echo '</tr>';
            echo '</tbody>';
          }
          echo '</table>';


          //PRINT TABLE TWO
          //STUDENT LIST
          //PRINT TABLE HEADERS
          if ($result2 == NULL) {
            echo 'No Students in enrolled in this class.';
          } else {
            echo '<h1>Student List</h1>';
            echo '<table class="table table-bordered table-sm" style="text-align: center">';
            echo '<thead class="thead-dark">';
            echo '<tr>';
            echo '<th scope="col">S/N</th>';
            echo '<th scope="col">Student ID</th>';
            echo '<th scope="col">Name</th>';
            echo '</tr>';
            echo '</thead>';

            $rowNumber = 1;

            while ($row = mysqli_fetch_assoc($result2)) {
              echo '<tbody>';
              echo '<tr>';
              echo '<td>' . $rowNumber . "</td>";
              echo '<td>' . $row['studentid'] . "</td>";
              echo '<td>' . $row['name'] . "</td>";
              echo "</tr>";
              echo '</tbody>';
              $rowNumber++;
            }
            echo '</table>';
          }
        }
        ?>

      </div> <!-- End of Data -->
    </div> <!-- End of RightPanel -->
  </div> <!-- End of Main Container -->
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

  .approve-button {
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
    width: 100px;
  }

  .reject-button {
    background-color: #FF0000;
    color: white;
    padding: 6px 10px;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 0px;
    width: 100px;
  }

  .button-container {
    display: inline-block;
  }
</style>