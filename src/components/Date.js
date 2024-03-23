import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'


const Date = ({ date, onSelectDate, selected }) => {
/**
   * Usa o Moment.js para comparar a data com a data de hoje.
   * Se for hoje, mostra 'Today'.
   * Se não for hoje, mostra o dia da semana, por exemplo 'Mon', 'Tue', 'Wed'.
   */
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  // Obtém o número do dia, por exemplo, 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D')

   // Obtém a data completa, por exemplo, 2021-01-01 - usaremos isso para comparar a data com a data selecionada
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor: "#F22D1B" },
      day === 'Today' && { backgroundColor: "#25592D" },
    ]}
    >
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate &&  { color: "#fff", fontWeight: 'bold', fontSize: 24 },
          day === 'Today' && { color: "#fff" },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  )
}

export default Date

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 78,
    width: 76,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
    width: -1,
    height: 2,
  },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4, // Roda apenas no android, as outras configurações são para rodar também em iOS
  },
  medium: {
    fontSize: 24,
    fontWeight: 700,
  },
})