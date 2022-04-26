import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {auth} from "../../../db/config";
import { Ionicons } from "@expo/vector-icons"; 

const Header = ({pagename,icon}) => {
    console.log(auth.currentUser);

  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          alignItems: "center",
          marginHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person-circle" size={30} color={"black"} />

          <Text
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: "bold",
              textTransform: "capitalize",
              paddingLeft: 10,
            }}
          >
            {/* {auth.currentUser.displayName} */}
            raneen
          </Text>
        </View>

        <View>
          <Ionicons name={icon} size={35} color={"red"} />
        </View>
      </View>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
