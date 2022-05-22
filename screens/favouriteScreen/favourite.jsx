import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import BasicCard from '../../Components/BasicCard'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from '../../Constants/style';

const Favourite = ({user,products, navigation , cart , funPush }) => {

  const [Favourite, setfavourite] = useState([]);

  useEffect(() => {
    const fav = user.favourite.map(name=>products.find(p=>p.productName===name));
    setfavourite(fav);
  }, [products, user]);

  


  return Favourite.length != 0 ? (
   <View>
      <Text
        style={{
          fontSize: 25,
          color: style.primary,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        favourite meals
      </Text>

      <FlatList
        data={Favourite}
        numColumns={2}
        keyExtractor={(item) => item.productName}
        renderItem={(itemData, id) => (
          <BasicCard
            key={id}
            name={itemData.item.productName}
            url={itemData.item.url}
            price={itemData.item.price}
            offer={itemData.item.offer}
            discound={itemData.item.discount}
            desc={itemData.item.description}
            navigation={navigation}
            cart={cart} 
            funPush={funPush}
          />
        )}
      />
      </View>
  ) : (

    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{
          width: width,
          height: height,
          position: "relative",
          resizeMode: "contain",
        }}
        source={require("../../assets/fav.png")}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: height / 23,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >

        <Text style={{ color: "red", fontSize: 30, fontWeight: "500" }}>
          not exist favourit meals
        </Text>
      </View>
    </View>
  );
}

export default Favourite


