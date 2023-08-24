function meuescopo (){
const form =document.querySelector('.form');

function recebeeventoform (evento){
  evento.preventDefault();
}
form.addEventListener('submit', recebeeventoform)
}
meuescopo();
