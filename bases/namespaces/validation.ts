// Los namespaces son una forma de agrupar código relacionado en un contenedor único.

namespace Validation {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf()) ? false : true;
  };

  
}

console.log(Validation.validateText("Hola"));
