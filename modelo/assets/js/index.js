function enviar(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const table = document.querySelector('.table');

    function previneevento(evento){
       evento.preventDefault();


       const peso = parseFloat(document.querySelector('#peso').value);
       const altura = parseFloat(document.querySelector('#altura').value);

        let Imc;

       if(!isNaN(peso) && !isNaN(altura)){
        Imc = peso / (altura *altura);
        resultado.innerHTML = `<p> ${Imc.toFixed(2)}</p>`
       }
       if (Imc<18.5){
        table.innerHTML = `<p>Abaixo do peso</p>`
       } else if(Imc<24.9){
        table.innerHTML = `<p>Peso normal.</p>`
       }  else if(Imc<29.9){
        table.innerHTML = `<p>Sobrepeso.</p>`
       } else if(Imc>30){
        table.innerHTML = `<p>Obesidade.</p>`
       } 
       else{
        resultado.innerHTML = `<p>Ensira valores validos</p>`
       }


       
    }
   
    form.addEventListener('submit', previneevento)
}
enviar()