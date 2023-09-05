const hora = prompt ('Digite a hora!')
const horario = document.querySelector('.horario')

const horanumerica = parseInt(hora)
if(horanumerica>=6 && horanumerica<=7){
horario.innerHTML = `<p>È hora de acordar!</p>`
} else if (horanumerica > 7 && horanumerica < 12) {
    horario.innerHTML = `<p>Horárrio de trabalhar!</p>`
} else if(horanumerica >= 12 && horanumerica <= 13.30) {
    horario.innerHTML = `<p>Horárrio de  almoço!</p>`
}else if(horanumerica > 13.30 && horanumerica < 18) {
    horario.innerHTML = `<p>Horárrio de trabalhar !</p>`
}
else if(horanumerica > 18 && horanumerica < 23) {
    horario.innerHTML = `<p>Horárrio de descançar e jantar!</p>`
}else if (horanumerica >= 23 || horanumerica <=6){
    horario.innerHTML = `<p>Horárrio de dormir !</p>`
}
else(
    horario.innerHTML = `<p>algum erro!</p>`
)
