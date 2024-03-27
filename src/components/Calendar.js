import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from 'moment'
import Date from './Date'
// Configuração local do Moment.js para o idioma português
moment.locale('pt');
moment.updateLocale('pt', {
  months : [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
});

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([]) // Estado para armazenar as datas dos próximos 15 dias
  const [currentMonth, setCurrentMonth] = useState() // Estado para armazenar o mês atual
//   const [scrollPosition, setScrollPosition] = useState(0) // Estado para armazenar a posição da rolagem

  // Função para obter as datas dos próximos 15 dias e armazená-las no estado
  const getDates = () => {
    const _dates = []
    for (let i = 0; i < 15; i++) {
      const date = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  useEffect(() => {
    getDates() // Atualiza as datas ao montar o componente
    if (selected) {
      setCurrentMonth(moment(selected).format('DD [de] MMMM')); // Formata o mês da data selecionada no formato desejado
    } else {
      setCurrentMonth(moment().format('DD [de] MMMM')); // Se nenhum dia foi selecionado, o mês atual é exibido por padrão
    }
  }, [selected]); // Atualiza o mês atual quando a data selecionada é alterada

  return (
    <View>
      {/* Seção para exibir o título do mês atual */}
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      {/* Seção para exibir as datas em um ScrollView horizontal */}
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* Mapeia as datas e renderiza o componente Date para cada uma */}
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 171,
    height: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  scroll: {
    height: 150,
  },
})
