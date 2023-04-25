export default function getTelaJogo() {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Text style={styles.titulo} >Jogo da Velha</Text>
        {
          tabuleiro.map((linha, numeroLinha) => {
            return (
              <View key={numeroLinha} style={styles.inlineItems}>
                {
                  linha.map((coluna, numeroColuna) => {
                    return (
                      <TouchableOpacity key={numeroColuna} style={styles.boxJogador}
                        onPress={() => jogar(numeroLinha, numeroColuna)} disabled={coluna !== ''}>
                        <Text style={coluna === 'X' ? styles.jogadorX : styles.jogadorO}>{coluna}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            )
          })
        }

        <TouchableOpacity style={styles.botaoMenu} onPress={() => setTela('menu')}>
          <Text style={styles.textoBotaoMenu}>Voltar ao Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }