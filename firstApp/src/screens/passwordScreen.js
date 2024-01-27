import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function PasswordScreen() {
    const [Password, setPassword] = useState('')
  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={Password}
        onChangeText={(newValue) => setPassword(newValue)}
        />
        {Password.length < 6 ? (<Text style={styles.text}>Password must be more than 6 characters </Text>):null}
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding:3,
        borderRadius: 5,
    },
    text:{
        fontSize: 15,
        margin:5,
        textAlign: 'center',
    }
})