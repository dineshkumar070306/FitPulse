<?php
// php/auth/login.php
session_start();
require_once '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        die(json_encode(["status" => "error", "message" => "Please fill all fields."]));
    }

    try {
        $stmt = $pdo->prepare("SELECT id, full_name, password FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        
        if ($stmt->rowCount() == 1) {
            $user = $stmt->fetch();
            
            if (password_verify($password, $user['password'])) {
                // Password is correct, start session
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['full_name'] = $user['full_name'];
                
                echo json_encode(["status" => "success", "message" => "Login successful", "redirect" => "../../dashboard.html"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid email or password."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid email or password."]);
        }
    } catch(PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Database error."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
