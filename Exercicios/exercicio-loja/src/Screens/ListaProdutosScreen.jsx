import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(err => console.error(err));
  }, [categoria]);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
          <Card style={{ margin: 10 }}>
            <Card.Title title={item.title} subtitle={`R$ ${item.price}`} />
            <Card.Cover source={{ uri: item.thumbnail }} />
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
