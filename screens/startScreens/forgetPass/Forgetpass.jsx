import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, SliderComponent } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { auth } from '../../../db/config';

import { sendEmail } from './SendEmail';
import { getUsers } from '../../../db/Auth/usersData/users';



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Forgetpass = ({navigation}) => {
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("your password of restraunt");
  const [body, setbody] = useState("");
  const [Users, setUsers] = useState([]);
  const [sendemail, setsendemail] = useState("noha64@gmail.com")

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    setbody("Your password is 123456")
    
  }

  useEffect(() => {
    getUserss();
  })


  useEffect(() => {
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == sendemail);
    setbody("Your password is 123456")
  }, []);

  return (
    <View style={{
      backgroundColor: 'black'
    }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: width,
            height: height,
            position: 'relative',
            opacity: 0.6,
            resizeMode: 'cover',
            flexDirection: 'row'

          }}
          source={require('../../../assets/1.jpg')}
        />
        <View style={styles.card}>

          <View style={{ flexDirection: 'column', alignItems: 'center' }} >
            <View style={{ borderColor: 'yellow', borderRadius: 50, borderWidth: 3, padding: 10 }} >
              <Ionicons name="lock-closed-outline" size={90} color={'yellow'} />
            </View>

            <Text style={{ color: 'yellow', fontSize: 26, fontWeight: '600' }}>forget password</Text>
            <Text style={{ color: 'yellow', fontSize: 26, fontWeight: '600' }}>Enter your email to send password</Text>

          </View>



          <View style={styles.input}>

            <Ionicons name="mail" size={25} color={'white'} />
            <TextInput
              placeholder='enter your email'
              style={{ color: 'white', fontSize: 18, paddingLeft: 10 }}
              placeholderTextColor="white"
              autoComplete="off"
              onChangeText={setemail}
              value={email}
              type="email"
            />
          </View>

          <View >

            {email ?
              <Button title='send email' onPress={() => {
                sendEmail(
                  email,
                     subject,
                  body,
                // { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
                ).then(() => {
                  console.log('Your message was successfully sent!');
                })
                navigation.navigate("Login")

              }} color={"red"}
                style={styles.btn} />

              : <Button title='send email' onPress={() => {


              }} color={"red"}
                disabled style={styles.btn} />

            }

            <View style={{ margin: 10, borderBottomWidth: 2, borderBottomColor: 'yellow', padding: 5 }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Login");
              }}>
                <Text style={{ color: 'yellow', fontSize: 18 }}>back to login?</Text>
              </TouchableOpacity>
            </View>

          </View>



        </View>
      </View>


    </View>

  )
}

export default Forgetpass

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

