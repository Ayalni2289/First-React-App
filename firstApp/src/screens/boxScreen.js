import { StyleSheet, Text, View,FlatList, Button } from 'react-native'
import React, {useState} from 'react'

export default function BoxScreen() {
    const [colors, setColors] = useState([])
    const randomRgb = () => {
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        return `rgb(${red}, ${green}, ${blue})`
    }
  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
            setColors([...colors, randomRgb()])
        }}
      />
      <FlatList
        data={colors}
        renderItem={({item}) => {
            return <View style={{height: 100, width: 100, marginVertical:10, backgroundColor: item}}/>
        }
        }
      />
      </View>
  )
}

const styles = StyleSheet.create({})