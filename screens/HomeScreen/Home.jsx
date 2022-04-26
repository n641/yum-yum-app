import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [Homes, setHomes] = useState([]);

  return (
    <View>
      <Header/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
