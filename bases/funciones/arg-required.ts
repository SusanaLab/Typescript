(()=>{
//*Especificar que tipo de dato son cada uno de los argumentos, ademas de decir que deberia retornar la funcion
//!Ambos argumentos seran reuqridos de lo contrario habra error 
const fullName = (firstName:string, lastName:string) :string =>{
    return  `${firstName} ${lastName}`;

}
/* 
let noName:string;
const name = fullName (noName, 'Stark'); */
const name = fullName ('Tony', 'Stark');
console.log({name});

})()