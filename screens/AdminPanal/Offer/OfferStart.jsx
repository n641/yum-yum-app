import {StyleSheet} from 'react-native'
import react from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Offer from './Offer';
import addOffers from './addOffers';

const OfferStart = () =>{
    return(
        <Stack.Navigator initialRouteName="Offer">
            <Stack.Screen
                name="Offer"
                component={Offer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="editOffer"
                component={editOffer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="addOffer"
                component={addOffers}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default OfferStart