<?php
    session_start();
    $udahlogin = false;
    $salahpass = false;
    try{
        $konek = new PDO('mysql:host=localhost;dbname=wyntech_id','root','',[
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
        echo "<div class='status' style='color : green;'>Koneksi Berhasil</div>";
    }catch(PDOException $e){
        echo "<div class='status'>$e</div>";
        exit();
    }
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['sign-in'])){
            
            $email = $_POST['email'];
            $pass = $_POST['password'];
            if($email && $pass){
                $stmt = $konek->prepare("SELECT * FROM wf_users WHERE EMAIL = :a AND pass = :b");
                $stmt->execute([':a'=>$email,':b'=>$pass]);
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                if($user){
                    
                    $_SESSION['user_id'] = $user['ID'];
                    $_SESSION['name'] = $user['USERNAME'];
                    $udahlogin = true;
                    header('Location: ../produk');
                }else{
                    $salahpass = true;
                }
            }
        }elseif(isset($_POST['sign-up'])){
            $nama = $_POST['username'];
            $email = $_POST['email'];
            $pass = $_POST['password'];

            if($nama && $email && $pass){
                $stmt = $konek->prepare("INSERT INTO wf_users(USERNAME,EMAIL,PASS) VALUES (:a,:b,:c)");
                $stmt->execute([':a'=>$nama,':b'=>$email,':c'=>$pass]);
            }
        }
        
    }

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>  
    <link rel="stylesheet" href="sign-in.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
</head>
<body>
    <div class="sign-in-page">
        <div class="sign-in-form">
            <form class = "form" method="POST">
                <a href="../produk" class="button">
                    <img class = "back1" src="return.png" alt="Arrow">
                </a>
                
                <h3 id="loginl">Login</h3>
                <?php if(!$udahlogin && isset($_POST['sign-in'])):?>
                    <div class="status_login" style = "visibility: <?php echo $salahpass?'visible':'hidden' ?>">
                    <div >Wrong email or password</div>
                    <img class = "fail-icon" src = "fail.png" alt="Wrong Credentials">
            
                </div>
                <?php endif; ?>
                    
                
                <div class="form-input fi1">
                    <label id = "emaill" for="email">Email</label>
                    <input type="email" id="email" placeholder="example@gmail.com" name="email" required>
                    <div id="required-emaill">email must be a valid email</div>
                </div>
                <div class="form-input fi2">
                    <label id = "passwordl" for="password">Password</label>

                    <div class="password-input-toggle">
                        <input type="password" id="password" placeholder="••••••••" name="password" required>
                        <img class = "show-icon" src="show.png" alt="show">
                    </div>
                    
                    <div id="length-passwordl">Password must atleast be 8 Characters</div>
                </div>
                <div id="sign-in-navs">
                    <div id="fpasswordl">Forgot Password?</div>
                    <input type = "submit" id="nav-sign-in" name = "sign-in" value="Sign in"></input>
                    <div class = "button" id="createl">Dont have an Account? Create One</div>
                </div>
                

                
            </form> 
        </div>
        <div class="sign-up-form switch">
            <form class = "form2" method="POST">
                
                <h3 id="createl2">Create</h3>
                <div class="form-input fi1">
                    <label id = "usernamel" for="username2">Name</label>
                    <input type="text" id="username2" placeholder="wfdigistore" name="username" required>
                    <div id="required-usernamel2">name is a required field</div>
                </div>
                <div class="form-input fi2">
                    <label id = "emaill2" for="email2">Email</label>
                    <input type="email" id="email2" placeholder="example@gmail.com" name="email" required>
                    <div id="required-emaill2">email must be a valid email</div>
                </div>
                <div class="form-input fi3">
                    <label id = "passwordl" for="password2">Password</label>

                    <div class="password-input-toggle">
                        <input type="password" id="password2" placeholder="••••••••" name="password" required>
                        <img class = "show-icon" src="../show.png" alt="show">
                    </div>
                    
                    <div id="length-passwordl2">Password must atleast be 8 Characters</div>
                </div>
                <input type = "submit" id="nav-sign-up" name = "sign-up" value="Sign up"></input>
                <div class = "cl2 button" id="createl">Already have an account? Login</div>
            </form>
        </div>
    </div>
    
</body>
<audio src="../click-sound-effect.wav" id="click-sound-effect"></audio>
<script src="sign-in.js"></script>
</html>


