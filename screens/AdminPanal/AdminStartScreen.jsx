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
import OfferStart from "./Offer/OfferStart";
import ProductStart from "./Product/ProductStart";
import StartUsers from "./Users/StartUsers";
import Chatting from "../Cards/Chatting";
import {Ionicons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons";
import { View } from "react-native";
import { logout } from "../../db/Auth/auth";

const Drawer = createDrawerNavigator();

const AdminStartScreen = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName="Category">
            <Drawer.Screen name="Category" component={categoryStart} options={{
                title: "categories",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="Product" component={ProductStart} options={{
                title: "Products",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />

            <Drawer.Screen name="Offers" component={OfferStart} options={{
                title: "Offers",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />


            <Drawer.Screen name="GetUsers" component={StartUsers} options={{
                title: "Users",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
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
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
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
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
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
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
            }} />
            <Drawer.Screen name="chatting" component={Chatting} options={{
                title: "Chat to user",
                headerStyle: {
                    backgroundColor: "red",
                },
                headerRight: () => (
                    <View style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-evenly',
                        padding: 5,
                        margin: 5
                    }}>
                    <AntDesign 
                        name="logout" 
                        size={20}
                        onPress={()=>{
                            logout().then(()=>{
                                navigation.navigate("Login")
                            })
                        }}
                    />
                    <AntDesign 
                        name="home" 
                        size={20}
                        onPress={() => navigation.navigate("HomeStart")}
                    />
                    </View>
                ),
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