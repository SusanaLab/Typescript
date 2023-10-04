(()=>{

const fullName = (firstName: string, lastName?:string, upper: boolean = false): string=>{

if (upper) {
    return  `${firstName} ${lastName|| '---'}`.toUpperCase();

} else {
    return  `${firstName} ${lastName|| '---'} `
}

}

const name = fullName('tony', 'stark', true);

console.log({name});

})()
//Es un parámetro por defecto
//Es un parametro que es necesario en la funcion pero puede ser enviado o no al momento de ser llamada