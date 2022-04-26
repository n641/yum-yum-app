import React from "react";
import { 
    View ,
    Text,
    Image,
    Button,
    StyleSheet,
    Dimensions
} from "react-native";

import { deleteProduct, editProduct } from "../../db/Auth/usersData/Products";

const width = Dimensions.get("window").width;

const CategoriesOfProduct = (props, { navigation }) =>{

    return(
        <View style={styles.listItem}>
            <Image 
                source={{uri: props.link}}
                style={{height: 100}}
            />
            <Text style={styles.textHeader}>{props.title}</Text>
            <Text style={styles.textDescription}>{props.description}</Text>
            <Text>EGP {props.price}</Text>
            {/* <Text>{props.rate}</Text> */}
            <Button 
                title="Delete"
                color={"red"}
                onPress={() => deleteProduct(props.id)}
            />
            <Button 
                title="Edit"
                onPress={() => editProduct({
                    id: props.id, 
                    category: props.newCategory,
                    comments: props.comments,
                    count: props.count,
                    description: props.newDescription,
                    discount: props.newDiscount,
                    offer: props.newOffer,
                    productName: props.newProductName,
                    rate: props.rate,
                    url: props.newUrl
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10, 
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible",
        width: width / 2.2,
    },
    contentContainer:{
        flexDirection: "row"
    },
    textHeader: {
        fontWeight: 'bold'
    },
    textDescription: {
        fontSize: 12,
    }
})

export default CategoriesOfProduct;