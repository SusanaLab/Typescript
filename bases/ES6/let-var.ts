(()=>{
// como typescript sabe que es una constante va a saber que tipo de dato es, posiblemente no estan necesario agregar el tipo de dato ya que no cambia
const NOMBRE = 'susana'

const heroe ={
    a:1,
    b:2
};

heroe.b = 100;

console.log('let');

}) ()


//! El IF, crea un nuevo scope o ámbito de la variable, por lo que si es válido.
const numero:number = 10;
 
if( numero >0 ){
 
  const numero:number = 10;
 
}

//!¿Qué valor tiene el objeto "THIS"?
//Mantine el puntero de la referencia al "THIS" antes de entrar a la funcion

//& let funcion = () =>{}; Declara una funcion que no hace nada