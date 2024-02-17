import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

//const Pergunta = () => {
  //const handleEscolha = (escolha) => {
   // console.log(O usuário escolheu: ${escolha});


export function HomeAluno ( { navigation } ) { //Sempre altere o nome da função ao criar uma nova página, aqui já alterei

  
  return (
    <View style={styles.container}>
      <View style={styles.botoesContainer}>
      <Text style={styles.texto}>Você estará no campus hoje?</Text>
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF"
    },
    botoesContainer: {
      width:300,
      height: 110,
      borderRadius: 15,
      backgroundColor: "#3b6a42",
    }
  });