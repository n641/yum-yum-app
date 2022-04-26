import { StyleSheet, Text, View, Dimensions, Image, Button } from "react-native";
import React from "react";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


import colors from "../../Constants/colors";

const CardProduct = ({ name, price, url, discound, offer, desc }) => {
    return (
        <View style={{ marginHorizontal: 8, alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    borderRadius: 30,
                    height: height / 2 - 30,
                    borderWidth: 4,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: width / 2 - 20,
                    marginVertical: 10,
                }}
            >
                <Image
                    style={{
                        width: width / 2 - 28,
                        height: 150,
                        borderRadius: 30,
                    }}
                    source={{
                        uri: `${url}`,
                    }}
                />
                <View style={{ justifyContent: "space-around", alignItems: "center", flexDirection: "row", width: width / 2 - 30, }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "700", }}>{name}</Text>
                    </View>
                    <View>
                        {offer ? (
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <Text
                                        style={{
                                            color: colors.primary,
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            textDecorationLine: "line-through",
                                        }}
                                    >
                                        {price + "$"}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={{ color: "green", fontSize: 18, fontWeight: "bold" }}
                                    >
                                        {price - discound + "$"}
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <Text style={{ color: colors.primary, fontSize: 18, fontWeight: "bold" }}>
                                    {price + "$"}
                                </Text>
                            </View>
                        )}    
                    </View>
                </View>

                <View>
                    <Text style={{ color: colors.fourth, fontSize: 18  }}>{desc.substring(0,25)}....</Text>
                </View>


                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        margin: 5,
                        bottom: 5,
                    }}
                >
                    <View
                        style={{
                            borderRadius: 10,
                            backgroundColor: colors.primary,
                            width: width/4-20,
                            height: 40,
                            justifyContent: "center",
                            margin: 5
                        }}
                    >
                        <Text
                            style={{
                                color: colors.third,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            Order Now
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRadius: 10,
                            backgroundColor: colors.secondry,
                            width: width/4-20,
                            height: 40,
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: colors.third,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            See More
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({});
