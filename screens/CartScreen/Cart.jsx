import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";
import HomeStart from "../HomeScreen/HomeStart";
import CardofCart from "./Compnent/CardofCart";

import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";

const Cart = ({ navigation}) => {
    //must order product by count!!!!
  // const [listItems, setListItems] = useState([]);

  const listItems = [
    {
      name: "Sandwich",
      url: "https://assets.bonappetit.com/photos/5a7cc004dbc53a07d3d60b58/1:1/w_960,c_limit/fried-bologna-sandwich.jpg",
      desc: "الكبده دي صح الصح و صاحبها راجل صح الصح",
      price: 50,
      offer: "false",
      discound: 0,
    },
    {
      name: "Sandwich",
      url: "https://assets.bonappetit.com/photos/5a7cc004dbc53a07d3d60b58/1:1/w_960,c_limit/fried-bologna-sandwich.jpg",
      desc: "الكبده دي صح الصح و صاحبها راجل صح الصح",
      price: 50,
      offer: "false",
      discound: 0,
    },
    {
      name: "Sandwich",
      url: "https://assets.bonappetit.com/photos/5a7cc004dbc53a07d3d60b58/1:1/w_960,c_limit/fried-bologna-sandwich.jpg",
      desc: "الكبده دي صح الصح و صاحبها راجل صح الصح",
      price: 50,
      offer: "false",
      discound: 0,
    },
    {
      name: "Sandwich",
      url: "https://assets.bonappetit.com/photos/5a7cc004dbc53a07d3d60b58/1:1/w_960,c_limit/fried-bologna-sandwich.jpg",
      desc: "الكبده دي صح الصح و صاحبها راجل صح الصح",
      price: 50,
      offer: "false",
      discound: 0,
    }
  ];


     useEffect(() => {
       GetData();
     }, []);
   const GetData = () => {
     AsyncStorage.getItem("ListOfData").then((productlist) => {
       if (productlist) {
        //  setListItems(JSON.parse(productlist));
       } else {
         AsyncStorage.setItem("ListOfData", JSON.stringify([]));
       }
     });
   };
  
 



  const [total, setTotal] = useState(0)

  const totalIncrement = givinTotal => {
    setTotal(total + givinTotal)
    console.log(total + givinTotal)
  }
  const totalDecrement = givinTotal => {
    setTotal(total - givinTotal)
    console.log(total + givinTotal)
  }

  return listItems.length != 0 ? (
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
          {listItems.length} items
        </Text>

        <ScrollView>
          {listItems.map((p, id) => (
            <CardofCart
              key={id}
              url={p.url}
              name={p.name}
              desc={p.desc}
              price={p.price}
              offer={p.offer}
              discound={p.discound}
              onAdd={totalIncrement}
              onRemove={totalDecrement}
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
          navigation.navigate("CheckOut", {
            total: total
          });
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
