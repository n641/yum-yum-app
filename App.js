import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/startScreens/LogIn";
import SignUp from "./screens/startScreens/SignUp";
import OnBoarding from "./screens/startScreens/OnBoarding";
import AdminStartScreen from "./screens/AdminPanal/AdminStartScreen";
import HomeStart from "./screens/HomeScreen/HomeStart";
import Cart from "./screens/CartScreen/Cart";
import Home from "./screens/HomeScreen/Components/Home";
import Category from "./screens/CategoriesScreen/Category";
import ProductList from "./screens/ProductListScreen/ProductList";


const Stack = createNativeStackNavigator();



export default function App() {
  
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator
        initialRouteName="HomeStart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeStart" component={HomeStart} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="productList" component={ProductList} />



        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        {/* <Stack.Screen name="AdminStartScreen" component={AdminStartScreen} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}


 