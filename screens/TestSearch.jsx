import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { getProducts, subscribe } from "../db/Auth/usersData/Products";
import NotFound from "./NotFoundScreens/NotFound";
import BasicCard from '../Components/BasicCard'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const TestSearch = ({ navigation, route }) => {
  const { resulte } = route.params;

  const [search, setsearch] = useState(resulte);
  const [products, setproducts] = useState([]);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [flag, setflag] = useState(false);

  const getItems = async () => {
    const arr = await getProducts();
    setproducts(arr);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        getItems();
      }
      if (change.type === "modified") {
        getItems();
      }
      if (change.type === "removed") {
        getItems();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    searchfilteredit(resulte);
  }, [products]);

  const searchfilteredit = (text) => {
    if (text) {
      if (!products?.length) return;
      let tem = [];
      products.map((p) =>

        p.productName
          .toUpperCase()
          .includes(text.toUpperCase()) ? tem.push(p) : null

      );
      setFilterProducts(tem);
      setflag(true);

    }
  };



  return (
    <ScrollView>
      <View style={{ top: 2, alignItems: "center", backgroundColor: "white" }}>
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
            flexDirection: "row",
            margin: 10,
          }}
        >

          <Text style={{ textAlign: "center", color: "white", fontWeight: "500", fontSize: 18 }}>{resulte}</Text>

        </View>

        <View>
          {flag ? (
            FilterProducts.map((FilterProducts, i) => (
              <BasicCard
                key={i}
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
    </ScrollView>
  );
};

export default TestSearch;

const styles = StyleSheet.create({});
