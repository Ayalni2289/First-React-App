import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Information({ title, description, imageSource }) {
  return (
    <View>
        <View style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        </View>    
        <Image style={styles.img} source={imageSource} />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
    },
    descTitle:{
        alignItems: 'center',
        paddingVertical: 20,
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
    },
    description:{
        fontSize:15,
    }
})