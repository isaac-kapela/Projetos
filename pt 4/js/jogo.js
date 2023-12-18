// jogo.js
import { criarTabuleiro } from './tabuleiro.js';
import { renderizarTabuleiro } from './renderizar.js';
import { Clique, verificarVencedor, calcularPontuacao } from './acoes.js';

const audio = new Audio('js/audio_file.mp3');
const jogador1Tabuleiro = criarTabuleiro();
const jogador2Tabuleiro = criarTabuleiro();
let jogador1Jogadas = 0;
let jogador2Jogadas = 0;

renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);

document.getElementById('jogador1-tabuleiro').addEventListener('click', function (event) {
  const { target } = event;
  if (target.classList.contains('celula')) {
    const linha = target.parentNode.dataset.index;
    const coluna = target.dataset.index;
    Clique(1, linha, coluna, jogador1Tabuleiro, jogador2Tabuleiro, jogador1Jogadas, jogador2Jogadas, audio);
  }
});

document.getElementById('jogador2-tabuleiro').addEventListener('click', function (event) {
  const { target } = event;
  if (target.classList.contains('celula')) {
    const linha = target.parentNode.dataset.index;
    const coluna = target.dataset.index;
    Clique(2, linha, coluna, jogador1Tabuleiro, jogador2Tabuleiro, jogador1Jogadas, jogador2Jogadas, audio);
  }
});
