//* Desestructuración de objetos y arreglos

(() => {
  type Luchadores = {
    activos: boolean;
    clave: string;
    nombre: string;
    poder: number;
  };
  const avenger: Luchadores = {
    activos: true,
    clave: "Capitan America",
    nombre: "Steve",
    poder: 2000,
  };

  // Desestructuración de objetos
  const printAdvenger = ({ clave, ...resto }: Luchadores) => {
    console.log(clave, resto.activos);
    
  }


  const avengersArr: string[] = ['Cap', 'Ironman', 'Thor'];
  const[bob,sponge,] = avengersArr; // se puede destructurar con un nombre diferente a la variable
  console.log({bob,sponge});
  
 
})();
