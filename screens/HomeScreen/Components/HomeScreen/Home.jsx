import { StyleSheet, Text, View, Image, Dimensions ,ScrollView} from "react-native";
import React, { useState } from "react";

import Search from "../Search/Search";
import Header from "../Header/Header";
import Offers from "../Offer/Offer";
import CategoriesList from "../CategoriesList/CategoriesList";
import BestSellingFood from "../BestSellingFood/BestSellingFood";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({user,products, navigation , cart  , funPush }) => {

 

  return (
    <View
      style={{
        flexGrow: 1,
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Header user={user} cart={cart} funPush={funPush} products={products} navigation={navigation} />
      <ScrollView>
        <Search user={user}  cart={cart} funPush={funPush} navigation={navigation} />
        <CategoriesList user={user} cart={cart} funPush={funPush} products={products} navigation={navigation} />
        <Offers navigation={navigation} />
        <BestSellingFood products={products} cart={cart} funPush={funPush} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

