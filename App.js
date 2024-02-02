import React from 'react';

import { NavigationContainer } from '@react-navigation/native' // envolve toda a estrutura de navegação da sua aplicação(navegação principal)
import { createStackNavigator } from '@react-navigation/stack'; //  uma função que cria um navegador de pilha(varias paginas)

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
            component={LoginHome} // algo deve ser importado e é responsável por toda a lógica e apresentação da tela de login 
            options={{
               headerShown: false // está dizendo que não quer que o cabeçalho seja mostrado na tela ativa 
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
