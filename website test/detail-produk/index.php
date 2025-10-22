<?php 
    session_start(); 

    require '../sign-in/konek.php';
    


   $stmt = $konek->prepare("SELECT * FROM produk p JOIN detail_produk dp ON p.id_detail = dp.id WHERE p.id = :a");
   $stmt->execute([':a'=>$_SESSION['produk']]);
   $results = $stmt->fetch(PDO::FETCH_ASSOC);




   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wfdigistore</title>
    <link rel="stylesheet" href="wf2.css">
    <link rel="icon" type="image/png" href="../wf-logo-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">

</head>

<body>
    <div class="halaman" >

        <div class="head-menu">
            <div class="head">
                <img class="wf-logo" src="../wf-logo.png" alt="wfdigistore logo">
                <div class="navs">
                    <a href="../produk/" class="button"><div class="nav">Produk</div></a>
                    <div class="nav">Pesanan</div>
                    <div class="nav">Keranjang</div>
                    <a href="../bantuan/" class="button"><div class="nav"> Bantuan</div></a>
                </div>
                <?php if(!isset($_SESSION['user_id'])): ?>
                    <a href="../sign-in" class="button">
                        <div class="sign-in s1">Sign in</div>
                    </a>
                <?php elseif (isset($_SESSION['user_id'])): ?>
                    <div class="right-nav">
                        <div class="sign-in s1 profile">
                            Hello , <?php echo $_SESSION['name'] ?>
                            <img class = "profile-icon" src="../profile.png" alt="icon-profile">
                        </div>
                        <img class="logout-icon s1" src="../logout-icon.png" alt="exit">
                    </div>
                <?php endif; ?>
                
                <div class="hamburger button">☰</div>
            </div>
        
            <div class="menu-bar">
                    <a href="../produk/" class="button">
                        <div class="nav">Produk</div>
                    </a>
                    <div class="nav button">Pesanan</div>
                    <div class="nav button">Keranjang</div>
                    <a href="../bantuan/" class="button">
                        <div class="nav button">bantuan</div>
                    </a>
                    <?php if(!isset($_SESSION['user_id'])): ?>
                        <a href="../sign-in" class="button">
                            <div class="sign-in s2">Sign in</div>
                        </a>
                    <?php elseif (isset($_SESSION['user_id'])): ?>
                        <div class="right-nav s2">
                            <div class="sign-in s2 profile">
                                Hello , <?php echo $_SESSION['name'] ?>
                                <img class = "profile-icon" src="../profile.png" alt="icon-profile">
                            </div>
                            <img class="logout-icon" src="../logout-icon.png" alt="exit">
                        </div>
                
            
                    <?php endif; ?>
            </div>
        </div>

        
    

        <div class="layout">

            <div class="luar_kotak">

                <div class="dalam_kotak">

                    <div class="produk">

                        <div class="gambar_container">

                            <img class="img_produk" src="../produk/<?php echo $results['path_produk'] ?>">

                            <div class="gameplay">
                                <h3>Cuplikan Gameplay</h3>
                                <div class="gameplay_images">
                                    <img src="Nanami.png" alt="Gameplay 1" class="gameplay_img">
                                    <img src="Nanami.png" alt="Gameplay 2" class="gameplay_img">
                                    <img src="Nanami.png" alt="Gameplay 3" class="gameplay_img">
                                </div>
                            </div>
                        </div>

                        <div class="isi">
                            <h1 class="judul_g"><?php echo $results['nama_produk']?></h1>
                            <?php if($results['nominal'] !== NULL): ?>
                                <div class="isi_nominal">
                                    <?php $nominals = explode(',',$results['nominal']);  ?>
                                    <?php foreach($nominals as $nominal): ?>
                                        <button data-nominal = "<?php echo $nominal?>" class="nominal"><?php echo "Rp " . number_format($nominal, 0, ',', '.');?></button>
                                    <?php endforeach; ?>
                                </div>
                            <?php else: ?>
                                
                                <div class="price" data-harga = "<?php echo $results['harga']?>"><?php echo "Rp " . number_format($results['harga'], 0, ',', '.'); ?></div>

                            <?php endif; ?>
                            <div class="product_details">
                                <div class="d_item">
                                    <div class="d_label">Versi</div>
                                    <div class="d_value"><?php echo $results['versi'] ?></div>
                                </div>
                                
                                <div class="d_item">
                                    <div class="d_label">Tipe Produk</div>
                                    <div class="d_value"><?php echo $results['kategori'] ?></div>
                                </div>
                                
                                <div class="d_item">
                                    <div class="d_label">Platform</div>
                                    <div class="d_value"><?php echo $results['platform'] ?></div>
                                </div>
                                
                                <div class="d_item">
                                    <div class="d_label">Tipe Pengiriman</div>
                                    <div class="d_value"><?php echo $results['tipe_pengiriman'] ?></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="deskripsi">
                        <div class="d_judul">Deskripsi Produk:</div>
                        <p>
                            <?php echo $results['deskripsi_produk'] ?>
                        </p>

                        <div class="d_judul">Cara Klaim:</div>
                        <p>1. Buka Steam... <br>2. Masukkan kode</p>
                    </div>

                </div>
            </div>

            <div class="sidebar">

                <div class="isi_s_b">

                        
                    <div class="isi_nominal_p">
                        
                        <div class="nominal_p">

                            <div class="isi_game">
                                <div class="isi_gambar">
                                    <img class="img_jual" src="Nanami.png" alt="image">
                                </div>
                                

                                <div class="dig_qty">

                                    <div class="dalam_isi_game">
                                        
                                        <div class="label_H_J"><?php echo $results['nama_produk'] ?></div>
                                        <div class="harga_qty">-</div>
                                    </div>
                                    

                                    <div class="qty">
                                        <button class="kurang">
                                            <img src="minus.png" alt="Minus" class="button_stok">
                                        </button>

                                        <input class="input_stok" type="text" maxlength="1" min="1" value="1">

                                        <button class="tambah">
                                            <img src="plus.png" alt="Plus" class="button_stok">
                                        </button>
                                    </div>


                                </div>


                                


                            </div>

                            


                                

                            
                            <hr class="garis">

                            <div class="total">
                                <div class="label_T">TOTAL</div>
                                <div class="harga_total">-</div>
                            </div>
 

                        </div>
                    </div>
                    

                    
                    
                    <div class="kotak_aksi">
                        <img class="img_keranjang" src="cart.png" alt="image">
                        <a class="beli" role="button">Beli Sekarang</a>
                    </div>
                </div>

            </div>

        </div>

    </div>


    
    
    
    <div class="container-scroll-up">
        <img class="scroll-up hilang-smooth button" src="../return.png" alt="scroll-up arrow"></img>
    </div>
</body>

<script src="detail.js"></script>
</html>