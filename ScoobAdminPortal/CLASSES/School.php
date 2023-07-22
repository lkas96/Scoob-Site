<?php

class School
{

  //VARIABLES
  private $conn = null;

  //INITIALISE DATABASE CONNECTION
  function __construct()
  {
    $servername = "scoob-database.c8k5fhmymkis.ap-southeast-1.rds.amazonaws.com";
    $username = "admin";
    $password = "admin123";
    $dbname = "scoob";

    // Create connection
    $mysqli = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (mysqli_connect_errno()) {
      die("Connection failed: " . mysqli_connect_error());
    }
    $this->conn = $mysqli;
  }

  //FUNCTION TO VIEW ALL CLASSES
  public function viewAllClasses()
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT class.class, CONCAT(teacher.fname, ' ', teacher.lname) AS teacher, COUNT(student.uen) AS 'number of students'
            FROM class
            LEFT JOIN teacher ON class.class = teacher.class
            LEFT JOIN student ON class.class = student.class
            WHERE class.uen = '$uen'
            GROUP BY class.class;
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewAllClassesSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }


  //FUNCTION TO VIEW SPECIFIC CLASS DETAILS
  public function viewClass($class)
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT class.class, CONCAT(teacher.fname, ' ', teacher.lname) AS teacher, COUNT(student.uen) AS 'number of students'
            FROM class
            LEFT JOIN teacher ON class.class = teacher.class
            LEFT JOIN student ON class.class = student.class
            WHERE class.uen ='$uen' AND class.class = '$class'
            GROUP BY class.class;
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewClassSQLTable'] = $result;

      //RUN QUERY 2
      $sql2 = "SELECT student.studentid, CONCAT(student.fname, ' ', student.lname) AS name
              FROM student
              WHERE student.class = '$class' AND student.uen = '$uen';
      ";

      $result2 = $this->conn->query($sql2);

      if ($result2->num_rows > 0) {
        //SAVE THE TABLE TO SESSION
        $_SESSION['viewClassListSQLTable'] = $result2;
        return true;
      } elseif ($result2->num_rows == 0) {
        $_SESSION['viewClassListSQLTable'] = NULL;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  //FUNCTION TO ADD A CLASS
  public function addClass($class)
  {
    $uen = $_SESSION['uen'];

    $sql = "INSERT INTO class (uen, class) VALUES ('$uen', '$class');
    ";

    $result = $this->conn->query($sql);

    if ($result === true) {
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO SEARCH A CLASS
  public function searchClass($searchQuery)
  {
    $uen = $_SESSION['uen'];

    $sql = "SELECT class.class, CONCAT(teacher.fname, ' ', teacher.lname) AS teacher, COUNT(student.uen) AS 'number of students'
            FROM class
            LEFT JOIN teacher ON class.class = teacher.class
            LEFT JOIN student ON class.class = student.class
            WHERE class.uen ='$uen' AND class.class LIKE '%$searchQuery%' OR class.uen ='$uen' AND teacher.fname LIKE '%$searchQuery%' OR class.uen ='$uen' AND teacher.lname LIKE '%$searchQuery%'
            GROUP BY class.class;
    ";

    $result = $this->conn->query($sql);

    if ($result->num_rows > 0) {
      //SAVE THE TABLE TO SESSION
      $_SESSION['viewSearchClassesSQLTable'] = $result;
      return true;
    } else {
      return false;
    }
  }

  //FUNCTION TO DELETE A CLASS
  public function deleteClass($class)
  {
    $uen = $_SESSION['uen'];

    $sql = "DELETE FROM class WHERE class = '$class' AND uen = '$uen';
    ";
    $result = $this->conn->query($sql);

    if ($result === true) {
      return true;
    } else {
      return false;
    }
  }

    //FUNCTION TO ADD A STUDENT
    public function addStudent($fname, $lname, $studentid, $parentid)
    {
      $uen = $_SESSION['uen'];
  
      $sql = "INSERT INTO student (fname, lname, studentid, parentid) VALUES ('$fname', '$lname', '$studentid', '$parentid');
      ";
  
      $result = $this->conn->query($sql);
  
      if ($result === true) {
        return true;
      } else {
        return false;
      }
    }
}
