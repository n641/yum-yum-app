import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
{/* <Ionicons name="chatbubbles" size={90} color={'red'} /> */ }


const Footer = () => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-around' , margin:10}}>
            <View>
                <TouchableOpacity style={{flexDirection:'row' , alignItems:'center'}}>
                    <Ionicons name="log-out" size={40} color={'red'} />
                    <Text style={{fontSize:20 , fontWeight:'500' }}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={{flexDirection:'row' , alignItems:'center'}}>
                    <Ionicons name="create" size={40} color={'red'} />
                    <Text style={{fontSize:20 , fontWeight:'500' }}>edit profile</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})