import React, {useState} from "react";
import { 
    View ,
    TextInput,
    StyleSheet,
    Button,
    FlatList
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { addCategory, getCategories } from "../../db/Auth/usersData/Categories";
import CategoriesCard from '../Cards/CategoriesCart';

const Category = ({ navigation }) => {

    const [category, setCategory] = useState("");
    const [arrCategory, setArrCategory] = useState([]);

    const addCategoryHandler = () => {
        console.log(category);
        addCategory({
            category: category,
            products: [],
        })
    }

    const getGategoriesHandler = async () => {
        const arr = await getCategories();
        setArrCategory(arr)
        console.log(arrCategory);
    }

    return (
        <View style={styles.bigContainer}>
            <View style={styles.Container}>
                <TextInput
                    onChangeText={setCategory}
                    placeholder="Enter category name"
                    style={styles.textInput}
                />
                <Ionicons 
                    name="send"
                    size={20}
                    onPress={() => addCategoryHandler()}
                />
            </View>
            <View style={styles.getCategoriesContainer}>
                <Button 
                title="Get Categories"
                onPress={() => getGategoriesHandler()}
                />
                <FlatList 
                    data={arrCategory}
                    renderItem={itemData => <CategoriesCard category={itemData.item.category} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Container: {
        flexDirection: "row",
        margin: 3
    },
    getCategoriesContainer: {
        margin: 3
    },
    textInput: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 4,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});


export default Category;