"use strict";
(() => {
    //% Escribir el tipo de dato que es el que deberia devolver una funcion
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
