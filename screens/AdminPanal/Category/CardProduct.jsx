import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Button,
  } from "react-native";
  import React from "react";
  
  
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  
  import style from "../../../Constants/style";
  
  const CardProduct = ({ name,fav, price, url, discound, offer, desc ,navigation}) => {
      return (
        <View
          style={{ margin: 10, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              borderRadius: style.border,
              height: height / 4-20,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: width -10,
              
            }}
          >
            <Image
              style={{
                width: width / 2 - 18,
                height: height / 4-30,
                borderRadius: style.border,
              }}
              source={{
                uri: `${url}`,
              }}
            />
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                width: width / 2,
              }}
            >
              <View>
                {
                name.length>20?(
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name.substring(0, 20)}...
                </Text>):
                (<Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>)
  }
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
                          marginRight: 10,
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
                          marginRight: 5,
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
  
            <View>
              <Text style={{ color: style.fourth, fontSize: 18, marginLeft: 10 }}>
                {desc.substring(0, 25)}....
              </Text>
            </View>
          </View>
        </View>
      );
  };
  
  export default CardProduct;
  
  const styles = StyleSheet.create({});
  