import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

//const Pergunta = () => {
  //const handleEscolha = (escolha) => {
   // console.log(O usuário escolheu: ${escolha});


export function LoginServidor( { navigation } ) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você estará no campus hoje?</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => handleEscolha('Sim')}>
          <Text style={styles.textoBotao}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => handleEscolha('Não')}>
          <Text style={styles.textoBotao}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }











