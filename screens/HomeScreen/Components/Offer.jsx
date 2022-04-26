import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Offers = () => {
  const [imgs, setImgs] = useState([
    "https://assets.nn.ps/CACHE/images/uploads/weblog/2018/10/10/ssssss/0151185bbcf1d4898e90fd619857e7df.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs49hF7oKeLHVYCegN3PBQRpuU6mgTnZEfig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI0wksTqMLew7TB2HOpT0aZFd-dWCR07_fQ&usqp=CAU",
    "https://img-global.cpcdn.com/recipes/127150/680x482cq70/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84%D9%88%D8%B5%D9%81%D8%A9%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A9-%D8%A7%D9%84%D9%84%D8%AD%D9%85%D8%A9.jpg",
  ]);

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
        {imgs.map((e, id) => (
          <Image
            key={id}
            style={{
              width: width-20,
              height: 300,
              resizeMode: "resize",
              borderRadius: 30,
              borderWidth: 4,
              marginHorizontal:10
            }}
            source={{
              uri: `${e}`,
            }}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({});
