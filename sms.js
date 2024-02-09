
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
