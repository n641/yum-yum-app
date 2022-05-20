import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../../Constants/style";



export default function CardofCart({
  name,
  url,
  price,
  desc,
  offer,
  discound,
  onAdd,
  onRemove,
  deleteItem,
  count

}) {

  const [counter, setcounter] = useState(0);
  const [total, setTotal] = useState(offer ? price - discound : price);

  const increment = () => {
    setcounter(counter + 1);
    setTotal(offer ? (price - discound) * (counter + 1) : price * (counter + 1));
    onAdd(offer ? price - discound : price);
  };

  const decrement = () => {
    if (counter == 0) {
      setTotal(0);
    } else {
      setcounter(counter - 1);
      setTotal(price * (counter - 1));
      onRemove(offer ? price - discound : price);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          borderRadius: style.border,
          height: height / 2 - 60,
          borderWidth: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: width / 2 - 16,
        }}
      >
        <Image
          style={{
            width: width / 2 - 18,
            height: height / 5,
            borderRadius: style.border,
          }}
          source={{
            uri: `${url}`,
          }}
        />
        <TouchableOpacity
          onPress={() => { deleteItem(name) }}
          style={{ position: "absolute", width: width / 14, height: height / 14, alignItems: 'center', justifyContent: "center", borderRadius: 50, backgroundColor: "white", left: width / 2 - 60, top: -5 }}
        >
          <Ionicons name="close" size={30} color={"red"} />
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: width / 2,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View>
              <Text
                style={{
                  fontSize: width / 32,
                  fontWeight: "bold",
                  paddingLeft: 5,
                }}
              >
                {name.length < 15 ? name : name.substring(0, 10) + "..."}
              </Text>
            </View>
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
                      fontSize: width / 30,
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
                      fontSize: width / 30,
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {counter > 0 ? (
            <TouchableOpacity onPress={() => decrement()}>
              <Ionicons name="remove" size={20} color={"red"} style={{}} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => { deleteItem(name) }}>
              <Ionicons name="trash" size={20} color={"red"} style={{}} />
            </TouchableOpacity>
          )
          }
          <View
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
              width: width / 12 + 10,
              height: width / 12,
              backgroundColor: "gray",
              borderRadius: width / 2,
            }}
          >
            {counter ? (
              <Text
                style={{
                  fontSize: 18,
                  marginHorizontal: 15,
                  borderRadius: width / 2,
                  color: "white",
                  fontWeight: "bold"

                }}
              >
                {counter}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity onPress={() => increment()}>
            <Ionicons name="add" size={20} color={"red"} style={{}} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: width / 24 }}>Total:</Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 10,
                fontSize: width / 33,
              }}
            >
              {offer ? counter * (price - discound) : counter * price}$
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
