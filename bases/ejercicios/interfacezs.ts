// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)


interface Car {
encender:boolean;
velocidadMaxima:number;
 acelerar():void;
}

const conducirBatimovil = ( auto:Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?:boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn{
  (ciudaddanos:string[]): number
}
const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersoanaInterface {
  edad:number;
  estadoCivil: string;
  nombre:string;
  sexo: string;
  imprimirBio():void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersoanaInterface{
  public edad:number;
  public estadoCivil: string;
  public nombre:string;
  public sexo: string;
  imprimirBio(){
    
  }
}