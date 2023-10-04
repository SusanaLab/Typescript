"use strict";
(() => {
    /* const numbers = [1,2,3,4,5,'6',7,8];
    numbers.push(11)
    console.log(numbers);
    
     */
    //*Aqui especifico que tipo de valores podrian agregarce al array 
    const numbers = [1, 2, 3, 4, 5, 7, 8];
    numbers.push(11);
    console.log(numbers);
    //
    const villians = ['omega', 'dormammu', 'duende verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
