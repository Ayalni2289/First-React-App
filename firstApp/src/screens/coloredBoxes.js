import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ChangeColor from "../../components/changeColor";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
export default function ColoredBoxes() {
  // reducer function
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ChangeColor
        color="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_red", payload: -15 })}
      />
      <ChangeColor
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_green", payload: -15 })}
      />
      <ChangeColor
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -15 })}
      />
      <View
        style={{
          height: 100,
          marginVertical:10,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
