"use strict";
(() => {
    let myCustomVariable = 'susana';
    console.log(typeof myCustomVariable);
    //!output tipo string
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    //!output tipo number
    myCustomVariable = {
        name: 'SU',
        age: 27,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    //!output tipo object
    console.log(myCustomVariable);
})();