import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../../db/config";
import { getOffers , subscribe } from "../../../db/Auth/usersData/Offers";

import OfferCard from "./OfferCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Offers = ({ navigation}) => {
 const [pro, setpro] = useState([
      // {
      //   name: "sawarmaa",
      //   url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
      //   price: 20,
      //   count: 19,
      //   offer: true,
      //   discound: 20,
      //   fav: true,
      //   desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      // },
      // {
      //   name: "pizza",
      //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
      //   price: 70,
      //   count: 8,
      //   offer: true,
      //   discound: 10,
      //   fav: true,
      //   desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      // },
      // {
      //   name: "burger",
      //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
      //   price: 100,
      //   count: 7,
      //   offer: false,
      //   discound: 10,
      //   fav: false,
      //   desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      // },
    
    ])

      const getItems = async () => {
        const arr = await getOffers();
        setpro(arr);
      };

      useEffect(() => {
        getItems();
      }, []);


      useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
          if (change.type === "added") {
            getItems();
          }
          if (change.type === "modified") {
            getItems();
          }
          if (change.type === "removed") {
            getItems();
          }
          // }
        });
      
        return () => {
          unsubscribe();
        };
      }, []);
      

      

  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 30,
        justifyContent: "center",
      }}
    >
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        {pro.map((e, id) => (
          // e.offer==true?(
          <OfferCard
            url={e.url}
            desc={e.desc}
            fav={e.fav}
            discound={e.discound}
            offer={e.offer}
            price={e.price}
            key={id}
            name={e.name}
            navigation={navigation}
          />
          // ):null
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({});
