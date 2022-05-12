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

import { getOrders, subscribe  } from '../../db/Auth/usersData/Orders';
import OrderCard from '../Cards/OrderCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GetOrders = ({ navigation }) => {

    const [arrOrders, setArrOrders] = useState([]);

    const getOrdersHandler = async () => {
        const arr = await getOrders();
        setArrOrders(arr)
        console.log(arrOrders);
    }

    useEffect(() => {
        getOrdersHandler();
    }, [])

    useEffect(() => {
        // const unsubscribe = subscribe(({ change, snapshot }) => {
        //     if (change.type === "added") {
        //         console.log("New mesg: ", change.doc.data());
        //         getOrdersHandler();
        //     }
        //     if (change.type === "modified") {
        //         console.log("Modified mesg: ", change.doc.data());
        //         getOrdersHandler();
        //     }
        //     if (change.type === "removed") {
        //         console.log("Removed mesg: ", change.doc.data());
        //         getOrdersHandler();
        //     }
        //     // }
        // });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.bigContainer}>
            <FlatList 
                data={arrOrders}
                numColumns={2}
                renderItem={itemData => 
                    <OrderCard 
                        user={itemData.item.user}
                        product={itemData.item.product}
                        id={itemData.item.id}
                        navigation={navigation}
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

export default GetOrders;