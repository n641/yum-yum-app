import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { addCategory } from '../../../db/Auth/usersData/Categories';


const AddCategory = ({ navigation }) => {

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");

    const addCategoryHandler = () => {
        console.log(category);
        addCategory({
            category: category,
            description: description,
            link: imageLink,
            products: [],
        })
    }



    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Category");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "red" }}>
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

            <View style={{ width: 200, margin: 10 }}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    addCategoryHandler()
                    navigation.navigate("Category");

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
})