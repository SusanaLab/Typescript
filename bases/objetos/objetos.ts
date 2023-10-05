(()=>{
//* objetos en typescript

//*No importa la posicion de las propiedades en el caso de un objeto
//*Aqui defino que tipo de dato es cada uno de los que se encuentran en el objeto
let flash:{name:string, age?:number, powers:string[], getName?: () => string} ={

    name:'barry',
    age:23,
    powers:['super', 'velocidad', 'viajar']
}

let superman:{ name:string, age?:number, powers:string[], getName?: () => string} ={
    name:'clark',
    age:30,
    powers:['super fuerza'],
}

//console.log(flash.getName());


})()

//* Esta linea dice que es opcional recibir un argumento y que debe devolver un string:   getName?: () => string
//& Si es posible agregar métodos dentro de los tipos 