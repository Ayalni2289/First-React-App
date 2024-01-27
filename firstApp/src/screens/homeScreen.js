import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('Courses')}
      />
      <Button
        title="Go to Course Informations"
        onPress={() => navigation.navigate('Courses Info')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate('Boxes')}
      />
       <Button
        title="Go to ColoredBox Screen"
        onPress={() => navigation.navigate('ColoredBox')}
      />
       <Button
        title="Go to Password Screen"
        onPress={() => navigation.navigate('Password')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})