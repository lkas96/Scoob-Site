<?php
include 'SchoolAdminController.php';
include '../LogoutController.php';
session_start();

if (isset($_POST["logout"]))
{
  new LogoutController();
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
    <a class="navbar-brand" href="school-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp School Admin - Manage Classes</a>
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
      <button class="customButton" type="button" onclick="window.location.href='school-manage-classes.php'"> <span>Manage Classes</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='school-manage-teachers.php'"> <span>Manage Teachers</span></button><br><br>
      <button class="customButton" type="button" onclick="window.location.href='school-manage-students.php'"> <span>Manage Students</span></button><br><br>
      <form method="post">
	      <button class="logoutButton" tpe="button" name="logout">Logout</button>
	    </form>
    </div>

    <div class="rightPanel">
      <div class="header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h1 style="margin: 0;">View Class Details</h1>
      </div>

      <div class="data">
      <table>
        <tr>
          <th>Class</th>
          <th>Teacher</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>A1</td>
          <td>Ms. Ham</td>
          <td><a href="school-manage-classes-detailedview.php"><button class="edit">Edit</button></a></td>
        </tr>
      </table>
      <br>
      <!-- LIST OF STUDENTS -->
      <table>
        <tr>
          <th>Row Number</th>
          <th>Student Name</th>
        </tr>
        <?php
          for ($i = 1; $i <= 50; $i++) {
            echo "<tr><td>" . $i . "</td><td>" . generateRandomName() . "</td></tr>";
          }

          function generateRandomName() {
            $firstNames = array("Ethan", "Olivia", "Liam", "Emma", "Noah", "Ava", "Sophia", "Lucas", "Isabella", "Benjamin", "Mia", "Alexander", "Charlotte", "James", "Amelia", "Henry", "Harper", "Daniel");
            $lastNames = array("Thompson", "Wilson", "Johnson", "Davis", "Martinez", "Taylor", "Anderson", "Brown", "Thomas", "Jackson", "White", "Harris", "Lee", "Clark", "Lewis", "Hall", "Young", "Rodriguez");

            $randomFirstName = $firstNames[array_rand($firstNames)];
            $randomLastName = $lastNames[array_rand($lastNames)];

            return $randomFirstName . " " . $randomLastName;
          }
        ?>
      </table>

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