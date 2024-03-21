function traducirFrase(frase) {
  let traduccion = "";
  const vocal = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);

    if (vocal.includes(letra.toLowerCase())) {
      traduccion += letra + "p" + letra.toLowerCase();
    } else {
      traduccion += letra;
    }
  }
  return traduccion;
}

module.exports = {
  traducirFrase,
};
