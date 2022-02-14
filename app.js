function addMessage(e){
    e.preventDefault();
    const messageInputField=document.getElementById('message');
    const lastMessageDisplayed=document.getElementById('last-message');
    if (messageInputField.value==""){
        const errorMessage=document.querySelector('.error');
        errorMessage.classList.add('show');
        setTimeout(()=>{
            errorMessage.classList.remove('show');
        },3000);
        
    }else{
    lastMessageDisplayed.textContent=messageInputField.value;
    }
    messageInputField.value="";
}
const lastMessageButton=document.querySelector('button');
lastMessageButton.addEventListener('click',function(e){addMessage(e)},false);