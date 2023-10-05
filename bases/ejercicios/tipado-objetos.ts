
//&los tipos sólo existen en TypeScript para brindarnos control sobre los objetosy en javascript no existen
// Objetos
type car = {
  carroceria: string,
  modelo:string,
  antibalas: boolean,
  pasajeros:number,
    disparar?: () => void;
}


const batimovils: car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: car= {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
   return this.carroceria
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano= { 
  nombre: string,
   edad :number, 
   mutante: boolean}

const villanos: villano[] =[{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 87,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles= {
poder:string;
 estatura:number;
}

const charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis= {
  lider:boolean;
   miembros:string[];
}

const apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
//aqui se toman los typos que se hicieron arriba para asignar ese valor abajo
let mystique:Charles |Apocalipsis;

mystique = charles;
mystique = apocalipsis;

//!Ejemplo con codigo no valido 
//& En la definición del tipo, estamos solicitando que el getNombre no reciba parámetros, pero en la implementación de la función, estamos utilizando un parámetro que nos dará problemas en TypeScript.

/* let batimovi: { getName:()=> string } = {
 
  getName(car){
    return car.toUpperCase();
  }
 
} */


//! Segundo ejemplo
//Este codigo no es valido por que una tupla debe estar su declaracion de tipo en orden cuando es una variable.
/* let mutable: [string | string[] ];
 
mutable = ["Hola","Hola"];
mutable = "hola"; */

//?Ejemplo de implementacion con multiples tipos, este ejemplo es correcto por que la variable puede tener como valor un numero o un arreglo de strings
let mutable: number | string[];
 
mutable = ["Adios","Hola"];
mutable = 123;
