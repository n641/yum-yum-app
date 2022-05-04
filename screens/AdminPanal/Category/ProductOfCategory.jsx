import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getProducts, subscribe } from "../../../db/Auth/usersData/Products";
import CardProduct from "./CardProduct";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const ProductOfCategory = ({ route, navigation }) => {

    const [product, setproduct] = useState([]);
    const { name } = route.params;


    const getItems = async () => {
        const arr = await getProducts();
        setproduct(arr);
        console.log(arr)
    }

    useEffect(() => {
        getItems();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getItems();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getItems();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getItems();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    product.map((p) => {
        p.category == "salads" ? (
            console.log("noha")
        ) : null
    })
    return (
        <View style={{ flex: 1, width: width }}>
            <View style={{ alignItems: "center", justifyContent: "center" , flexDirection:"row" }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Category");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
                    products of {name}
                </Text>
            </View>

            <FlatList
                data={product}
                renderItem={itemData =>
                    itemData.item.category == name ? (
                        <CardProduct
                            name={itemData.item.productName}
                            url={itemData.item.url}
                            price={itemData.item.price}
                            offer={itemData.item.offer}
                            discound={itemData.item.discount}
                            desc={itemData.item.description}
                            navigation={navigation}
                        />
                    ) : null
                }
            />

        </View>
    )
}

export default ProductOfCategory

const styles = StyleSheet.create({})




