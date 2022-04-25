import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';

import Category from "./Category";
import ChatToSupport from "./ChatToSupport";
import GetOrders from "./GetOrders";
import GetUsers from "./GetUsers";
import offers from "./offers";
import Product from "./Product";
import staff from "./staff";

const Drawer = createDrawerNavigator();

const AdminStartScreen = ({ navigation }) => {
    return(
            <Drawer.Navigator initialRouteName="Category">
                <Drawer.Screen name="Category" component={Category} />
                <Drawer.Screen name="ChatToSupport" component={ChatToSupport} />
                <Drawer.Screen name="GetOrders" component={GetOrders} />
                <Drawer.Screen name="GetUsers" component={GetUsers} />
                <Drawer.Screen name="offers" component={offers} />
                <Drawer.Screen name="Product" component={Product} />
                <Drawer.Screen name="staff" component={staff} />
            </Drawer.Navigator>
        
    )
}

export default AdminStartScreen;