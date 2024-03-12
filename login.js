window.addEventListener('load',()=>{
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")
    loader.addEventListener('transitionend',()=>{
        document.body.removeChild("loader")
    })

})

function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (email === "" || password === "") {
    document.getElementById('nameErrorsssss').innerText = "*All fields must be filled out";
    document.getElementById('nameErrorsssss').style ='color:red'  
    
   return true;

}
alert('Login Successfully')
return true
}
const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', () => {
    validateEmail(emailInput);
});

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', () => {
    validatePassword(passwordInput);
});


function validateEmail(inputElement) {
    var value = inputElement.value;
    var emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    var emailError = document.getElementById('classs');

    if (value === "") {
        emailError.innerText = "*enter your email here";
        return false;
    } else if (!emailRegex.test(value)) {
        emailError.innerText = "*Invalid email format";
        return false;
    } else {
        emailError.innerText = "";
        return true;
    }
}

function validatePassword(inputElement) {
  var value = inputElement.value;
  var passwordError = document.getElementById('class');

  if (value === "") {
      passwordError.innerText = "*enter your password here";
      return false;
  } else if (value.length < 6 || value.length > 12) {
      passwordError.innerText = "*password must be between 6 and 12 characters";
      return false;
  } else if (!/[A-Z]/.test(value)) {
      passwordError.innerText = "*password must contain at least one capital letter";
      return false;
  } else if (!/\d/.test(value)) {
      passwordError.innerText = "*password must contain at least one number";
      return false;
  } else {
      passwordError.innerText = "";
      return true;
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
   e.preventDefault()

  const formData = new FormData(form)
  const userData ={
    email:formData.get('email'),
    password:formData.get('password')
  }
  try {
    const res = await fetch('https://my-brand-be-2-iaek.onrender.com/api/users/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    
    if ( !res.ok){
        throw new Error('unenabled to signup')
    }
  
    const resData = await res.json()
    console.log(resData)

  const token = resData.token

    localStorage.setItem('token',token)
    window.location.href ='dashboard.html'
    
    console.log(resData)
    
  } catch (error) {
    console.log({error:error.message})
  }

})
