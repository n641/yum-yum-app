import React, { useState } from "react";
import { 
    View ,
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    Button
} from "react-native";
import { getCategories } from "../../db/Auth/usersData/Categories";
import { getProducts, addProduct } from "../../db/Auth/usersData/Products";
import CategoriesOfProduct from "../Cards/CategoriesOfProduct";


const Product = ({ navigation }) => {

    const [productName, setProductName] = useState("");
    const [url, setUrl] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState("");
    const [discount, setDiscount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]); 

    const getItems = async() => {
        const arr = await getProducts();
        setCategories(arr);
        console.log(arr)
    }

    const addProducts = () =>{
        console.log(productName, url, price, offer);
        addProduct({
            productName: productName,
            url: url,
            price: price,
            offer: offer,
            count: 0,
            rate: [],
            description: description,
            discount: discount,
            category: category,
            comments: []
        });
    }

    return(
        <View>
            <View style={styles.RowContainer}>
                <TextInput 
                    placeholder="Enter Product name"
                    onChangeText={setProductName}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Enter url image"
                    onChangeText={setUrl}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.RowContainer}>
                <TextInput 
                    placeholder="Enter Product price"
                    onChangeText={setPrice}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="in offer or not ?"
                    onChangeText={setOffer}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.RowContainer}>
                <TextInput 
                    placeholder="Enter discount"
                    onChangeText={setDiscount}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Enter Category"
                    onChangeText={setCategory}
                    style={styles.textInput}
                />
            </View>
            <TextInput 
                placeholder="Enter description"
                onChangeText={setDescription}
                style={styles.textInput}
            />
            <Button
                title="Add product"
                onPress={() => addProducts()}
            />
            <View style={styles.secondContainer}>
                <Button 
                    title="Get Product"
                    onPress={() => getItems()}
                />
                <FlatList 
                    data={categories}
                    numColumns={2}
                    renderItem={itemData => <CategoriesOfProduct 
                        title={itemData.item.productName}
                        link={itemData.item.url}
                        description={itemData.item.description}
                        price={itemData.item.price}
                        id={itemData.item.id}
                        count ={itemData.item.count}
                        rate={itemData.item.rate}
                        comments={itemData.item.comments}
                        newCategory={category}
                        newDescription={description}
                        newDiscount={discount}
                        newOffer={offer}
                        newProductName={productName}
                        newUrl={url}
                    />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secondContainer: {
        marginVertical: 5,
    },
    RowContainer: {
        flexDirection: "row",
        paddingVertical : 2,
        paddingHorizontal: 3,
        marginHorizontal: 2
    },
    textInput: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 4,
        paddingHorizontal: 3,
        marginVertical: 5,
        marginHorizontal: 3,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});

export default Product;