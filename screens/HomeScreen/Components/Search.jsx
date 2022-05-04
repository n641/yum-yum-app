import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Search = () => {

    const [search, setsearch] = useState("")

    return (
        <View style={{ marginTop: 30, alignItems: 'center' }}>
            <View style={{ borderRadius: 20, borderColor: "white", borderWidth: 1, width: width - 50, height: height / 17, backgroundColor: "white", alignItems: 'center', justifyContent: 'space-between', padding: 10, flexDirection: 'row' }}>
                <TextInput
                    placeholder='Search here...'
                    onChangeText={setsearch}
                    value={search}
                />
                <Ionicons name="search" size={20} color={'black'} />

            </View>
            <View style={{ justifyContent: 'space-around', backgroundColor: "black", width: width - 30, height: height / 5 + 20, borderRadius: 30, marginTop: 20, elevation: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                    <Text style={{ color: "gray" }}>Balance</Text>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Visa</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, alignItems: 'center' }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: 'bold' }}> $280.65</Text>
                    <Text style={{ color: "gray" }}> ...3028</Text>
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})