import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text} from "react-native";

export default function PokemonDynamicPage() {
  const params = useLocalSearchParams()
  return(
    <View>
      <Text>
        Pokemon dinamic page
      </Text>
    </View>
  )
}