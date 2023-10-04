"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, boolean, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//!¿La siguiente función válida en TypeScript?
//*Explicitamente estamos diciendo que debe de retornar un STRING, y no regresamos nada... recordemos que el console.log, es una impresión a consola y no un retorno
/* function saludar():string{
 
  console.log("Hola mundo!");
 
} */
//!Que imprime este codigo 
function saludar(mensaje = "mundo") {
    console.log("Hola " + mensaje);
}
saludar("hola");
//*Hola hola
//*Una función es a su vez, un tipo en TypeScript
