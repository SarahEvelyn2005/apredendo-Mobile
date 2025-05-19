import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogo() {
    const numeros = [];

    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }

    const jogoOrdenado = numeros.sort((a, b) => a - b);
    setJogoGerado(jogoOrdenado);
    setJogosMegaSena([jogoOrdenado, ...jogosMegaSena]);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Jogo Atual" />
        <Card.Content>
          <Text variant="titleLarge">{jogoGerado.join(' - ') || 'Nenhum jogo ainda'}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerarJogo}>Gerar Jogo</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Histórico de Jogos" />
        <Card.Content>
          <FlatList
            data={jogosMegaSena}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Text variant="bodyLarge">{item.join(' - ')}</Text>
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { marginBottom: 16 },
});