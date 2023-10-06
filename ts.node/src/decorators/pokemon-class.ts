//&es una característica que te permite añadir metadatos o funcionalidad adicional a clases, métodos, propiedades y otros elementos

// Esta función es un decorador que toma una clase (constructor) como argumento
function printToConsole(constructor: Function) {
    // Imprime la función constructora en la consola
    console.log(constructor);
}

//*Factory decorators
const  printToConsoleConditional= (print:boolean = false): Function =>{
if (print) {
    return printToConsole
} else {
    return ()=> {}
}

}

// Aplicamos el decorador a la clase Pokemon
@printToConsoleConditional(false)

export class Pokemon {
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}
}


