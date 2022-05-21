import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import style from "../../../../Constants/style"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



const Header = ({user,products, navigation }) => {


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
          {user.userName}
        </Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart", { user: user, products:products});
            }}
          >
            <View style={{ flexDirection: "row" }}>
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
                  {user.cart ? user.cart.length : 0}
                </Text>
              </View>
              <Ionicons
                name="cart"
                size={35}
                style={{ paddingBottom: 25 }}
                color={style.primary}
              />
              <View style={{marginHorizontal:20}}>
              {(user.rule === "admin") ?
                <MaterialIcons
                  name="admin-panel-settings"
                  size={35}
                  onPress={() => navigation.navigate("AdminStartScreen")}
                />
                : (user.rule === "delivery") ?
                  <Ionicons name="bicycle" size={35} color={style.fourth} onPress={() => navigation.navigate("getDelivery")} />
                  : null
              }
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
