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
import Favourite from "../favouriteScreen/favourite";
import UseerProScreen from "../UserProfile/UseerProScreen";

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
            iconName = focused
              ? "home"
              : "home";
          }
           else if (route.name === "Favourite") {
            iconName = focused ? "heart" : "heart";
          }else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: style.primary,
        tabBarInactiveTintColor: style.fourth,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={UseerProScreen} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
};

export default HomeStart;

const styles = StyleSheet.create({});

{
  /*  */
}
