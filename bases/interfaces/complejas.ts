(()=>{
//! las interfaces van ordenandoce de general a lo particular
//las interfaces con crean instancias.

//implements palabra reservada podemos implementar una interface en una clase

// El objetivo de una implementacion de una interface en una clase es que nos obliga a que por lo menos tenga las propiedades y metodos, muestra la clase que implemente la interfaz.


interface Client{
    name:string;
    age?: number;
    address: Address;
    getFullAddress(id:string):string;
}

interface Address{
    id:number;
    zip?: string;
    city: string;
}

    const client: Client ={
        name:'susana',
        age:27,
        address:{
            id:125,
            zip:'KY2 SUD',
            city:'Ottawa'
            },
            getFullAddress(id:string){
                return  this.address.city;
            }
        }

    const client2: Client ={
        name:'ana',
        age:28,
        address:{
            id:127,
            zip:'KY2 SUD',
            city:'Suiza'
            }, 
            getFullAddress(id:string){
                return  this.address.city;
            }
        }
    


})()