(() => {
  class Apocalipsis {
    //? static para que sea un atributo de la clase y no de la instancia
    static instance: Apocalipsis; 
    
    //* Constructor privado para que no se pueda instanciar la clase
    private constructor(public name: string) {} 
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(
          "Soy Apocalipsis... el único!!!"
        );
      }
      return Apocalipsis.instance;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  //   const apocalipsis = new Apocalipsis("En Sabah Nur");
  // console.log(apocalipsis);
})();
