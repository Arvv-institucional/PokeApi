
import React, { useEffect, useState } from "react"
import { router } from "expo-router"
import { ScrollView, Button, View, TextInput, StyleSheet, Text } from "react-native"
import PokemonCard from "@/components/PokemonCard"

type Pokemon = {
  name: string;
  url: string;
}

export default function Index() {
  const[search, setSearch] = useState<string>("")
  const[pokemonData, setPokemonData] = useState<Pokemon[]>([])
  const pokemon_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const fetchPokemon = async () => {
    try {
      const response = await fetch(`${pokemon_URL}`)
      const data = await response.json()
      setPokemonData(data.results)
    } catch (error) {
      console.error('El fetch no se a podido completar')
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])
  
  const filterPokemon = pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return ( 
    <ScrollView>
      <View>
      <Button title="Nueva pagina" onPress={()=>router.push("/new_page")}/>
        <TextInput style={styles.cuadroText}
        placeholder="Buscar pokemon por nombre"
        onChangeText={(input) => setSearch(input)}>
        </TextInput>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 10 }}>
        {filterPokemon.map((pokemon) => (<PokemonCard key={pokemon.name} item={pokemon}/>))}
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
