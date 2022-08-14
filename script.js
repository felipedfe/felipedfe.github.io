// function message() {
//   console.log('000')
//   caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i>"
// }

function out() {
  console.log('dsakdjsakd')
  caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i>"
}

function copyEmail() {
  console.log('copiou')
  window.navigator.clipboard.writeText('felipedfe@gmail.com')
  caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i><p class='texto-caixa-de-msg'>Copiado!</p>"
}

function message() {
  console.log('--------')
  caixaDeMsg.innerHTML = "<i class='fa-solid fa-envelope'></i>"
}

function out() {
  console.log('dsakdjsakd')

}

const emailBtn = document.getElementById('email-botao');
const caixaDeMsg = document.querySelector('.caixa-de-msg');

emailBtn.addEventListener('click', copyEmail);

emailBtn.addEventListener('mouseleave', message)
// console.log(emailBtn)