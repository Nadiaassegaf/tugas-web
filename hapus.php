<?php
require_once __DIR__ . "/connection.php";

$id = $_GET['id'];
mysqli_query($conn, "DELETE FROM anggota WHERE id=$id");

header("Location: anggota.php");
?>
