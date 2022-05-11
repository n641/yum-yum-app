import { StyleSheet, Text, View, Dimensions , TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { auth } from '../../db/config';
import { getUsers, subscribeUser } from '../../db/Auth/usersData/users';




const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CheckOut = ({ route, navigation }) => {
  const { total, address } = route.params;

  const [Users, setUsers] = useState([]);
  const [credit, setcredit] = useState('');
  const [points, setpoints] = useState('');




  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };

  useEffect(() => {
    getUserss();
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
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == auth.currentUser.email);
    setcredit(user.credit);
    setpoints(user.points);

  })



  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red", margin: 10 }}>choose the way you want to Payment</Text>
      {/* //////////////////////////////////////////////////////////////////////////////// */}
      <View style={{
        flexDirection: "row", borderColor: "black",
        borderRadius: 20, borderWidth: 2, backgroundColor: "gray",
        margin: 10, height: height / 10, width: width - 20, alignItems: 'center', justifyContent: 'flex-start',
      }}>
        
        <View style={{ marginHorizontal: 20 }}>
          <Ionicons name="card" size={width / 19} color={'red'} />
        </View>
        <View >
        <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={()=>{
          if(total<= credit){
            navigation.navigate("placeOrder", {total:total, address:address ,payment:"credit"})
          }else{
            alert("you don\'t have enough money in your credit , please choose another method to payment");
          }
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>credit:</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{credit}$</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10 }}>*************</Text>
      </TouchableOpacity>
        </View>
      </View>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      <View style={{
        flexDirection: "row", borderColor: "black",
        borderRadius: 20, borderWidth: 2, backgroundColor: "gray",
        margin: 10, height: height / 10, width: width - 20, alignItems: 'center', justifyContent: 'flex-start',
      }}>
        <View style={{ marginHorizontal: 20 }}>
          <Ionicons name="trophy" size={width / 19} color={'yellow'} />
        </View>
        <View>

        <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={()=>{
          if(total<= (points*10)){
            navigation.navigate("placeOrder", {total:total, address:address ,payment:"points"})
          }else{
            alert("you don\'t have enough Points , please choose another method to payment");
          }
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>points:</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft:2 }}>{points}</Text>
      </TouchableOpacity>


        </View>
      </View>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <View style={{
        flexDirection: "row", borderColor: "black",
        borderRadius: 20, borderWidth: 2, backgroundColor: "gray",
        margin: 10, height: height / 10, width: width - 20, alignItems: 'center', justifyContent: 'flex-start',
      }}>
        <View style={{ marginHorizontal: 20 }}>
          <Ionicons name="wallet" size={width / 19} color={'black'} />
        </View>
        <View style={{ flexDirection: 'row' }} >

        <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={()=>{
            navigation.navigate("placeOrder", {total:total, address:address ,payment:"cash"})
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>cash on Delivery:</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft:5}}>{total}$</Text>
      </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({})


{/* <Text>CheckOut total is {total.total}</Text> */ }

