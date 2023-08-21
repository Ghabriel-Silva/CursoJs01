/*getElementById --> É método utilizado para manipular elementos html com base no javascript, funcionando da seguinte forma,  este referencia o elemento html com o javascript desta forma conseguimos acesssar e manipular o HTml da pagina com o Javascript.
*sintase basica é a seguinte ---- const variavel-recebe = getElementById('id')---- ou seja  a minha variavel-recebe, recebera o valor do elemento Id que é esta referenciando o html.


*innerHTml--> Permite manipular e modificar elementos html, esse elemeto esta presente em objetos don(Modelo de Obejto de Documento) e permite que você modifique o elemento interno do Html através de código.
*/




const numero = Number(prompt('Digite um number!'));
const numerotitulo = document.getElementById('Numero-text');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = numero; 

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é um numero inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Este numero é um Nan? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
