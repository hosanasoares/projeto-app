import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Calendar from '../../components/Calendar';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import 'moment/locale/pt-br'; // Importa o idioma português
import Icon from 'react-native-vector-icons/FontAwesome';

export function HomeAluno( { navigation } ) {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para armazenar a data selecionada

  return (
      <View style={styles.container}>

        <View style={styles.container}>
          {/* Renderiza o componente de calendário */}
          <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
          <StatusBar style="auto" />
        </View>

        <View style={styles.buttonBox}>
        <Text style={styles.texto}>Você estará no campus hoje?</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleEscolha('Sim')}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleEscolha('Não')}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>
        </View>

              
        <View style = {styles.menuSnack}>
          <Icon name="apple" size={20} color="#fff" style = {styles.iconMenu}/>
          <Text style = {styles.menuText}>Refeições do dia:</Text>
              
            <Text style = {styles.textShift}>LANCHE (MANHÃ):</Text>
              <Text style = {styles.textDescription}>descrição</Text>
              
            <Text style = {styles.textShift}>ALMOÇO:</Text>
              <Text style = {styles.textDescription}>descrição</Text>  
              
            <Text style = {styles.textShift}>LANCHE(TARDE):</Text>
              <Text style = {styles.textDescription}>descrição</Text>  
        </View>

      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  picker: {
    flex: 1,
    maxHeight: 150,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    marginBottom: 12,
  },
  /** Item */
  item: {
    flex: 1,
    height: 100,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRow: {
    width: 400,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 21,
    fontWeight: '500',
    color: '#737373',
  },
  itemDate: {
    fontSize: 23,
    fontWeight: '600',
    color: '#111',
  },
  buttonBox: {
    width:300,
    height: 110,
    borderRadius: 15,
    backgroundColor: "#3b6a42",
  }

});
