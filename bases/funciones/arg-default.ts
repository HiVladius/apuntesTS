// Argumentos por defecto en funciones en TypeScript
// se usa el signo de interrogación para indicar que el argumento es opcional

(() => {
  const fullName = (
    firstName: string,
    lastName?: string, // ? -> optional argument
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "No last name"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "No last name"}`;
    }
  };

  const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
