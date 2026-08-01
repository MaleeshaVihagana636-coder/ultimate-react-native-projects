import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [pokemon, Setpokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    //! Fetch Pokemon
    fetchPokemon();
  });
  async function fetchPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=5",
      );
      const Data = await response.json();
      // Fetch detailed info for each Pokémon in parallel
      const detailedPokemons = await Promise.all(
        Data.results.map(async (pokemon:any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default, // main sprite
          };
        }),
      );
      Setpokemons(detailedPokemons);
      // Setpokemons(Data.results);
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return (
    <ScrollView>
      {pokemon.map((pokemon) => (
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
