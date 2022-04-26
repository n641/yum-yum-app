import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../../../db/config";
import { Ionicons } from "@expo/vector-icons";

import colors from '../../../Constants/colors'


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
            //navigete to users info
          }}>

            <Ionicons name="person-circle" size={30} color={colors.fourth} />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.primary,
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
              <Ionicons name={icon} size={35} color={colors.primary} />
            </TouchableOpacity>

          )
          } */}

          <TouchableOpacity onPress={()=>{}}>
          <Ionicons name={icon} size={35} color={colors.primary} />
          </TouchableOpacity>


        </View>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
