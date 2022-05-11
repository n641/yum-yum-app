import react, { useEffect } from 'react';
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
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ProductCard = ({navigation, category, count, desc, discount, offer, url, price, productName, id}) =>{
    
    const handleDeleteProduct = (id) => {
        console.log("We delete Product with id: ", id);
        deleteProduct(id);
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
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.FirsrCotainer}>
            <View style={{flexDirection: "row"}}>
                <Image 
                    source={url}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                />
                <View style={styles.Card}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>product: </Text>
                        <Text>{productName}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>price: </Text>
                        <Text>{price} EGP</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>category: </Text>
                        <Text>{category}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>count: </Text>
                        <Text>{count}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>offer: </Text>
                        <Text>{offer}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>discount: </Text>
                        <Text>{discount}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text>{desc}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("editProduct" , {categoryy :category , countt: count , descc: desc , discountt :discount, offerf: offer, url: url, pricee: price, productNamee: productName})
                }}>
                    <Ionicons name="create" size={30} color={'red'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{  //test
                    handleDeleteProduct(id);
                }}>
                    <Ionicons name="trash" size={30} color={'red'} />
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
        width: width,
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5 ,
    },
    Card:{
        flexDirection: "column",
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    fontStyle:{
        fontSize: 15, 
        fontWeight: 'bold', 
    }
})

export default ProductCard