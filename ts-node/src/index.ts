import { getPokemon } from "./genericos/get-genericos";


getPokemon(200)
  .then(pokemon => console.log(pokemon.sprites.front_default))
  .catch(err => console.log(err))
  .finally(() => console.log("Finalizó"));
