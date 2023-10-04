"use strict";
(() => {
    //*El signo ? en un argumento significa que es opcional poner el valor
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
