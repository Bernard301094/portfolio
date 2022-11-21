const nome = document.querySelector("#seu__nome");
const email = document.querySelector("#seu__email");
const phone = document.querySelector("#seu__telefone");
const message = document.querySelector("#mensagem");
const msg = document.querySelector("#msg-erro");
const btn = document.querySelector("#btn");

btn.addEventListener('click', (e) => {
e.preventDefault()

const name = nome.value;
const telefone = phone.value;
const messageValue = message.value;
const emailValue = email.value;

if(name === '' || telefone === '' || messageValue === '' || emailValue === ''){
    msg.style.display = "block";
    msg.textContent = "*Preencha todos os campos";
}

});