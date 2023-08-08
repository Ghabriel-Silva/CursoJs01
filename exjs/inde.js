const nome = 'Gabriel';
const sobrenome ='Ribeiro';
const peso = 78;
const altura = 1.67;
const anoatual = 2023;
const anonascimento = 2001;
let idadeatual; 
let valortotal;

idadeatual = anoatual - anonascimento;
valortotal  = peso / (altura*2);

console.log('Meu nome é', nome + ' ' + sobrenome + ' ', 'nasci em'+ ' ', anonascimento);
console.log('Tenho um peso de', peso,' kg e uma altura de', altura)
console.log(`e minha massa corporal é ${valortotal} e tenho ${idadeatual} anos.`)