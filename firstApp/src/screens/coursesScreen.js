import { FlatList, StyleSheet, Text, } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
    const courses = [
        {id: 1, name: 'React Native'},
        {id: 2, name: 'React Js'},
        {id: 3, name: 'Node Js'},
        {id: 4, name: 'Express Js'},
        {id: 5, name: 'MongoDB'},
      ];
  return (
    <FlatList
    data={courses}
    keyExtractor={item => item.id}
    renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
    />
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'steelblue',
        textAlign: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'ghostwhite',
    }
})