export const printObject = (argument: any)=> {
    console.log(argument);
    
}

//agregando este simbolo <nombre> significa que es una funcion generica
export function genericFunction <T> (argument:T){
    return argument;
}

/* export const  genericFunctionArrow = <T> ( argument:T) => {
    return argument
}
 */