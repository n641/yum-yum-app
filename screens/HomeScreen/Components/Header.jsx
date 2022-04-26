import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {auth} from "../../../db/config";
import { Ionicons } from "@expo/vector-icons"; 

const Header = ({pagename,icon}) => {
    console.log(auth.currentUser);
  return (
    <View
      style={{
        justifyContent: "space-around",
        flexDirection: "row",
        top: 30,
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "red",
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          raneen
        </Text>
      </View>
      <View>
        <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
          {pagename}
        </Text>
      </View>
      <View>
        <Ionicons name={icon} size={35} color={"red"} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
