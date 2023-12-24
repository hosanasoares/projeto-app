import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function LoginHome( { navigation } ) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.loginText}>Entre como:</Text>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('LoginServidor')}>
        <Text style={styles.buttonText}>PROFESSOR(A)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('LoginAluno')}>
        <Text style={styles.buttonText}>ALUNO(A)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('LoginServidor')}>
        <Text style={styles.buttonText}>NUTRICIONISTA</Text>
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
  button: {
    width: 255,
    height: 58,
    borderRadius: 40,
    backgroundColor: '#F22D1B',
    elevation: 4, // Adiciona uma sombra
    marginVertical: 12, // Espaçamento vertical entre os botões
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
});
