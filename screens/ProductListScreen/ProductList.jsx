import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Dimensions, FlatList } from "react-native";
import React, { useState ,useEffect} from 'react'

import Header from "../HomeScreen/Components/Header";
import { Ionicons } from "@expo/vector-icons";

import CardProduct from "./CardProduct";

import {getProducts,subscribe} from "../../db/Auth/usersData/Products"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import style from "../../Constants/style"


const ProductList = ({ navigation ,route}) => {
   const [pro, setpro] = useState([
     //must order product by count!!!!
   ]);

   const getItems = async () => {
     const arr = await getProducts();
     setpro(arr);
     console.log(arr);
   };
useEffect(() => {
  getItems();
}, []);

useEffect(() => {
  const unsubscribe = subscribe(({ change, snapshot }) => {
    //   console.log("changes", change, snapshot, change.type);
    // if (snapshot.metadata.hasPendingWrites) {
    if (change.type === "added") {
      console.log("New message: ", change.doc.data());
      getItems();
    }
    if (change.type === "modified") {
      console.log("Modified city: ", change.doc.data());
      getItems();
    }
    if (change.type === "removed") {
      console.log("Removed message: ", change.doc.data());
      getItems();
    }
  });

  return () => {
    unsubscribe();
  };
}, []);

    const {name}  = route.params;
    console.log(name);

 
  return (
    <View>
      <Header icon={"cart"} />
      <Text
        style={{
          fontSize: 25,
          color: "red",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        product
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          fontSize: 18,
          position: "absolute",
          top: 50,
          left: 150,
          marginHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
          width: width / 14,
          height: width / 14,
          borderRadius: width / 2,
        }}
      >
        <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
      </TouchableOpacity>

      <FlatList
        data={pro}
        numColumns={2}
        keyExtractor={(item) => item.productName}
        renderItem={(itemData) =>
          itemData.item.category == name ? (
            <CardProduct
              name={itemData.item.productName}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discount}
              desc={itemData.item.description}
              navigation={navigation}
            />
          ) : null
        }
      />
    </View>
  );
};

export default ProductList

const styles = StyleSheet.create({})
