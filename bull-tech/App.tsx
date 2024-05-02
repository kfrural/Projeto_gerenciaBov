import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/auth/UserContext';
import { LoteProvider } from './src/auth/LoteContext';
import MyStack from './src/navigation/MyStack';

export default function App() {
  return (
    <UserProvider>
      <LoteProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </LoteProvider>
    </UserProvider>
  );
}
