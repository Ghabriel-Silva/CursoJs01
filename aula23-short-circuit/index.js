function falaoi (){
    return'oi';
}
const vaiexecutar = '';
console.log(vaiexecutar && falaoi())


console.log(0 || false || null ||  'Gabriel' || true); //retorna o primeiro valor true o que vem depois não importa.


const semcor = null;
const escolhacor = semcor || 'verde';
console.log(escolhacor); // ira imprimir verde pois só retornara false se o dois opradores  forem false.

const a = 0 ;
const b =  null;
const c = false;
const d = 'false'; 
const f = '';
const g = NaN;
console.log(a || b|| c|| d || f || g) //Retornara o valor de d poois o mesmo não e um valor false pois é uma string.
