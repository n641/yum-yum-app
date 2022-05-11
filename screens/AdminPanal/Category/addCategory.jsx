import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { addCategory } from '../../../db/Auth/usersData/Categories';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const AddCategory = ({ navigation }) => {

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");

    const addCategoryHandler = () => {
        category&&description&&imageLink?(

            addCategory({
                category: category,
                description: description,
                link: imageLink,
                products: [],
            }).then(()=>{
                                    navigation.navigate("Category");

            })
            ):alert("you must add a category")
    }



    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Category");
                }}>
                    <Ionicons name="chevron-back" size={width/10} color={'red'} />
                </TouchableOpacity>

                <Text style={{ fontSize: width/18, fontWeight: 'bold', color: "red" }}>
                    Add Category
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of category'
                    onChangeText={setCategory}
                    value={category}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter description of category'
                    onChangeText={setDescription}
                    value={description}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter link of Image of category'
                    onChangeText={setImageLink}
                    value={imageLink}
                />
            </View>

            <View style={{ width: width/3,height: height/12,borderRadius:30, marginVertical: 10 }}>
                <Button title='Add' color={'red'} onPress={() => {
                    addCategoryHandler()

                }} />
            </View>
        </View>
    )
}

export default AddCategory

const styles = StyleSheet.create({
    input: {
        height: '20%',
        borderRadius: 10,
        width: width-100,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        marginVertical: 10,
    },
})