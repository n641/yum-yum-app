import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView , Button} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { getUsers, editUser, subscribeUser } from '../../db/Auth/usersData/users'
import { auth } from '../../db/config'
import { TextInput } from 'react-native-gesture-handler';
import { async } from '@firebase/util';
import editUsers from '../AdminPanal/Users/editUsers';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Address = ({ route, navigation }) => {
    const { total } = route.params;
    const [Users, setUsers] = useState([]);
    const [address, setaddress] = useState([]);
    const [flag, setFlag] = useState(true)
    const [CUser, setCUser] = useState("")
    const [newAddress, setNewAddress] = useState("")

    const getUserss = async () => {
        const arr = await getUsers();
        setUsers(arr);
    };

    const addNewAddress = async () => {
        const arr = await getUsers();
        const obj = arr.find(e => e.email === auth.currentUser.email)
        setCUser(obj)
        const oldAddresses = obj.address
        editUser({
            ...obj,
            address: [...oldAddresses, newAddress]
        }).then(() => setFlag(!flag))

    }

    useEffect(() => {
        getUserss();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeUser(({ change, snapshot }) => {
            //   console.log("changes", change, snapshot, change.type);
            // if (snapshot.metadata.hasPendingWrites) {
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

    const temp = [];
    useEffect(() => {
        if (!Users?.length)
            return;
        const user = Users.find(e => e.email == auth.currentUser.email);
        user.address.map((a) => {
            temp.push(a);
        })
        setaddress(temp)
    }, [Users]);

    return (
        <View style={{ alignItems: 'center' }}>
            {
                (flag == true) ?
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "red", margin: 10 }}>choose on of your address </Text>
                        <ScrollView>
                            {address.map((a, i) => (
                                <View key={i} style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width - 20, }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: "row", width: width - 20, alignItems: 'center' }}>

                                        <View style={{ justifyContent: 'flex-start', flexDirection: "row", alignItems: 'center' }}>
                                            <View style={{ marginHorizontal: 10 }}>
                                                <Ionicons name="shield-checkmark" size={width / 19} color={'black'} />
                                            </View>
                                            <TouchableOpacity onPress={() => {
                                                navigation.navigate("CheckOut", { address: a, total: total })
                                            }}>
                                                <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>{a}</Text>
                                            </TouchableOpacity>
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

                            ))}
                        </ScrollView>
                        <View>
                            <TouchableOpacity style={{ position: "fixed", bottom: 0, left: 0 }} onPress={() => setFlag(!flag)}>
                                <Ionicons name="add-circle" size={width / 7} color={'red'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :

                    <View style={{ flex: 1, width: width, height: height, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "red", margin: 10 }}>Add new address </Text>
                        <View style={{ flex: 1, width: width, height: height, alignItems: 'center' }}>

                            <View style={styles.input}>
                                <TextInput
                                    onChangeText={setNewAddress}
                                    value={newAddress}
                                />
                            </View>
                            <View style={{ width: 200, margin: 10 }}>
                                <Button title='Add' color={'red'} onPress={() => addNewAddress()} />
                            </View>
                        </View>
                    </View>
            }


        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    input: {
        height: '20%',
        borderRadius: 10,
        width: 400,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10,
        height:height/10
      },
})
