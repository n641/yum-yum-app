import { StyleSheet, Text, View, Image, Dimensions ,ScrollView} from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
import Offers from "./Components/Offer";
import CategoriesList from "./Components/CategoriesList";
import BestSellingFood from "./Components/BestSellingFood";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [Homes, setHomes] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Header pagename={"Home"} icon={"cart"} />
      <CategoriesList />

      <ScrollView>
        <Offers />
        <BestSellingFood />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
