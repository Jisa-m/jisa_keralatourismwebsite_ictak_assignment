var email = document.getElementById("email_signup");
var emailerror = document.getElementById("error_email_signup");
var password = document.getElementById("password_signup");
var passworderror = document.getElementById("error_password_signup");
var cofirmpassword = document.getElementById("confirmpassword_signup");
var confirmpassworderror = document.getElementById("error_confirmpassword_signup");
var phonenumber = document.getElementById("number_signup");
var phonenumbererror = document.getElementById("error_number_signup");
var regexp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
var passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
var mobexp1 = /^\d{10}$/;
var mobexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var flag_email = 0;
var flag_password = 0;
var flag_confirmpassword = 0;
var flag_mobile = 0;

function emailcheck(){
    if(regexp.test(email.value)==true){
        emailerror.innerHTML = "Email ID is valid";
        emailerror.style.color = "green";
        flag_email=1;
    }
    else{
        emailerror.innerHTML = "Enter valid Email ID";
        emailerror.style.color = "red";
        flag_email=0;
    }
}

function passwordcheck(){
    if(password.value.length<=3){
        passworderror.innerHTML = "Password is too short";
        passworderror.style.color = "red";
        password.style.border = "2px solid red";
        flag_password = 0;
    }
    else if(password.value.length<=7){
        passworderror.innerHTML = "Password is short";
        passworderror.style.color = "orange";
        password.style.border = "2px solid orange";
        flag_password = 0;
    }
    else if(passexp.test(password.value)){
        passworderror.innerHTML = "Valid Password";
        passworderror.style.color = "green";
        password.style.border = "2px solid green";
        flag_password = 1;
    }
    else{
        passworderror.innerHTML = "Please contain minimum 8 characters with atleast one uppercase, one lowercase and one number";
        passworderror.style.color = "red";
        flag_password = 0;
    }
}

function cofirmpasswordcheck(){
    if(password.value!=confirmpassword.value){
        confirmpassworderror.innerHTML = "The passwords are different";
        confirmpassworderror.style.color = "red";
        flag_confirmpassword=0;
    }
    else{
        confirmpassworderror.innerHTML = "The passwords are matching";
        confirmpassworderror.style.color = "green";
        flag_confirmpassword=1;
    }
}

function mobilechange(){
    if(mobexp1.test(number.value)){
        phonenumbererror.innerHTML = "Valid Mobile Number";
        phonenumbererror.style.color = "green";
        flag_mobile = 1;
    }
    else if(mobexp2.test(number.value)){
        phonenumbererror.innerHTML = "Valid Mobile Number";
        phonenumbererror.style.color = "green";
        flag_mobile = 1;
    }
    else{
        phonenumbererror.innerHTML = "Invalid Mobile Number";
        phonenumbererror.style.color = "red";
        flag_mobile = 0;
    }
}

function validation(){
    if ((flag_email==1)&&(flag_mobile==1)&&(flag_password1==1)&&(flag_password2==1)){
        return true;
    }
    else{
        return false;
    }
}