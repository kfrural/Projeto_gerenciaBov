import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index  from '../screens/Index/Index';
import Login from '../screens/Login/index';

const Stack = createStackNavigator();


function AppNavigator() {
    return (
      <Stack.Navigator initialRouteName="Index"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    );
  }
  
  export default AppNavigator;