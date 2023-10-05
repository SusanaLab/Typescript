(()=>{
//!creo el tipo para cada uno de  los datos 
type Avengers ={
     nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}


const avengers ={
    nick: 'Samuel',
    ironman:'Robert',
    vision:'paul',
    activo:true,
    poder:1500
}

//const {poder, vision}= avengers
//console.log(poder.toFixed(2), vision.toUpperCase())
//!usando deestructuracion voy a poder acceder a lo que tiene el objeto
const printAvenger = ({ironman, ...resto}:Avengers)=> {
    console.log(ironman, resto);
}
//printAvenger(avengers)


const avengersArr:any[]= ['Cap. America', true, 150.14];

const [capitan, ironman, unNumero ]= avengersArr;
console.log({ironman, capitan});





})()