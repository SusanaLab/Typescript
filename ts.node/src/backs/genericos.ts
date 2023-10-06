
import { printObject, genericFunction } from "../generics/generics";
import { Villain, Hero } from "../interfaces";



const deadpool = {
    name:'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 139
}


console.log(genericFunction<Villain>(deadpool).dangerLevel);





/* //! Esto funciona gracias a la funcion generica que permite deacuerdo al tipo de dato que yo paso que identifique los metodos que puedo usar
const name: string = 'susana';

console.log(genericFunction(3.3456).toFixed(3));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunction(new Date()).getDate()); */



//!importaciones
/* import { Hero } from "./classes/Hero";
//import { Hero as superhero } from "./classes/Hero";
//import * as HeroClasses from "./classes/Hero";
import { Hero4 } from '../../bases/namesspaces/curso-typescript-fin-seccion-10/src/classes/Hero';

const ironman = new Hero('Ironman', 1, 55);
console.log(ironman);

console.log('Hola Mundo!');

 */
