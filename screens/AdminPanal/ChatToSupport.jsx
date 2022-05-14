import {
    StyleSheet, 
    View, 
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { getMessage, subscribeMessage } from '../../db/Auth/usersData/Support';
import SupportCard from '../Cards/SupportCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const ChatToSupport = ({ navigation }) => {

    const [arrMessage, setArrMessage] = useState([]);

    const getMessagesHandler = async () =>{
        const arr = await getMessage()
        setArrMessage(arr)
        console.log(arrMessage)
    }

    useEffect(() => {
        getMessagesHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribeMessage(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getMessagesHandler();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getMessagesHandler();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getMessagesHandler();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.bigContainer}>
            <FlatList 
                data={arrMessage}
                numColumns={2}
                keyExtractor={item=>item.id}
                renderItem={itemData => 
                    <SupportCard 
                        navigation={navigation}
                        email={itemData.item.email}
                        Message={itemData.item.Message}
                        id={itemData.item.id}
                    />
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width,
        height: height,
        // justifyContent: "center",
        // alignItems: "center",
    },
    Container: {
        marginTop: 5,
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: "red"
    },
    AnimationStyle: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 4,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
    textInputDescription: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});

export default ChatToSupport;