import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HomeStart from "../HomeScreen/HomeStart";
import CardofCart from "./Compnent/CardofCart";

import { getData } from "../../db/AsyncStorage/AsyncStore";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";
import { useEffect } from "react/cjs/react.production.min";

const Cart = ({ navigation}) => {
  const [Carts, setCarts] = useState([
    //must order product by count!!!!
    
    {
      name: "sawarmaa",
      url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
      price: 20,
      count: 19,
      offer: true,
      discound: 10,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      
    },
    {
      name: "sawarmaa",
      url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
      price: 20,
      count: 19,
      offer: true,
      discound: 5,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      
    },
    {
      name: "pizza",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
      price: 70,
      count: 8,
      offer: true,
      discound: 10,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      
    },
  ]);

  

  return Carts.length != 0 ? (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: style.third,
      }}
    >
      <View>
        <Text
          style={{
            textAlign: "end",
            color: "red",
            fontSize: width / 24,
            fontWeight: "bold",
            marginTop: 10,
            marginRight: 20,
          }}
        >
          {Carts.length} items
        </Text>

        <ScrollView>
          {Carts.map((p, id) => (

            <CardofCart
              key={id}
              url={p.url}
              name={p.name}
              desc={p.desc}
              price={p.price}
              offer={p.offer}
              discound={p.discound}
            />
          ))}

        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          width: width - 40,
          justifyContent: "center",
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: style.primary,
          height: height / 10,
        }}
        onPress={() => {
           navigation.navigate("CheckOut" , {});    
        }}
      >
        <Text
          style={{
            color: style.third,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{
          width: width,
          height: height,
          position: "relative",
          resizeMode: "contain",
        }}
        source={require("../../assets/emptyCart.png")}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: height / 20,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: "red", fontSize: 30, fontWeight: "500" }}>
          Empty Card
        </Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
