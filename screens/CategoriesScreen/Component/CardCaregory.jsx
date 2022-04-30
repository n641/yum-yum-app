import { StyleSheet, Text, View, Image, Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../../../Constants/style'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;




const CardCategory = ({ url, namepro, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductList", { name: namepro });
          //NAVIGATE TO PRODUCT SCREEN  WITH PARAM NAME OF CATEGORY TO LIST ALL PRODUCT OF THIS CATEGORY
        }}
      >
        <Image
          style={{
            width: width / 2 - 10,
            height: height / 4,
            borderRadius: style.border,
            borderWidth: 1,
            margin: 5,
          }}
          source={{
            uri: `${url}`,
          }}
        />

        <View
          style={{
            position: "absolute",
            left: "15%",
            top: width / 7,
            bottom: 0,
            right: 0,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: namepro.length< 7 ? width / 14:width / 16,
              width: width / 3,
              textAlign: "center",
              color: style.third,
              shadowColor:"black",
              shadowRadius:20,
            }}
          >
            {namepro}
          </Text>
        </View>
      </TouchableOpacity>
     
    </View>
  );
};

export default CardCategory

const styles = StyleSheet.create({})