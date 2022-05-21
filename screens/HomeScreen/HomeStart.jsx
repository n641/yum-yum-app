import {
  StyleSheet,
 
} from "react-native";

import React, { useState ,useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./../HomeScreen/Components/HomeScreen/Home";
import About from "../AboutScreen/About"
import Favourite from "../favouriteScreen/favourite";
import Support from "../Support/support"

import { auth } from "../../db/config";
import { getUsers, subscribeUser } from "../../db/Auth/usersData/users";
import { getProducts, subscribe } from "../../db/Auth/usersData/Products";




import style from '../../Constants/style'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStart = ({navigation }) => {
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

  useEffect(() => {
    if (!Users?.length) return;

    const user = Users.find((e) => e.email == auth.currentUser.email);
    setUser(user);
  }, [Users]);


  



 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "About") {
            iconName = focused
              ? "information-circle-outline"
              : "information-circle-outline";
          } else if (route.name === "Support") {
            iconName = focused
              ? "chatbubble-ellipses-outline"
              : "chatbubble-ellipses-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: style.primary,
        tabBarInactiveTintColor: style.fourth,
      })}
    >
      <Tab.Screen
        name="Home"
        children={() => (
          <Home products={product} user={User} navigation={navigation} />
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Support"
        children={() => <Support user={User} navigation={navigation} />}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Favourite"
        children={() => (
          <Favourite products={product} user={User} navigation={navigation} />
        )}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeStart;

const styles = StyleSheet.create({});


