export function renderizarTabuleiro(tabuleiro, jogadorId) {
  const tabuleiroElemento = document.getElementById('jogador' + jogadorId + '-tabuleiro');
  tabuleiroElemento.innerHTML = '';

  for (let i = 0; i < tabuleiro.length; i++) {
      const linhaElemento = document.createElement('div');
      linhaElemento.className = 'linha';
  
      for (let j = 0; j < tabuleiro[i].length; j++) {
          const celulaElemento = document.createElement('div');
          celulaElemento.classList.add('celula');
          celulaElemento.dataset.index = j;

          celulaElemento.innerText = tabuleiro[i][j] || '';
          

          linhaElemento.appendChild(celulaElemento);
      }

      tabuleiroElemento.appendChild(linhaElemento);
  }
}
