"use strict";
(() => {
    //* cuando  se quieren recibir mas argumentos y no se han especificado el tipo se puede hacer con los ...
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join('')}`;
    };
    const name = fullName('Tony', 'Stark', 'clark');
    console.log({ name });
})();
