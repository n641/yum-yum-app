import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, SliderComponent, TouchableWithoutFeedback , Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { auth } from '../../../db/config';

import { sendEmail } from './SendEmail';
import { getUsers } from '../../../db/Auth/usersData/users';
import { forgetPassword } from '../../../db/Auth/auth';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Forgetpass = ({ navigation }) => {
  const [email, setemail] = useState("");
  
  const [Users, setUsers] = useState([]);
  const [sendemail, setsendemail] = useState("noha64@gmail.com")

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);

  }

  useEffect(() => {
    getUserss();
  })


  useEffect(() => {
    if (!Users?.length)
      return;
    const user = Users.find(e => e.email == sendemail);
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black'
    }}>

      <TouchableWithoutFeedback onPress={() => {
        // Keyboard.dismiss();
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
                style={{ color: 'white', paddingLeft: 10, fontSize: 18 , width: 200}}
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
                  // sendEmail(
                  //   email,
                  //      subject,
                  //   body,
                  // // { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
                  // ).then(() => {
                  //   console.log('Your message was successfully sent!');
                  // })
                  forgetPassword(email)
                    .then(() => console.log("Done"))
                    .catch(() => console.log(e))
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
        </TouchableWithoutFeedback>


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

