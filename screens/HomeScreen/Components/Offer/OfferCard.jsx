import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from 'react'
import style from '../../../../Constants/style'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



const OfferCard = ({ url,name,price,desc,discound,fav,offer,navigation}) => {
    return (
      <View>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("DetailsScreen", {
          //     name: name,
          //     price: price,
          //     fav: fav,
          //     url: url,
          //     discound: discound,
          //     desc: desc,
          //     offer: offer,
          //   });
          // }}
        >
          <Image
            style={{
              width: width - 20,
              height: height / 3,
              borderRadius: style.border,
              borderWidth: 1,
              marginHorizontal: 10,
            }}
            source={{
              uri: `${url}`,
            }}
          />
        </TouchableOpacity>

        <View style={{ position: "absolute", left: 10 }}>
          <Text
            style={{
              transform: [{ translateY: 30 }, { rotate: "320deg" }],
              fontWeight: "bold",
              fontSize: 18,
              backgroundColor: style.primary,
              width: 100,
              textAlign: "center",
              color: style.third,
            }}
          >
            New Offer
          </Text>
        </View>
      </View>
    );
}

export default OfferCard

const styles = StyleSheet.create({})