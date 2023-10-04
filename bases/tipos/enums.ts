(()=>{

enum AudioLevel {
min=1,
medium,
max=10,

}

let currentAudio:AudioLevel = AudioLevel.max;

console.log(currentAudio);
console.log(AudioLevel);




}) ()

//* Ejemplo: que valor tendria la enumeracion con valor en la letra "C"

enum enumeracion{
    a,
    b,
    c,
    d
}

//! seria 2

//*Ejemplo 2 Que valor tendria d

enum enumeration {
    a=10,
    b,
    c=9,
    d

}
//! Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.