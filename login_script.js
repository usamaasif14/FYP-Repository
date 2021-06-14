function validate()
{
  var email=document.getElementById("email").value;
//  var password=document.getElementById("password").value;
//---login---//
//----Email Validation----//
email_validation(email)
//---Password Validation---//
if (password.length > 20 || password.length < 6)
{
  alert("You have entered an invalid password!")
}
}

function email_validation(email){
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {

  }
  else{
    alert("You have entered an invalid email address!")
  }
}
function Forgot() {


//---Forgot Password---//
//----Email Validation----//
var email=document.getElementById("forgot_email").value;

email_validation(email)
}
function sign_up()
{
  var email=document.getElementById("signup_email").value;

  email_validation(email)

 var password=document.getElementById("password_signup").value;
  var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(password.match(paswd))
  {

  }
  else
    {
      alert("Incorrect Password")
    }
  }
