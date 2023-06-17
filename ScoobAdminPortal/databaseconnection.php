<?php

class User{
  private $username;
  private $password;
  private $profile;
  private $status;
	private $conn = NULL;
  
  function __construct()
  {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "SCOOB";

		$this->conn = new mysqli($servername, $username, $password, $dbname);

  }
  public function getAcc($username, $password)
  {
		$query = "SELECT * FROM user_account WHERE username = '$username' AND password = '$password'";
    
		$result = $this->conn->query($query);

		if (mysqli_num_rows($result) == 0){
			return false;
		}
    $row = $result->fetch_assoc();

    $this->username = $row["username"];
    $this->password = $row["password"];
    $this->profile = $row["profile_name"];
    $this->status = $row["account_status"];


    return true;
  }

  public function getProfile()
  {
    return $this->profile;
  }
  public function getStatus()
  {
		return $this->status;
	}
}

?>