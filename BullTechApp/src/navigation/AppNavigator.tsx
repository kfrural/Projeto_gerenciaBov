import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index  from '../screens/Index/Index';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home'

const Stack = createStackNavigator();


function AppNavigator() {
    return (
      <Stack.Navigator initialRouteName="Index"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Home' component={Home} />
        
      </Stack.Navigator>
    );
  }
  
  export default AppNavigator;