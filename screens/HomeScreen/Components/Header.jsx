import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React ,{useState,useEffect} from "react";
import { auth } from "../../../db/config";
import { Ionicons } from "@expo/vector-icons";

import style from "../../../Constants/style"
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Header = ({ pagename, icon, navigation }) => {
  console.log(auth.currentUser);

   const [listItems, setListItems] = useState([]);
   

   useEffect(() => {
     if (listItems.length == 0) {
       return;
     } else {
       GetData();
     }
   }, [listItems]);
   

  
  
   const GetData = () => {
     AsyncStorage.getItem("ListOfData").then((productlist) => {
       if (productlist) {
         setListItems(JSON.parse(productlist));
       } else {
         AsyncStorage.setItem("ListOfData", JSON.stringify([]));
       }
     });
   };

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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <View>
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
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
