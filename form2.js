var email=document.getElementById("email_login");
var emailerror=document.getElementById("emailerror_login");
var pwd=document.getElementById("pwd_login");
var pwderror=document.getElementById("pwderror_login");
        var regexp = /^([A-Za-z0-\.-]+)@([A-Za-a0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        var passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
        var flag_email=0;
        var flag_password=0;
function emailcheck()
    {
        if (regexp.test(email.value)==true) {
            emailerror.innerHTML="";
            flag_email=1;
            
        }
        else {
            emailerror.innerHTML="Incorrect Email Format";
            emailerror.style.color="red";
            flag_email=0;
            
        }
    }
function pwdcheck()
    {
        if (passexp.test(pwd.value)) {
            pwderror.innerHTML="";
            flag_email=1;
            
        }
        else {
            pwderror.innerHTML="Incorrect Email Format";
            pwderror.style.color="red";
            flag_password=0;

           
        }
    }
function validate(){
        if((flag_email==1)&&(flag_password==1)){
            alert("Fields cannot be empty");
            return true;
        }
        else{
            return false;
        }
    }