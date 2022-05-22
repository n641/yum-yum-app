import react, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { deleteOrder, getOrders, subscribeOrder, editOrder } from "../../db/Auth/usersData/Orders";
import { getUsers, editUser, getUserByEmail } from "../../db/Auth/usersData/users";
import {adddelivery} from '../../db/Auth/usersData/delivers'

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const OrderCard = ({ navigation, user, product, id, create, address, payment, total }) => {

    const [users, setUsers] = useState([])
    const [orders, setorders] = useState([])

    const getUserss = async () => {
        const arr = await getUsers();
        setUsers(arr);
    };
    const getOrdersHandler = async () => {
        const arr = await getOrders();
        setorders(arr)
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


    const handleDeleteOrder = (id) => {
        deleteOrder(id);
    }


    const acceptOrder = () => {
        if (!users?.length) return;
        const realUser = users.find(e => e.email === user)
       
        let temp = [];
        let c =0;
        realUser.orders.map((product)=>{
            if(product.creatAt!==create){
                temp.push(product);
            }else{
                c=product.creatAt;
            }
        })
        temp.push({ user: user, product: product, payments: payment, addresss: address, totals: total, statuss: "accepted ", creatAt: c })
        console.log(temp);
        editUser({
          ...realUser,
          orders:[...temp],
        })
        .then(()=>{
            handleDeleteOrder(id)
        })
        .then(()=>{
            adddelivery(
               { user: user, product: product, payments: payment, addresss: address, totals: total, statuss: "accepted ", creatAt: c }
            )
        })

        // const oldOrdersUser = users.find(e => e.email === user).oldOrders
        // const finalArr = oldOrdersUser.concat(product)
        // editUser({
        //     ...realUser,
        //     oldOrders: finalArr
        // }).then(() => handleDeleteOrder(id))
    }

    useEffect(() => {
        getUserss();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeOrder(({ change, snapshot }) => {
            if (change.type === "added") {
                getOrders();
            }
            if (change.type === "modified") {
                getOrders();
            }
            if (change.type === "removed") {
                getOrders();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View style={styles.FirsrCotainer}>
            <Text style={styles.fontStyle}>{(user.length) > 20 ? user.substring(0, 20) + "..." : user}</Text>
            <FlatList
                data={product}
                keyExtractor={item => item.name}
                renderItem={itemData => <Text>{itemData.item.name}</Text>}
            />
            <View style={styles.Icons}>
                <TouchableOpacity style={styles.rejectButton} onPress={() => handleDeleteOrder(id)}>
                    <Entypo name={"squared-cross"} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.AcceptButton} onPress={() => acceptOrder()}>
                    <FontAwesome name={"check"} size={25} />
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
        width: width / 2 - 10,
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    Icons: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    AcceptButton: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "green",
        height: 30,
        width: width / 5,
        marginHorizontal: 5,
        borderRadius: 5,
        marginVertical: 5
    },
    rejectButton: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "red",
        height: 30,
        width: width / 5,
        marginHorizontal: 5,
        borderRadius: 5,
        marginVertical: 5
    },
    fontStyle: {
        marginVertical: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    }
})

export default OrderCard