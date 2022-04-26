import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../CartScreen/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Home from "./Components/Home";

import colors from '../../Constants/colors'


const HomeStart = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "home"
              : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.fourth,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default HomeStart;

const styles = StyleSheet.create({});

{
  /*  */
}
