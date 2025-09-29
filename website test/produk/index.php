<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wfdigistore</title>
    <link rel="stylesheet" href="wf.css">
    <link rel="icon" type="image/png" href="../wf-logo-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">

</head>
<body>
    <div class="halaman">
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
    </div>
    

    
    <div class="container-scroll-up">
        <img class="scroll-up hilang-smooth button" src="../return.png" alt="scroll-up arrow"></img>
    </div>
</body>
<audio id = "click-sound-effect" src="../click-sound-effect.wav"></audio>
<script src="wf.js"></script>
</html>