import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {auth} from "../../../db/config"
const Header = () => {
    console.log(auth.currentUser);
  return (
      
    <View>
      <View>
          <Text>{auth.currentUser.displayName}</Text>
          </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
