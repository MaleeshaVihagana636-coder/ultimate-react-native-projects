import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {

  const [pokemon , Setpokemons] = useState([]);
  useEffect(() => {
    //! Fetch Pokemon
    fetchPokemon();
  });
  async function fetchPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20",
      );
      const Data = await response.json();
      Setpokemons(Data.results);
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return (
    <ScrollView>
      {pokemon.map((pokemon)=>(
        <View key={pokemon.name}>
          <Text>{pokemon.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
