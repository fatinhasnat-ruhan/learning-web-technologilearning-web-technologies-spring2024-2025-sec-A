<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (empty($name) || empty($email) || empty($password)) 
    {
        echo "All fields are required.<br>";
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        echo "Invalid email format.<br>";
        exit();
    }

    if (strlen($password) < 6) 
    {
        echo "Password must be at least 6 characters long.<br>";
        exit();
    }

    echo "Registration Successful!<br>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
} 
else 
{
    echo "Invalid request method.";
}
?>
