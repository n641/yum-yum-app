import { StyleSheet, Text, View,Dimensions , TouchableOpacity} from 'react-native'
import React , { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from '../../Constants/style';


const EndOfOrder = ({navigation , route}) => {
  const { total, address, way , productinorder} = route.params;
  console.log("product i have route are",productinorder );

  const [arr, setarr] = useState(productinorder);

  return (
    <View>

      <View style={{alignItems:'center' , justifyContent:'center'}}>
      <Ionicons name="bicycle" size={290} color={'red'} />
      </View>

      <View style={{alignItems:'center' , justifyContent:'center'}}>
      <Text style={{ fontSize: width / 18, fontWeight: 'bold', color: "red", margin: 10, textAlign:'center' }}>your order is successfully</Text>
      <Text style={{ fontSize: width / 20, fontWeight: 'bold', color: "red", margin: 10 , textAlign:'center' }}>you can track the delivery in the order section</Text>
      </View>
     <View>
      <TouchableOpacity
            style={{
              width: width -30,
              borderRadius: 40,
              justifyContent: "space-around",
              backgroundColor: "black",
              height: height / 13,
              flexDirection: "row",
              alignItems: "center",
              margin:10
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
             continue shoping
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: width -30,
              borderRadius: 40,
              justifyContent: "space-around",
              backgroundColor: "black",
              height: height / 13,
              flexDirection: "row",
              alignItems: "center",
              margin:10

            }}
            onPress={() => {
              navigation.navigate("Order", {
                total:total, address:address, way:way , productinorder:arr
              });
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
             Go to Orders
            </Text>
          </TouchableOpacity>
          </View>
        </View>
  )
}

export default EndOfOrder

const styles = StyleSheet.create({})
    //   checkmark-circle-outline
    //   bicycle-outline
