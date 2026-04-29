const personagens = require("./personagens");
const { rolarDado, tipoPista } = require("./utils");

// função de corrida
async function corrida() {
  console.log("🏁 Corrida iniciando...\n");

  for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`--- Rodada ${rodada} ---`);

    const pista = tipoPista();
    console.log("Tipo de pista:", pista);

    const p1 = personagens[0];
    const p2 = personagens[1];

    const dado1 = rolarDado();
    const dado2 = rolarDado();

    let atributo1 = 0;
    let atributo2 = 0;

    if (pista === "reta") {
      atributo1 = p1.velocidade;
      atributo2 = p2.velocidade;
    } else if (pista === "curva") {
      atributo1 = p1.manobrabilidade;
      atributo2 = p2.manobrabilidade;
    } else {
      atributo1 = p1.poder;
      atributo2 = p2.poder;
    }

    const total1 = dado1 + atributo1;
    const total2 = dado2 + atributo2;

    console.log(`${p1.nome}: ${total1}`);
    console.log(`${p2.nome}: ${total2}`);

    if (total1 > total2) {
      p1.pontos++;
      console.log(`${p1.nome} ganhou a rodada!\n`);
    } else if (total2 > total1) {
      p2.pontos++;
      console.log(`${p2.nome} ganhou a rodada!\n`);
    } else {
      console.log("Empate!\n");
    }
  }

  // resultado final
  console.log("🏆 Resultado final:");
  console.log(`${personagens[0].nome}: ${personagens[0].pontos}`);
  console.log(`${personagens[1].nome}: ${personagens[1].pontos}`);

  if (personagens[0].pontos > personagens[1].pontos) {
    console.log("Vencedor: Mario!");
  } else if (personagens[1].pontos > personagens[0].pontos) {
    console.log("Vencedor: Luigi!");
  } else {
    console.log("Empate geral!");
  }
}

corrida();