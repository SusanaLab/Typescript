"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
//* Ejemplo: que valor tendria la enumeracion con valor en la letra "C"
var enumeracion;
(function (enumeracion) {
    enumeracion[enumeracion["a"] = 0] = "a";
    enumeracion[enumeracion["b"] = 1] = "b";
    enumeracion[enumeracion["c"] = 2] = "c";
    enumeracion[enumeracion["d"] = 3] = "d";
})(enumeracion || (enumeracion = {}));
//! seria 2
//*Ejemplo 2 Que valor tendria d
var enumeration;
(function (enumeration) {
    enumeration[enumeration["a"] = 10] = "a";
    enumeration[enumeration["b"] = 11] = "b";
    enumeration[enumeration["c"] = 9] = "c";
    enumeration[enumeration["d"] = 10] = "d";
})(enumeration || (enumeration = {}));
//! Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.
