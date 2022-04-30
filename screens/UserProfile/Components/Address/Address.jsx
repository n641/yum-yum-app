import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from '../../../../Constants/style';
import { Ionicons } from "@expo/vector-icons";

import { getUsers, subscribeUser } from "../../../../db/Auth/usersData/users";
import { auth } from "../../../../db/config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Address = () => {
  const [user, setUsers] = useState([{ name: "noha", add: ["sdkjslkj", "lskddsljkf"] }]);




  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    // console.log(arr);
  };


  useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
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



  
    user.map((e, i) => (
      e.email == auth.currentUser.email ? (
        e.address.map((l)=>{
          console.log(l);
        })
      ) : null
    ))
  
  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View style={{
        width: width / 2 - 20, height: height / 5, backgroundColor: style.third,
        borderRadius: 20, borderWidth: 1, margin: 10, justifyContent: 'space-around',
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: style.primary, textAlign: 'center' }}>Address</Text>
        <ScrollView>
          {user.map((e, i) => (
            e.email == auth.currentUser.email ? (
              <View key={i} style={{ padding: 10 }}>
                {e.address.map((l, index) => (

                  <View key={index}>
                    <Text style={{ fontWeight: '500', fontSize: 16 , color:"black" }} >
                      {l}
                    </Text>
                    <Text> ----------------------------</Text>
                  </View>
                ))}

              </View>
            ) : null
          ))}
        </ScrollView>
      </View>

      <View style={{
        width: width / 2 - 20, height: height / 5, backgroundColor: style.third,
        borderRadius: 20, borderWidth: 1, margin: 10, justifyContent: 'space-around',
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: style.primary, textAlign: 'center' }}>points</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}>1</Text>
          <Ionicons name="trophy" size={40} color={style.secondry} />
        </View>

      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({})