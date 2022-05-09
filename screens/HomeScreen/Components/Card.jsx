import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


import { getUsers, subscribeUser, editUser } from "../../../db/Auth/usersData/users";
import { auth } from "../../../db/config"; 

import style from "../../../Constants/style";

const Card = ({ name, price, desc, url, fav, discound, offer, navigation }) => {
  const [user, setUsers] = useState([]);
  const [favo, setfavo] = useState(false);

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    // console.log(arr);
  };

  useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getUserss();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getUserss();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getUserss();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <View style={{ margin: 8, alignItems: "center", justifyContent: "center" }}>
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
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: width / 2,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {name.length < 15 ? name : name.substring(0, 10) + "..."}
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
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 5,
            bottom: 5,
          }}
        >
          <TouchableOpacity onPress={() => {

            user.map((u) =>
              u.email == auth.currentUser.email
                ? editUser({
                    ...u,
                    cart: [...u.cart, name],
                  })
                : null
            );

          }}
            style={{
              borderRadius: style.border,
              backgroundColor: style.primary,
              width: width / 4 - 25,
              height: height / 14,
              justifyContent: "center",
              margin: 5,
              marginLeft: 5,
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
          </TouchableOpacity>
          <View
            style={{
              borderRadius: style.border,
              backgroundColor: "black",
              width: width / 4 - 25,
              height: height / 14,
              justifyContent: "center",
              margin: 5,
              marginRight: 5,
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
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
