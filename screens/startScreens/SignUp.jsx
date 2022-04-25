import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons"; 
import {register} from '../../db/Auth/auth'; 
{/* <Ionicons name="chatbubbles" size={90} color={'red'} /> */ }
import { auth, db, app } from '../../db/config';
import { addUser } from '../../db/Auth/usersData/users';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SignUp = ({ navigation }) => {

    const [userName, setuserName] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [cpass, setcpass] = useState("");
    const [add, setadd] = useState("");
    const [flag, setflag] = useState(true);
    const [flag2, setflag2] = useState(true);
    const [error, setError] = useState("");

    const handleSignUp = () => {
        if(pass === cpass){
            console.log(userName, email, pass, add);
            register(email, pass).then(() =>{
                addUser({
                    userName: userName, 
                    email: email, 
                    password: pass,
                    address: add,
                    rule: "user",
                    cart: [],
                    favourite: [],
                    oldOrders: []
                });
            }).catch((error)=>{
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
        else{

            const errorMessage = "your confirm password not equal you password";
            alert(errorMessage);
        }
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black'
        }}>
            <View
            >
                <Image
                    style={{
                        width: width,
                        height: height,
                        position: 'relative',
                        opacity: 0.6,
                        resizeMode: 'cover',
                    }}
                    source={require('../../assets/1.jpg')}
                />

                <View style={styles.card}>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                        <View style={{ borderColor: 'yellow', borderRadius: 50, borderWidth: 3, padding: 10, marginTop: 30 }} >
                            <Ionicons name="lock-closed-outline" size={80} color={'yellow'} />
                        </View>

                        <Text style={{ color: 'yellow', fontSize: 26, fontWeight: '600' }}>Sign Up</Text>
                    </View>



                    <View style={styles.input}>

                        <Ionicons name="person-circle" size={25} color={'white'} />
                        <TextInput
                            placeholder='enter your userName'
                            style={{ color: 'white', paddingLeft: 10, fontSize: 18 }}
                            placeholderTextColor="white"
                            onChangeText={setuserName}
                            value={userName}
                            autoFocus={true}
                        />
                    </View>
                    <View style={styles.input}>
                        <Ionicons name="person-circle" size={25} color={'white'} />
                        <TextInput
                            placeholder='enter your email'
                            style={{ color: 'white', paddingLeft: 10, fontSize: 18 }}
                            placeholderTextColor="white"
                            onChangeText={setemail}
                            value={email}
                            keyboardType='email-address'
                        />
                    </View>

                    <View style={styles.input}>
                        <TouchableOpacity onPress={() => {
                            setflag(!flag);
                        }}>
                            <Ionicons name={flag ? "eye-off-outline" : "eye"} size={25} color={'white'} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='enter your password'
                            style={{ color: 'white', paddingLeft: 10, fontSize: 18 }}
                            placeholderTextColor="white"
                            onChangeText={setpass}
                            value={pass}
                            keyboardType='number-pad'
                            secureTextEntry={flag}
                        />
                    </View>

                    <View style={styles.input}>
                        <TouchableOpacity onPress={() => {
                            setflag2(!flag2);
                        }}>
                            <Ionicons name={flag2 ? "eye-off-outline" : "eye"} size={25} color={'white'} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder=' comfirm password'
                            style={{ color: 'white', paddingLeft: 10, fontSize: 18 }}
                            placeholderTextColor="white"
                            onChangeText={setcpass}
                            value={cpass}
                            keyboardType='number-pad'
                            secureTextEntry={flag2}
                        />
                    </View>

                    <View style={styles.input}>
                        <Ionicons name="car-sport" size={25} color={'white'} />
                        <TextInput
                            placeholder='enter your address'
                            style={{ color: 'white', paddingLeft: 10, fontSize: 18 }}
                            placeholderTextColor="white"
                            onChangeText={setadd}
                            value={add}
                        />
                    </View>

                    <View >

                        {pass && email && userName && cpass ?
                            <Button title='sign Up' onPress={() => {
                                // navigation.navigate('Login')
                                handleSignUp();
                             }} color={"red"}
                                style={styles.btn} />
                            : <Button title='sign Up' onPress={() => { 
                                navigation.navigate('Login')
                            }} color={"red"}
                                disabled style={styles.btn} />
                        }

                        <View style={{ margin: 10, borderBottomWidth: 2, borderBottomColor: 'yellow', padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Login')
                            }}>
                                <Text style={{ color: 'yellow', fontSize: 16 }}>have already account?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({

    icon: {
        alignItems: 'center',
    },
    card: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: '8%',
        borderRadius: 10,
        width: 300,
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        margin: 5
    },
    btn: {
        width: '40%',
        minWidth: 250,
        borderRadius: 50,
        alignItems: 'center'

    }
})
