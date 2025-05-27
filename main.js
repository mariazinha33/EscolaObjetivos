const botoes = document.querySelectorAll(".botao");
const abasConteudo = document.querySelectorAll(".aba-conteudo");

// Mostrar a primeira aba por padrão
abasConteudo[0].classList.add("ativo");
botoes[0].classList.add("ativo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    // Remove a classe ativo de todos os botões
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo ao botão clicado
    botoes[i].classList.add("ativo");

    // Remove a classe ativo de todas as abas
    for (let j = 0; j < abasConteudo.length; j++) {
      abasConteudo[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo à aba correspondente
    abasConteudo[i].classList.add("ativo");
  };
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-01T00:00:00");
const tempoObjetivo2 = new Date("2028-01-05T00:00:00");
const tempoObjetivo3 = new Date("2026-09-05T00:00:00");
const tempoObjetivo4 = new Date("2029-10-05T00:00:00");

// Atualiza o ano atual em todos os elementos com a classe "ano"
const anoAtual = document.querySelectorAll(".ano");
const agoraAtual = new Date();
anoAtual.forEach(el => {
  el.textContent = agoraAtual.getFullYear();
});


// Adiciona os tempos objetivos em um lista para facilitar o loop
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
    // Formata os valores para sempre ter dois dígitos com template literals
    return [dias, horas, minutos, segundos];
  } else {
    return [0,0,0,0];
  }
}

// Atualiza os contadores a cada segundo
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
    document.getElementById("dias" + i).textContent = calculaTempo(
      tempos[i]
    )[0];
    document.getElementById("horas" + i).textContent = calculaTempo(
      tempos[i]
    )[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
  }
}
function comecaCronometro() {
  atualizaCronometro(); // Atualiza imediatamente
  setInterval(atualizaCronometro, 1000); // Atualiza a cada segundo
}
comecaCronometro(); // Inicia o cronômetro