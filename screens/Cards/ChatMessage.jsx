import react, {useEffect, useState} from "react";
import { 
    View ,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ChatMessage = ({Message, type}) =>{
    return(
        (type === "send") ?
        <Text style={styles.Sender}>{Message}</Text>:
        <Text style={styles.Reciever}>{Message}</Text>
    );
}

const styles = StyleSheet.create({
    Sender: {
        width: 'auto',
        maxWidth: "40%",
        padding: 7,
        backgroundColor: "#433491",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "flex-end",
        margin:3,
        borderRadius: 10,
        color: 'white',
    },
    Reciever: {
        width: 'auto',
        maxWidth: "40%",
        padding: 7,
        backgroundColor: "#2c3338",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "flex-start",
        margin:3,
        borderRadius: 10,
        color: 'white',
    }
})

export default ChatMessage