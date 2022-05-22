import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, Keyboard, Alert, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { register } from '../../db/Auth/auth';
import { auth, db, app } from '../../db/config';
import { addUser } from '../../db/Auth/usersData/users';
import { addMessage } from '../../db/Auth/usersData/Support';
import { updateProfile } from "firebase/auth"
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SignUp = ({ navigation }) => {

    const [userName, setuserName] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [cpass, setcpass] = useState("");
    const [add, setadd] = useState("");
    const [phone, setphone] = useState("");
    const [flag, setflag] = useState(true);
    const [flag2, setflag2] = useState(true);
    const [error, setError] = useState("");

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();




    const handleSignUp = () => {
        if (pass === cpass) {
            register(email, pass).then(() => {
                addUser({
                    userName: userName,
                    email: email,
                    password: pass,
                    address: [add],
                    phoneNum: [phone],
                    rule: "user",
                    cart: [],
                    favourite: [],
                    oldOrders: [],
                    Message: [],
                    review: [],
                    orders:[],
                    points: 1,
                    credit: 100
                }).then(() => {
                    addMessage({
                        email: email,
                        Message: []
                    })
                })
                alert("Sign up done")
                navigation.navigate("Login")
            })
                .catch((error) => {
                    console.log(error)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {

            const errorMessage = "your confirm password not equal you password";
            alert(errorMessage);
        }
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
             height:height
        }}>
            {/* <TouchableWithoutFeedback onPress={() => {
                // Keyboard.dismiss();
            }}> */}
                <View
                    style={{ flex: 1 }}
                >
                    <Image
                        style={{
                            width: width,
                            height: height,
                            position: 'relative',
                            opacity: 0.6,
                            // resizeMode: 'cover',
                        }}
                        source={require('../../assets/1.jpg')}
                    />



                    <View style={styles.card}>

                        <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 20 }} >
                            <View style={{ borderColor: 'yellow', borderRadius: 50, borderWidth: 3, padding: 10, marginTop: 30 }} >
                                <Ionicons name="lock-closed-outline" size={80} color={'yellow'} />
                            </View>

                            <Text style={{ color: 'yellow', fontSize: 26, fontWeight: '600' }}>Sign Up</Text>
                        </View>

                        {/* <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            // behavior='height'
                            style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}
                        > */}



                            <View style={styles.input}>

                                <Ionicons name="person-circle" size={25} color={'white'} />
                                <TextInput
                                    placeholder='enter your userName'
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setuserName}
                                    value={userName}
                                    autoFocus={true}
                                    autoComplete="off"
                                    returnKeyType="next"
                                    onSubmitEditing={() => ref_input2.current.focus()}
                                    blurOnSubmit={false}


                                />
                            </View>
                            <View style={styles.input}>
                                <Ionicons name="mail" size={25} color={'white'} />
                                <TextInput
                                    placeholder='enter your email'
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setemail}
                                    value={email}
                                    keyboardType='email-address'
                                    autoComplete="off"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => ref_input3.current.focus()}
                                    ref={ref_input2}

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
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setpass}
                                    value={pass}
                                    keyboardType='number-pad'
                                    secureTextEntry={flag}
                                    autoComplete="off"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => ref_input4.current.focus()}
                                    ref={ref_input3}

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
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setcpass}
                                    value={cpass}
                                    keyboardType='number-pad'
                                    secureTextEntry={flag2}
                                    autoComplete="off"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => ref_input5.current.focus()}
                                    ref={ref_input4}

                                />
                            </View>


                            <View style={styles.input}>
                                <Ionicons name="location" size={25} color={'white'} />
                                <TextInput
                                    placeholder='enter your address'
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setadd}
                                    value={add}
                                    autoComplete="off"
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => ref_input6.current.focus()}
                                    ref={ref_input5}

                                />
                            </View>

                            <View style={styles.input}>
                                <Ionicons name="call" size={25} color={'white'} />
                                <TextInput
                                    placeholder='enter your phone'
                                    style={{ color: 'white', paddingLeft: 10, fontSize: 18, width: 200 }}
                                    placeholderTextColor="white"
                                    onChangeText={setphone}
                                    value={phone}
                                    autoComplete="off"
                                    blurOnSubmit={false}
                                    ref={ref_input6}
                                    returnKeyType="next"
                                    onSubmitEditing={()=>{handleSignUp()}}

                                />
                            </View>

                            {/* <View > */}

                            {pass && email && userName && cpass ?
                                <Button title='sign Up' onPress={() => {
                                    handleSignUp();
                                }} color={"red"}
                                    style={styles.btn} />
                                : <Button title='sign Up' onPress={() => {
                                    navigation.navigate('Login')
                                }} color={"red"}
                                    disabled style={styles.btn} />
                            }


                            <View style={{ marginBottom: 50, borderBottomWidth: 2, borderBottomColor: 'yellow', padding: 5 }}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Login')
                                }}>
                                    <Text style={{ color: 'yellow', fontSize: 16 }}>have already account?</Text>
                                </TouchableOpacity>
                            </View>
                            {/* </View> */}

                        {/* </KeyboardAvoidingView> */}

                    </View>
                </View>
            {/* </TouchableWithoutFeedback> */}

        </View >
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
        // padding: 0,
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
