import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { LoginHome } from './src/pages/login/loginHome';
import { LoginAluno } from './src/pages/login/loginAluno';
import { LoginServidor } from './src/pages/login/loginServidor';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginHome">
          <Stack.Screen 
            name="LoginHome"
            component={LoginHome}
            options={{
               headerShown: false 
              }}

          />
          
          <Stack.Screen 
            name="LoginAluno"
            component={LoginAluno}
            options={{
              headerShown: false 
             }}
          />

          <Stack.Screen 
            name="LoginServidor"
            component={LoginServidor}
            options={{
              headerShown: false 
             }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  )
}