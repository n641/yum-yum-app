import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Dimensions,
    Button,
    ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'

import { AntDesign } from "@expo/vector-icons";

import { auth } from '../../../../db/config'
import { updatePassword } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getUsers, editUser, subscribeUser } from '../../../../db/Auth/usersData/users';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// console.log()
const EditProfile = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [CCPassword, setCCPassowrd] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [address, setAddress] = useState([])
    const [editAddress, setEditAddress] = useState("")
    const [bool, setBool] = useState(true)
    

    const getUserss = async () => {
        const arr = await getUsers();
        const us =  getAuth().currentUser
        const realUser = arr.find(e => e.email === us.email)
        await setUsers(realUser);
        setName(realUser.userName)
        setAddress(realUser.address)
    };

    const removeAddress = index =>{
        address.splice(index, 1)
        editUser({
            ...users,
            address: [...address]
        })
    }

    const addAddress = () =>{
        if(editAddress === ""){
            alert("Empty !!")
        }
        else{
            address.push(editAddress)
            editUser({
                ...users,
                address: [...address]
            })
            setBool(!bool)
        }
    }

    const EditDone = () =>{
        if(password === cpassword && CCPassword === users.password){
            updatePassword(auth.currentUser, password).then(()=>{
                editUser({
                    ...users,
                    address: [...address],
                    userName: name,
                    password: password

                }).catch((e)=>console.log(e))
            }).catch((e)=>console.log(e))
        }
        else{
            alert("Password and confirm password not matched")
        }
    }

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

    useEffect(() => {
        getUserss();
    }, []);

    // useEffect(() => {
    //     getInfo();
    // }, []);

    return (
        <ScrollView>
        <View style={styles.bigContainer}>
            <Text style={styles.fontStyle}>Please fill this form to edit your profile</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter new user name'
                    onChangeText={setName}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter current password'
                    onChangeText={setCCPassowrd}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter new password'
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Confirm Password'
                    onChangeText={setCPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.AddressStyle}>
                {
                    (bool == true) ?
                    address.map((item, index) => (
                        <View  key={index} style={styles.address} >
                            <Text>{item}</Text>
                            <AntDesign name={"delete"} size={25} onPress={() => removeAddress(index) }/>
                        </View>
                    )) :
                    <View style={styles.input}>
                        <TextInput
                            placeholder='add new address'
                            onChangeText={setEditAddress}
                            style={{color:"red"}}
                        />
                        
                    </View>
                }
                {
                    (bool == true) ?
                    <Button 
                        title="Add address"
                        style={{color:"red"}}
                        onPress={() => setBool(!bool)}
                    />
                :
                    <Button 
                        title="Add" 
                        style={{color:"red"}}
                        onPress={()=> addAddress()} 
                    />
                }
            </View>
            <Button title="Edit" onPress={() => EditDone()} />

        </View>
        </ScrollView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    bigContainer:{
        alignItems: 'center',
        margin: 10,
    },
    input: {
        height: '15%',
        borderRadius: 10,
        width: width-100,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        marginVertical: 10,
    },
    inputAddress: {
        height: '20%',
        borderRadius: 10,
        width: width / 2,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'column',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        marginVertical: 10,
    },
    AddressStyle:{
        flexDirection: 'column',
        width: width-100,
        alignItems: "center",
        height: 'auto%',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
    },
    // address:{
    //     flexDirection: 'row',
    //     width: width-100,
    //     justifyContent: "space-between",
    //     // alignItems: "space-between",
    //     paddingVertical: 10,
    // },

    fontStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: "red"
    },
})