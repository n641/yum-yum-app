import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../../Constants/style";
import { storeData,  removeItemValue, getData } from "../../../db/AsyncStorage/AsyncStore";

export default function CardofCart({
  name,
  url,
  price,
  desc,
  offer,
  discound,
  handale
  
}) {

      const [counter, setcounter] = useState(1);



  useEffect(() => {handale({name:name,total:offer?(counter * (price - discound)):(counter* price)});},[counter,name])
const add =({})=>{

}

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: width,
          margin: 10,
        }}
      >
        <View
          style={{
            borderRadius: style.border,
            borderWidth: 1,
            justifyContent: "space-between",
            width: width - 20,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: width / 3 - 18,
              height: height / 4,
              borderRadius: style.border,
              // marginRight: 10,
            }}
            source={{
              uri: `${url}`,
            }}
          />

          <View
            style={{
              flexDirection: "column",
              height: height / 4,
              justifyContent: "center",
            }}
          >
            <View>
              <View>
                <Text
                  style={{
                    fontSize: width / 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {name}
                </Text>
              </View>
              <Text style={{ fontSize: 16, color: "gray" }}>
                {desc.substring(0, 15)}...
              </Text>
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

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              height: height / 4,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  counter <= 1
                    ? setcounter(1)
                    : setcounter(counter - 1)
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
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginRight: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: width / 24 }}>Total</Text>
            <Text style={{ fontWeight: "bold", marginTop: height / 18 }}>
              {    offer ? (counter * (price - discound))
               : (counter * price)
              }$
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
