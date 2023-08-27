function meuescopo(){
const form = document.querySelector('.form')

 function meuevento(evento){
  evento.preventDefault()
 }
 form.addEventListener('submit', meuevento )
}
meuescopo()