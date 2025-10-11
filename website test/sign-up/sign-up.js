const sign_up_form = document.querySelector('.sign-up-form');

const input_email2 = document.getElementById('email2');
const warning_input_email2 = document.getElementById('required-emaill2');
const input_password2 = document.getElementById('password2');
const warning_input_password2 = document.getElementById('length-passwordl2');
const input_username = document.getElementById('username2');
const warning_input_username = document.getElementById('required-usernamel2');
const show = document.querySelector('.show-icon');
const form2 = document.querySelector('.form2');
const submit_sign_up = document.getElementById('nav-sign-up');

let emailCorrect2 = false;
let passwordCorrect2 = false;

function updateButtonStates() {
    submit_sign_up.disabled = !(emailCorrect2 && passwordCorrect2);
}

show.addEventListener('click',function(){
    if(input_password2.type === "password"){
        show.src = "../sign-in/show.png"
        
        input_password2.type = "text";
    }else{
        show.src = "./sign-in/unshow.png";
        
        input_password2.type = "password";
        }
    });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
input_email2.addEventListener('input',function(){
    if(!emailRegex.test(input_email2.value.trim())){
        warning_input_email2.classList.add('muncul2');
        input_email2.classList.add("warning");
        emailCorrect2 = false;
        
    }else{
        warning_input_email2.classList.remove('muncul2');
        input_email2.classList.remove("warning");
        fetch("cekused.php",{
        method:"POST",
        body: new URLSearchParams({email:input_email2.value.trim().toLowerCase()})
        }).then(function(balasan){
            return balasan.text();
        }).then(function(balasan){
            console.log("balasan dari server",balasan);
            if(balasan.trim() == "ada"){
                warning_input_email2.textContent = "This email is already registered";
                warning_input_email2.classList.add('muncul2');
                input_email2.classList.add("warning");
                emailCorrect2 = false;
                
            }else if(balasan.trim() == "tidak_ada"){
                submit_sign_up.disabled = false;
                warning_input_email2.textContent = "Email must be a valid email";
                warning_input_email2.classList.remove('muncul2');
                input_email2.classList.remove("warning");
                emailCorrect2 = true;
            }
            
        });
        

    }
    updateButtonStates();
    
});

input_password2.addEventListener('input',function(){
    if(!input_password2.value.trim() || input_password2.value.trim().length < 8){
        warning_input_password2.classList.add('muncul2');
        input_password2.classList.add('warning');
        passwordCorrect2 = false;
    }else{
        warning_input_password2.classList.remove('muncul2');
        input_password2.classList.remove('warning');
        passwordCorrect2 = true;
    }
    updateButtonStates();
});

input_username.addEventListener('input',function(){
    if(!input_username.value.trim()){
        input_username.classList.add('warning');
        warning_input_username.classList.add('muncul2');
    }else{
        input_username.classList.remove('warning');
        warning_input_username.classList.remove('muncul2');
    }
})