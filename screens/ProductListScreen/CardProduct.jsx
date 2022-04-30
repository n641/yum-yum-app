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


import style from "../../Constants/style";

const CardProduct = ({ name,fav, price, url, discound, offer, desc ,navigation}) => {
    return (
      <View
        style={{ margin: 8, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            borderRadius: style.border,
            height: height / 2 - 20,
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
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
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
                borderRadius: style.border,
                backgroundColor: style.primary,
                width: width / 4 - 20,
                height: height / 14,
                justifyContent: "center",
                margin: 5,
              }}
            >
              <Text
                style={{
                  color: style.third,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Order Now
              </Text>
            </View>
            <View
              style={{
                borderRadius: style.border,
                backgroundColor: "black",
                width: width / 4 - 20,
                height: height / 14,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    name: name,
                    price: price,
                    fav: fav,
                    url: url,
                    discound: discound,
                    desc: desc,
                    offer: offer,
                  });
                }}
              >
                <Text
                  style={{
                    color: style.third,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  See More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({});
