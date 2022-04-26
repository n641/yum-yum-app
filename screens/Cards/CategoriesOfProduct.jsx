import React from "react";
import { 
    View ,
    Text,
    Image,
    Button,
    StyleSheet,
    Dimensions
} from "react-native";

const width = Dimensions.get("window").width;

const CategoriesOfProduct = (props, { navigation }) =>{

    return(
        <View style={styles.listItem}>
            
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
        width: width / 4.3
    }
})

export default CategoriesOfProduct;