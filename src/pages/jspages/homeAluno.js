import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Calendar from '../../components/Calendar';
import ProfileSvg from '../../components/profileSvg';
import {Dimensions} from 'react-native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import 'moment/locale/pt-br'; // Importa o idioma português
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

export function HomeAluno( { navigation } ) {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para armazenar a data selecionada

  return (
      <View style={styles.container}>
        <View>
          {/* Header da página */}
           <ProfileSvg windowWidth={windowWidth}/> {/* Possível refatoramento no posicionamento do svg */}
        </View>
          
        <View>
          {/* Renderiza o componente de calendário */}
          <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
          <StatusBar style="auto" />
        </View>

        <View style={styles.buttonBox}>
          <Text style={styles.buttonBoxTexto}>Você estará no campus hoje?</Text>
          <View style={styles.buttonArea}>

            <TouchableOpacity style={styles.touchableNegativeButton} onPress={() => handleEscolha('Não')}>
              <Text style={styles.textButton}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchablePositiveButton} onPress={() => handleEscolha('Sim')}>
              <Text style={styles.textButton}>Sim</Text>
            </TouchableOpacity>

          </View>
        </View>

              
        {/* <View style = {styles.menuSnack}>
          <Icon name="apple" size={20} color="#fff" style = {styles.iconMenu}/>
          <Text style = {styles.menuText}>Refeições do dia:</Text>
              
            <Text style = {styles.textShift}>LANCHE (MANHÃ):</Text>
              <Text style = {styles.textDescription}>descrição</Text>
              
            <Text style = {styles.textShift}>ALMOÇO:</Text>
              <Text style = {styles.textDescription}>descrição</Text>  
              
            <Text style = {styles.textShift}>LANCHE(TARDE):</Text>
              <Text style = {styles.textDescription}>descrição</Text>  
        </View> */}

      </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width:291,
    height: 133,
    borderRadius: 14,
    backgroundColor: 'rgba(37, 89, 45, 0.90)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonBoxTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 30,
  },
  buttonArea: {
    width: 206,
    height: 32,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  touchableNegativeButton: {
    width: 92,
    height: 28,
    borderRadius: 20,
    backgroundColor: 'rgba(37, 89, 45, 0.5)',

  },
  touchablePositiveButton:{
    width: 92,
    height: 28,
    borderRadius: 20,
    backgroundColor: 'rgba(134, 166, 65, 0.5)',
  },
  textButton: {
    display: 'flex',
    width: 45,
    height: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 15,
  },
});
