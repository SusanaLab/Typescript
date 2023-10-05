(()=>{
//&Esta seria la forma digamos mas explicita de ver
class Avenger {
    private name: string;
    public team: string;
    public realName:string;
    static avgAge:number = 35;

constructor ( name:string, team:string, realName?:string){
    this.name =name;
    this.name= team;
    this.realName = realName;
}
}

const antman:Avenger = new Avenger('Antman', 'Capitan');
console.log(antman);

//!estoy teniendo accedo a la propiedades public las demas no por que son privadas 
// console.log(antman.realName);

//! de esta forma logro acceder a propiedades estaticas
// console.log(Avenger.avgAge);


//&Esta es la forma corta



class Hero {

    static avgAge:number = 35;
    static getAve(){
        return this.name;
    }

    constructor( 
    private  name :string,
    private team: string,
    public realName?: string,
  
 ){}

//!Este es un metodo
public bio(){
 return `${this.name} (${this.team})!!!`
}

}

const flash:Hero = new Hero('Antman', 'Capitan', 'super');
console.log(flash)
//!Aqui puedo acceder a las propiedades de la clase por que son  estaticas de esta forma
console.log(Hero.getAve)

  })()
