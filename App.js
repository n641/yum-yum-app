import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/startScreens/LogIn';
import SignUp from './screens/startScreens/SignUp';
import OnBoarding from './screens/startScreens/OnBoarding';
import AdminStartScreen from './screens/AdminPanal/AdminStartScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    {/* <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}> */}
    <Stack.Navigator initialRouteName="AdminStartScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="AdminStartScreen" component={AdminStartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


