import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Category from './Category';
import editCaregory from './editCaregory';


const Stack = createNativeStackNavigator();

const categoryStart = () => {
    return (


        <Stack.Navigator
            initialRouteName="Category"
            options={{ headerShown: false }}
        >
            <Stack.Screen
                name="Category"
                component={Category}

            />
            <Stack.Screen
                name="editCaregory"
                component={editCaregory}

            />
        </Stack.Navigator>


    )
}

export default categoryStart

const styles = StyleSheet.create({})