// Objetivo: Mostrar el uso de argumentos opcionales en funciones
(() => {
  // El argumento lastName es opcional
  // se usa el signo de interrogacion para indicar que es opcional

  const fullName = (firstName: string, lastName?: string): string => {
    // El argumento lastName es opcional
    return `${firstName} ${lastName || "No lastName"}`;
  };

  const name = fullName("Tony"); // Se debe enviar los argumentos requeridos
  console.log({ name });
})();
