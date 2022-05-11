import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { getProducts, subscribe } from "../db/Auth/usersData/Products";
import Card from "./HomeScreen/Components/Card";
import NotFound from "./NotFoundScreens/NotFound";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const TestSearch = ({ navigation, route }) => {
  const { resulte } = route.params;
  console.log(resulte);

  const [search, setsearch] = useState(resulte);
  const [products, setproducts] = useState([]);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [flag, setflag] = useState(false);

  const getItems = async () => {
    const arr = await getProducts();
    setproducts(arr);
    // console.log(products);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        // console.log("New message: ", change.doc.data());
        getItems();
      }
      if (change.type === "modified") {
        // console.log("Modified city: ", change.doc.data());
        getItems();
      }
      if (change.type === "removed") {
        // console.log("Removed message: ", change.doc.data());
        getItems();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    searchfilteredit(resulte);
  },[products]);

  const searchfilteredit = (text) => {
    if (text) {
         if (!products?.length) return;
        let tem = [];
              products.map((p) =>
               
                  p.productName
                    .toUpperCase()
                    .includes(text.toUpperCase() )? tem.push(p) : null
                
              );
      console.log("tem", tem)
        setFilterProducts(tem);
        setflag(true);
      
    }
  };

          console.log("filter pro", FilterProducts);


  return (
    <View style={{ top: 2, alignItems: "center" }}>
      <View
        style={{
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 1,
          width: width - 100,
          height: height / 17,
          backgroundColor: "gray",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          flexDirection: "row",
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Search here..."
          onChangeText={setsearch}
          value={search}
        />
        {/* <TouchableOpacity
                    onPress={() => searchfilter(search)}
                >
                    <Ionicons name="search" size={20} color={'black'} />
                </TouchableOpacity> */}
      </View>

      <View>
        {flag ? (
          FilterProducts.map((FilterProducts) => (
            <Card
              name={FilterProducts.productName}
              url={FilterProducts.url}
              price={FilterProducts.price}
              offer={FilterProducts.offer}
              discound={FilterProducts.discount}
              desc={FilterProducts.description}
              navigation={navigation}
            />
          ))
        ) : (
          <View>
            <NotFound />
          </View>
        )}
      </View>
    </View>
  );
};

export default TestSearch;

const styles = StyleSheet.create({});
