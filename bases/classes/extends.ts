//* Objetivo: Mostrar el uso de la herencia en typescript

(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
    //   console.log("Se ejecuto el constructor");
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    //   console.log("Se ejecuto el constructor de Xmen");
    }

    //* Getter y Setter son funciones que se comportan como propiedades de la clase
    get fullName() { 
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
        if (name.length < 3) {
            throw new Error("El nombre debe ser mayor a 3 caracteres");
        }
      this.name = name;
    }

    getFullNameDesdeXmen() {
    //   console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
//   console.log(wolverine.fullName);

    // wolverine.fullName = "Ciclope";
    // console.log(wolverine.fullName);
  // wolverine.getFullNameDesdeXmen();
})();
