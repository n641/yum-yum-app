import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../../db/config";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import style from "../../../Constants/style"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import {
  editUser,
  getProducts,
  getUsers,
  subscribeUser,
} from "../../../db/Auth/usersData/users";



const Header = ({ pagename, icon, navigation }) => {

  const [listItems, setListItems] = useState([]);


  const [users, setUsers] = useState([]);
  const [CUser, setCUser] = useState([]);
  
  const [name, setname] = useState('')



  const getUserss = async () => {
    const arr = await getUsers();
    const slove = arr.find(e => e.email === auth.currentUser.email)
    setCUser(slove)
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
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  useEffect(() => {
    if (!users?.length) return;
    const user = users.find((e) => e.email == auth.currentUser.email);
    setListItems(user.cart)
    setname(user.userName)
  }, [users]);






  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignItems: "center",
        top: 20,
        marginHorizontal: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UseerProScreen");
          }}
        >
          <Ionicons name="person-circle" size={30} color={style.fourth} />
        </TouchableOpacity>
        <Text
          style={{
            color: style.primary,
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "capitalize",
            paddingLeft: 10,
          }}
        >
          {name}
        </Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: width / 18,
                  top: -5,
                  left: -20,
                  height: width / 18,
                  backgroundColor: "red",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                }}
              >
                <Text style={{ color: style.third, fontSize: 20 }}>
                  {listItems.length}
                </Text>
              </View>
              <Ionicons
                name={icon}
                size={35}
                style={{ paddingBottom: 25 }}
                color={style.primary}
              />
              {(CUser.rule === "admin") ?
                <MaterialIcons 
                name="admin-panel-settings" 
                size={35}
                onPress={() => navigation.navigate("AdminStartScreen")}
            />
              : null}
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
