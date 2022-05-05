import { StyleSheet, Text, View, Image, Dimensions ,ScrollView} from "react-native";
import React, { useState } from "react";

import Search from "../Search";
import Header from "../Header";
import Offers from "../Offer";
import CategoriesList from "../CategoriesList";
import BestSellingFood from "../BestSellingFood";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [Homes, setHomes] = useState([]);

 

  return (
   <View
      style={{
        flexGrow:1,
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Header pagename={"Home"} icon={"cart"} navigation={navigation} />
      <ScrollView>
      <Search navigation={navigation}/>
      <CategoriesList navigation={navigation} />
        <Offers navigation={navigation} />
        <BestSellingFood navigation={navigation} />
      </ScrollView>
     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

