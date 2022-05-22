import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Button,Dimensions
} from 'react-native'
import react, {useState , useEffect} from 'react'

import { Ionicons } from "@expo/vector-icons";

import { addProduct , getProducts , subscribe } from '../../../db/Auth/usersData/Products';
import { editCategory, getCategories } from '../../../db/Auth/usersData/Categories';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const addProductt = ({navigation}) =>{
    const [category, setCategory] = useState("")
    const [productName, setProductName] = useState("")
    const [url, setUrl] = useState("")
    const [price, setPrice] = useState("")
    const [offer, setOffer] = useState("")
    const [discount, setDiscount] = useState("")
    const [desc, setDisc] = useState("")
    const [product, setproduct] = useState([])
   const [categories, setCategories] = useState("");


    const getItems = async () => {
        const arr = await getProducts();
        setproduct(arr);
        console.log(arr);
      };
   useEffect(() => {
     getItems();
   }, []);

   
   const getGategoriesHandler = async () => {
    const arr = await getCategories();
    setCategories(arr)
    console.log(categories);
}

useEffect(() => {
    getGategoriesHandler();
}, [])
   
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
     });
   
     return () => {
       unsubscribe();
     };
   }, []);




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

    const addProductHandler = () =>{
        const findpro = product.find(e => e.productName == productName);
        console.log(findpro);
        if(findpro){
            alert("name of product is already exist");
        }else{
            const findcat = categories.find(e => e.category == category);
            if(findcat){
                category&&productName&&desc&&price&&url?(
                    addProduct({
                        category: category,
                        count: 0,
                        description: desc,
                        discount: discount,
                        offer: offer,
                        url: url,
                        price: price,
                        productName: productName,
                        rate:[],
                        comments:[]
                    }).then(()=>{
                       let temp=[];
                        findcat.products.map((p)=>{
                            temp.push(p);
                        })
                        temp.push(productName);
                        editCategory({
                            ...findcat,
                           products:temp
                        }
                          )
                    })
                        ):alert("you must complite info of product")
            }else{
                alert(`don\'t have this category ${category}`)
            }
           

       
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
                    Add product
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
                style={{width:width-50}}
                    placeholder='Enter url of Product'
                    onChangeText={setUrl}
                    value={url}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50,height:height/12}}

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
                                style={{width:width-50,height:height/12}}

                    placeholder='Enter Category of Product'
                    onChangeText={setCategory}
                    value={category}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50,height:height/12}}

                    placeholder='Enter true if you have offer or false if not'
                    onChangeText={setOffer}
                    value={offer}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50,height:height/12}}

                    placeholder='Enter discount if offer is true'
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
        marginTop: 60 
    },
    backButtonStyle: {
        flexDirection: "row", 
        alignItems: 'center', 
        // justifyContent: 'center'
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

export default addProductt