export default function contraMaquina(jogador) {
    setJogadorAtual(jogador);
    setJogadasRestantes(9);
    setTela('jogador');
    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setTela('vscpu');
  }