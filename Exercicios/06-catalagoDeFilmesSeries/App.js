import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Filme from "./components/filmes";
import Serie from "./components/series";

const listaFilmes = [
  {
    nome: "A Doce Vida",
    ano: 1960,
    diretor: "Federico Fellini",
    tipo: "Drama",
    capa: "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg",
  },
  {
    nome: "Psicose",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    tipo: "Terror",
    capa: "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg",
  },
  {
    nome: "O Beijo da Mulher Aranha",
    ano: 1985,
    diretor: "Hector Babenco",
    tipo: "Drama",
    capa: "https://i.pinimg.com/236x/f3/e3/3f/f3e33fdd1dfae7368226acf14fac51ee.jpg",
  },
  {
    nome: "Poltergeist - O Fenômeno",
    ano: 1982,
    diretor: "Tobe Hooper",
    tipo: "Terror",
    capa: "https://i.pinimg.com/236x/e2/5e/0f/e25e0f9e904895e5365b8ca7aa991076.jpg",
  },
];

const listaSeries = [
  {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: "https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg",
  },
  {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg",
  },
  {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      <FlatList
        data={listaFilmes}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Filme nome={item.nome} ano={item.ano} diretor={item.diretor} tipo={item.tipo} capa={item.capa} />
        )}
      />

      <Text style={styles.header}>Séries</Text>
      <FlatList
        data={listaSeries}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Serie nome={item.nome} ano={item.ano} diretor={item.diretor} temporadas={item.temporadas} capa={item.capa} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
