import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"#fff"}}>Welcome to the app</Text>
      <Text style={{color:"#fff"}}>Vamos merendar!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db5353',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


