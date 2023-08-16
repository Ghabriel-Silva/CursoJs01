let nome = prompt('Digite seu nome completo.');
document.body.innerHTML = `Seu nome é: ${nome}<br/>`;
document.body.innerHTML += `Seu nome tem letras: ${nome.length}<br/>`; 
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt('2')}<br/>`;
document.body.innerHTML += `Qual o Primeiro indice da letra no seu nome?${nome.indexOf(nome)}<br/>`
document.body.innerHTML += `Qual o ultimo indice da letra no seu nome?${nome.lastIndexOf(nome)}<br/>`;
document.body.innerHTML += `Qual são as 3 ultimas palavras do seu nome?${nome.slice(-3)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas:${nome.toUpperCase()}<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas:${nome.toLowerCase()}<br/>`;

