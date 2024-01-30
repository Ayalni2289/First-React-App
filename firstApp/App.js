import {  StyleSheet,  } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import CoursesScreen from './src/screens/coursesScreen';
import CoursesInformation from './src/screens/coursesInformation';
import CounterScreen from './src/screens/counterScreen';
import BoxScreen from './src/screens/boxScreen';
import ColoredBoxes from './src/screens/coloredBoxes';
import PasswordScreen from './src/screens/passwordScreen';
import DesignScreen from './src/screens/designScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Courses Info" component={CoursesInformation} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Boxes" component={BoxScreen} />
        <Stack.Screen name="ColoredBox" component={ColoredBoxes} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Design" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
