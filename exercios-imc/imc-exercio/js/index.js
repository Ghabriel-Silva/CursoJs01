form = document.querySelector('.form');



form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const peso = parseFloat(document.querySelector('.peso').value);
    const altura = parseFloat(document.querySelector('.altura').value);

    const value = document.querySelector('.value');
    const elemento  =  document.getElementById("text-imc")

    let imc;

    if(!isNaN(peso) && !isNaN(altura)){
     imc = peso / (altura * altura)
    value.innerHTML = ` ${imc.toFixed(2)}`
    }
    else{
        value.innerHTML =`<p>Tente novamente</p>`;
        elemento.remove();
        return;
    }

    value.classList.add('atention');

    let categoria = '';
    
    if (imc < 18.5) {
        categoria = "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 25.0) {
        categoria = "Peso Normal";
        value.classList.remove('atention');
        value.classList.add('normal');
    } else if (imc >= 25.0 && imc < 30.0) {
        categoria = "Sobrepeso";
    } else if (imc >= 30.0 && imc < 35.0) {
        categoria = "Obesidade Grau I";
    } else if (imc >= 35.0 && imc < 40.0) {
        categoria = "Obesidade Grau II";
    } 
    else {
        categoria = "Obesidade Grau III";
    }

    document.querySelector('.categoria').textContent = categoria;
})