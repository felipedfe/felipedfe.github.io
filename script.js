function copyEmail() {
  window.navigator.clipboard.writeText('felipedfe@gmail.com');
  caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i><p class='texto-caixa-de-msg'>Copiado!</p>";
};

function message() {
  caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i>";
};

const emailBtn = document.getElementById('email-botao');
const caixaDeMsg = document.querySelector('.caixa-de-msg');

emailBtn.addEventListener('click', copyEmail);

emailBtn.addEventListener('mouseleave', message);