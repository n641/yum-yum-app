import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { auth } from "../../db/config";
import { getUsers, editUser, subscribeUser } from "../../db/Auth/usersData/users";
import { getProducts, subscribe } from "../../db/Auth/usersData/Products";

import HomeStart from "../HomeScreen/HomeStart";
import CardofCart from "./Compnent/CardofCart";

import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";

const Cart = ({ navigation, route }) => {
  // const { counter } = route.params;
  //console.log("counter",counter)


  const [products, setproducts] = useState([]);
  const [Users, setUsers] = useState([]);
  const [listItems, setListItems] = useState([]);

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };

  const getProduct = async () => {
    const arr = await getProducts();
    setproducts(arr);
  };

  useEffect(() => {
    getUserss();
    getProduct();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {

      if (change.type === "added") {
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
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
        getProduct();
      }
      if (change.type === "modified") {
        getProduct();
      }
      if (change.type === "removed") {
        getProduct();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == auth.currentUser.email);
    const cart = user.cart.map(name => products.find(p => p.productName == name));
    setListItems(cart);
  }, [products, Users]);



  const [total, setTotal] = useState(0)


  const totalIncrement = givinTotal => {
    setTotal(total + givinTotal)
    console.log(total + givinTotal)
  }
  const totalDecrement = givinTotal => {
    setTotal(total - givinTotal)
    console.log(total + givinTotal)
  }
  const deleteItem = (name) => {
    //  Alert.alert("Delete Item", `Are you sure you want to delete this ${name}?`, [
    //    {
    //      text: "Yes",
    //      onPress: () => {

    const user = Users.find((e) => e.email == auth.currentUser.email);
    console.log("User i find :>> ", user);
    editUser({
      ...user,
      cart: user.cart.filter((n) => n !== name),
    });


    //  },
    //},
    //]);
  };

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
            textAlign: "right",
            color: "red",
            fontSize: width / 24,
            fontWeight: "bold",
            marginTop: 10,
            marginRight: 20,
          }}
        >
          {listItems.length} items
        </Text>

        <FlatList
          data={listItems}
          numColumns={2}
          keyExtractor={(item) => item.productName}
          renderItem={(itemData, id) => (
            <CardofCart
              key={id}
              name={itemData.item.productName}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discount}
              desc={itemData.item.description}
              navigation={navigation}
              onAdd={totalIncrement}
              onRemove={totalDecrement}
              deleteItem={deleteItem}
            // count={counter ? 2 : 1}
            />
          )}
        />
      </View>

      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>

          <Text style={{ color: "red", fontWeight: "bold", fontSize: width/30 }}>-----------------------------------------------------------</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
            Total:
          </Text>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 15 }}>
            {total}
          </Text>
        </View>
      </View>


      <TouchableOpacity
        style={{
          width: width - 40,
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: "space-around",
          backgroundColor: style.primary,
          height: height / 10,
          flexDirection:"row",
          alignItems:"center"
        }}
        onPress={() => {
          if(total!==0){
          navigation.navigate("Address", {
            total: total,
          });
        }else{
          alert("please increase counter of product to order it")
        }
        }
      }
      >
        <Text
          style={{
            color: style.third,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Address
        </Text>
        <View>
          <Ionicons name="caret-forward" size={30} color={'white'} />
        </View>
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
