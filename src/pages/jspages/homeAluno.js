import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importa o idioma português
import Icon from 'react-native-vector-icons/FontAwesome';

moment.locale('pt-br'); // Define o idioma padrão para português

const { width } = Dimensions.get('window');

export function HomeAluno( { navigation } ) {

  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>{moment(value).locale('pt-br').format('D [de] MMMM')}</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#25592D',
                            borderColor: '#111',
                          },
                        ]}>
                        {/* <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text> */}
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
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
    </SafeAreaView>

  );
}

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
