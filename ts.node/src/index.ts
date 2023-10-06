import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');

console.log(charmander);


/* import { getPokemons } from "./generics/get-pokes";
import { Pokemon } from './interfaces/pokemon';

getPokemons(4)
.then (Pokemon => console.log(Pokemon.sprites.front_default) )
.catch (error => console.error(error))
.finally (()=> console.log('fin de getPokemon'))
 */


