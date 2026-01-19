<?php
require_once __DIR__ . "/connection.php";

if (isset($_POST['simpan'])) {
    $nama   = $_POST['nama'];
    $npm    = $_POST['npm'];
    $quotes = $_POST['quotes'];

    $foto = $_FILES['foto']['name'];
    $tmp  = $_FILES['foto']['tmp_name'];

    move_uploaded_file($tmp, "uploads/" . $foto);

    mysqli_query($conn,
        "INSERT INTO anggota (nama, npm, quotes, foto)
         VALUES ('$nama', '$npm', '$quotes', '$foto')"
    );

    header("Location: anggota.php");
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Tambah Anggota</title>
</head>
<body>

<h2>Tambah Anggota</h2>

<form method="POST" enctype="multipart/form-data">
    <input type="text" name="nama" placeholder="Nama" required><br><br>
    <input type="text" name="npm" placeholder="NPM" required><br><br>
    <textarea name="quotes" placeholder="Quotes" required></textarea><br><br>
    <input type="file" name="foto" required><br><br>

    <button type="submit" name="simpan">Simpan</button>
    <a href="anggota.php">Kembali</a>
</form>

</body>
</html>
