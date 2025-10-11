<?php
    use PHPMailer\PHPMailer\PHPMailer;
    require "../sign-in/konek.php";
    require '../vendor/autoload.php';
    $sent = false;
        if(isset($_POST['sign-up'])){
            
            $nama = $_POST['username'];
            $email = $_POST['email'];
            $pass = password_hash($_POST['password'],PASSWORD_DEFAULT);
            $verified = 0;
            $token = bin2hex(random_bytes(32));

            

            if($nama && $email && $pass){
                $stmt = $konek->prepare("INSERT INTO wf_users(USERNAME,EMAIL,PASS,VERIFIED,TOKEN) VALUES (:a,:b,:c,:d,:e)");
                $stmt->execute([':a'=>$nama,':b'=>$email,':c'=>$pass,':d'=>$verified,':e'=>$token]);
            }

            $mail = new PHPMailer(true);

            
                //Server settings
                $mail->SMTPDebug = 0;        
                           
                $mail->isSMTP();                                          
                $mail->Host       = 'smtp.gmail.com';                     
                $mail->SMTPAuth   = true;                                  
                $mail->Username   = 'wyntech.id@gmail.com';                    
                $mail->Password   = '-';                              
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;             
                $mail->Port       = 465;                                    

                $mail->SMTPKeepAlive = true;  
                //Recipients
                $mail->setFrom('WF@digistore.com', 'WFdigistore');
                $mail->addAddress($email, 'Customer');     //Add a recipient

                $mail->addReplyTo('WF@digistore.com', 'WFdigistore');
            

                 
            

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'Email verification';
                $mail->Body    = 
                '
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
                <div style="max-width: 500px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 25px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">Halo ' . htmlspecialchars($nama) . ',</h2>
                    <p style="color: #555; font-size: 16px;">
                    Terima kasih telah mendaftar di <b>WFdigistore</b>! <br>
                    Klik tombol di bawah ini untuk memverifikasi email Anda:
                    </p>
                    <div style="text-align: center; margin-top: 20px;">
                    <a href="http://localhost/PHP/website%20test/sign-up/verify.php?token=' . urlencode($token) . '" 
                        style="background-color: #1E419D; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;">
                        Verifikasi Email
                    </a>
                    </div>
                    <p style="margin-top: 30px; color: #888; font-size: 14px;">Jika Anda tidak merasa mendaftar, abaikan email ini.</p>
                </div>
                </div>';
                
                
                
                
                

                $mail->send();
                
                $sent = true;
                
            
                
            

            
        }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wfdigistore</title>
    <link rel="stylesheet" href="../sign-in/sign-in.css">
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
</head>
<body>
    <div class="sign-in-page">
        <div class="sign-up-form ">
            <?php if($sent): ?>
                
                <div class="pop-up">
                    <img class="close" src="close-button.png" alt="close-icon" >
                    <div class="judul-pop-up">
                        <h2 style=" width: 30vh; margin: 0; font-family: 'Lilita One'; margin-top: 10px;">Email Verification Sent </h3>
                        <img src="verif.png" alt="verif-icon" style="position: relative; width: 65px; ">
                    </div>
                    <h3 class="isi-pop-up">
                        Kami telah kirim link verifikasi ke email anda.
                        Mohon verifikasi terlebih dahulu untuk dapat login.
                    </h3>
                </div>
                <script>
                    const close_pop_up = document.querySelector('.close');
                    const pop_up = document.querySelector('.pop-up');
                    close_pop_up.addEventListener('click',function(){
                        pop_up.style.display = 'none';
                    })
                </script>
            <?php endif; ?>
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
                        <img class = "show-icon si2" src="../sign-in/show.png" alt="show">
                    </div>
                    
                    <div id="length-passwordl2">Password must atleast be 8 Characters</div>
                </div>
                <input type = "submit" id="nav-sign-up" name = "sign-up" value="Sign up"></input>
                <a class = "cl2 button" id="createl" href="../sign-in">Already have an account? Login</a>
            </form>
        </div>
    </div>
</body>
<script src="sign-up.js"></script>
</html>