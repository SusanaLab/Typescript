//*Funcion que usualmente termina con un error 

(()=>{
const error = (message:string): (never|number)=> {

if (false) {
throw new Error (message)
}

return 1;

}

error('ayuda')
console.log('hello world');


})()