import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";
import Card from '../HomeScreen/Components/Card';
import style from '../../Constants/style';
import ViewCard from '../../Components/ViewCard'

import { auth } from '../../db/config';

import { getOrders, subscribeOrder } from '../../db/Auth/usersData/Orders';
import { getProducts, subscribe } from '../../db/Auth/usersData/Products';
import { getUsers, subscribeUser } from '../../db/Auth/usersData/users';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Order = ({ navigation, route }) => {
  const { total, address, way, productinorder } = route.params;

  const [listItems, setlistItems] = useState(productinorder);

  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="cloud-download-outline" size={70} color={'red'} />
            <Text>your order not </Text>
            <Text>accepted until now</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="cloud-done-outline" size={70} color={'red'} />
            <Text>your order accepted </Text>
            <Text>and it is in the way</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={listItems}
            numColumns={2}
            keyExtractor={(item) => item.productName}
            renderItem={(itemData, id) => (
              <ViewCard
                key={id}
                name={itemData.item.productName}
                url={itemData.item.url}
                price={itemData.item.price}
                offer={itemData.item.offer}
                discound={itemData.item.discount}
                desc={itemData.item.description}
                navigation={navigation}
              />
            )}
          />
        </View>

        <View style={{flexDirection:'row'  , alignItems:'center'}}>
        
          <View style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width/2 - 20, }}>
            <View style={{ justifyContent: 'flex-start', flexDirection: "row", width: width - 20, alignItems: 'center' }}>
              <View style={{ justifyContent: 'flex-start', justifyContent: 'center' }}>
                <View style={{ marginVertical: 3, flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="shield-checkmark" size={width / 19} color={'black'} />
                  <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>total :{total}$</Text>
                </View>
              </View>
            </View>
          </View>




          <View style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width/2 - 20, }}>
            <View style={{ justifyContent: 'flex-start', flexDirection: "row", width: width - 20, alignItems: 'center' }}>
              <View style={{ justifyContent: 'flex-start', justifyContent: 'center' }}>
                <View style={{ marginVertical: 3, flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="shield-checkmark" size={width / 19} color={'black'} />
                  <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}> payment:{way}</Text>
                </View>
              </View>
            </View>
          </View>





        </View>


        <View style={{ flexDirection: "row", borderColor: "black", borderRadius: 20, borderWidth: 2, backgroundColor: "gray", margin: 10, height: height / 10, width: width - 20, }}>
          <View style={{ justifyContent: 'flex-start', flexDirection: "row", width: width - 20, alignItems: 'center' }}>
            <View style={{ justifyContent: 'flex-start', justifyContent: 'center' }}>
              <View style={{ marginVertical: 3, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="shield-checkmark" size={width / 19} color={'black'} />
                <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}> address:{address}</Text>
              </View>
            </View>
          </View>
        </View>








        <TouchableOpacity
          style={{
            width: width - 20,
            borderRadius: 40,
            justifyContent: "center",
            backgroundColor: "black",
            height: height / 10,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            marginBottom: 10
          }}
          onPress={() => {
            navigation.navigate("HomeStart");
          }}
        >
          <Text
            style={{
              color: style.third,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            continue shopping
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})

{/* <ion-icon name="cloud-download-outline"></ion-icon> */ }  //first
{/* <ion-icon name="cloud-done-outline"></ion-icon> */ } //second