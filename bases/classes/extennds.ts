(() => {

  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("constructor llamado");
    }

    //!con protected puedo acceder a classes y propiedaddes que extiendad de Avenger
    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }
class Xmen extends Avenger {


constructor (
    name:string,
    realName:string, 
    public isMutant:boolean
){
    super(name, realName)
    console.log('Constructor Xmen llamado');
}
getFullnameDesdeXmen(){
    //!Aqui accedo por que esta clase extends de Avenger
    console.log(super.getFullname);
    
}
}

const wolverine = new Xmen ( 'Wolverine', 'Logan', true)
console.log(wolverine);
wolverine.getFullnameDesdeXmen();
//*Aqui no puedo acceder a getFullname por que esta fuera 

})();
