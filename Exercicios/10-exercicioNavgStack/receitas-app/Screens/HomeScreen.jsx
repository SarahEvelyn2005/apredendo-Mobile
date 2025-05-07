import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.pinimg.com/236x/80/b5/44/80b544b4f56e66fde329b8cf8279e3b3.jpg',
    ingredientes: [
      "1kg de feijão preto", "500g de carne seca", "300g de linguiça",
      "200g de costelinha", "2 laranjas", "Couve a gosto", "Arroz para acompanhar"
    ],
    modoPreparo: [
      "1. Deixe o feijão de molho por 12 horas", "2. Cozinhe o feijão na pressão",
      "3. Adicione as carnes", "4. Cozinhe até ficar macio", "5. Sirva com arroz"
    ]
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/236x/ae/fe/5d/aefe5d91ac74b5f9d95c38f1a97cfc38.jpg',
    ingredientes: [
      "1kg de peito de frango", "2 caixas de creme de leite", "2 colheres de extrato de tomate",
      "2 colheres de ketchup", "2 colheres de mostarda", "Champignon a gosto", "Batata palha"
    ],
    modoPreparo: [
      "1. Corte o frango", "2. Doure o frango", "3. Adicione os molhos", "4. Finalize com creme de leite", "5. Sirva com arroz"
    ]
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem: 'https://i.pinimg.com/236x/ef/d3/0b/efd30bd087d55dc9b51cc77507893531.jpg',
    ingredientes: [
      "4 ovos", "2 xícaras de açúcar", "2 xícaras de farinha", "1 xícara de chocolate em pó",
      "1 xícara de óleo", "1 xícara de leite", "1 colher de fermento"
    ],
    modoPreparo: [
      "1. Bata ovos e açúcar", "2. Misture secos", "3. Adicione líquidos", "4. Acrescente fermento", "5. Asse e sirva"
    ]
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={receitas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
            <Card style={{ marginBottom: 10 }}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Card.Content>
                <Title>{item.nome}</Title>
                <Paragraph>Tempo: {item.tempoPreparo}</Paragraph>
                <Paragraph>Porções: {item.porcoes}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
