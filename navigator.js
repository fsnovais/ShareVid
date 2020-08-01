import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Login from "./src/components/Telas/Login"
import Cadastro from "./src/components/Telas/Cadastro"
import Home from "./src/components/Telas/Home"
import Agenda from "./src/components/Telas/Agenda"
import Carrinho from "./src/components/Telas/Carrinho"
import MeusLocais from "./src/components/Telas/MeusLocais"
import Pontos from "./src/components/Telas/Pontos"
import Restaurantes from "./src/components/Telas/Restaurantes"
import Reunioes from "./src/components/Telas/ReunioesEEventos"

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Agenda" component={Agenda} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen name="Meus Locais" component={MeusLocais} />
      <Drawer.Screen name="Pontos" component={Pontos} />
      <Drawer.Screen name="Restaurantes" component={Restaurantes} />
      <Drawer.Screen name="Reunioes" component={Reunioes} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;