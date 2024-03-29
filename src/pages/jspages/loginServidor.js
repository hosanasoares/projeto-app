import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export function LoginServidor( { navigation } ) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.loginText}>Entre com seus dados cadastrais</Text>

      <TextInput
        style={styles.input}
        placeholder="Continue com o SIAPE" //pesquisar como colocar icone do figma | > define um texto temporário que é exibido no campo de entrada quando não há texto inserido.
        autoCorrect={false} // Essa propriedade determina se a correção automática do teclado do dispositivo deve ser ativada ou não para este campo de texto |> nesse caso, a correção está sendo desativada.
        onChangeText={() => {}} // Essa é uma função de retorno de chamada que é chamada sempre que o texto no campo de entrada é alterado pelo usuário
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha" //pesquisar como colocar icone do figma
        onChangeText={() => {}}
        secureTextEntry={true} // Para ocultar a senha
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button} 
      onPress={ () => navigation.navigate('')} // Colocar caminho ou autenticação 
      > 
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.transparentButton} >
        <Text style={styles.passwordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  logo: {
    width: 354,
    height: 330,
    backgroundColor: 'lightgray', // ou a cor desejada
    resizeMode: 'cover', // modo de redimensionamento
  },
  loginText: {
    color: '#00000094',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 40,
  },
  input:{
    width: 255,
    height: 58,
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2, 
    marginBottom: 20,
  },
  button: {
    width: 255,
    height: 58,
    borderRadius: 40,
    backgroundColor: '#F22D1B',
    elevation: 4, // Adiciona uma sombra
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  transparentButton: {
    marginTop: 20,
    width: 212,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordText: {
    color: '#F2A71B',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
