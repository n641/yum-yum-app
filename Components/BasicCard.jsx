import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";

import { getUsers, subscribeUser, editUser } from "../db/Auth/usersData/users";
import { getProducts, subscribe } from "../db/Auth/usersData/Products";
import { auth } from "../db/config";
import { Ionicons } from "@expo/vector-icons";


import style from "../Constants/style";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Card = ({ name, price, desc, url, fav, discound, offer, navigation, cart, funPush}) => {
    const [users, setUsers] = useState([]);
    const [favo, setfavo] = useState(false);
    const [pro, setpro] = useState([]);
    const [rate, setrate] = useState('');
    const [product, setproduct] = useState({});

    // console.log("your cart in fav is " , cart);
    const getUserss = async () => {
        const arr = await getUsers();
        setUsers(arr);
    };

    useEffect(() => {
        getUserss();
    }, []);

    const getItems = async () => {
        const arr = await getProducts();
        setpro(arr);
    };
    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeUser(({ change, snapshot }) => {

            if (change.type === "added") {
                getUserss();
            }
            if (change.type === "modified") {
                getUserss();
            }
            if (change.type === "removed") {
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

            if (change.type === "added") {
                getItems();
            }
            if (change.type === "modified") {
                getItems();
            }
            if (change.type === "removed") {
                getItems();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);
    useEffect(() => {
        if (!pro?.length) return;

        const product = pro.find((e) => e.productName == name);
        setproduct(product);

        let sum = 0;
        product.rate.map((r) => {

            sum += r.rate

        });

        sum == 0 ? (setrate(0)) :
            setrate((sum / product.rate.length));



    }, [pro, rate, product]);


    return (
        <View style={{ margin: 8, alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    borderRadius: style.border,
                    height: height / 2 - 60,
                    borderWidth: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: width / 2 - 16,
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
                        <Text style={{ fontSize: width / 25, fontWeight: "bold" }}>
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
                                            fontSize: width / 25,
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
                                            fontSize: width / 25,
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
                                        fontSize: width / 25,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {price + "$"}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

                {rate == 5 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                    </View>
                ) : 4 <= rate && rate < 5 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                    </View>
                ) : 3 <= rate && rate < 4 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                    </View>
                ) : 2 <= rate && rate < 3 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                    </View>
                ) : 1 <= rate && rate < 2 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"yellow"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                    </View>
                ) : rate == 0 ? (
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                        <Ionicons name={"star"} size={20} color={"gray"} />
                    </View>
                ) : null}




                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        margin: 5,
                        bottom: 5,
                    }}
                >
                    <TouchableOpacity onPress={() => {

                        if (!cart?.length) {
                            funPush([...cart,{ name: name, price: price, desc: desc, url: url,  discound: discound, offer: offer, counter: 1 }])
                            console.log("the cart is ", cart);

                        } else {
                            
                            let oldcounter=0;
                            let tem=[];
                            cart.map((product)=>{
                                if(product.name==name){
                                    oldcounter=product.counter
                                }else{
                                    tem.push(product)
                                }
                            })
             
                                console.log("tttt",tem)
                            

                             funPush([...tem, { name: name, price: price, desc: desc, url: url, discound: discound, offer: offer, counter: oldcounter+1}])

                             console.log("the cart is ", cart);



                                }
                        }

                    }
                  


                        style={{
                            borderRadius: style.border,
                            backgroundColor: style.primary,
                            width: width / 4 - 25,
                            height: height / 15,
                            justifyContent: "center",
                            margin: 5,
                            marginLeft: 5,
                        }}
                    >
                        <Text
                            style={{
                                color: style.third,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            Order Now
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            borderRadius: style.border,
                            backgroundColor: "black",
                            width: width / 4 - 25,
                            height: height / 15,
                            justifyContent: "center",
                            margin: 5,
                            marginRight: 5,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("DetailsScreen", {
                                    name: name,
                                    price: price,
                                    fav: fav,
                                    url: url,
                                    discound: discound,
                                    desc: desc,
                                    offer: offer,
                                    cart:cart,
                                    funPush:funPush
                                }
                                );
                            }}
                        >
                            <Text
                                style={{
                                    color: style.third,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                See More
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({});
