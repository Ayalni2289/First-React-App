import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.text}>My Name is Ali</Text>
      <Text style={styles.text}>This is My First App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      fontSize: 30,
      fontWeight: 'semibold',
      color: 'red',
  },
  text:{
      fontSize: 15,
      fontWeight: 'bold',
      color: 'steelblue',
  }
});
