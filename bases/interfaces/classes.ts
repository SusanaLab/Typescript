//! implements hace que se force a que use la clase implemente lo que yo quiera de las clases 

interface Xmen {
    name:string;
    realName:string;
    mutantPower(id:number):string;

}

interface Human {
    age:number;
}

class Mutant implements Xmen, Human{
public age:number;
public name: string;
public realName: string;

mutantPower(id:number){
    return this.name + ''+ this.realName;
}

}