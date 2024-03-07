window.addEventListener('load',()=>{
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")
    loader.addEventListener('transitionend',()=>{
        document.body.removeChild("loader")
    })

})


function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === "" || email === "" || password === "") {
        document.getElementById('nameErrorsssss').innerText = "*All fields must be filled out";
        document.getElementById('nameErrorsssss').style = 'color:red'

        return false;

    } else if (username === "") {
        document.getElementById('clas').innerText = "*enter your fullName here";
        document.getElementById('username').style.border = '1px solid red';
        return false;
    }


    alert("Form submitted successfully!");
    return true;
}

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('keyup', () => {
    validateUsername(usernameInput);
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', () => {
    validateEmail(emailInput);
});

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', () => {
    validatePassword(passwordInput);
});

function validateUsername(inputElement) {
    var value = inputElement.value;
    if (value === "") {
        document.getElementById('clas').innerText = "*enter your userName here";
        inputElement.style.border = '1px solid red';
        return false;
    } else if (value.length < 5) {
        document.getElementById('clas').innerText = "*username must be greater than 5 characters";
        inputElement.style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('clas').innerText = "";
        inputElement.style.border = ' 1px solid orange';
        return true;
    }
}

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
// const button = document.querySelector('#submit');
// const jsConfetti = new JSConfetti();
// const signupForm = document.querySelector('#signup-container');
// const successMessage = document.getElementById('success-message');

// button.addEventListener('click', (event) => {
//     event.preventDefault();

 
//       jsConfetti.addConfetti();
//       if (signupForm) {
//         signupForm.style.display = 'none';
//       }

//       if (successMessage) {
//         successMessage.style.display = 'block';
//         console.log(successMessage);
//       }
// });


const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
   e.preventDefault()

  const formData = new FormData(form)
  const userData ={
    username:formData.get('username'),
    email:formData.get('email'),
    password:formData.get('password')
  }
  try {
    const res = await fetch('https://my-brand-be-2-iaek.onrender.com/api/users/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    if ( !res.ok){
        throw new Error('enabled to signup')
    }
    const resData = await res.json()
    console.log(resData)

  } catch (error) {
    console.log({error:error.message})
  }

})

