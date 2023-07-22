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

  <style>
    th {
      cursor: pointer;
    }
    
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

  <script>
    $(document).ready(function() {
      function sortTable(column) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("studentTable");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }

      $('th').click(function() {
        var columnIndex = $(this).index();
        sortTable(columnIndex);
      });
    });
  </script>
</head>

<body>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="school-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp School Admin - Manage Students</a>
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

    <div class="header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h1 style="margin: 0;">Viewing All Students</h1>
          <div style="display: flex; align-items: center;">
          <a href="school-manage-students-add.php" style="margin-right: 10px;"><button>Add Student</button></a>
          <form method="post"  style="display: flex; align-items: center;margin-bottom: 0px;">
            <input type="text" name="searchQuery" placeholder="Search Student" style="margin-right: 5px;">
            <input type="submit" value="Search">
          </form>
        </div>
      </div>

    <table id="studentTable">
    <tr>
    <th>Student Name</th>
    <th>Class</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>A1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>B1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Michael Johnson</td>
    <td>B2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sarah Thompson</td>
    <td>C3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Emily Davis</td>
    <td>D1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>David Williams</td>
    <td>E1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Samantha Wilson</td>
    <td>E2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Christopher Brown</td>
    <td>F1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Olivia Davis</td>
    <td>G1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Adam Wilson</td>
    <td>A2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sophia Thompson</td>
    <td>B3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Ethan Davis</td>
    <td>C1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Emma Johnson</td>
    <td>D2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Joshua Anderson</td>
    <td>E3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Ava Davis</td>
    <td>F2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Mason Brown</td>
    <td>G3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Charlotte Wilson</td>
    <td>H2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sebastian Thompson</td>
    <td>I3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Madison Davis</td>
    <td>A3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Aiden Johnson</td>
    <td>B2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Harper Anderson</td>
    <td>C3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Daniel Davis</td>
    <td>D1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Evelyn Thompson</td>
    <td>E2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Logan Johnson</td>
    <td>F3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Grace Wilson</td>
    <td>G1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Lucas Brown</td>
    <td>H3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sofia Davis</td>
    <td>I2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Carter Thompson</td>
    <td>A1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Avery Johnson</td>
    <td>B3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Henry Anderson</td>
    <td>C1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Scarlett Davis</td>
    <td>D3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Owen Wilson</td>
    <td>E1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Aria Thompson</td>
    <td>F2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Wyatt Johnson</td>
    <td>G3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Chloe Anderson</td>
    <td>H1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Julian Davis</td>
    <td>I3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Leah Johnson</td>
    <td>A2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Samuel Wilson</td>
    <td>B1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Madelyn Thompson</td>
    <td>C2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Joseph Davis</td>
    <td>D1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Ella Johnson</td>
    <td>E2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Levi Brown</td>
    <td>F1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Victoria Davis</td>
    <td>G2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Isaac Thompson</td>
    <td>H2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Grace Johnson</td>
    <td>I1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Anthony Wilson</td>
    <td>A3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Stella Davis</td>
    <td>B2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Grayson Anderson</td>
    <td>C3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Christopher Davis</td>
    <td>D2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Penelope Thompson</td>
    <td>E3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Leo Johnson</td>
    <td>F2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Victoria Anderson</td>
    <td>G3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Jack Davis</td>
    <td>H2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Bella Johnson</td>
    <td>I3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Henry Wilson</td>
    <td>A1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Lily Thompson</td>
    <td>B3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Jonathan Davis</td>
    <td>C1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Eleanor Johnson</td>
    <td>D3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Dylan Anderson</td>
    <td>E1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sophie Davis</td>
    <td>F2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Julian Thompson</td>
    <td>G3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Elizabeth Anderson</td>
    <td>H1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Christopher Davis</td>
    <td>I3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Aria Johnson</td>
    <td>A2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Liam Wilson</td>
    <td>B1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Abigail Thompson</td>
    <td>C2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Lucas Davis</td>
    <td>D1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Sofia Johnson</td>
    <td>E2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Benjamin Brown</td>
    <td>F1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Emily Davis</td>
    <td>G2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Andrew Thompson</td>
    <td>H2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Avery Johnson</td>
    <td>I1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Oliver Wilson</td>
    <td>A3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Scarlett Davis</td>
    <td>B2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Gabriel Anderson</td>
    <td>C3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Ella Davis</td>
    <td>D2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>David Thompson</td>
    <td>E3</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Matthew Anderson</td>
    <td>G2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Andrew Thompson</td>
    <td>H1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Isabella White</td>
    <td>I1</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
  <tr>
    <td>Nathan Johnson</td>
    <td>I2</td>
    <td><a href="school-manage-classes-detailedview.php"><button class="view-button">View More</button></a> <a><button class="view-button">Update</button></a> <a><button class="view-button">Delete</button></a> </td>
  </tr>
</table>
    </div> <!-- End of RightPanel -->
    
  </div> <!-- End of Container -->
</body>
</html>
