namespace Validations{
//Es una característica que permite organizar y agrupar código relacionado en un espacio de nombres separado para evitar colisiones de nombres y mejorar la modularidad de tu código
    const validateText = (text:string):boolean =>{
        return (text.length>3)? true:false;
    }

    const validateDate = (myDate:Date):boolean =>{
        return (isNaN(myDate.valueOf()))
        ?false:true;
    }

}