import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";



import { auth } from '../../../../db/config'
import { getUsers, addUser, subscribeUser } from '../../../../db/Auth/usersData/users'



// console.log()
const EditProfile = () => {

    const [user, setuser] = useState([])
    const [name, setname] = useState("")
    const [address, setaddress] = useState([])


    const getUserss = async () => {
        const arr = await getUsers();
        setuser(arr);
        console.log(arr);
    }

    useEffect(() => {
        getUserss();
    }, [])

    user.map((e, i) => {
        e.email == auth.currentUser.email ? (
          e.address.map((l)=>{
            console.log(l);
          })
        ) : null })
        

    const fun = (s)=>{
        console.log(s)
    }


    return (
        <View style={{ margin: 10 }}>
            <TextInput
                onChangeText={setname}
                value={name}
            />
            <View style={{ flexDirection: 'row', margin: 10 }}>
                {
                    user.map((u) => {
                        u.email == auth.currentUser.email ? (
                            u.address.map((a, i) => {
                                <View style={{ flexDirection: 'column', margin: 10 }}>
                                    <TouchableOpacity onPress={
                                        // ()=>{
                                        fun(a)
                                    // }
                                    }>
                                        <Ionicons name="chatbubbles" size={90} color={'red'} />
                                    </TouchableOpacity>
                                    <Text>edit address {i} </Text>
                                </View>
                            })
                        ) : null
                    })
                }
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({})