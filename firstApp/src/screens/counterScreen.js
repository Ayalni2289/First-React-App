import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

export default function CounterScreen() {
    const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button title='Increase' style={styles.Button} onPress={() => { 
        setCounter(counter+1)
      }}/>
      <Button title='Decrease' style={styles.Button} onPress={() => { 
        setCounter(counter-1)
      }}/>
      <Text>Sayı: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Button:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'steelblue',
        textAlign: 'center',
        
    }
})