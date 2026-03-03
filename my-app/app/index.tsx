import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
  useEffect(() => {
    console.log("Entre entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL= "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const response = await fetch(URL, {
      method: "GET"
    });
    console.log(response)
    const data= await response.json();
    console.log(data.results); 
  };



  return ( 
    
    <View>
      <Text>Fabian de Lira.</Text>
    </View>
  );
}