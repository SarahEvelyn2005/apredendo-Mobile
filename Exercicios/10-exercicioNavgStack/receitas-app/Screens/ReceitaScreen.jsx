import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card,Title, Paragraph, Button, List } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Title>{receita.nome}</Title>
          <Paragraph>Tempo de Preparo: {receita.tempoPreparo}</Paragraph>
          <Paragraph>Porções: {receita.porcoes}</Paragraph>
        </Card.Content>
      </Card>

      <List.Section title="Ingredientes">
        {receita.ingredientes.map((item, index) => (
          <List.Item key={index} title={item} left={() => <List.Icon icon="circle" />} />
        ))}
      </List.Section>

      <List.Section title="Modo de Preparo">
        {receita.modoPreparo.map((passo, index) => (
          <List.Item key={index} title={passo} left={() => <List.Icon icon="chevron-right" />} />
        ))}
      </List.Section>

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        Voltar
      </Button>
    </ScrollView>
  );
}
