import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';

import Category from "./Category/Category";
import categoryStart from "./Category/categoryStart";
import ChatToSupport from "./ChatToSupport";
import GetOrders from "./GetOrders";
import GetUsers from "./GetUsers";
import Offers from "./Offers";
import Product from "./Product";
import StaffStart from "./Staff/StaffStart";

const Drawer = createDrawerNavigator();

const AdminStartScreen = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName="Category">
            <Drawer.Screen name="Category" component={categoryStart} options={{
                title: "categories",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="Product" component={Product} options={{
                title: "Products",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="Offers" component={Offers} options={{
                title: "Offers",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />


            <Drawer.Screen name="GetUsers" component={GetUsers} options={{
                title: "Users",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="GetOrders" component={GetOrders} options={{
                title: "Orders",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />



            <Drawer.Screen name="ChatToSupport" component={ChatToSupport} options={{
                title: "Chats",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="StaffStart" component={StaffStart} options={{
                title: "Staff",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />
        </Drawer.Navigator>

    )
}

export default AdminStartScreen;