

function validate_login()
{
    let email=document.getElementById("Email");
    
    let regexp=/^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let validate_result = regexp.test(email.value);
    console.log(validate_result);
    if(validate_result)
    {
        return true;
    }
    else
    {
        alert("Please enter a valid email");
        return false;
    }
}

function validate_register(){
    if (!validate_phone()){
        alert("Invalid Phone Number. Valid Formats are : XXX.XXX.XXXX/XXX-XXX-XXXX/XXX XXX XXXX or 10 digits should be included");
        return false;
    }
    if (!validate_email_register()){
        alert("Invalid Email");
        return false;
    }

    if (!validate_password()){
        alert("Please enter a strong password");
        return false;
    }
    alert("validation successful");
}
function validate_phone()
{
    let phone=document.getElementById("phone");
    
    var regexp=/^[0-9]{10,10}$/;
    let validate_result=regexp.test(phone.value);

    if(validate_result)
    {
        return true;
    
    }
  else
  {
  
    var format1=/^[0-9]{3,3}[\.][0-9]{3,3}[\.][0-9]{4,4}$/;
    var format2=/^[0-9]{3,3}[-][0-9]{3,3}[-][0-9]{4,4}$/;
    var format3=/^[0-9]{3,3}[ ][0-9]{3,3}[ ][0-9]{4,4}$/;

  if(format1.test(phone.value))
  {
     
     return true;
  }
  else if(format2.test(phone.value))
  {
    
    return true;
  }
  else if(format3.test(phone.value))
  {
    
     return true;
  }
    //  alert("Invalid Phone Number. Valid Formats are : XXX.XXX.XXXX/XXX-XXX-XXXX/XXX XXX XXXX");
     return false;

}

}

function validate_password(){
    let regexp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    let password = document.getElementById("pwd").value
    if(regexp.test(password))
    {
      return true
    }
    else
    {
      return false;
      
    }

}

function update_password_strength(){
    let regexp_strong=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    let regexp_medium=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    let password = document.getElementById("pwd").value
    password_strength = 0;
    if(regexp_strong.test(password)){
        // console.log("strong");
        document.getElementById("pwstrength").style.backgroundColor = "green";
    }else if(regexp_medium.test(password)){
        // console.log("medium");
        document.getElementById("pwstrength").style.backgroundColor = "orange";
    }else {
        // console.log("weak");
        document.getElementById("pwstrength").style.backgroundColor = "red";
    }    
}

function validate_email_register()
{
    let email=document.getElementById("email");
    
    let regexp=/^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let validate_result = regexp.test(email.value);
    // console.log(validate_result);
    if(validate_result)
    {
        return true;
    }
    else
    {
        // alert("Please enter a valid email");
        return false;
    }
    
}

