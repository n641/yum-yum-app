import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from '../../../../Constants/style';
import { Ionicons } from "@expo/vector-icons";

import { getUsers, subscribeUser } from "../../../../db/Auth/usersData/users";
import { auth } from "../../../../db/config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Address = () => {
  const [users, setUsers] = useState([]);
const [address, setaddress] = useState([]);
const [points, setpoints] = useState(1);



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
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
        getUserss();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);



  
  

  useEffect(()=>{
    const user = users.find(e=>e.email === auth.currentUser.email);
    console.log(user)
  //    let temp =[];
  //    user.address.map((add)=>{
  //     temp.push(add)
  // })
  //   setaddress(temp);
    // setpoints(user.points)

      },[])
  
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View style={{
        width: width / 2 - 20, height: height / 5, backgroundColor: style.third,
        borderRadius: 20, borderWidth: 1, margin: 10, justifyContent: 'space-around',
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: style.primary, textAlign: 'center' }}>Address</Text>
        <ScrollView>
          {users.map((e, i) => (
            e.email == auth.currentUser.email ? (
              <View key={i} style={{ padding: 10 }}>
                {e.address.map((l, index) => (

                  <View key={index}>
                    <Text style={{ fontWeight: '500', fontSize: 16 , color:"black" }} >
                      {l}
                    </Text>
                    <Text> ------------------------</Text>
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
          <Text style={{ fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}>{points}</Text>
          <Ionicons name="trophy" size={40} color={style.secondry} />
        </View>

      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({})