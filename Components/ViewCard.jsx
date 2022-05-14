import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";

import { getUsers, subscribeUser, editUser } from "../db/Auth/usersData/users";
import { auth } from "../db/config";

import style from "../Constants/style";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Card = ({ name, price, desc, url, fav, discound, offer, navigation }) => {
    const [users, setUsers] = useState([]);
    const [favo, setfavo] = useState(false);

    const getUserss = async () => {
        const arr = await getUsers();
        setUsers(arr);
        // console.log(arr);
    };

    useEffect(() => {
        getUserss();
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


    return (
        <View style={{ margin: 8, alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    borderRadius: style.border,
                    height: height / 2 - 110,
                    borderWidth: 1,
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: width / 2 - 20,
                }}
            >
                <Image
                    style={{
                        width: width / 2 - 18,
                        height: height / 5,
                        borderRadius: style.border,
                    }}
                    source={{
                        uri: `${url}`,
                    }}
                />
                <View
                    style={{
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                        width: width / 2,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: width/25, fontWeight: "bold" }}>
                            {name.length < 15 ? name : name.substring(0, 10) + "..."}
                        </Text>
                    </View>
                    <View>
                        {offer ? (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            color: "#838787",
                                            fontSize: width/25,
                                            fontWeight: "bold",
                                            textDecorationLine: "line-through",
                                            marginRight: 5,
                                        }}
                                    >
                                        {price + "$"}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            color: "red",
                                            fontSize: width/25,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {price - discound + "$"}
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <Text
                                    style={{
                                        color: "red",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {price + "$"}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

               
                </View>
            </View>
    );
};

export default Card;

const styles = StyleSheet.create({});
