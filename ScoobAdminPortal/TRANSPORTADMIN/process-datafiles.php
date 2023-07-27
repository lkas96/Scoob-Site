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
$query1_success = insertCSVData($conn, 'class', implode(', ', $header_1), $data_1);

// Process and insert CSV file 2 (TEACHERS)
$csv_file_2 = $_FILES['csv_file_2']['tmp_name'];
$data_2 = array_map('str_getcsv', file($csv_file_2));
$header_2 = array_shift($data_2);
$query2_success = insertCSVData($conn, 'teacher', implode(', ', $header_2), $data_2);

// Process and insert CSV file 3 (STUDENTS)
$csv_file_3 = $_FILES['csv_file_3']['tmp_name'];
$data_3 = array_map('str_getcsv', file($csv_file_3));
$header_3 = array_shift($data_3);
$query3_success = insertCSVData($conn, 'student', implode(', ', $header_3), $data_3);

// Close the database connection
$conn->close();

// Return the response as JSON to the frontend
$response = array(
    'success' => ($query1_success && $query2_success && $query3_success),
    'message' => 'All data inserted successfully.',
);

echo json_encode($response);
?>
