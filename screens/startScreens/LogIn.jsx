import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, SliderComponent } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { getUsers } from '../../db/Auth/usersData/users';
import { logout } from '../../db/Auth/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../db/config';
{/* <Ionicons name="chatbubbles" size={90} color={'red'} /> */ }

import { login } from '../../db/Auth/auth';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Login = ({ navigation }) => {

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));

        return () => {
            unsub();
        };
    },[]);
    
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [flag, setflag] = useState(true);
    const [user, setUser] = useState(undefined);

    

    const handleLogin = async () =>{
        console.log(email, pass);
        login(email, pass).then(()=>{
            if (user) {
              navigation.navigate("AdminStartScreen");
            }
         navigation.navigate("HomeStart")
        }).catch((err)=>{
            console.log(err)
            const errorMessage = err;
            alert(errorMessage);
        }) ;
            console.log(user);

        
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black'
        }}>
            <View>
                <Image
                    style={{
                        width: width,
                        height: height,
                        position: 'relative',
                        opacity: 0.6
                    }}
                    source={require('../../assets/1.jpg')}
                />
                <View style={styles.card}>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                        <View style={{ borderColor: 'yellow', borderRadius: 50, borderWidth: 3, padding: 10 }} >
                            <Ionicons name="lock-closed-outline" size={90} color={'yellow'} />
                        </View>

                        <Text style={{ color: 'yellow', fontSize: 26, fontWeight: '600' }}>Sign In</Text>
                    </View>



                    <View style={styles.input}>

                        <Ionicons name="person-circle" size={25} color={'white'} />
                        <TextInput
                            placeholder='enter your email'
                            style={{ color: 'white', fontSize: 18, paddingLeft: 10 }}
                            placeholderTextColor="white"
                            onChangeText={setemail}
                            value={email}


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
                            secureTextEntry={flag}
                        />
                    </View>

                    <View >

                        {pass && email ?
                            <Button title='log in' onPress={() => {
                                handleLogin();

                            }} color={"red"}
                                style={styles.btn} />

                            : <Button title='log in' onPress={() => {
                                handleLogin();
                                
                            }} color={"red"}
                                disabled style={styles.btn} />

                        }

                        <View style={{ margin: 10, borderBottomWidth: 2, borderBottomColor: 'yellow', padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                
                            }}>
                                <Text style={{ color: 'yellow', fontSize: 18 }}>forget password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', paddingRight: 5, fontSize: 18 }}> Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>{
                                navigation.navigate('SignUp')
                        }}>
                        <Text style={{ color: 'yellow', fontSize: 20 }}>SignUp</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    icon: {
        alignItems: 'center',
    },
    card: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',


    },
    input: {
        height: '8%',
        borderRadius: 10,
        width: 250,
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center'
    },
    btn: {
        width: '40%',
        minWidth: 250,
        borderRadius: 50,
        alignItems: 'center'

    }
})

