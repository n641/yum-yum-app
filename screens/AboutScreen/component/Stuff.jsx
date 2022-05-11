import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../../Constants/style";

import StuffCart from "./StufffCart";

import { getStuff, subscribe } from "../../../db/Auth/usersData/Stuff";

const Stuff = ({ navigation }) => {
  const [stuff, setStuff] = useState([]);

  const getStuffs = async () => {
    const arr = await getStuff();
    setStuff(arr);
  };

  
  useEffect(() => {
    getStuffs();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getStuffs();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getStuffs();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getStuffs();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "column",
            borderRadius: 30,
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: style.primary,
              }}
            >
              Our Stuff
            </Text>
          </View>
          <Animated.ScrollView
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            {
                stuff.map((p ,id)=>(

                    
                    <StuffCart
                    url={p.url}
                    name={p.name}
                   rate={p.rate}
                   rule={p.rule}
                    navigation={navigation}
                    key={id}
                    />
                    ))
                    
                  

            }
          </Animated.ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Stuff;

const styles = StyleSheet.create({});
