import { getPokemon } from "./genericos/get-genericos";


getPokemon(151)
  .then(pokemon => console.log(pokemon.sprites.front_shiny))
  .catch(err => console.log(err))
  .finally(() => console.log("Finalizó"));
