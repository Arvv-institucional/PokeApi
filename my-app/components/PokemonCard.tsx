import {View, Text, Image, StyleSheet, Pressable} from "react-native";
import { router } from "expo-router";

export default function PokemonCard ({item} : {item: any}) {
  if (!item) {
    return (
      <Text style={styles.nombre}>
        Cargando pokemon...
      </Text>)
  
  } else {
    return (
      <Pressable onPress={()=>router.push(`/pokemon/${item.name}`)} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri:item.sprites.front_default}} 
            style={styles.image} 
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nombre}>
            {item.name}
          </Text>
          <Text style={styles.id}>
            ID: {item.id}
          </Text>
        </View>
      </Pressable>
    )
}
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    width: '30%',
    margin: '1.5%',
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
    textTransform: 'capitalize',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
});