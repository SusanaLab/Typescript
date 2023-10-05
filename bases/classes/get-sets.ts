(() => {
  // Definición de la clase Avenger
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log('constructor llamado');
    }

    // Método protegido para obtener el nombre completo del Avenger
    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  // Definición de la clase Xmen que hereda de Avenger
  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName); // Llama al constructor de la clase Avenger
      console.log('constructor Xmen llamado');
    }

    // Propiedad fullName que combina el nombre y el nombre real del Xmen
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // Setter para la propiedad name, que solo recibe un argumento
    set fullName(name: string) {
      this.name = name;
    }

    // Método para obtener el nombre completo
    getFullnameDesdeXmen() {
      console.log(super.getFullname()); // Llama al método protegido de Avenger para obtener el nombre completo
    }
  }

  // Creación de una instancia 
  const wolverine = new Xmen('wolverine', 'logan', true);

  // Cambio del nombre del Xmen utilizando el setter
  wolverine.fullName = 'susana';

  // Muestra el nombre completo del Xmen utilizando la propiedad fullName
  console.log(wolverine.fullName);
})();
