<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "anggota";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    echo "Koneksi database gagal";
}
?>
