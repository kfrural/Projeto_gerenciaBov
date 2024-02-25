import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import Login  from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Index  from '../screens/Index';
import Home from '../screens/Home';
import CadLote from '../screens/CadLote';
import Calendario from '../screens/Calendario';
import Coverter from '../screens/Converter';
import CalcularRacao from '../screens/CalcularRacao';
import Financeiro from '../screens/Financeiro';
import CadastroAnimais from '../screens/CadastroAnimais';
import Evento from '../screens/Evento';

// Criação do Stack Navigator
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Index"
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='CadLote' component={CadLote} />
      <Stack.Screen name="Calendario" component={Calendario} />
      <Stack.Screen name="Converter" component={Coverter} />
      <Stack.Screen name='CalcularRacao' component={CalcularRacao} />
      <Stack.Screen name='Financeiro' component={Financeiro} />
      <Stack.Screen name='CadastroAnimais' component={CadastroAnimais} />
      <Stack.Screen name='Evento' component={Evento} />
    </Stack.Navigator>
  );
}

export default MyStack;