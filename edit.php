<?php
require_once __DIR__ . "/connection.php";

$id = $_GET['id'];
$data = mysqli_query($conn, "SELECT * FROM anggota WHERE id=$id");
$row = mysqli_fetch_assoc($data);

if (isset($_POST['update'])) {
    $nama   = $_POST['nama'];
    $npm    = $_POST['npm'];
    $quotes = $_POST['quotes'];

    if (!empty($_FILES['foto']['name'])) {
        $foto = $_FILES['foto']['name'];
        $tmp  = $_FILES['foto']['tmp_name'];
        move_uploaded_file($tmp, "uploads/" . $foto);
    } else {
        $foto = $row['foto'];
    }

    mysqli_query($conn,
        "UPDATE anggota SET
         nama='$nama', npm='$npm', quotes='$quotes', foto='$foto'
         WHERE id=$id"
    );

    header("Location: anggota.php");
}
?>

<!DOCTYPE html>
<html>
<body>

<h2>Edit Anggota</h2>

<form method="POST" enctype="multipart/form-data">
    <input type="text" name="nama" value="<?= $row['nama'] ?>"><br><br>
    <input type="text" name="npm" value="<?= $row['npm'] ?>"><br><br>
    <textarea name="quotes"><?= $row['quotes'] ?></textarea><br><br>
    <input type="file" name="foto"><br><br>

    <button type="submit" name="update">Update</button>
</form>

</body>
</html>
