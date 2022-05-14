import react, {useEffect, useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Entypo } from "@expo/vector-icons";

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SupportCard = ({navigation, email, Message, id}) =>{

    return(
        <View style={styles.FirsrCotainer}>
            <Text style={styles.fontStyle}>{email}</Text>
            <View style={styles.Icons}>
                <TouchableOpacity style={styles.IconButton} onPress={() => navigation.navigate("chatting", {email: email, Message: Message})}>
                    <Entypo name={"chat"} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    FirsrCotainer: {
        flexDirection: "column",
        alignItems: 'center', 
        justifyContent: "space-between",
        width: width / 2 -10,
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5 ,
        marginVertical: 5 ,
    },
    Icons:{
        flexDirection: "row",
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    IconButton: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#32a852",
        height: 30,
        width: width / 3,
        marginHorizontal: 5,
        borderRadius: 5,
        marginVertical: 5
    },
    fontStyle:{
        marginVertical: 5,
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'red'
    }
})

export default SupportCard