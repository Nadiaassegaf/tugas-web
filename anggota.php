<?php
require_once __DIR__ . "/connection.php";
$data = mysqli_query($conn, "SELECT * FROM anggota");
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anggota - IF.Algoritma</title>
    <link rel="stylesheet" href="css/style.css">
    </head>
<body>
    <header class="main-header">
        <div class="container">
            <div class="logo-container">
                <img src="image/logo.jpg" alt="Logo IF.Algoritma" class="header-logo">
                <span class="site-title">IF.Algoritma</span>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="profil.html">Profil</a></li>
                    <li><a href="struktur.html">Struktur</a></li>
                    <li><a href="anggota.html" class="active">Anggota</a></li>
                    <li><a href="galeri.html">Galeri</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="daftar-anggota">
            <div class="container">
                <h2>Daftar Anggota Kelas</h2>

                <div class="anggota-grid">
                    
                    <div class="anggota-card">
                        <img src="image/nanda.jpg" alt="Foto Anggota 1" class="anggota-foto">
                        <h3>Nanda Maulana</h3>
                        <h4>5520124001</h4>
                        <p class="role">Anggota Biasa</p>
                        <blockquote>"08 berapa kak? hehe"</blockquote>
                    </div>

                    <a href="tambah.php">+ Tambah Anggota</a>
                    <br><br>

                <div class="anggota-tambah ">
                    <?php while ($row = mysqli_fetch_assoc($data)) : ?>
                <div class="anggota-card">
                    <img src="uploads/<?= $row['foto'] ?>" width="120">
                    <h3><?= $row['nama'] ?></h3>
                    <h4><?= $row['npm'] ?></h4>
                    <blockquote>"<?= $row['quotes'] ?>"</blockquote>

                    <a href="edit.php?id=<?= $row['id'] ?>">Edit</a> |
                    <a href="hapus.php?id=<?= $row['id'] ?>"
                onclick="return confirm('Hapus data?')">Hapus</a>
                </div>
            <?php endwhile; ?>
        </div>
</body>
</html>
