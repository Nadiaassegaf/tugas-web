<?php
session_start();

if (isset($_POST['login'])) {
    // sementara tanpa database
    $_SESSION['login'] = true;

    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Login - IF.Algoritma</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="auth-page">

    <div class="auth-box">
        <h2>Login</h2>
        <form method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" name="login">Login</button>
        </form>
        <p>Belum punya akun? <a href="register.php">Daftar</a></p>
    </div>

</body>
</html>
