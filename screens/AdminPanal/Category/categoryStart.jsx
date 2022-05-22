import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Category from './Category';
import editCaregory from './editCaregory';
import AddCategory from './addCategory';
import ProductOfCategory from './ProductOfCategory';


const Stack = createNativeStackNavigator();

const categoryStart = () => {
    return (


        <Stack.Navigator
            initialRouteName="Category"
           
        >
            <Stack.Screen
                name="Category"
                component={Category}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="editCaregory"
                component={editCaregory}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="addCategory"
                component={AddCategory}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductOfCategory"
                component={ProductOfCategory}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>


    )
}

export default categoryStart

const styles = StyleSheet.create({})