// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

const contar = ( heroes:string[]):number => {
  return heroes.length;
}

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar:boolean = true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas:string[] ):string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, boolean:boolean, arreglo:string[] ):void=> {}


// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[])=>void;

noHaceNadaTampoco = noHaceNada


//!¿La siguiente función válida en TypeScript?
//*Explicitamente estamos diciendo que debe de retornar un STRING, y no regresamos nada... recordemos que el console.log, es una impresión a consola y no un retorno
/* function saludar():string{
 
  console.log("Hola mundo!");
 
} */

//!Que imprime este codigo 

function saludar(mensaje:string = "mundo"){
 
  console.log("Hola " + mensaje);
 
}
 
saludar("hola");

//*Hola hola


//*Una función es a su vez, un tipo en TypeScript