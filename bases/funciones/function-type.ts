(() => {
  const addNumbers = (a: number, b: number): number => a + b;

  const greet = (name: string): string => `Hola ${name}`;

  const saveTheWorld = () => "El mundo esta salvado";

  // *  let myFunction: (a:number, b:number )=> number; // con esto le decimos que la funcion debe recibir dos parametros de tipo number y que debe retornar un number
  // *  let myFunction: (a: string) => string; // con esto le decimos que la funcion debe recibir un parametro de tipo string y que debe retornar un string
  let myFunction: () => string; // * con esto le decimos que la funcion debe recibir un parametro de tipo void y que debe retornar un void

  // *  myFunction = 10;
  // * console.log(myFunction);

  // *  myFunction = addNumbers;
  // * console.log(myFunction(1, 2));

  // * myFunction = greet;
  // * console.log(myFunction("Tony"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
  