import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";

const Order = () => {
    const [orders, setorders] = useState([]);

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name="cloud-download-outline" size={70} color={'red'} />
                    <Text>your order not </Text>
                    <Text>accepted until now</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name="cloud-done-outline" size={70} color={'red'} />
                    <Text>your order accepted </Text>
                    <Text> and it is in the way</Text>
                </View>
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({})

{/* <ion-icon name="cloud-download-outline"></ion-icon> */ }  //first
{/* <ion-icon name="cloud-done-outline"></ion-icon> */ } //second