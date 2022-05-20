import react, {useEffect, useState} from "react";
import { 
    View ,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    FlatList,
    ScrollView
} from "react-native";

import { editMessage, getMessage, subscribeMessage } from "../../db/Auth/usersData/Support";
import { editUser, getUsers } from "../../db/Auth/usersData/users";
import { FontAwesome } from "@expo/vector-icons";

import ChatMessage from "./ChatMessage";
import { auth } from "../../db/config";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Chatting = ({navigation, route}) =>{

    const { email, Message } = route.params

    const [message, setMessage] = useState("");
    const [arrMsg, setArrMsg] = useState()
    const [big, setBig] = useState([]);

    const getMessagesForUser = async() =>{
        const arr = await getMessage()
        const arrUser = arr.find(e => e.email === auth.currentUser.email)
        console.log(arr)
        console.log(arrUser)
        console.log(arrUser.Message)
        setArrMsg(arrUser.Message)
    }

    const getMesse = async () =>{
        const arr = await getMessage();
        setBig(arr)
    }

    const snedMesseage = async () =>{
        const Users = await getUsers();
        const Solve = await getMessage();
        const user = Users.find(e => e.email === email)
        const obj = Solve.find(e => e.email === email)
        const d = new Date();
        const date = d.toISOString().split("T")[0];
        const time = d.toTimeString().split(" ")[0];
        console.log(date + "-" + time);
        editUser({
            ...user,
            Message: [
                ...user.Message,
                {
                    msg: message,
                    senderId: user.id,
                    senderUN: user.userName,
                    date: date + "-" + time,
                    email: user.email,
                    type: "recieve"
                },
            ],
            }).then(()=>{
            editMessage({
                ...obj,
                Message: [
                    ...obj.Message,
                    {
                        msg: message,
                        senderId: user.id,
                        senderUN: user.userName,
                        date: date + "-" + time,
                        email: user.email,
                        type: "send"
                    },
                ],
            }).then(()=>console.log("Done !"))
        })
    }

    useEffect(() => {
        const unsubscribe = subscribeMessage(({ change, snapshot }) => {
          if (change.type === "added") {
            console.log("New message: ", change.doc.data());
            getMessagesForUser();
          }
          if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
            getMessagesForUser();
          }
          if (change.type === "removed") {
            console.log("Removed message: ", change.doc.data());
            getMessagesForUser();
          }
        });
    
       
        return () => {
          unsubscribe();
        };
      }, []);

    useEffect(() => {
        console.log("UseEffect")
        getMessagesForUser();
      }, []);

    return(
        <View style={styles.bigContainer}>
            <ScrollView style={styles.Content}>
                <FlatList 
                    data={arrMsg}
                    renderItem={(itemData) =>
                        <ChatMessage 
                            Message={itemData.item.msg}
                            type={itemData.item.type}
                        />
                    }
                />
            </ScrollView>
            <View style={styles.Footer}>
                <TextInput 
                    style={styles.TextInputStyle}
                    placeholder="Enter your message"
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.bottonStyle} onPress={() => snedMesseage()}>
                    <FontAwesome name={"send"} size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    bigContainer: {
        height: height,
        width: width,

    },
    Content: {
        position: "absolute",
        top: 0,
        marginTop: 5,
        height: height - 115,
        width: width - 10,
        borderWidth: 2,
        borderRadius: 10,
    },
    // Footer: {
    //     position: "fixed",
    //     bottom: 0,
    //     marginVertical: 5 ,
    //     flexDirection: "row",
    //     justifyContent: 'space-between'
    // },
    bottonStyle:{
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 50
    },
    TextInputStyle:{
        borderWidth: 2,
        borderRadius: 10,
        width: width - 40,
        paddingHorizontal: 10,
    }
})

export default Chatting