// Objetivo: Mostrar el uso de argumentos requeridos en funciones en TS 
(()=>{
    

  const fullName = (firstName: string, lastName: string): string => { // Se puede especificar el tipo de dato que retorna la función
    return `${firstName} ${lastName}`;
  }

    const name = fullName('Tony', 'Stark'); // Se debe enviar los argumentos requeridos
    console.log({name});



})();