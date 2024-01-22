//* El uso de una clase abstracta es para que no se pueda instanciar,
//* sino que se debe heredar de ella
//* Las clases abstractas se deben de alimentar de las clases hijas para que
//* puedan ser instanciadas

(() => {
  abstract class Mutante {
    constructor(
      public nombre: string,
      public apellido: string,
      public poder: string
    ) {}
  }
  //* Las clases hijas deben implementar los metodos abstractos
  class Xmen extends Mutante {
    salvarElMundo() {
      return "El mundo sera salvado";
    }
  }

  class Villano extends Mutante {
    conquistarElMundo() {
      return "El mundo sera conquistado";
    }
  }

  const wolverine = new Xmen("Logan", "Wolverine", "Regeneracion");

  const magneto = new Villano(
    "Magneto",
    "Magnus",
    "Controlar metales"
  );

//   console.log(wolverine.salvarElMundo());
//   console.log(magneto.conquistarElMundo());

const printName = (character: Mutante) => {
    // console.log(character.nombre);
}

printName(wolverine);
printName(magneto);

})();
