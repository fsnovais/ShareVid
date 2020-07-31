import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/components/Telas/Login"
import Cadastro from "./src/components/Telas/Cadastro"
import Home from "./src/components/Telas/Home"
import Agenda from "./src/components/Telas/Agenda"
import Carrinho from "./src/components/Telas/Carrinho"
import MeusLocais from "./src/components/Telas/MeusLocais"
import Pontos from "./src/components/Telas/Pontos"
import Restaurantes from "./src/components/Telas/Restaurantes"
import Reunioes from "./src/components/Telas/ReunioesEEventos"


const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="MeusLocais" component={MeusLocais} />
        <Stack.Screen name="Pontos" component={Pontos} />
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Reunioes" component={Reunioes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;