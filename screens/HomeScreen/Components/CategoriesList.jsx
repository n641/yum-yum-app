import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
    <View style={{marginVertical:20}}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" ,alignItems: "center"}}>
        {categoryName.map((e, index) =>
          index < 4 ? (
            <TouchableOpacity key={index} onPress={() => alert(e)} style={{backgroundColor:"red", borderRadius:20,}}>
              <Text style={{ color: "black", fontSize: 22,minHeight:40,textAlign: "center",borderRadius:20 ,padding:8, minWidth:100,fontWeight:600}}>{e}</Text>
            </TouchableOpacity>
          ) : index == 4 ? (
            <TouchableOpacity key={index}>
              <Text style={{ color: "red", fontSize: 22 , fontWeight:700}}>...see more</Text>
            </TouchableOpacity>
          ) : null
        )}
      </View>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
