// sorteia número de 1 a 6
function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // sorteia tipo de pista
  function tipoPista() {
    const pistas = ["reta", "curva", "confronto"];
    return pistas[Math.floor(Math.random() * pistas.length)];
  }
  
  module.exports = { rolarDado, tipoPista };