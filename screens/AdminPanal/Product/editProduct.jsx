import {
    StyleSheet, 
    Text, 
    View, 
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Dimensions
} from 'react-native'
import react, {useState , useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { editProduct } from '../../../db/Auth/usersData/Products';
import { getCategories , subscribe } from '../../../db/Auth/usersData/Categories';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const editProductt = ({route, navigation}) =>{
    
    const {categoryy, countt, descc, discountt, offerf, urll, pricee, productNamee, id} = route.params;

    const [category, setCategory] = useState(categoryy)
    const [productName, setProductName] = useState(productNamee)
    const [url, setUrl] = useState(urll)
    const [price, setPrice] = useState(pricee)
    const [offer, setOffer] = useState(offerf)
    const [discount, setDiscount] = useState(discountt)
    const [desc, setDisc] = useState(descc)
    const [count, setCount] = useState(countt)

   const [categories, setCategories] = useState("");


    const getGategoriesHandler = async () => {
        const arr = await getCategories();
        setCategories(arr)
    }
    
    useEffect(() => {
        getGategoriesHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                getGategoriesHandler();
            }
            if (change.type === "modified") {
                getGategoriesHandler();
            }
            if (change.type === "removed") {
                getGategoriesHandler();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const editProductHandler = () =>{
        console.log(category, productName, url, price, offer, discount, desc, count)
        const findcat = categories.find(e => e.category == category);
        if(findcat){
            
        editProduct({
            category: category,
            count: count,
            description: desc,
            discount: discount,
            offer, offer,
            url: url,
            price: price,
            productName: productName,
            id: id
        })
        .then(() => navigation.navigate("Product"))
            
    }else{
        alert(`don\'t have this category ${category}`)
    }
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
                    Edit Product
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                                                style={{width:width-50,height:height/12}}

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
                                                style={{width:width-50,height:height/12}}

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
                                                style={{width:width-50,height:height/12}}

                    placeholder='Enter Category of Product'
                    onChangeText={setCategory}
                    value={category}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                                style={{width:width-50,height:height/12}}

                    placeholder='Enter offer of Product'
                    onChangeText={setOffer}
                    value={offer}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                                style={{width:width-50,height:height/12}}

                    placeholder='Enter discount of Product'
                    onChangeText={setDiscount}
                    value={discount}
                />
            </View>
            <View style={styles.finishButton}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    editProductHandler();
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
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
        height: height/12,
        borderRadius: 10,
        width: width-50,
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

export default editProductt