import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';

import Category from "./Category";
import ChatToSupport from "./ChatToSupport";
import GetOrders from "./GetOrders";
import GetUsers from "./GetUsers";
import Offers from "./Offers";
import Product from "./Product";
import Staff from "./Staff";

const Drawer = createDrawerNavigator();

const AdminStartScreen = ({ navigation }) => {
    return(
            <Drawer.Navigator initialRouteName="GetUsers">
                <Drawer.Screen name="Category" component={Category} />
                <Drawer.Screen name="ChatToSupport" component={ChatToSupport} />
                <Drawer.Screen name="GetOrders" component={GetOrders} />
                <Drawer.Screen name="GetUsers" component={GetUsers} />
                <Drawer.Screen name="Offers" component={Offers} />
                <Drawer.Screen name="Product" component={Product} />
                <Drawer.Screen name="Staff" component={Staff} />
            </Drawer.Navigator>
        
    )
}

export default AdminStartScreen;