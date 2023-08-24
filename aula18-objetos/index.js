/*
Em JavaScript, um objeto é uma estrutura de dados que permite armazenar e organizar informações relacionadas. Um objeto pode ser entendido como uma coleção de pares chave-valor, onde cada chave (também chamada de propriedade) está associada a um valor específico. As propriedades em um objeto podem armazenar valores de diversos tipos, incluindo números, strings, outros objetos, funções e mais.*/

/*const pessoa = {
    nome:'Gabriel',
    idade: 10,
    peso: 80,
    cor:'pardo',
};
const pessoa1 = {
    nome:'ketty',
    idade: 25,
};
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.peso)
console.log(pessoa.cor)

console.log(pessoa1.nome)
console.log(pessoa1.idade)
 */
//O código visualmente fica grande, para resolver isto podemos criar uma função que crie objeto para facilitar a vida.
/*
function criapessoa( nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
    }
};

const pessoa1 = criapessoa( 'luiz', 'silva' , 15)
const pessoa2 = criapessoa('gabriel', 'silva', 22)
const pessoa3 = criapessoa('joão', 'roberto',20)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

*/
const pessoa = {
    nome:'Gabriel',
    sobrenome:'silva',
    idade: 5,
    
    fala(){
        console.log(`${this.nome} esta falando ok, ${this.idade}`);
    },
    incremento() {
        this.idade++
    }
};
pessoa.fala();
pessoa.incremento();
pessoa.fala();
pessoa.incremento()
pessoa.fala();
pessoa.incremento()
pessoa.fala();
pessoa.incremento()