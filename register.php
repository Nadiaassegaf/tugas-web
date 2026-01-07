<?php
session_start();

if (isset($_POST['register'])) {
    // sementara belum pakai database
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Register - IF.Algoritma</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="auth-page">

    <div class="auth-box">
        <h2>Register</h2>
        <form method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" name="register">Register</button>
        </form>
        <p>Sudah punya akun? <a href="login.php">Login</a></p>
    </div>

</body>
</html>
