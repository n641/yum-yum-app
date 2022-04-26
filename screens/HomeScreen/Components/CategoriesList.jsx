import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";

import colors from "../../../Constants/colors";

const CategoriesList = ({ navigation }) => {
  const [categoryName, setcategoryName] = useState([
    "pizzaaaaaa",
    "meat",
    "fish",
    "pizza",
    "meat",
    "fish",
  ]);

  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Animated.ScrollView
          horizontal
          // snapToInterval={100}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          
          {categoryName.map((e, index) =>

            index < 4 ? (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // navigation.navigate('Login');
                  alert(e)
                }}
                style={{  borderRadius: 20, margin: 10 , borderColor:colors.fourth , borderWidth:3 }}
              >
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 20,
                    minHeight: 40,
                    textAlign: "center",
                    borderRadius: 20,
                    padding: 10,
                    minWidth: 90,
                    fontWeight: "600",
                  }}
                >
                  {e}
                </Text>
              </TouchableOpacity>
            ) : index == 4 ? (
              <TouchableOpacity key={index} style={{ margin: 10 , alignItems:"center" }}>
                <Text style={{ color: colors.primary, fontSize: 19, fontWeight: "700", paddingTop:8 }}>
                  {'more \>\>'}
                </Text>
              </TouchableOpacity>
            ) : null
          )}

        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
