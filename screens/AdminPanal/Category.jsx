import React, {useState} from "react";
import { 
    View ,
    TextInput,
    StyleSheet,
    Button,
    FlatList,
    Dimensions
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { addCategory, getCategories } from "../../db/Auth/usersData/Categories";
import CategoriesCard from '../Cards/CategoriesCart';

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

const Category = ({ navigation }) => {

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [arrCategory, setArrCategory] = useState([]);

    const addCategoryHandler = () => {
        console.log(category);
        addCategory({
            category: category,
            description: description,
            link: imageLink,
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
                <TextInput 
                    onChangeText={setDescription}
                    placeholder="Enter description"
                    style={styles.textInputDescription}
                />
                <TextInput 
                    onChangeText={setImageLink}
                    placeholder="Enter image link"
                    style={styles.textInput}
                />
                {/* <Ionicons 
                    name="send"
                    size={20}
                    onPress={() => addCategoryHandler()}
                /> */}
                <Button 
                    title="add Category"
                    onPress={() => addCategoryHandler()}
                />
            </View>
            <View>
            </View>
            <View style={styles.getCategoriesContainer}>
                <Button 
                title="Get Categories"
                onPress={() => getGategoriesHandler()}
                />
                <FlatList 
                    data={arrCategory}
                    numColumns={2}
                    // style={{paddingVertical: 30}}
                    renderItem={itemData => <CategoriesCard 
                            category={itemData.item.category} 
                            link={itemData.item.link}
                            description={itemData.item.description}
                            id={itemData.item.id}
                            newCategory={category}
                            newLink={imageLink}
                            newDescription={description}
                        />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        width: width
    },
    Container: {
        padding: 3
    },
    getCategoriesContainer: {
        margin: 3
    },
    textInput: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 4,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
    textInputDescription: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 25,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});


export default Category;