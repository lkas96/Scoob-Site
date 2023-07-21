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
    <a class="navbar-brand" href="school-home.php"><img src="../img/scoob-orange.svg" height="30px" alt="Toggle Navigation">&nbsp&nbsp School Admin - Import Data</a>
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
      <div class="data">
        <form action="process-datafiles.php" method="post" enctype="multipart/form-data">
          <h1>Bulk Import School Data</h1>
          <br>
          <b>Classes Data File</b><br>
          <label for="csv_file_1">CSV File 1:</label>
          <input type="file" name="csv_file_1" accept=".csv" required><br><br>

          <b>Teachers Data File</b><br>
          <label for="csv_file_2">CSV File 2:</label>
          <input type="file" name="csv_file_2" accept=".csv" required><br><br>

          <b>Students Data File</b><br>
          <label for="csv_file_3">CSV File 3:</label>
          <input type="file" name="csv_file_3" accept=".csv" required><br><br>
          <br><br><br>
          <input type="submit" value="Upload Data Files" name="submit">
        </form>
      </div>
    </div> <!-- End of RightPanel -->
  </div> <!-- End of Container -->
</body>

</html>

<script>
  // Handle form submission with AJAX
  $('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'process-datafiles.php',
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function(response) {
        // Parse JSON response
        var data = JSON.parse(response);
        // Show the success message as a script popup (JavaScript alert)
        if (data.success) {
          alert(data.message);
          window.location.href = 'school-home.php';
        } else {
          alert('Error inserting data.');
          window.location.href = 'school-import.php';
        }
      },
      error: function() {
        alert('An error occurred.');
        window.location.href = 'school-import.php';
      }
    });
  });
</script>