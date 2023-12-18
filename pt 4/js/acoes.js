// acoes.js
import { renderizarTabuleiro } from './renderizar.js';

export function Clique(jogadorId, linha, coluna, jogador1Tabuleiro, jogador2Tabuleiro, jogador1Jogadas, jogador2Jogadas, audio) {
  let tabuleiroAtual;
  let outroTabuleiro;

  if (jogadorId === 1) {
    tabuleiroAtual = jogador1Tabuleiro;
    outroTabuleiro = jogador2Tabuleiro;
    jogador1Jogadas++;
  } else {
    tabuleiroAtual = jogador2Tabuleiro;
    outroTabuleiro = jogador1Tabuleiro;
    jogador2Jogadas++;
  }

  if (tabuleiroAtual[linha] && tabuleiroAtual[linha][coluna] === undefined) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;
   

    const ValorIgual = outroTabuleiro[linha] && outroTabuleiro[linha].includes && outroTabuleiro[linha].includes(numeroAleatorio);

    if (ValorIgual) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }

    audio.play();
  }

  renderizarTabuleiro(tabuleiroAtual, jogadorId);

  if (jogadorId === 1) {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador1Jogadas);
  } else {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador2Jogadas);
  }
}

export function verificarVencedor(tabuleiro, jogadorId, jogadas) {
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
  // Adicione aqui a lógica adicional de verificação de vencedor se necessário
}

export function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j];
    }
  }
  return pontuacao;
  // Adicione aqui a lógica adicional de cálculo da pontuação se necessário
}
