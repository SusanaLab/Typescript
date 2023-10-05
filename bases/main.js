"use strict";
(() => {
    //&Esta seria la forma digamos mas explicita de ver
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.name = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    //!estoy teniendo accedo a la propiedades public las demas no por que son privadas 
    // console.log(antman.realName);
    //! de esta forma logro acceder a propiedades estaticas
    // console.log(Avenger.avgAge);
    //&Esta es la forma corta
    class Hero {
        static getAve() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        //!Este es un metodo
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    Hero.avgAge = 35;
    const flash = new Hero('Antman', 'Capitan', 'super');
    console.log(flash);
    //!Aqui puedo acceder a las propiedades de la clase por que son  estaticas de esta forma
    console.log(Hero.getAve);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("constructor llamado");
        }
        //!con protected puedo acceder a classes y propiedaddes que extiendad de Avenger
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullnameDesdeXmen() {
            //!Aqui accedo por que esta clase extends de Avenger
            console.log(super.getFullname);
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();
    //*Aqui no puedo acceder a getFullname por que esta fuera 
})();
(() => {
    // Definición de la clase Avenger
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor llamado');
        }
        // Método protegido para obtener el nombre completo del Avenger
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    // Definición de la clase Xmen que hereda de Avenger
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName); // Llama al constructor de la clase Avenger
            this.isMutant = isMutant;
            console.log('constructor Xmen llamado');
        }
        // Propiedad fullName que combina el nombre y el nombre real del Xmen
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        // Setter para la propiedad name, que solo recibe un argumento
        set fullName(name) {
            this.name = name;
        }
        // Método para obtener el nombre completo
        getFullnameDesdeXmen() {
            console.log(super.getFullname()); // Llama al método protegido de Avenger para obtener el nombre completo
        }
    }
    // Creación de una instancia 
    const wolverine = new Xmen('wolverine', 'logan', true);
    // Cambio del nombre del Xmen utilizando el setter
    wolverine.fullName = 'susana';
    // Muestra el nombre completo del Xmen utilizando la propiedad fullName
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map