import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  //const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increase"
        style={styles.Button}
        onPress={() => {
          dispatch({ type: "increment",payload:1 });
          //setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        style={styles.Button}
        onPress={() => {
          dispatch({ type: "decrement",payload:1 });
          //setCounter(counter - 1);
        }}
      />
      <Text>Sayı: {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "steelblue",
    textAlign: "center",
  },
});
