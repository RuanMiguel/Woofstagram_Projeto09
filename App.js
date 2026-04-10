  import React from 'react';
  import { View, StyleSheet } from 'react-native'; 
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  import LoginScreen from './src/screen/LoginScreen';
  import CadastroScreen from './src/screen/CadastroScreen.js';
  import MainNavigator from './src/navigation/MainNavigator';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }}> 
            <Stack.Screen name="SignIn" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="SignUp" component={CadastroScreen} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }