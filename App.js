import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Map from './screens/Map';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Select the route'}} />
        <Stack.Screen name="Map" component={Map} options={({ route }) => ({title: route.params.routeName})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}


