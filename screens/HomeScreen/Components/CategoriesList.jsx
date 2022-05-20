import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions
} from "react-native";
import React, { useState , useEffect } from "react";

import style from "../../../Constants/style";

import { getCategories , subscribe } from "../../../db/Auth/usersData/Categories";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoriesList = ({ navigation }) => {
  const [categoryName, setcategoryName] = useState([]);
  const getGategoriesHandler = async () => {
    const arr = await getCategories();
    setcategoryName(arr)
}

useEffect(()=>{
  getGategoriesHandler();
},[]);

useEffect(() => {
  const unsubscribe = subscribe(({ change, snapshot }) => {
    //   console.log("changes", change, snapshot, change.type);
    // if (snapshot.metadata.hasPendingWrites) {
    if (change.type === "added") {
      getGategoriesHandler();
    }
    if (change.type === "modified") {
      getGategoriesHandler();
    }
    if (change.type === "removed") {
      getGategoriesHandler();
    }
    // }
  });

  return () => {
    unsubscribe();
  };
}, []);

  return (
    <View style={{ marginTop: 6 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
                style={{   margin: 10 , borderColor:style.fourth , alignItems:"center", borderBottomColor:"black" }}
              >
                 <Image
                    style={{
                        width: width / 6- 18,
                        height: width / 6- 18,
                        borderRadius: style.border,
                        borderWidth:1,
                        borderColor:"red"
                    }}
                    source={{
                        uri: `${e.link}`,
                    }}
                />
                <Text
                  style={{
                    color: style.primary,
                    fontSize: width / 11- 18,
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
