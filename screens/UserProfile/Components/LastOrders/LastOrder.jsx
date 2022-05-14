import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from '../../../../Constants/style';

import LastOrderCard from './LastOrderCard';
import BasicCard from '../../../../Components/BasicCard'

import { getUsers, subscribeUser } from '../../../../db/Auth/usersData/users';
import { getProducts, subscribe } from '../../../../db/Auth/usersData/Products';
import { auth } from '../../../../db/config';

const LastOrder = ({ navigation }) => {
    const [Users, setUsers] = useState([]);
    const [product, setproduct] = useState([]);


    const getUserss = async () => {
        const arr = await getUsers();
        setUsers(arr);
        // console.log(arr);
    };

    const getProduct = async () => {
        const arr = await getProducts();
        setproduct(arr);
        console.log(arr)
    }


    useEffect(() => {
        getUserss();
        getProduct();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeUser(({ change, snapshot }) => {
            //   console.log("changes", change, snapshot, change.type);
            // if (snapshot.metadata.hasPendingWrites) {
            if (change.type === "added") {
                console.log("New message: ", change.doc.data());
                getUserss();
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
                getUserss();
            }
            if (change.type === "removed") {
                console.log("Removed message: ", change.doc.data());
                getUserss();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            //   console.log("changes", change, snapshot, change.type);
            // if (snapshot.metadata.hasPendingWrites) {
            if (change.type === "added") {
                console.log("New message: ", change.doc.data());
                getProduct();
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
                getProduct();
            }
            if (change.type === "removed") {
                console.log("Removed message: ", change.doc.data());
                getProduct();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);


    // Users.map((e) => (
    //     e.email == auth.currentUser.email ? (
    //         e.oldOrders.map((op) => (
    //             product.map((p) => (
    //                 op == p.productName ? (
    //                     console.log(p.productName)
    //                 ) : null
    //             ))
    //         )
    //         )
    //     ) : null

    //     // <LastOrderCard url={e.url} name={e.name} price={e.price} desc={e.desc} fav={e.fav} offer={e.offer} discound={e.discound} navigation={navigation} key={id} />

    // ))

    return (
        <View>
            <View>
                <View
                    style={{
                        flexDirection: "column",
                        borderRadius: 30,
                        justifyContent: "center",
                        // height:height/
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: style.primary }}> Last Orders</Text>
                    </View>
                    <Animated.ScrollView
                        horizontal
                        snapToInterval={width}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    >

                        {Users.map((e) => (
                            e.email == auth.currentUser.email ? (
                                e.oldOrders.map((op) => (
                                    product.map((p, id) => (
                                        op == p.productName ? (
                                            <BasicCard url={p.url} name={p.productName} price={p.price} desc={p.description} offer={e.offer} discound={e.discount} navigation={navigation} key={id} />
                                        ) : null
                                    ))
                                )
                                )
                            ) : null

                            // <LastOrderCard url={e.url} name={e.name} price={e.price} desc={e.desc} fav={e.fav} offer={e.offer} discound={e.discound} navigation={navigation} key={id} />

                        ))}

                    </Animated.ScrollView>



                </View>
            </View>
        </View>
    )
}

export default LastOrder

const styles = StyleSheet.create({})