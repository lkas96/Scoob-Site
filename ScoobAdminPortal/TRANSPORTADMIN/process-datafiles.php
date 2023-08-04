<?php
//SETTING TO ENSURE NO MEMORY LIMITS AND EXECUTION TIME LIMITS
ini_set('memory_limit', '-1');
ini_set('max_execution_time', 0);

//DATABASE CONNECTION
$servername = "scoob-database.c8k5fhmymkis.ap-southeast-1.rds.amazonaws.com";
$username = "admin";
$password = "admin123";
$dbname = "scoob";

//INITIALISE DATABASE CONNECTION
$conn = new mysqli($servername, $username, $password, $dbname);

//CHECK CONNECTION
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to insert CSV data into the database
function insertCSVData($conn, $table, $columns, $data) {
    $values = array();
    foreach ($data as $row) {
        $values[] = "('" . implode("','", $row) . "')";
    }

    // Join the values into a single string
    $values_str = implode(",", $values);

    // Save the data into the SQL database using ECB format
    $query = "INSERT INTO $table ($columns) VALUES $values_str";
    return $conn->query($query);
}

// Process and insert CSV file 1 (CLASSES)
$csv_file_1 = $_FILES['csv_file_1']['tmp_name'];
$data_1 = array_map('str_getcsv', file($csv_file_1));
$header_1 = array_shift($data_1);
$query1_success = insertCSVData($conn, 'bus', implode(', ', $header_1), $data_1);

// Process and insert CSV file 2 (TEACHERS)
$csv_file_2 = $_FILES['csv_file_2']['tmp_name'];
$data_2 = array_map('str_getcsv', file($csv_file_2));
$header_2 = array_shift($data_2);
$query2_success = insertCSVData($conn, 'drivers', implode(', ', $header_2), $data_2);

// Process and insert CSV file 3 (STUDENTS)
$csv_file_3 = $_FILES['csv_file_3']['tmp_name'];
$data_3 = array_map('str_getcsv', file($csv_file_3));
$header_3 = array_shift($data_3);
$query3_success = insertCSVData($conn, 'bus_drivers', implode(', ', $header_3), $data_3);

// Close the database connection
$conn->close();

// Return the response as JSON to the frontend
$response = array(
    'success' => ($query1_success && $query2_success && $query3_success),
    'message' => 'All data inserted successfully.',
);

echo json_encode($response);
?>


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
        console.log(response); // Add this line to inspect the response
        var data = JSON.parse(response);
        
        // Show the success message as a script popup (JavaScript alert)
        if (data.success) {
          alert(data.message);
          window.location.href = 'transport-home.php';
        } else {
          alert('Error inserting data.');
          window.location.href = 'transport-import.php';
        }
      },
      error: function() {
        alert('An error occurred.');
        window.location.href = 'transport-import.php';
      }
    });
  });
</script>
