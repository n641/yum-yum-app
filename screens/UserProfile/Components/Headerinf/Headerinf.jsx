import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { getUsers } from "../../../../db/Auth/usersData/users";
import { auth } from "../../../../db/config";


import style from '../../../../Constants/style';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Headerinf = ({ navigation }) => {
  const [users, setusers] = useState([])
  const [usename, setusename] = useState("");
  const [email, setemail] = useState([]);

  return (
    <View>
      <Image
        style={{
          width: width,
          height: height / 3,
          borderBottomRightRadius: 300,
          resizeMode: "stretch",
        }}
        source={require("../../../../assets/avater.png")}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          fontSize: 18,
          position: "absolute",
          top: 0,
          left: 0,
          marginHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
          width: width / 12,
          height: width / 12,
          backgroundColor: style.third,
          borderRadius: width / 2,
        }}
      >
        <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <Text
          style={{ color: style.fourth, fontSize: 20, fontWeight: "bold" }}
        >
          {auth.currentUser.displayName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="mail" size={15} color={style.fourth} />
          <Text
            style={{
              color: style.secondry,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {auth.currentUser.email}

          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              // borderTopLeftRadius: 75,
            }}
          >
            {/* ///info */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Headerinf

const styles = StyleSheet.create({

  Slider: {
    height: height / 3,
    borderBottomRightRadius: 300
  },
  footer: {
    flex: .65,
    width: width,
    height: 20
  },
})