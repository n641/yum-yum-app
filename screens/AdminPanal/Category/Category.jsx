import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    FlatList,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {  getCategories, subscribe } from "../../../db/Auth/usersData/Categories";
import CategoriesCard from '../../Cards/CategoriesCart';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Category = ({ navigation }) => {

    
    const [arrCategory, setArrCategory] = useState([]);



    const getGategoriesHandler = async () => {
        const arr = await getCategories();
        setArrCategory(arr)
        console.log(arrCategory);
    }

    useEffect(() => {
        getGategoriesHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getGategoriesHandler();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getGategoriesHandler();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getGategoriesHandler();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View style={styles.bigContainer}>

            <FlatList
                data={arrCategory}
                // numColumns={1}
                renderItem={itemData =>
                    <CategoriesCard
                        category={itemData.item.category}
                        link={itemData.item.link}
                        description={itemData.item.description}
                        id={itemData.item.id}
                        navigation={navigation}
                    />}
            />
            <View>
                <TouchableOpacity onPress={()=>{ navigation.navigate("addCategory")}}>
                <Ionicons name="add-circle" size={width / 5} color={'red'} />
                </TouchableOpacity>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width
    },
});

export default Category;