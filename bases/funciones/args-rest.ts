(()=>{
//* cuando  se quieren recibir mas argumentos y no se han especificado el tipo se puede hacer con los ...
const fullName = (firstName:string, ...restArgs:string[]) :string =>{
    return  `${firstName} ${restArgs.join('')}`;

}

const name = fullName ('Tony', 'Stark', 'clark');
console.log({name});

})()