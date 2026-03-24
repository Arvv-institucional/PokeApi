import React, { useEffect, useState } from "react"
import { useLocalSearchParams } from "expo-router";
import { View, Text} from "react-native";

interface Pokemon  {
  name: string
}
export default function PokemonDynamicPage() {
  const params = useLocalSearchParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  const [info, setInfo] = useState<Pokemon>()
  const pokemonInfo = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data)
  }
  
  useEffect(()=>{pokemonInfo()}, [])

  return(
    <View>
      <Text>
        Pagina de {info?.name ?? ""}
      </Text>
    </View>
  )
}