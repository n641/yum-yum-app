import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React ,{useState} from 'react'
import { Ionicons } from "@expo/vector-icons";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";


const DetailsScreen = ({ route,navigation}) => {
    const{name,price,desc,url,fav,discound,offer}=route.params;
    const [counter,setcounter] = useState(0);
    const[favo,setfavo]= useState(fav);
    console.log(name)
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          style={{
            width: width,
            height: height / 2,
            borderBottomRightRadius: width,
            borderBottomLeftRadius: width,
          }}
          source={{
            uri: `${url}`,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: 18,
            position: "absolute",
            top: 0,
            left: 0,
            marginHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            width: width / 12,
            height: width / 12,
            backgroundColor: style.third,
            borderRadius: width / 2,
          }}
        >
          <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{}}>
          {favo ? (
            <TouchableOpacity onPress={()=>setfavo(!favo)}>
              <Ionicons name="heart" size={40} color={"red"} style={{}} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={()=>setfavo(!favo)}>
              <Ionicons
                name="heart-outline"
                size={40}
                color={"red"}
                style={{}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              counter <= 0 ? setcounter(0) : setcounter(counter - 1);
            }}
          >
            <Ionicons name="remove" size={20} color={"red"} style={{}} />
          </TouchableOpacity>
          <View
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
              width: width / 12,
              height: width / 12,
              backgroundColor: "gray",
              borderRadius: width / 2,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 15,
                borderRadius: width / 2,
                color: "white",
              }}
            >
              {counter}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setcounter(counter + 1);
            }}
          >
            <Ionicons name="add" size={20} color={"red"} style={{}} />
          </TouchableOpacity>
        </View>
        <View>
          {offer ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#838787",
                    fontSize: 18,
                    fontWeight: "bold",
                    textDecorationLine: "line-through",
                    marginRight: 5,
                  }}
                >
                  {price + "$"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {price - discound + "$"}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {price + "$"}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Product Detailes
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{desc}</Text>
      </View>
      <TouchableOpacity
        style={{
          width: width - 40,
          justifyContent: "center",
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: style.primary,
          height: height / 10,
        }}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text
          style={{
            color: style.third,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({})