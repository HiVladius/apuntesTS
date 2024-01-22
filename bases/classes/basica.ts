(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
        return this.name
    }

    constructor(
      private nombre: string,
      private tema: string,
      public realName: string
    ) {}

   public bio(){
        return `${this.nombre} ${this.tema} ${this.realName}`;
    }
  }

//   const antman = new Avenger("Antman", "Antman theme", "Scott Lang");
// //   console.log(antman);

//   console.log(Avenger.getAvgAge());
  
})();
