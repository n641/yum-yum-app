import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from 'react'
import Card from './Card';
import style from "../../../Constants/style";
import BasicCard from '../../../Components/BasicCard'

import { getProducts, subscribe } from "../../../db/Auth/usersData/Products";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const BestSellingFood = ({ navigation }) => {
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

useEffect(()=>{
let temp=[];

},[])


  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: style.primary,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        BestSellingFood
      </Text>

      <FlatList
        data={pro}
        numColumns={2}
        keyExtractor={(item) => item.productName}

        renderItem={(itemData) =>
          itemData.item.count > 2 ? (
            <BasicCard
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
}

export default BestSellingFood

const styles = StyleSheet.create({})
