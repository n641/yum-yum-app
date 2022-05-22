import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Dimensions, FlatList } from "react-native";
import React, { useState ,useEffect} from 'react'

import Header from "../HomeScreen/Components/Header/Header";
import { Ionicons } from "@expo/vector-icons";
import EmptyScreen from '../NotFoundScreens/EmptyScreen'

import BasicCard from '../../Components/BasicCard'

import {getProducts,subscribe} from "../../db/Auth/usersData/Products"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import style from "../../Constants/style"


const ProductList = ({ navigation ,route}) => {
  const {user,products,cart,funPush}= route.params
   const [pro, setpro] = useState([]);
   const {name}  = route.params;
   const [listItem, setlistItem] = useState([])


   const getItems = async () => {
     const arr = await getProducts();
     setpro(arr);
   };
useEffect(() => {
  getItems();
}, []);

useEffect(() => {
  const unsubscribe = subscribe(({ change, snapshot }) => {
    
    if (change.type === "added") {
      getItems();
    }
    if (change.type === "modified") {
      getItems();
    }
    if (change.type === "removed") {
      getItems();
    }
  });

  return () => {
    unsubscribe();
  };
}, []);

   
useEffect(()=>{

let temp=[];
pro.map((p)=>{
  p.category===name?
  temp.push(p):null
})
setlistItem(temp);

},[pro])
 
  return listItem.length!==0?(
    <View>
      {/* <Header icon={"cart"} cart={cart} funPush={funPush} user={user} products={products} navigation={navigation} /> */}
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
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          fontSize: 18,
          position: "absolute",
          top: width/5-6,
          left: width/5,
          marginHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
          width: width / 14,
          height: width / 14,
          borderRadius: width / 2,
        }}
      >
        <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
      </TouchableOpacity> */}

      <FlatList
        data={listItem}
        numColumns={2}
        keyExtractor={(item) => item.productName}
        renderItem={(itemData) =>
          // itemData.item.category == name ? (
            <BasicCard
              name={itemData.item.productName}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discount}
              desc={itemData.item.description}
              navigation={navigation}
              cart={cart}
              funPush={funPush}
            />
          // ) : null
        }
      />
    </View>
  ):(
    <View>
      <EmptyScreen/>
    </View>
  )
};

export default ProductList

const styles = StyleSheet.create({})
