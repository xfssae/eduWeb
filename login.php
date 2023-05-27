<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eduweb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Perform SQL query to fetch data
$sql = "SELECT * FROM login";
$result = $conn->query($sql);

// Access the data using a loop
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // $userId = $row["id"];
        $email = $row["email"];
        $name = $row["password"];
        // ... access other columns as needed
        
               echo"
        <script>
        alert('Login successfully');
        window.location.href='index.html';
        </script>

    ";
    }
} else {
    echo "Invalid Email And Password";
}

// Close connection
$conn->close();
?>

