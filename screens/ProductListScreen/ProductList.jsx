import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useState } from 'react'

import Header from "../HomeScreen/Components/Header";

import CardProduct from "./CardProduct";



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const ProductList = ({ navigation ,route}) => {

    const {name}  = route.params;
    console.log(name=="pizza"?("yes"):"no");

  const [pro, setpro] = useState([
    //must order product by count!!!!
    {
      name: "sawarma",
      url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
      category: "milk",
      price: 20,
      count: 19,
      offer: true,
      discound: 20,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
    },
    {
      name: "pizza",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
      category: "pasta",
      price: 70,
      count: 8,
      offer: true,
      discound: 10,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
    },
    {
      name: "burger",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
      category: "pizza",
      price: 100,
      count: 7,
      offer: false,
      discound: 10,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
    },
    {
      name: "rice",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
      category: "pasta",
      price: 150,
      count: 6,
      offer: true,
      discound: 20,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
    },
    {
      name: "pasta",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
      category: "pizza",
      price: 200,
      count: 1,
      offer: true,
      discound: 40,
      desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
    },
  ]);
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

      <FlatList
      data={pro}
      numColumns={2}
      keyExtractor={(item) => item.name}
      renderItem={(itemData) => (
          
            itemData.item.category==name?(

                <CardProduct
                name={itemData.item.name}
                url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discound}
              desc={itemData.item.desc}
              fav={itemData.item.fav}
              navigation={navigation}
              />
              ):null
            
            )}
            />
        
    </View>
  );
};

export default ProductList

const styles = StyleSheet.create({})
