<?php

class User{

  //VARIBLES
  private $type;
  private $email;
  private $username;
  private $password;
  private $name;
  private $uen;
	private $conn = NULL;
  
  //LAUNCH DATABASE CONNECTION
  function __construct()
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "SCOOB";

		$this->conn = new mysqli($servername, $username, $password, $dbname);
  }

  //FUNCTION TO LOGIN
  public function login($email, $password)
  {
		$query = "
      SELECT login, password, uen, type
      FROM 
      (
      SELECT systemadminID as login, password, 'SystemAdmin' AS uen, 'SystemAdmin' AS type FROM systemadmins
      UNION
      SELECT email as login, password, uen, 'SchoolAdmin' AS type FROM schooladmin
      UNION
      SELECT email as login, password, uen, 'TransportAdmin' AS type FROM transportadmin
      )
      AS combined_union
      WHERE login = '$email' AND password = '$password';
    ";
    
		$result = $this->conn->query($query);

		if (mysqli_num_rows($result) == 0){
			return false;
		}
    $row = $result->fetch_assoc();

    //SET USER DETAILS THAT IS LOGGED IN
    $this->email  = $row["login"];
    $this->username = $row["login"];
    $this->password = $row["password"];
    $this->uen   = $row["uen"];
    $this->type  = $row["type"];

    $_SESSION['current_user'] = $row["login"];

    return true;
  }

  //FUNCTION TO GET THE TYPE OF USER THAT IS LOGGED IN
  public function getType()
  {
    return $this->type;
  }

}
?>