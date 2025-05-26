import React, { useEffect, useState } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error(err));
  }, [idProduto]);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Card>
        <Card.Title title={produto.title} subtitle={`R$ ${produto.price}`} />
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text>{produto.description}</Text>
          <Text style={{ marginTop: 10 }}>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
          <Text>Rating: {produto.rating}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
