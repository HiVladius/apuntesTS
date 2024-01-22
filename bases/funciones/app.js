(()=>{
    "use strict";
const sumar = (a, b) => a + b;
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
function saludar(mensaje = "mundo") {
    console.log("Hola " + mensaje + "!");
}
saludar();
//# sourceMappingURL=app.js.map
})()