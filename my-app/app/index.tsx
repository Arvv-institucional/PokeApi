
import React, { useEffect, useState } from "react"
import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native"
import PokemonCard from "@/components/PokemonCard"

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  };
}

interface PokemonListItem {
  name: string
  url: string
}

export default function Index() {
  const[pokemonFinder, setPokemonFinder] = useState<string>("")
  const[pokemonData, setPokemonData] = useState<Pokemon[]>([])
  const pokemon_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const fetchPokemon = async () => {
    try {

      const response = await fetch(`${pokemon_URL}`)
      const data = await response.json()
      const pokemons: Pokemon[] = await Promise.all(
        data.results.map((p: PokemonListItem) => fetch(p.url).then(res => res.json()))
      )
      setPokemonData(pokemons)

    } catch (error) {

      console.error('El fetch no se a podido completar')

    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  useEffect(() => {
    fetchPokemon()
  }, [pokemonFinder])

  const pokemonsfiltrados = pokemonData.filter(pokemon => 
  pokemon.name.toLowerCase().includes(pokemonFinder.toLowerCase())
  ||
  pokemon.id.toString().includes(pokemonFinder))
  

  useEffect
  return ( 

    <ScrollView>
      <View>
        <TextInput style={styles.cuadroText}
        placeholder="Buscar pokemon por nombre"
        onChangeText={(input) => setPokemonFinder(input)}>
        </TextInput>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 10 }}>
        {pokemonsfiltrados.map((pokemon,) => (
          <PokemonCard key={pokemon.id} item={pokemon}/>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  cuadroText : {
    backgroundColor : "white",
    borderRadius : 20,
    padding : 10,
    marginHorizontal : 20,
    marginTop : 10
  }
})
