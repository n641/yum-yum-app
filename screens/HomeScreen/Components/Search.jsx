import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState , useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { auth } from '../../../db/config';
import { getUsers, subscribeUser } from '../../../db/Auth/usersData/users';




const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Search = ({navigation}) => {

    const [Users, setUsers] = useState([]);
    const [credit, setcredit] = useState('');
    const [search, setsearch] = useState("");

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
        });
    
        return () => {
          unsubscribe();
        };
      }, []);


      useEffect(() => {
        if (!Users?.length)
          return;
        const user = Users.find(e => e.email == auth.currentUser.email);
        setcredit(user.credit);
       
      }, [Users]);

      const handleSearch=()=>{
        navigation.navigate("TestSearch" , {resulte:search})
        setsearch(" ");
      }

    return (
        <View style={{ marginTop: 30, alignItems: 'center' }}>
            <View style={{ borderRadius: 20, borderColor: "white", borderWidth: 1, width: width - 50, height: height / 17, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', padding: 10, flexDirection: 'row' }}>
                <TextInput
                    placeholder='Search here for product...'
                    onChangeText={setsearch}
                    value={search}
                    returnKeyType="next"
                    onSubmitEditing={()=>{handleSearch()}}
                />
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("TestSearch" , {resulte:search})
                }}>
                <Ionicons name="search" size={20} color={'black'} />
                </TouchableOpacity>

            </View>
            <View style={{ justifyContent: 'space-around', backgroundColor: "black", width: width - 30, height: height / 5 + 20, borderRadius: 30, marginTop: 20, elevation: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                    <Text style={{ color: "gray" }}>Balance</Text>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Visa</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, alignItems: 'center' }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: 'bold' }}> ${credit}</Text>
                    <Text style={{ color: "gray" }}> ...3028</Text>
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})