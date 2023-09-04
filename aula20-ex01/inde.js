function meuescopo(){
   const form =  document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function fuctionqualquer (evento){  
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
      
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>nome: ${nome.value}, sobrenome: ${sobrenome.value} peso: ${peso.value} altura: ${altura.value} </p>`
    };

    form.addEventListener('submit', fuctionqualquer); //Aqui esta acontecendo o seguinte estou falando para minha variavel form adicinar um escutador de evento, isso faz com a função Addeventlistener,  no caso o evento escolhido é o submite('enviar'), para isso também criei uma função chamda 'functionqualquer', essa vai desempenha o papel de previnir o evento de enviar.
   }
 
meuescopo()