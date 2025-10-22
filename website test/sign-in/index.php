<?php
    session_start();
    
    $udahlogin = false;
    $salahpass = false;
    require "konek.php";
   
        if(isset($_POST['sign-in'])){
            
            $email = $_POST['email'];
            $pass = $_POST['password'];
            if($email && $pass){
                $stmt = $konek->prepare("SELECT * FROM wf_users WHERE EMAIL = :a");
                $stmt->execute([':a'=>$email]);
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                if($user && password_verify($pass,$user['PASS']) && $user['VERIFIED'] == 1){
                    
                    $_SESSION['user_id'] = $user['ID'];
                    $_SESSION['name'] = $user['USERNAME'];
                    $udahlogin = true;
                    header('Location: ../produk');
                    
                }else{
                    $salahpass = true;
                }
            }
        }
        
    

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wfdigistore</title>  
    <link rel="stylesheet" href="sign-in.css">
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
                    <div class="status_login s1" style = "visibility: <?php echo $salahpass?'visible':'hidden' ?>">
                        <div >Wrong email or password</div>
                        <img class = "fail-icon" src = "fail.png" alt="Wrong Credentials">
                
                    </div>
                <?php endif; ?>
                    
                
                <div class="form-input fi1">
                    <label id = "emaill" for="email">Email</label>
                    <input type="email" id="email" placeholder="example@gmail.com" name="email" required>
                    <div id="required-emaill">Email must be a valid email</div>
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
                    <a class = "button" id="createl" href ="../sign-up">Dont have an Account? Create One</a>
                </div>
                

                
            </form> 
        </div>
        
    </div>
    
</body>

<script src="sign-in.js"></script>
</html>


