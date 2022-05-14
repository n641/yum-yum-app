import { StyleSheet, Text, View, Dimensions, TouchableOpacity , ScrollView } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { getUsers, subscribeUser } from '../../db/Auth/usersData/users'
import { auth } from '../../db/config'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Address = ({ route, navigation }) => {
    const { total } = route.params;
    const [Users, setUsers] = useState([]);
    const [address, setaddress] = useState([]);




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

    const temp = [];
    useEffect(() => {
        if (!Users?.length)
            return;
        console.log('auth.currentUser.email :>> ', auth.currentUser.email);
        const user = Users.find(e => e.email == auth.currentUser.email);
        console.log('Users :>> ', Users);
        console.log('User i find :>> ', user);
        user.address.map((a) => {
            temp.push(a);
        })
        setaddress(temp)
        console.log(address);
    }, [Users]);

    console.log(address);
    return (
        <View style={{alignItems:'center'}}>
             <Text  style={{ fontSize: 20, fontWeight: 'bold', color: "red" , margin:10 }}>choose on of your address </Text>
             <ScrollView>
            {address.map((a) => (
                <View style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width - 20, }}>
                    <View style={{justifyContent:'space-between' , flexDirection:"row" , width:width-20 , alignItems:'center'}}>

                        <View style={{justifyContent:'flex-start' , flexDirection:"row" , alignItems:'center'}}>
                            <View style={{ marginHorizontal: 10 }}>
                                <Ionicons name="shield-checkmark" size={width / 19} color={'black'} />
                            </View>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("CheckOut" , { address:a , total:total})
                            }}>
                                <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>{a}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate("editAddress" , {address:a , total:total})
                            }}
                            >
                                <Ionicons name="create" size={width / 19} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            ))}
            </ScrollView>

        </View>
    )
}

export default Address

const styles = StyleSheet.create({})
