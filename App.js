
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/startScreens/LogIn";
import SignUp from "./screens/startScreens/SignUp";
import Forgetpass from './screens/startScreens/forgetPass/Forgetpass'
import OnBoarding from "./screens/startScreens/OnBoarding";
import AdminStartScreen from "./screens/AdminPanal/AdminStartScreen";
import HomeStart from "./screens/HomeScreen/HomeStart";
import Cart from "./screens/CartScreen/Cart";
import Category from "./screens/CategoriesScreen/Category";
import ProductList from "./screens/ProductListScreen/ProductList";
import UseerProScreen from "./screens/UserProfile/UseerProScreen";
import EditProfile from "./screens/UserProfile/Components/Footer/EditProfile";
import DetailsScreen from "./screens/Details/DetailsScreen"
import CheckOut from "./screens/Checkout/CheckOut"
import About from "./screens/AboutScreen/About"
import TestSearch from "./screens/TestSearch";
import EndOfOrder from "./screens/Checkout/EndOfOrder";
import Address from "./screens/Checkout/Address";
import EditAddressCheckout from "./screens/Checkout/EditAddressCheckout";
import placeOrder from './screens/Checkout/placeOrder';
import Support from "./screens/Support/support";
import Order from "./screens/ordersScreen/Order";






const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TestSearch"
          component={TestSearch}
          options={{
            title: "results of search",
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
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Forgetpass"
          component={Forgetpass}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AdminStartScreen"
          component={AdminStartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
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
          name="CheckOut"
          component={CheckOut}
          options={{
            title: "results of search",
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
          name="Address"
          component={Address}
          options={{
            title: "Address",
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
          name="placeOrder"
          component={placeOrder}
          options={{
            title: "Address",
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
          name="EndOfOrder"
          component={EndOfOrder}
          options={{
            title: "Address",
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
          name="Order"
          component={Order}
          options={{
            title: "Order",
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
          name="EditProfile"
          component={EditProfile}
          options={{
            title: "Edit profile",
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
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="editAddress"
          component={EditAddressCheckout}
          options={{
            title: "Address",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


