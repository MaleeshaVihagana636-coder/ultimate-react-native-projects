import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {

  const [pokemon , Setpokemon] = useState([]);
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
      Setpokemon(Data);
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
