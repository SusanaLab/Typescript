(()=>{
//!el type no puede expandirse y la interfaz si 
//como si la interfaz se asegurara que tuviera esas caracteristicas 
//son como contratos que nos obligan a respetar las reglas que establezcamos
interface Hero{
name:string
 age?:number
  powers:string[]
   getName?: () => string
}


let flash:Hero ={

    name:'barry',
    age:23,
    powers:['super', 'velocidad', 'viajar']
}

let superman: Hero = {
    name:'clark',
    age:30,
    powers:['super fuerza'],
    getName() {
      return this.name;
    },
}



})()