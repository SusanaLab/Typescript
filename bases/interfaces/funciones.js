(()=>{

//se puede asignar a una valiable el tipo de una interfaz

interface addTwoNumbers{
    (a:number, b:number):number;
}

let addNumbersFunction:addTwoNumbers;

addNumbersFunction = (a:number, b:number)=>{
    return 10;
}

})()