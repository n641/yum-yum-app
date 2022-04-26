import { StyleSheet, Text, View, Dimensions, Image ,Button } from "react-native";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Card = ({ name, price, url, discound, offer }) => {
  return (
    <View style={{ marginHorizontal:8,alignItems: "center" ,justifyContent: "center" }}>
      <View
        style={{
          borderRadius: 30,
          height: height / 2 - 30,
          borderWidth: 4,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: width / 2 -20,
          marginVertical: 10,
        }}
      >
        <Image
          style={{
            width: width / 2 - 28,
            height: 150,
            borderRadius: 30,
          }}
          source={{
            uri: `${url}`,
          }}
        />
        <View style={{ justifyContent: "space-between",alignItems:"center", flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: 700 ,   }}>{name}</Text>
          {offer ? (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                  textDecorationLine: "line-through",
                  paddingRight: 10,
                }}
              >
                {price + "$"}
              </Text>
              <Text
                style={{ color: "green", fontSize: 18, fontWeight: "bold" }}
              >
                {price - discound + "$"}
              </Text>
            </View>
          ) : (
            <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
              {price + "$"}
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 5,
            bottom: 5,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "red",
              width: 80,
              height: 40,
              justifyContent: "center",
              margin:5
            }}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Order Now      
                    </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "yellow",
              width: 80,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              See More
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
