import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ChangeColor({color,onIncrease,onDecrease}) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} Increase`} /*CallBack*/ onPress={()=>onIncrease()}/>
      <Button title={`${color} Decrease`} /*CallBack*/ onPress={()=>onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({})