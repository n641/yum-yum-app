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

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./../HomeScreen/Components/HomeScreen/Home";
import About from "../AboutScreen/About"
import Favourite from "../favouriteScreen/favourite";
import Support from "../Support/support"

import style from '../../Constants/style'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStart = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart" : "heart";
          }  else if (route.name === "About") {
            iconName = focused
              ? "information-circle-outline"
              : "information-circle-outline";
          } else if (route.name === "Support") {
            iconName = focused
              ? "chatbubble-ellipses-outline"
              : "chatbubble-ellipses-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: style.primary,
        tabBarInactiveTintColor: style.fourth,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />
    
    </Tab.Navigator>
  );
};

export default HomeStart;

const styles = StyleSheet.create({});

{
  /*  */
}
