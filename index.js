const hamburgerMenu = document.getElementById('hamburger-menu');
const cancelButton = document.getElementById('cancel-icon');
const menuItems = document.getElementsByClassName('menu')[0];
var editor1 = new RichTextEditor("#message");


const reveal = () => {
    hamburgerMenu.style.display = 'none';
    cancelButton.style.display = 'block';
    menuItems.style.display = 'grid';
};

const hide = () => {
    hamburgerMenu.style.display = 'block';
    cancelButton.style.display = 'none';
    menuItems.style.display = 'none';
};

hamburgerMenu.addEventListener('click', reveal);
cancelButton.addEventListener('click', hide);

const bodyEl = document.querySelector('body')
const homeEl = document.querySelector('.home')

const toggleDarkMode = () => {
    bodyEl.classList.toggle('dark-body')
    homeEl.classList.toggle('home-dark')
}


function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (fullName === "" || email === "" || subject === "" || message === "") {
        document.getElementById('nameErrorsssss').innerText = "*All fields must be filled out";
        document.getElementById('sss').style.border = '1px solid red';
        return false;
    }else if(fullName === ""){
        document.getElementById('nameErrors').innerText = "*enter your fullName here";
        document.getElementById('fullName').style.border = '1px solid red';
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('nameErrors').innerText = "Invalid email format";
        document.getElementById('email').style.border = '1px solid red';
        return false;
    }else {
      sendingMessage()
    }
    alert("Form submitted successfully!");
    return true;

}

const fullNameInput = document.getElementById('fullName');
fullNameInput.addEventListener('keyup', () => {
    validateName(fullNameInput);
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', () => {
    validateEmail(emailInput);
});

const subjectInput = document.getElementById('subject');
subjectInput.addEventListener('keyup', () => {
    validateSubject(subjectInput);
});
const textInput = document.getElementById('message');
textInput.addEventListener('keyup', () => {
    validateMessage(textInput);
});


function validateName(inputElement) {
    var value = inputElement.value;
    if (value === "") {
        document.getElementById('nameErrors').innerText = "*enter your full name here";
        inputElement.style.border = '1px solid red';
        return false;
    } else if (value.length < 10) {
        document.getElementById('nameErrors').innerText = "*Name must be greater than 10 characters";
        inputElement.style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('nameErrors').innerText = "";
        inputElement.style.border = 'none';
        return true;
    }
}

function validateEmail(inputElement) {
    var value = inputElement.value;
    var emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    if (value === "") {
        document.getElementById('nameErrorss').innerText = "*enter your email here";
        inputElement.style.border = '1px solid red';
        return false;
    } else if (!emailRegex.test(value)) {
        document.getElementById('nameErrorss').innerText = "*Invalid email format";
        inputElement.style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('nameErrorss').innerText = "";
        inputElement.style.border = 'none';
        return true;
    }
}
function validateSubject(inputElement) {
    var value = inputElement.value;
    if (value === "") {
        document.getElementById('nameErrorsss').innerText = "*enter your subject here";
        inputElement.style.border = '1px solid red';
        return false;
    } else if (value.length < 10) {
        document.getElementById('nameErrorsss').innerText = "*subject must be greater than 10 characters";
        inputElement.style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('nameErrorsss').innerText = "";
        inputElement.style.border = 'none';
        return true;
    }
}
function validateMessage(inputElement) {
    const  area = document.getElementsByClassName('sha')
    var value = inputElement.value;
    if (value === "") {
        document.getElementById('nameErrorssss').innerText = "*enter your subject here";
        inputElement.style.border = '1px solid red';
        return false;
    } else if (value.length < 10) {
        document.getElementById('nameErrorssss').innerText = "*subject must be greater than 10 characters";
        inputElement.style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('nameErrorssss').innerText = "";
        inputElement.style.border = 'none';
        return true;
    }
}


function sendingMessage(){
    const enteredName = fullName.value.trim();    
    const enteredEmail = email.value.trim();    
    const enteredSubject = subject.value.trim();
    const enteredMessage = message.value.trim()
    
    let messageSent = JSON.parse(localStorage.getItem('messages')) || [];

    messageSent.push({
        fullName: enteredName,
        email: enteredEmail,
        subject:enteredSubject,
        message : enteredMessage
    });
    localStorage.setItem('messages', JSON.stringify(messageSent));
    window.location.reload();
}

const blogContainer = document.getElementById('container-blog')


const bloglist = document.querySelectorAll('.BLOG-LISTS');
 for (let i= 0; i < bloglist.length; i++) {
    bloglist[i].remove()
    
 }
   
//  let  savedData =[]
//  if (localStorage.getItem('newBlog')) {
//      savedData = localStorage.getItem('newBlog')
//     let getData=JSON.parse(savedData);
//     console.log(getData)
//     for (let index = 0; index < getData.length; index++) {
//         const blogCard =` <div class="BLOG-LISTS">
//         <img src="${getData[index].image}" alt="web" class="web-image">
//         <div class="likesssss">
//             <div class="likes">
//             <div><i class='bx bx-like'></i></div>
//             <div><span>10</span>likes</div>
//           </div>
//             <div class="unlikes">
//               <div><i class='bx bx-dislike' ></i></div>
//             <div><span>10 </span>unlikes</div>
//             </div>
//             <div class="comments">
//               <div><i class='bx bx-comment-dots' ></i>
//               </div>
//               <div><span>20</span>comments</div>
//             </div>
//           </div>

//         <h3 class="web-development">${getData[index].title}</h3>
//         <p class="blog-p">${getData[index].decsription}</p>
//         <br>
//         <a href="#" onclick ='viewBlog(${index})'>Learn-more></a>

//       </div>`
//     blogContainer.insertAdjacentHTML('beforeend',blogCard)
//     }

//   }


const  getAll = async()=>{

    await  fetch('https://my-brand-be-2-iaek.onrender.com/api/blogs')
.then(res=>res.json())
.then(result=>{
    console.log(result)
    let getData=result;
    // console.log(getData)
    for (let index = 0; index < getData.length; index++) {
        const blogCard =` <div class="BLOG-LISTS">
        <img src="${getData[index].image}" alt="web" class="web-image">
        <div class="likesssss">
            <div class="likes">
            <div><i class='bx bx-like'></i></div>
            <div><span> ${getData[index].like} </span>likes</div>
          </div>
            <div class="unlikes">
              <div><i class='bx bx-dislike' ></i></div>
            <div><span></span></div>
            </div>
            <div class="comments">
              <div><i class='bx bx-comment-dots' ></i>
              </div>
              <div><span>20</span>comments</div>
            </div>
          </div>

        <h3 class="web-development">${getData[index].title}</h3>
        <p class="blog-p">${getData[index].desc}</p>
        <br>
        <a href="blog.html?id=${getData[index]._id}">Learn-more></a>

      </div>`
     blogContainer.insertAdjacentHTML('beforeend',blogCard)
  
   
}
}
    )}
    getAll()

    const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
   e.preventDefault()

  const formData = new FormData(form)
  const messageData ={
    name:formData.get('name'),
    email:formData.get('email'),
    message:formData.get('message')
  }
  console.log(messageData)
  try {
    const res = await fetch('https://my-brand-be-2-iaek.onrender.com/api/messages',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(messageData)
    })
    if ( !res.ok){
        throw new Error('enabled to send message')
    }
    const resData = await res.json()
    console.log(resData)

  } catch (error) {
    console.log({error:error.message})
  }

})




