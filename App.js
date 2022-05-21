
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React , {useState, useEffect} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/startScreens/LogIn";
import SignUp from "./screens/startScreens/SignUp";
import Forgetpass from './screens/startScreens/forgetPass/Forgetpass'
import OnBoarding from "./screens/startScreens/OnBoarding";
import AdminStartScreen from "./screens/AdminPanal/AdminStartScreen";
import HomeStart from "./screens/HomeScreen/HomeStart";
import Category from "./screens/CategoriesScreen/Category";
import ProductList from "./screens/ProductListScreen/ProductList";
import UseerProScreen from "./screens/UserProfile/UseerProScreen";
import EditProfile from "./screens/UserProfile/Components/Footer/EditProfile";
import DetailsScreen from "./screens/Details/DetailsScreen"
import About from "./screens/AboutScreen/About"
import TestSearch from "./screens/TestSearch";
import Cart from "./screens/CartScreen/Cart";
import CheckOut from "./screens/Checkout/CheckOut"
import EndOfOrder from "./screens/Checkout/EndOfOrder";
import Address from "./screens/Checkout/Address";
import EditAddressCheckout from "./screens/Checkout/EditAddressCheckout";
import placeOrder from './screens/Checkout/placeOrder';
import Support from "./screens/Support/support";
import Order from "./screens/ordersScreen/Order";
import getDelivery from "./screens/delivery/getDelivery";


import { auth } from "./db/config";
import { getUsers, subscribeUser } from "./db/Auth/usersData/users";
import { getProducts, subscribe } from "./db/Auth/usersData/Products";




const Stack = createNativeStackNavigator();

export default function App() {
  const [Users, setUsers] = useState([]);
  const [User, setUser] = useState([]);
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    const arr = await getProducts();
    setproduct(arr);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        getProduct();
      }
      if (change.type === "modified") {
        getProduct();
      }
      if (change.type === "removed") {
        getProduct();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };
  useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      if (change.type === "added") {
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
        getUserss();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   if (!Users?.length) return;

  //   const user = Users.find((e) => e.email == auth.currentUser.email);
  //   setUser(user);
  // }, [Users]);


 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="AdminStartScreen"
          component={AdminStartScreen}
          options={{ headerShown: false }}
        />

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
          name="HomeStart"
          component={HomeStart}
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
          name="About"
          component={About}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UseerProScreen"
          component={UseerProScreen}
          options={{ headerShown: false }}
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
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Category"
          component={Category}
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

        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{
            title: "Payment",
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
            title: "Check Out",
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
            title: "End Of Order",
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
            title: "Your Order",
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
          name="getDelivery"
          component={getDelivery}
          options={{
            title: "Delivery",
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


        {/* ///orders */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


