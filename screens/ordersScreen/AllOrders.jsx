import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import OrderView from '../../Components/OrderView'
import {editUser} from "../../db/Auth/usersData/users"
import Notfound from '../NotFoundScreens/EmptyScreen'


const AllOrders = ({ products, user }) => {
    const [orders, setorders] = useState([])
    useEffect(() => {
        if (user) {
            setorders(user.orders)
        }
    })


    const deleteItem = (creatAt , status) => {
        //  Alert.alert("Delete Item", `Are you sure you want to delete this ${name}?`, [
        //    {
        //      text: "Yes",
        //      onPress: () => {
    if(status=="arrived "){
          editUser({
            ...user,
            orders: user.orders.filter((n) => n.creatAt !== creatAt),
          });
        }else{
            alert("you can\'t delete this order because it is not arrived")
        }
    
        //  },
        //},
        //]);
      };
    return orders.length!==0? (
        
        
        <ScrollView>
            <View style={{margin:15}}>

            <Text style={{fontSize:25}}>Yours Order Up To Now</Text>
            </View>

            <View>
                {
                    orders.map((order, i) => (
                        <OrderView
                        key={i}
                        address={order.addresss}
                        payment={order.payments}
                        status={order.statuss}
                        products={order.product}
                        total={order.totals}
                        creatAt={order.creatAt}
                        deleteItem={deleteItem}
                        />
                        
                        ))
                    }
                    </View>
        </ScrollView>
    ):(
        <Notfound/>
    )
}

export default AllOrders

const styles = StyleSheet.create({})