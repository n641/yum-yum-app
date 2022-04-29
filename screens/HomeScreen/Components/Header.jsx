import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../../../db/config";
import { Ionicons } from "@expo/vector-icons";

import style from "../../../Constants/style"


const Header = ({ pagename, icon, navigation }) => {
  console.log(auth.currentUser);

  return (
    <View>
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

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <TouchableOpacity onPress={() => {
            navigation.navigate("UseerProScreen");
          }}>

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
              {/* {auth.currentUser.displayName} */}
              raneen
            </Text>
        

        </View>

        <View>

          {/* {auth.currentUser.email == "noha46@gmail.com" ? (
            <Button title="Admin Panel" color={color.primary} onpress={() => { }} />
          ) : (
            <TouchableOpacity onPress={() => {
              navigation.navigator('Cart');
            }}>
              <Ionicons name={icon} size={35} color={style.primary} />
            </TouchableOpacity>

          )
          } */}

          <TouchableOpacity onPress={()=>{
            navigation.navigate('Cart');
          }}>
          <Ionicons name={icon} size={35} color={style.primary} />
          </TouchableOpacity>


        </View>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
