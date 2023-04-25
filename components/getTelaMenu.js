export default function getTelaMenu() {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Text style={styles.titulo}>Jogo da Velha</Text>
        <Text style={styles.subtitulo}>selecione seu jogador</Text>

        <View style={styles.inlineItems}>
          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('X')}>
            <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('O')}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.boxMaquina} onPress={() => setTela('jogador')}>
          <Text style={styles.maquina}>VS Computador</Text>
        </TouchableOpacity>
      </View>
    );
  }