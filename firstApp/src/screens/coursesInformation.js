import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformation() {
  return (
    <ScrollView>
      <Information
        title="React Course"
        description="This course is about React"
        imageSource={require("../../assets/react.jpg")}
      />
      <Information
        title="C++ Course"
        description="This course is about C++"
        imageSource={require("../../assets/c.png")}
      />
      <Information
        title="Solidity Course"
        description="This course is about Solidity"
        imageSource={require("../../assets/solidity.png")}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})