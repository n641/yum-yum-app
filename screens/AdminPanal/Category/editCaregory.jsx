import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { editCategory, getCategories, subscribe } from '../../../db/Auth/usersData/Categories';
import { getProducts, editProduct } from '../../../db/Auth/usersData/Products';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;




const EditCaregory = ({ route, navigation }) => {

  const { url, name, desc, ids } = route.params;


  const [category, setCategory] = useState(name);
  const [description, setDescription] = useState(desc);
  const [imageLink, setImageLink] = useState(url);
  const [products, setproducts] = useState([])
  const [arrCategory, setArrCategory] = useState([]);



  const getGategoriesHandler = async () => {
    const arr = await getCategories();
    setArrCategory(arr)
  }

  useEffect(() => {
    getGategoriesHandler();
  }, [])

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        getGategoriesHandler();
      }
      if (change.type === "modified") {
        getGategoriesHandler();
      }
      if (change.type === "removed") {
        getGategoriesHandler();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);



  const getItems = async () => {
    const arr = await getProducts();
    setproducts(arr);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Category");
          }}
        >
          <Ionicons name="chevron-back" size={width / 10} color={"red"} />
        </TouchableOpacity>

        <Text style={{ fontSize: width / 20, fontWeight: "bold", color: "red" }}>
          Edit {category} category
        </Text>
      </View>

      <View style={styles.input}>
        <TextInput style={{ width: width - 100, height: height / 9 }}
          onChangeText={setCategory} value={category} />
      </View>

      <View style={styles.input}>
        <TextInput style={{ width: width - 100, height: height / 9 }}
          onChangeText={setDescription} value={description} />
      </View>

      <View style={styles.input}>
        <TextInput style={{ width: width - 100, height: height / 9 }}
          onChangeText={setImageLink} value={imageLink} />
      </View>

      <View style={{ width: width / 3, borderRadius: 30, marginVertical: 10 }}>
        <Button
          title="Confirm Edit"
          color={"red"}
          onPress={() => {
            const findcat = arrCategory.find(e => e.category == name);
            let temp = [];
            findcat.products.map((p) => {
              temp.push(p);
            })

            category && description && imageLink ? (
              editCategory({
                category: category,
                description: description,
                link: imageLink,
                id: ids,
                products: [...temp]
              }).then(() => {
                const findpro = products.find(e => e.category == name);
                let temp = [findpro];
                temp.map((p) => {
                  editProduct({
                    ...p,
                    category: category,
                  })
                })
              }).then(() => {
                navigation.navigate("Category");
              })
            ) : alert("you must edit category")
          }}
        />
      </View>
    </View>
  );
}

export default EditCaregory

const styles = StyleSheet.create({

  input: {
    height: '20%',
    borderRadius: 10,
    width: width - 100,
    justifyContent: 'flex-start',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    margin: 10,
  },
})