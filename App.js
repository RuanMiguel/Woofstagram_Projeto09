import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';
import CadastroScreen from './src/screen/CadastroScreen';
import MainNavigator from './src/navigation/MainNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

  
        <Stack.Screen 
          name="SignIn" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />


        <Stack.Screen 
          name="SignUp" 
          component={CadastroScreen} 
          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen 
          name="Main" 
          component={MainNavigator} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}