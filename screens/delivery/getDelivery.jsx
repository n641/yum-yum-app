import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../../db/config'
import { getdelivery, deletedelivery, subscribedelivery } from '../../db/Auth/usersData/delivers'
import { getUsers, editUser, subscribeUser } from '../../db/Auth/usersData/users'
import NotFound from '../NotFoundScreens/NotFound'
import DelivryCard from '../../Components/DelivryCard'




const getDelivery = () => {
  const [Users, setUsers] = useState([]);
  const [User, setUser] = useState([]);
  const [orders, setorders] = useState([])





  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };
  useEffect(() => {
    getUserss();
    getProductFromDelivery();
  }, []);

  const getProductFromDelivery = async () => {
    const arr = await getdelivery();
    setorders(arr);
  };

  useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      if (change.type === "added") {
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
        getUserss();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribedelivery(({ change, snapshot }) => {
      if (change.type === "added") {
        getProductFromDelivery();
      }
      if (change.type === "modified") {
        getProductFromDelivery();
      }
      if (change.type === "removed") {
        getProductFromDelivery();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!Users?.length) return;

    const user = Users.find((e) => e.email == auth.currentUser.email);
    setUser(user);
  }, [Users]);

  const deleteItem = (address, payment, status, products, total, creatAt , id) => {
    
   
    let temp = [];
    let c =0;
    let oldolders=[];
    User.orders.map((product)=>{
        if(product.creatAt!==creatAt){
            temp.push(product);
            oldolders.push(product.name);
        }else{
            c=product.creatAt;
            oldolders.push(product.name);
        }
    })
    temp.push({ user: User, product: products, payments: payment, addresss: address, totals: total, statuss: "arrived ", creatAt: c })
    console.log(temp);
    


    editUser({
      ...User,
      orders:[...temp],
      oldOrders:[...oldolders]
    })
    .then(()=>{
        deletedelivery(id)
    })
    
  }

  console.log(orders)



  return orders.length !== 0 ? (


    <ScrollView>
      <View style={{ margin: 15 }}>

        <Text style={{ fontSize: 25 }}>Yours Order Up To Now</Text>
      </View>

      <View>
        {
                orders.map((order, i) => (
                    <DelivryCard
                    key={i}
                    address={order.addresss}
                    payment={order.payments}
                    status={order.statuss}
                    products={order.product}
                    total={order.totals}
                    creatAt={order.creatAt}
                    id={order.id}
                    deleteItem={deleteItem}
                    />
                    
                    ))
                }
      </View>
    </ScrollView>
  ) : (
    <NotFound />
  )
}

export default getDelivery

const styles = StyleSheet.create({})