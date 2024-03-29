import { StyleSheet, Text, View, Dimensions, Animated, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import style from '../../Constants/style';
import ViewCard from '../../Components/ViewCard'




import { auth } from '../../db/config';
import { getUsers, subscribeUser , editUser } from '../../db/Auth/usersData/users';
import { getProducts, subscribe } from '../../db/Auth/usersData/Products';
import{editOrder , getOrders , addOrder , subscribeOrder} from '../../db/Auth/usersData/Orders'
// import {editorders}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const placeOrder = ({ route, navigation }) => {
  const { total, address, payment } = route.params;
  

  const [products, setproducts] = useState([]);
  const [Users, setUsers] = useState([]);
  const [orders, setorders] = useState([])
  const [listItems, setListItems] = useState([]);
  const [credit, setcredit] = useState('');
  const [points, setpoints] = useState('');
  const [text, settext] = useState('');
  const [way, setway] = useState('');
  const [orderOfUser, setorderOfUser] = useState([])
  const d = new Date();
  const date = d.toISOString().split("T")[0];
  const time = d.toTimeString().split(" ")[0];

  

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
  };

  useEffect(() => {
    getUserss();
    getProduct();
    getord();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeOrder(({ change, snapshot }) => {

      if (change.type === "added") {
        getord();
      }
      if (change.type === "modified") {
        getord();
      }
      if (change.type === "removed") {
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
    // const cart = user.cart.map(name => products.find(p => p.productName == name));
    setListItems(user.cart);
    setorderOfUser(user.orders);
    console.log("the orders of user" , listItems);
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

  },[orders,Users , products])

 
  const handleCheckOrder= ()=>{
    let temp=[];
    const user = Users.find(e => e.email == auth.currentUser.email);
    user.cart.map((name)=>{
      temp.push(name)
      })

      addOrder(
        // {products:[...temp]}
        {user:user.email ,product:[...temp] , payments:payment , addresss:address , totals:total , statuss:"un accepted" , creatAt:date+"-"+time }
      ).then(()=>{
        console.log("done")
      }).catch((e)=>{
        console.log(e)
      })

      if (payment == "credit") {
        editUser({
          ...user,
          orders: [...orderOfUser ,{user:user.email ,product:[...temp] , payments:payment , addresss:address , totals:total , statuss:"un accepted" ,  creatAt:date+"-"+time}],
          cart:[],
          credit:credit-total,
          points:points+(total/4)
        });
      } else if (payment == "points") {
        editUser({
          ...user,
          orders: [...orderOfUser ,{user:user.email ,product:[...temp] , payments:payment , addresss:address , totals:total , statuss:"un accepted" ,  creatAt:date+"-"+time}],
          cart:[],
          points:(points)-Math.floor(total/4)
        });
      } else {
        editUser({
          ...user,
          orders: [...orderOfUser ,{user:user.email ,product:[...temp] , payments:payment , addresss:address , totals:total , statuss:"un accepted",  creatAt:date+"-"+time}],
          cart:[],
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
            <ViewCard
              key={id}
              name={itemData.item.name}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discound}
              desc={itemData.item.desc}
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
              navigation.navigate("EndOfOrder" , {way:way,address:address,total:total , productinorder:listItems});
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