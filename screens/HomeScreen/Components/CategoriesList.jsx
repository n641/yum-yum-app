import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";

const CategoriesList = () => {
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
          showsHorizontalScrollIndicator={true}
          bounces={false}
        >
          {categoryName.map((e, index) =>
            index < 4 ? (
              <TouchableOpacity
                key={index}
                onPress={() => alert(e)}
                style={{ backgroundColor: "red", borderRadius: 20, margin: 10 }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 22,
                    minHeight: 40,
                    textAlign: "center",
                    borderRadius: 20,
                    padding: 8,
                    minWidth: 90,
                    fontWeight: 600,
                  }}
                >
                  {e}
                </Text>
              </TouchableOpacity>
            ) : index == 4 ? (
              <TouchableOpacity key={index} style={{ margin: 10 }}>
                <Text style={{ color: "red", fontSize: 22, fontWeight: 700 }}>
                  ...see more
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
