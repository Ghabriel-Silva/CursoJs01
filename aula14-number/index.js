//Mais sobre nunber

let num1 = 10.455;
let num2 = 8;

console.log(num1.toString()+num2) // converte um número em sua forma de string correspondento, no caso une o nun1 e o num2, a variavel só nesta parte vira um string.

console.log(num1.toString(2)) // Desta  maneira a propiedade apresenta o numero binario.

console.log(num1.toFixed(2)) // Esta propiedade é usado para formatar um número de ponto flutuante e convertê-lo em uma string com uma quantidade específica de casas decimais, não altera o valor real da variavel. 

console.log(Number.isInteger(num2)) // Esta função ira me retornar se o valor é inteiro sendo assim true ou false.
//      //           //        //                    //                      //                   //     
let temp = num1 *'ola, mundo'// isto me retorna um NaN, que é o not a number.
console.log(temp) // resultado = NaN
console.log(isNaN(temp)) // Esta função me retorna se o numero da expreção é um numero ou não.

//      //           //        //                    //                      //                   //

//Corrigindo a imprecisão

// O IEEE 754-2008 é uma maneira que os computadores usam para lidar com números que têm partes decimais, como 3.14. Em vez de guardar os números exatamente como nós escrevemos, os computadores usam uma forma mais complicada para guardar esses números em binário (zeros e uns).
//Essa forma mais complicada tem algumas consequências:

let num3 = 0.7;
let num4 = 0.1;

num3+= num4; //0.08 valor esperado
num3+= num4; //0.09 valor esperado
num3+= num4;//1.00  valor esperado Mesma coisa que isto num3 = num3 + num4
console.log(num3); // Valor esperado seria 0.08, mais não é isto que acontece, pois como visto acima a uma certa imprecisão quando trabalhamos com number de numeros flutuantes.
console.log(num3.toFixed(2)) // aparentemente a função resolvera a imprecisão do number, mais não ira isso pq se utilizarmos a função isInteger não ira retornar um valor true para numero inteiro.
console.log(Number.isInteger(num3)) //Me retorna false para number inteiro
console.log(parseInt(num3.toFixed(2))) //corrige o erro de imprecisão do numero.
console.log(Number(num3.toFixed(2))) // Outra forma corrige o erro de imprecisão do numero.

//      //           //        //                    //                      //                   //
//Podemos utilizar contas para corrigir a imprecisão.

let num5 = 0.9;
let num6 = 0.1;

num5 = ((num5*100) + (num6*100)) / 100 ;
console.log(num5) // Valor retornado é 1