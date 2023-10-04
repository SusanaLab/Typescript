(()=>{

const addNumbers = (a:number, b:number)=>a+b;
const greet = (name:string)=>`Hola ${name}`;
const saveTheWorld = ()=> `El mundo esta a salvo`


//! puedo definir que deberia de devolver la funcion
let myFunction:()=> string;

//* myFunction= 10;
//* console.log(myFunction);

//? myFunction = addNumbers
//? console.log(myFunction(1,2));

//? myFunction= greet;
//? console.log(myFunction('susana'));

myFunction = saveTheWorld
console.log(myFunction());

})()