import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from 'react'
import style from "../../../../Constants/style";
import BasicCard from '../../../../Components/BasicCard'



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const BestSellingFood = ({ products, navigation , cart , funPush }) => {
  
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
        data={products}
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
              cart={cart}
              funPush={funPush}
              navigation={navigation}
            />
          ) : null
        }
      />
    </View>
  );
};

export default BestSellingFood

const styles = StyleSheet.create({})
