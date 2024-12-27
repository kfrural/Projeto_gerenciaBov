import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index  from '../screens/Index';

const Stack = createNativeStackNavigator();


function AppNavigator() {
    return (
      <Stack.Navigator initialRouteName="Index"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Index" component={Index} />
        
      </Stack.Navigator>
    );
  }
  
  export default AppNavigator;