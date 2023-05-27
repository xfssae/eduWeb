
<?php
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

// Process registration form submission
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $repeatPassword = $_POST["repeat_password"];

    // Validate form inputs
    if ($password !== $repeatPassword) {
        echo "Passwords do not match";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Prepare and bind statement
        $stmt = $conn->prepare("INSERT INTO signup (name, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $password);

        // Execute statement
        if ($stmt->execute()) {
             echo"
        <script>
        alert('Registration successful');
        window.location.href='index.html';
        </script>

    ";
            // Continue with further actions or redirect to a different page
        } else {
            echo "Error during registration: " . $stmt->error;

        }

        // Close statement
        $stmt->close();
    }
}

// Close connection
$conn->close();
?>
