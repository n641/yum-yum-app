import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'
import react, {useState} from 'react'

import { Ionicons } from "@expo/vector-icons";

import { addProduct } from '../../../db/Auth/usersData/Products';

const addProductt = ({navigation}) =>{
    const [category, setCategory] = useState("")
    const [productName, setProductName] = useState("")
    const [url, setUrl] = useState("")
    const [price, setPrice] = useState(0)
    const [offer, setOffer] = useState("")
    const [discount, setDiscount] = useState("")
    const [desc, setDisc] = useState("")
    const [count, setCount] = useState(0)

    const addProductHandler = () =>{
        console.log(category, productName, url, price, offer, discount, desc, count)
        addProduct({
            category: category,
            count: category,
            description: desc,
            discount: discount,
            offer, offer,
            url: url,
            price: price,
            productName: productName
        });
    }

    return(
        <View style={styles.bigContainer}>
            <View style={styles.backButtonStyle}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Producto");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={styles.fontStyle}>
                    Add Staff
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of Product'
                    onChangeText={setProductName}
                    value={productName}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter price of Product'
                    onChangeText={setPrice}
                    value={price}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter description of Product'
                    onChangeText={setDisc}
                    value={desc}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter count of Product'
                    onChangeText={setCount}
                    value={count}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter Category of Product'
                    onChangeText={setCategory}
                    value={category}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter offer of Product'
                    onChangeText={setOffer}
                    value={offer}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter discount of Product'
                    onChangeText={setDiscount}
                    value={discount}
                />
            </View>
            <View style={styles.finishButton}>
                <Button title='Add' color={'red'} onPress={() => {
                    addProductHandler();
                    navigation.navigate("Producto");
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 60 
    },
    backButtonStyle: {
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: "red"
    },
    input: {
        height: '20%',
        borderRadius: 10,
        width: 400,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10,
    },
    finishButton: {
        width: 200, 
        margin: 10 
    }
})

export default addProductt