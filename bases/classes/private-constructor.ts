(()=>{

class Apocalipsis{

    static intance: Apocalipsis;
    private constructor(public name: string){}
    
  static callApocalipsis(): Apocalipsis {
    if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el unico');
    }

    return Apocalipsis.intance;
  } 
  changeName(newName:string):void{
    this.name = newName;
  }
}

const apocalipsis1 = Apocalipsis.callApocalipsis()
console.log(apocalipsis1.changeName('Xavier'));


})()