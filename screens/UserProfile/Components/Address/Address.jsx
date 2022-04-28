import { StyleSheet, Text, View, Dimensions , ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from '../../../../Constants/style';
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Address = () => {
    const [address, setaddress] = useState([ "17 mhi el deen el bahry street / basaten el3momy /  ",  "7 doctoe city / bawaba 4 / doctor buliding ", "" ]);

    return (
        <View style={{flexDirection:'row' , marginTop:20}}>
            <View style={{ width: width /2-20, height: height / 5 , backgroundColor: style.third,
             borderRadius: 20, borderWidth: 1, margin: 10, justifyContent:'space-around' , }}>
                 <Text style={{ fontWeight:'bold' , fontSize:20 , color:style.primary , textAlign:'center'}}>Address</Text>
                <ScrollView>
                {address.map((e, i)=>(
                    e?(
                        <View key={i} style={{padding:10}}>
                    <Text style={{fontWeight:'500' , fontSize:16 }} > {e} </Text>
                    <Text> ----------------------------</Text>
                    </View>
                    ):null
                ))}
                </ScrollView>
            </View>

            <View style={{ width: width /2-20, height: height / 5 , backgroundColor: style.third,
             borderRadius: 20, borderWidth: 1, margin: 10, justifyContent:'space-around' , }}>
                 <Text style={{ fontWeight:'bold' , fontSize:25 , color:style.primary , textAlign:'center'}}>points</Text>

                 <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>
                 <Text style={{fontWeight:'bold' , fontSize:50 , textAlign:'center'}}>1</Text>
                 <Ionicons name="trophy" size={40} color={style.secondry} />
                 </View>
               
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({})