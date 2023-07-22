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
    <a class="navbar-brand" href="school-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp School Admin - Add Student</a>
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
      <button class="customButton" type="button" onclick="window.location.href='school-import.php'">          <span>Import Data</span></button><br><br>
      <form method="post">
	      <button class="logoutButton" tpe="button" name="logout">Logout</button>
	    </form>
    </div>

    <div class="rightPanel">
      <div class="header">
        <h1 style="display: inline;">Add A Student</h1> <br><br>
      </div>

      <div class="add-student-form">
        <form method="post">
          <label>Student's First Name: </label>
          <input type="text" name="studentFirstName" placeholder="Enter new First Name" required><br><br>
          <label>Student's Last Name: </label>
          <input type="text" name="studentLastName" placeholder="Enter new Last Name" required><br><br>
          <label>Student ID: </label>
          <input type="text" name="studentID" placeholder="Enter new Student's ID" required><br><br>
          <label>Parent ID: </label>
          <input type="text" name="parentID" placeholder="Enter Parent ID" required><br><br>

          <input type="submit" name="submit" value="Add Student">
        </form>
        <?php
          if (isset($_POST["submit"]))
          {      
            $fname = $_POST["studentFirstName"];
            $lname = $_POST["studentLastName"];       
            $studentid = $_POST["studentID"];
            $parentid = $_POST["parentID"];
           
            $addStudent = new AddStudent();
            $addStudent->addStudent($fname, $lname, $studentid, $parentid);

            if ($addStudent == true) {
              echo "<script>alert('Student successfully added'); window.location.href = 'school-manage-students.php';</script>";
            } else {
              echo "<script>alert('Student already exists'); window.location.href = 'school-manage-students-add.php';</script>";
            }
          }
        ?>
      </div> <!-- End of add-class-form -->
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