const trad = require("./traducir");

console.log("Ingrese la frase:");

const stdin = process.openStdin();

let traduccion = stdin.addListener("data", (data) => {
  console.log("La traduccion es: " + trad.traducirFrase(data.toString()));
});
