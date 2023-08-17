 //           012345678
let umtext = 'ola certo';
console.log(umtext.charAt(5)); //Retorna o caractere na possiçã desejada
console.log(umtext.concat(' texto' , ' escrito' , ' aqui' ));
console.log(umtext+ ' texto escrito aqui');
console.log(`${umtext} texto escrito aqui`);

console.log(umtext.indexOf('a')); //Retorna o valor do inicio do indice da palavra desejada.
console.log(umtext.lastIndexOf('a')) // Retorna o valor do final do indice da palavra desejada
console.log(umtext.replace(/e/g, '#')) // substiui a letra desejada por outra desejada.
console.log(umtext.length) // retorna o numeros de caracteres da string.
console.log(umtext.slice(1, 4)) //retorna a parte desejada da string.
console.log(umtext.slice(-2)) //retorna a parte desejada da string, pegando do final.
console.log(umtext.split(' ')) //Permite separar as palavras das strings.
console.log(umtext.toUpperCase()) //Trasforma todas palavras em maisculas.
console.log(umtext.toLowerCase()) //trasforma todas palavras em minusculas. 



 