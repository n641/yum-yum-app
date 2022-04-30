import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState , useEffect } from "react";

import style from "../../../Constants/style";

import { getCategories , subscribe } from "../../../db/Auth/usersData/Categories";

const CategoriesList = ({ navigation }) => {
  const [categoryName, setcategoryName] = useState([]);
  const getGategoriesHandler = async () => {
    const arr = await getCategories();
    setcategoryName(arr)
    console.log(categoryName);
}

useEffect(()=>{
  getGategoriesHandler();
},[]);

useEffect(() => {
  const unsubscribe = subscribe(({ change, snapshot }) => {
    //   console.log("changes", change, snapshot, change.type);
    // if (snapshot.metadata.hasPendingWrites) {
    if (change.type === "added") {
      console.log("New message: ", change.doc.data());
      getGategoriesHandler();
    }
    if (change.type === "modified") {
      console.log("Modified city: ", change.doc.data());
      getGategoriesHandler();
    }
    if (change.type === "removed") {
      console.log("Removed message: ", change.doc.data());
      getGategoriesHandler();
    }
    // }
  });

  return () => {
    unsubscribe();
  };
}, []);

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
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          
          {categoryName.map((e, index) =>

            index < 4 ? (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("ProductList" ,{name:e.category});
                }}
                style={{  borderRadius: style.border, margin: 10 , borderColor:style.fourth , borderWidth:1 }}
              >
                <Text
                  style={{
                    color: style.primary,
                    fontSize: 20,
                    minHeight: 40,
                    textAlign: "center",
                    borderRadius: style.border,
                    padding: 10,
                    minWidth: 90,
                    fontWeight: "600",
                  }}
                >
                  {e.category}
                </Text>
              </TouchableOpacity>
            ) : index == 4 ? (
              <TouchableOpacity key={index} style={{ margin: 10 , alignItems:"center" }} onPress={() =>{
                navigation.navigate("Category");}}>
                <Text style={{ color: style.primary, fontSize: 19, fontWeight: "700", paddingTop:8 }}>
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
