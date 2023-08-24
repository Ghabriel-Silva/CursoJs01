/*                              fuction em js
*  Uma função em JavaScript é um bloco de código nomeado que executa uma tarefa específica quando é chamado.
*  As funções segue as mesma regras de uma declaração de variavel.
*  Podemos guarda o valor que a função retorna dentro de uma 
 */

/*function saudacao(nome){     //Neste exemplo a funçao saudação tem o parametro 'nome', quando coloco o nome 'gabriel', dentro da função saudação esse valor  vai para fução parametro.
 
 return `Bom dia ${nome}` ;
} 
const variavel = saudacao('gabriel');
console.log(variavel)
*/

function soma(a = 5,b= 1) {
  const resultado = a+b;
  return resultado;
}
 const resultado =(soma(4,1));
 console.log(resultado);

//tudo que Esta abaixo de return, nao sera execultado.
//podemos colocar valores padrões para a função para se por acaso não coloacar nenhum valor, terá um valor padrão para ser chamado.
//Podemos jogar uma função de uma variavel, 

const raiz = function(n) {
    return n + 5;
};
console.log(raiz(9));
console.log(raiz(5));
console.log(raiz(5));

//podemos utilizar uma fução simpilicada e pequenas
//Uma função simplificada em JavaScript pode ser criada usando a sintaxe de função de seta (arrow function). Essa sintaxe é uma forma mais concisa de escrever funções em comparação com a sintaxe tradicional function. As funções de seta são frequentemente usadas quando a função tem uma única expressão como corpo.


//const nomeDaFuncao = (parametro1, parametro2, ...) => expressao


const arrow = n => n * 10;
console.log(arrow(8)) // neste caso criei uma variavel que recebe o  valor da função 