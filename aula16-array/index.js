// Um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Esses valores podem ser de qualquer tipo, como números, strings, objetos e até mesmo outras arrays. Os arrays em JavaScript são indexados, o que significa que cada valor dentro do array é associado a um índice numérico, começando em 0 para o primeiro elemento e seguindo em diante.

const alunos = ['gabriel', 'silva', 'mateus', 'gabriel', 'silva', 'mateus'];
console.log(alunos);



/*

função push adiciona um elemento no final do array geralmente utilizamos  mais do que adicionar no começo:

alunos.push('Rafael');
alunos.push('jose');

*/

/*

função unshift adiciona um elemento no começo no array
alunos.unshift('jurema')

*/ 

/*

Para remover um elemento do início de um array em JavaScript, você pode usar o método shift(). O método shift() remove o primeiro elemento do array e retorna esse elemento removido.
 
const removido = alunos.shift();      Variavel recebe valor do elemento removido
console.log(alunos);                  Mostra todos elementos do array   menos o removido
console.log(removido);                mostra o elemento removido.

*/

/*

Para remover um elemento do final de um array em JavaScript, você pode usar o método pop(). O método pop() remove o último elemento do array e retorna esse elemento removido. Aqui está um exemplo de como usar o método pop(): 

let  removido = alunos.pop();    variavel recebera valor removido
console.log(removido)            mostrara o elemento removido
console.log(alunos)                mostrara todos elementos do array fora o removido.

/*

Para remover um elemento de uma posição específica de um array em JavaScript, você pode usar o método splice(). O método splice() permite remover elementos de um array, bem como adicionar novos elementos no lugar dos elementos removidos. Ele aceita dois argumentos obrigatórios: o índice da posição a partir da qual você deseja remover elementos e o número de elementos que deseja remover.
Se você quiser remover vários elementos a partir de uma posição específica, basta passar o número correto de elementos como segundo argumento do método splice(). Por exemplo, meuArray.splice(1, 3) removeria três elementos a partir do índice 1.

const alunos = ['gabriel', 'silva', 'mateus', 'gabriel', 'silva', 'mateus'];
console.log(alunos);                           mostrara todos elementos do array
const meuarry = alunos.splice(2,1)             função ira remover a partir do indice 2 do meu array o primeiro indice
console.log(alunos);                           mostara o valor sem o elemento removido

/*

alunos[1] ='Gabriel'; // array no indicice 1  recebendo o valor Gabriel.

*/


/*


Neste exemplo vemos que podemos manipular o array e chamar determinados dados em determinados indices.
console.log(alunos[0])    
console.log(alunos[2])
console.log(alunos[1])


*/


