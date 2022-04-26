import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/startScreens/LogIn';
import SignUp from './screens/startScreens/SignUp';
import OnBoarding from './screens/startScreens/OnBoarding';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


