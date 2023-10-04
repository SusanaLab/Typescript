"use strict";
(() => {
    //Asi se puede asignar el tipo de dato a diferentes objetos el mismo
    let flash = {
        name: 'barry',
        age: 23,
        powers: ['super', 'velocidad', 'viajar']
    };
    let superman = {
        name: 'clark',
        age: 30,
        powers: ['super fuerza'],
        getName() {
            return this.name;
        },
    };
    //console.log(flash.getName());
})();
