import { StyleSheet, Text, View, Dimensions, Animated, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import Card from '../HomeScreen/Components/Card';
import style from '../../Constants/style';




import { auth } from '../../db/config';
import { getUsers, subscribeUser , editUser } from '../../db/Auth/usersData/users';
import { getProducts, subscribe } from '../../db/Auth/usersData/Products';
import{editOrder , getOrders , addOrder , subscribeOrder} from '../../db/Auth/usersData/Orders'
// import {editorders}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const placeOrder = ({ route, navigation }) => {
  const { total, address, payment } = route.params;
  console.log(total)
  console.log(address)
  console.log(payment)

  const [products, setproducts] = useState([]);
  const [Users, setUsers] = useState([]);
  const [orders, setorders] = useState([])
  const [listItems, setListItems] = useState([]);
  const [credit, setcredit] = useState('');
  const [points, setpoints] = useState('');
  const [text, settext] = useState('');
  const [way, setway] = useState('');



  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };
  const getord = async () => {
    const arr = await getOrders();
    setorders(arr);
  };

  const getProduct = async () => {
    const arr = await getProducts();
    setproducts(arr);
    // console.log(arr);
  };

  useEffect(() => {
    getUserss();
    getProduct();
    getord();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeOrder(({ change, snapshot }) => {

      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getord();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getord();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getord();
      }
    });

    return () => {
      unsubscribe();
    };
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
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == auth.currentUser.email);
    const cart = user.cart.map(name => products.find(p => p.productName == name));
    setListItems(cart);
  }, [products, Users]);

  useEffect(() => {
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == auth.currentUser.email);
    setcredit(user.credit);
    setpoints(user.points);

    if (payment == "credit") {
      setway("credit");
      settext(credit)
    } else if (payment == "points") {
      setway("points");
      settext(points)
    } else {
      setway("cache")
    }

  })

  const handleCheckOrder= ()=>{
    let temp=[];
    const user = Users.find(e => e.email == auth.currentUser.email);
    user.cart.map((name)=>{
      temp.push(name)
      })
      addOrder(
       {user:user.email ,product:[...temp]}
      ).then(()=>{
        console.log("done")
      }).catch((e)=>{
        console.log(e)
      })

      if (payment == "credit") {
        editUser({
          ...user,
          orders: [{user:user.email ,product:[...temp]}],
          cart:[],
          credit:credit-total,
          points:points+(total/4)
        });
      } else if (payment == "points") {
        editUser({
          ...user,
          orders: [{user:user.email ,product:[...temp]}],
          cart:[],
          points:((((points)-(total))))
        });
      } else {
        editUser({
          ...user,
          orders: [{user:user.email ,product:[...temp]}],
          cart:[],
          points:points+(total/4)
        });
      }

      
  }




  return (
    <View style={{ alignItems: 'center', backgroundColor: "white" }}>
      <ScrollView>
        <Text style={{ fontSize: width / 18, fontWeight: 'bold', color: "red", margin: 10 }}>Check out</Text>

        <FlatList
          data={listItems}
          numColumns={2}
          keyExtractor={(item) => item.productName}
          renderItem={(itemData, id) => (
            <Card
              key={id}
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
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red", margin: 10 }}>address you chosed</Text>

          <View style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width - 20, }}>
            <View style={{ justifyContent: 'space-between', flexDirection: "row", width: width - 20, alignItems: 'center' }}>

              <View style={{ justifyContent: 'flex-start', flexDirection: "row", alignItems: 'center' }}>
                <View style={{ marginHorizontal: 10 }}>
                  <Ionicons name="checkmark-circle-sharp" size={width / 19} color={'black'} />
                </View>
                <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>{address}</Text>
              </View>

              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("editAddress", { address: a, total: total })
                  }}
                >
                  <Ionicons name="create" size={width / 19} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red", margin: 10 }}>the way you want to Payment</Text>
          <View style={{
            flexDirection: "row", borderColor: "black",
            borderRadius: 20, borderWidth: 2, backgroundColor: "gray",
            margin: 10, height: height / 10, width: width - 20, alignItems: 'center', justifyContent: 'flex-start',
          }}>
            {way == "cache" ? (
              <View style={{ marginHorizontal: 20 }}>
                <Ionicons name="card" size={width / 19} color={'red'} />
              </View>) : way == "credit" ? (
                <View style={{ marginHorizontal: 20 }}>
                  <Ionicons name="card" size={width / 19} color={'red'} />
                </View>
              ) : <View style={{ marginHorizontal: 20 }}>
              <Ionicons name="trophy" size={width / 19} color={'yellow'} />
            </View>
            }

            <View >
              <View style={{ flexDirection: 'row' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{way}: </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{text}$</Text>

              </View>
            </View>
          </View>
        </View>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
          <TouchableOpacity
            style={{
              width: width / 2 + 50,
              borderRadius: 40,
              justifyContent: "space-around",
              backgroundColor: "black",
              height: height / 10,
              flexDirection: "row",
              alignItems: "center"
            }}
            onPress={() => {
              handleCheckOrder()
              navigation.navigate("EndOfOrder");
            }}
          >
            <Text
              style={{
                color: style.third,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              place Order
            </Text>
          </TouchableOpacity>
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red" }}>total</Text>
            <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red" }}>{total}$</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default placeOrder

const styles = StyleSheet.create({})