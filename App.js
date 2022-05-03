
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/startScreens/LogIn";
import SignUp from "./screens/startScreens/SignUp";
import OnBoarding from "./screens/startScreens/OnBoarding";
import AdminStartScreen from "./screens/AdminPanal/AdminStartScreen";
import HomeStart from "./screens/HomeScreen/HomeStart";
import Cart from "./screens/CartScreen/Cart";
import Category from "./screens/CategoriesScreen/Category";
import ProductList from "./screens/ProductListScreen/ProductList";
import UseerProScreen from "./screens/UserProfile/UseerProScreen";
import DetailsScreen from "./screens/Details/DetailsScreen"
import CheckOut from "./screens/Checkout/CheckOut"
// import NavHome from "./screens/HomeScreen/Components/HomeScreen/NavHome";



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator
        initialRouteName="Cart"
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="AdminStartScreen" component={AdminStartScreen} />

        <Stack.Screen
          name="HomeStart"
          component={HomeStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Your Cart",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UseerProScreen"
          component={UseerProScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        {/* <Stack.Screen name="NavHome" component={NavHome} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


