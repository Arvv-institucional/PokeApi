
import React, { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
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
  const[pokemonData, setPokemonData] = useState<Pokemon[]>([])
  const pokemon_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'
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
  return ( 

    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 10 }}>
        {pokemonData.map((pokemon,) => (
          <PokemonCard key={pokemon.id} item={pokemon}/>
        ))}
      </View>
    </ScrollView>
  );
}