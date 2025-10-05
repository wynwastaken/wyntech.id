<?php 
    session_start(); 

    require '../sign-in/konek.php';

    // ngambil kategori
    $category = 'all';
    if (!empty($_POST['category'])) $category = trim($_POST['category']);
    elseif (!empty($_GET['category'])) $category = trim($_GET['category']);

    // ngambil search
    $search = '';
    if (!empty($_POST['search'])) $search = trim($_POST['search']);
    elseif (!empty($_GET['search'])) $search = trim($_GET['search']);

    
    $allowed = ['all','topup','voucher','robux'];
    if (!in_array($category, $allowed, true)) $category = 'all';

  
    $params = [];
    
    if ($category === 'all') {
        $sql = "SELECT * FROM produk WHERE 1=1";
    } else {
        $sql = "SELECT * FROM produk WHERE kategori = :cat";
        $params[':cat'] = $category;
    }

    if (!empty($search)) {
        $sql .= " AND nama_produk LIKE :search";
        $params[':search'] = '%' . $search . '%';
    }

    $sql .= "ORDER BY id DESC";

    $stmt = $konek->prepare($sql);
    $stmt->execute($params);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
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
    <div class="hal_utama">
        <div class="layout">
            
            <div class="sidebar">

                <div class="isi_sidebar">
                    wawawad
                </div>

                <div class="garis_sidebar">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>

            </div>

    

            <div class="content">

                <div class="kotak_t_d">

                    <div class="luar_drop" id="tabsDropdown" data-current="<?php echo ($category); ?>">
                        <button class="dropdown-toggle" id="ddToggle" aria-haspopup="true" aria-expanded="false">
                            <div class="selected-category">Kategori</div>
                            <span class="chev">▾</span>
                        </button>


                        <form method="POST">
                            <ul class="dropdown-menu" id="ddMenu" role="menu" tabindex="-1" aria-label="Kategori">
                                <li class="dropdown-item <?php if($category==='all') echo 'active'; ?>" data-cat="all" tabindex="0">
                                    <button type="submit" name="category" value="all">All</button>
                                </li>
                                <li class="dropdown-item <?php if($category==='topup') echo 'active'; ?>" data-cat="topup" tabindex="0">
                                    <button type="submit" name="category" value="topup">Topup</button>
                                </li>
                                <li class="dropdown-item <?php if($category==='voucher') echo 'active'; ?>" data-cat="voucher" tabindex="0">
                                    <button type="submit" name="category" value="voucher">Voucher</button>
                                </li>
                                <li class="dropdown-item <?php if($category==='robux') echo 'active'; ?>" data-cat="robux" tabindex="0">
                                    <button type="submit" name="category" value="robux">Robux</button>
                                </li>
                            </ul>
                        </form>
                        
                    </div>
                    
                
                    <form method="POST" id="searchForm">
                       
                        <input type="hidden" name="category" value="<?php echo ($category); ?>">
                        
                        <div class="kotak_search">
                            <img src="icon_search.png" alt="Search" class="search-icon">
                            <input class="search" name="search" type="search" placeholder="Cari produk..." 
                                value="<?php echo ($search); ?>">
                
                        </div>
                    </form>
                    
                </div>

                <div class="selected-wrap">
                    <div class="selected-category" id="selectedCategory">
                        <?php echo ($category === 'all') ? 'All' : ucfirst($category); ?>
                    </div>
                </div>
                

                

               

                <div class="luar_kotak_produk">
                    
                    

                    <?php foreach($results as $each): ?>
                        <div class="kotak_produk">
                                <div class="gambar_produk">
                                    <img src="<?php echo $each['path_produk']; ?>" alt="<?php echo $each['nama_produk']; ?>" class="img-produk">
                                </div>
                                <h3 class="nama_produk"><?php echo $each['nama_produk']; ?></h3>
                        </div>
                    <?php endforeach; ?>
                    
                            
                      
                    

                    

                </div>

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