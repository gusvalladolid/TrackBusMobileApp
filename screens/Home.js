import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    nombre: 'Ruta 3',
  },
  {
    id: 2,
    nombre: 'Dale Up',
  },
  {
    id: 3,
    nombre: 'Circunvalacion 2',
  },
  {
    id: 4,
    nombre: 'Riberas',
  }
];

export default function Home() {

  const navigation = useNavigation();

  const Item = ({ nombre }) => (
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Map',{
          routeName: nombre,
        });
      }}>
      <View style={styles.Route}>
        <Text style={styles.Nombre}>{nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item nombre={item.nombre}/>
  );

  return (
    <View>
      <Text style={styles.Titulo}>Selecciona la ruta deseada</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={route => route.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Route: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Nombre: {
    fontSize: 30,
    margin: 10,
  },
  Titulo: {
    fontSize: 20,
    margin: 10,
    color: '#999999'

  },
});