export default function jogar(linha, coluna) {
    tabuleiro[linha][coluna] = jogadorAtual;
    setTabuleiro([...tabuleiro]);

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X')
    setJogadorMaquina(jogadorMaquina === 'X' ? 'O' : 'X')

    verificarGanhador(tabuleiro, linha, coluna);

  }