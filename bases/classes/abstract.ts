(()=>{
//!las clasess abstractas sirven para crear otras classes o pra asegurarce de que otras clases implementen lo que se necesita

abstract class Mutante {
    constructor(
        public name:string,
        public realName:string
    ){}
}
class Xmen extends Mutante{
    salvarMundo(){
        return 'Mundo a salvo!'
    }
}
class Villian extends Mutante{

    conquistarMundo (){
        return 'conquistar mundo'
    }
}

const wolverine = new Xmen ('wolverine', 'logan');
const magneto = new Xmen ('magneto', 'magnus');

console.log(wolverine);
console.log(magneto);

const printName = (character:Mutante)=>{
    console.log(character.realName);
    
}


})()