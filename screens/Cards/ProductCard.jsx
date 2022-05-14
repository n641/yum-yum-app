import react, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';
import style from '../../Constants/style'
import { Ionicons } from "@expo/vector-icons";

import { deleteProduct, getProducts, subscribe } from '../../db/Auth/usersData/Products';
import { getCategories, editCategory } from '../../db/Auth/usersData/Categories';
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ProductCard = ({ navigation, category, count, desc, discount, offer, url, price, productName, id }) => {

    const [categories, setCategories] = useState([]);
    const getGategoriesHandler = async () => {
        const arr = await getCategories();
        setCategories(arr)
    }

    useEffect(() => {
        getGategoriesHandler();
    }, [])


    const handleDeleteProduct = (id) => {
        deleteProduct(id)
            .then(() => {
                if (!categories?.length) { return; }
                const findcat = categories.find(e => e.category === category);
                let temp = [];

                console.log("fin category of product ", findcat)
                findcat.products.map((p) => {
                    if (p != productName)
                        temp.push(p);
                })

                editCategory({
                    ...findcat,
                    products: temp
                })

            })
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getProducts();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getProducts();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getProducts();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View style={styles.FirsrCotainer}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={url}
                    style={{
                        width: width / 3,
                        height: height / 4,
                    }}
                />
                <View style={styles.Card}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>product: </Text>
                        <Text>{productName}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>price: </Text>
                        <Text>{price} EGP</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>category: </Text>
                        <Text>{category}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>count: </Text>
                        <Text>{count}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>offer: </Text>
                        <Text>{offer}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontStyle}>discount: </Text>
                        <Text>{discount}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>{desc}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("editProduct", { categoryy: category, countt: count, descc: desc, discountt: discount, offerf: offer, url: url, pricee: price, productNamee: productName })
                }}>
                    <Ionicons name="create" size={width / 15} color={'red'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    handleDeleteProduct(id);
                }}>
                    <Ionicons name="trash" size={width / 15} color={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    FirsrCotainer: {
        marginVertical: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: width - 10,
        height: height / 4,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    Card: {
        flexDirection: "column",
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    fontStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default ProductCard