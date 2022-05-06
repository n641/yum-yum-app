import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react';

import { auth } from '../../db/config';
import { getUsers, subscribeUser } from '../../db/Auth/usersData/users';
import { getProducts, subscribe } from '../../db/Auth/usersData/Products';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import FavCard from '../UserProfile/Components/Favourite/FavCard';
import style from '../../Constants/style';

const Favourite = ({ navigation }) => {

  var Favourite =[{}];
  const [product, setproduct] = useState([]);


  const [Users, setUsers] = useState([]);

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };

  const getProduct = async () => {
    const arr = await getProducts();
    setproduct(arr);
    console.log(arr);
  };

  useEffect(() => {
    getUserss();
    getProduct();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getUserss();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getUserss();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getUserss();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getProduct();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getProduct();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getProduct();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);



  
  useEffect(() => {
    Users.map((e) =>
      e.email == auth.currentUser.email
        ? e.favourite.map((op) =>
            product.map((p) => (p.productName == op ? Favourite.push(p) : null))
          )
        : null
    );
  },[Users]);
  const a =[1,2,3];
  a.push(4)
  console.log(Favourite);

  return product.length !=0? (
    <ScrollView>
      <Text
        style={{
          fontSize: 25,
          color: style.primary,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        favourite meals
      </Text>

      <FlatList
        data={Favourite}
        numColumns={2}
        keyExtractor={(item) => item.productName}
        renderItem={(itemData) => (
          <FavCard
            name={itemData.item.productName}
            url={itemData.item.url}
            price={itemData.item.price}
            offer={itemData.item.offer}
            discound={itemData.item.discount}
            desc={itemData.item.description}
            navigation={navigation}
          />
        )}
      />
    </ScrollView>
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
        source={require("../../assets/fav.png")}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: height / 23,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: "red", fontSize: 30, fontWeight: "500" }}>
          not exist favourit meals
        </Text>
      </View>
    </View>
  );
}

export default Favourite


