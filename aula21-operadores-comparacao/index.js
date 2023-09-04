
/*console.log(10>12);
console.log(10>=10)
console.log(10<12);
console.log(10<=12);
console.log(10>12);*/

const nun1 = 10;  //nunber
const nun2 = '10'; //string
console.log(nun1 == nun2);  //Vai dizer que nun1 é igual a nun2, isso porque neste operador ele converte o tipo de dado de string para number, por isso retorna o valor "true".

const nun3 = 10;  //nunber
const nun4 = '10'; //string
console.log(nun3 === nun4); //checa tanto o tipo como o valor, neste caso usando o operador de igualdade estrita, ele checa a igualdade do tipo do dado e não muda isso ira me retorna um valor false. 

const nun5 = 10;  //nunber
const nun6 = '10'; //string
console.log(nun5 !== nun6);
