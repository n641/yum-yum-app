import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CategoriesList = () => {
  const [categoryName, setcategoryName] = useState([
    "pizza",
    "meat",
    "fish",
    "pizza",
    "meat",
    "fish",
  ]);

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {categoryName.map((e, index) =>
          index < 4 ? (
            <TouchableOpacity key={index} onPress={() => alert(e)}>
              <Text style={{ color: "black", fontSize: 18 ,fontWeight:600}}>{e}</Text>
            </TouchableOpacity>
          ) : index == 4 ? (
            <TouchableOpacity key={index}>
              <Text style={{ color: "red", fontSize: 18 , fontWeight:700}}>...see more</Text>
            </TouchableOpacity>
          ) : null
        )}
      </View>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
