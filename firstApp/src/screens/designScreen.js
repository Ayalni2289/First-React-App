import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ width: "25%", height: "25%", backgroundColor: "red" }} />
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "25%",
          height: "25%",
          backgroundColor: "green",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "25%",
          height: "25%",
          backgroundColor: "blue",
        }}
      />
      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "25%",
          height: "25%",
          backgroundColor: "yellow",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
