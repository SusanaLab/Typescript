"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    //* puede ser asi o:
    isSuperman = (isBatman) ? true : false;
    console.log({ isBatman });
})();
