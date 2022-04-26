import React, { useState } from "react";
import { 
    View ,
    StyleSheet,
    Text,
    TextInput,
    Picker
} from "react-native";
import { getCategories } from "../../db/Auth/usersData/Categories";

const Product = ({ navigation }) => {

    const [selectedValue, setSelectValue] = useState("");
    

    const  pickerItem = async() => {
        const arr = await getCategories();
        console.log(arr)
        return (
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectValue(itemValue)}
            >
                {arr.map((item, index) => (
                    <Picker.item  label={item.category} value={index} index={index} />
                ))}
            </Picker>
        )
    }

    

    return(
        <View>
            {pickerItem()}
        </View>
    )
}

export default Product;