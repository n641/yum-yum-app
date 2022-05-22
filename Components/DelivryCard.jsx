import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'

import style from '../Constants/style'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const DelivryCard = ({ address, payment, status, products, total, creatAt, deleteItem , id }) => {
    return (
        <View style={{ margin: 10, alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    borderRadius: style.border,
                    borderColor: status == "un accepted" || status == "un arrived" ? "red" : "green",
                    height: height / 2,
                    borderWidth: 2,
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: width - 20,
                    elevation: 0.4
                }}
            >
                <Image
                    style={{
                        width: width - 20,
                        height: height / 4,
                        borderRadius: style.border,
                    }}
                    source={require('../assets/order.jpg')}

                />

                <View
                    style={{
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        width: width - 20,
                        padding: 20
                    }}
                >

                    <View>
                        <Text style={{ fontSize: width / 25, fontWeight: "bold" }}>
                            address: {address}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: width / 25, fontWeight: "bold" }}>
                            payment: {payment}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: width / 25, fontWeight: "bold", color: status == "un accepted" || status == "un arrived" ? "red" : "green" }}>
                            status: {status}
                        </Text>
                    </View>

                    <View style={{ margin: 1, flexDirection: 'row' }}>
                        <ScrollView horizontal>
                            <Text style={{ fontSize: width / 25, fontWeight: "bold", flexDirection: "row" }}>products {"["}</Text>
                            {products.map((p, i) => (

                                <Text key={i} style={{ fontSize: width / 25, fontWeight: "bold", flexDirection: "row" }}>
                                    {/* product{i+1}:  */}
                                    , {p.name}
                                    {/* count :{p.counter} */}
                                </Text>
                            ))}
                            <Text style={{ fontSize: width / 25, fontWeight: "bold", flexDirection: "row" }}>{"]"}</Text>
                        </ScrollView>

                    </View>


                    <View>
                        <Text style={{ fontSize: width / 25, fontWeight: "bold" }}>
                            total: {total}
                        </Text>
                    </View>

                </View>


            </View>

            <Button title='deliverd' color={'red'} onPress={()=>{ deleteItem(address, payment, status, products, total, creatAt , id) }}/>

        </View>
    )
}

export default DelivryCard

const styles = StyleSheet.create({})

