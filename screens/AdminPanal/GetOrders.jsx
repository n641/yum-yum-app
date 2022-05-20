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

import { getOrders, subscribeOrder  } from '../../db/Auth/usersData/Orders';
import OrderCard from '../Cards/OrderCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GetOrders = ({ navigation }) => {

    const [arrOrders, setArrOrders] = useState([]);

    const getOrdersHandler = async () => {
        const arr = await getOrders();
        setArrOrders(arr)
    }

    useEffect(() => {
        getOrdersHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribeOrder(({ change, snapshot }) => {
            if (change.type === "added") {
                getOrdersHandler();
            }
            if (change.type === "modified") {
                getOrdersHandler();
            }
            if (change.type === "removed") {
                getOrdersHandler();
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
                data={arrOrders}
                numColumns={2}
                keyExtractor={item=>item.id}
                renderItem={itemData => 
                    <OrderCard 
                        user={itemData.item.user}
                        product={itemData.item.product}
                        id={itemData.item.id}
                        create={itemData.item.creatAt}
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