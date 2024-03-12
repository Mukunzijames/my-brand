
document.addEventListener('DOMContentLoaded', function () {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];

    const messageContainer = document.getElementById('messageContainer');

    storedMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'container2';

        const rgtDiv = document.createElement('div');
        rgtDiv.className = 'rgt';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card3';

        const rightsDiv = document.createElement('div');
        rightsDiv.className = 'rights';

        const bbDiv = document.createElement('div');
        bbDiv.className = 'bb';
        bbDiv.innerHTML = "<i class='bx bx-envelope'></i>";

        const smsDiv = document.createElement('div');
        smsDiv.className = 'sms';
        smsDiv.textContent = 'email';

        rightsDiv.appendChild(bbDiv);
        rightsDiv.appendChild(smsDiv);
        cardDiv.appendChild(rightsDiv);
        rgtDiv.appendChild(cardDiv);

        const deleteDiv = document.createElement('div');
        deleteDiv.className = 'delete';
        deleteDiv.innerHTML = "<div><i class='bx bx-trash'></i></div>";

        const editDiv = document.createElement('div');
        editDiv.className = 'edit';
        editDiv.textContent = 'reply';

        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'toggle';
        
        const dsDiv = document.createElement('div');
        dsDiv.className = 'ds';
        dsDiv.innerHTML = "<i class='bx bxs-toggle-left'></i>";

        toggleDiv.appendChild(dsDiv);
        rgtDiv.appendChild(deleteDiv);
        rgtDiv.appendChild(editDiv);
        rgtDiv.appendChild(toggleDiv);
        messageDiv.appendChild(rgtDiv);

        const lefsDiv = document.createElement('div');
        lefsDiv.className = 'lefs';

        const lessssDiv = document.createElement('div');
        lessssDiv.className = 'lessss';
        lessssDiv.textContent = message.fullName;

        const rightsssDiv = document.createElement('div');
        rightsssDiv.className = 'rightsss';
        rightsssDiv.innerHTML = message.message;
        

        lefsDiv.appendChild(lessssDiv);
        lefsDiv.appendChild(rightsssDiv);
        messageDiv.appendChild(lefsDiv);

        messageContainer.appendChild(messageDiv);
        localStorage.clear()
    });
});

const message =document.getElementById('messageContainer')

const  getAll = async()=>{

    await  fetch('https://my-brand-be-2-iaek.onrender.com/api/messages')
.then(res=>res.json())
.then(result=>{
    console.log(result)
    let getData=result;
    // console.log(getData)
    for (let index = 0; index < getData.length; index++) {
        const messageCard =`<div class="rgt">
        <div class="card3">
            <div class="rights">
                <div class="bb"><i class='bx bx-envelope'></i></div>
                <div class="sms">email</div>
            </div>
        </div>
        <div class="delete">
         <div onclick="Delete('${getData[index]._id}')"><i class='bx bx-trash'></i></div>
        </div>
        <div class="edit" id="reply">
            reply
        </div>
        <div class="toggle">
            <div class="ds"><i class='bx bxs-toggle-left'></i></div>
        </div>
    </div> <div class="lefs">
        <div class="lessss">${getData[index].name}</div>
        <div class="rightsss">${getData[index].message}</div>
    </div>`
    message.insertAdjacentHTML('beforeend',messageCard)
}
}
    )}
    getAll()

    const Delete= async(_id)=>{
        console.log(_id)
        const token = localStorage.getItem('token')
          if(!token){
            alert('unauthorized first login')
            window.location.href='login.html'
          }
        try {
        const res = await fetch('https://my-brand-be-2-iaek.onrender.com/api/messages/'+_id,{
            method:'DELETE',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},
        })
        if ( !res.ok){
            throw new Error('unenabled to delete message')
        }
        const resData = await res.json()
        console.log(resData)
        window.location.reload()
    
      } catch (error) {
        console.log({error:error.message})
      }
      
    
    }
