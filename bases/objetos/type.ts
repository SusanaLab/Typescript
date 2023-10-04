(()=>{
//Asi se puede asignar el tipo de dato a diferentes objetos el mismo

type Hero={
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

//console.log(flash.getName());


})()