import {StyleSheet} from 'react-native'
import react from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Staff from './Staff';
import editStaff from './editStaff';
import addStaff from './addStaff';

const Stack = createNativeStackNavigator();

const StaffStart = () =>{
    return(
        <Stack.Navigator initialRouteName="Staff">
            <Stack.Screen
                name="Staff"
                component={Staff}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="editStaff"
                component={editStaff}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="addStaff"
                component={addStaff}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StaffStart