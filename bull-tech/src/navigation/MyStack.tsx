import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import Login  from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Index  from '../screens/Index';
import Home from '../screens/Home';
import CadLote from '../screens/CadLote';
import RelatoLote from  '../screens/RelatoLote';
import VenderLote from '../screens/VenderLote';
import CadLoteNovo from "../screens/CadLoteNovo";
import AddGastoLote from '../screens/AddGastos';
import RelatorioGasto from '../screens/RelatorioGasto';
import Calendario from '../screens/Calendario';
import Coverter from '../screens/Converter';
import CalcularRacao from '../screens/CalcularRacao';
import Financeiro from '../screens/Financeiro';

import Evento from '../screens/Evento';
import Vacinacao from '../screens/Vacinacao';
import Reproducao from '../screens/Reproducao';
import Pagamentos from '../screens/Pagamentos';
import TrocaFase from '../screens/TrocaFase';

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
      <Stack.Screen name='RelatoLote' component={RelatoLote} />
      <Stack.Screen name='VenderLote' component={VenderLote} />
      <Stack.Screen name="CadLoteNovo" component={CadLoteNovo} />
      <Stack.Screen name='AddGastoLote' component={AddGastoLote} />
      <Stack.Screen name='RelatorioGasto' component={RelatorioGasto} />
      <Stack.Screen name="Calendario" component={Calendario} />
      <Stack.Screen name="Converter" component={Coverter} />
      <Stack.Screen name='CalcularRacao' component={CalcularRacao} />
      <Stack.Screen name='Financeiro' component={Financeiro} />
      <Stack.Screen name='Evento' component={Evento} />
      <Stack.Screen name='Vacinacao' component={Vacinacao} />
      <Stack.Screen name='Reproducao' component={Reproducao} />
      <Stack.Screen name='Pagamentos' component={Pagamentos} />
      <Stack.Screen name='TrocaFase' component={TrocaFase} />
    </Stack.Navigator>
  );
}

export default MyStack;