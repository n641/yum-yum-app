import { StyleSheet, Text, View, Button, TouchableOpacity , TextInput ,Dimensions} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { editCategory } from '../../../db/Auth/usersData/Categories';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;




const EditCaregory = ({ route, navigation }) => {

  const { url, name, desc, ids } = route.params;


  const [category, setCategory] = useState(name);
  const [description, setDescription] = useState(desc);
  const [imageLink, setImageLink] = useState(url);



 
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
          <Ionicons name="chevron-back" size={width/10} color={"red"} />
        </TouchableOpacity>

        <Text style={{ fontSize: width/20, fontWeight: "bold", color: "red" }}>
          Edit {category} category
        </Text>
      </View>

      <View style={styles.input}>
        <TextInput onChangeText={setCategory} value={category} />
      </View>

      <View style={styles.input}>
        <TextInput onChangeText={setDescription} value={description} />
      </View>

      <View style={styles.input}>
        <TextInput onChangeText={setImageLink} value={imageLink} />
      </View>

      <View style={{ width: width/3 ,borderRadius:30, marginVertical: 10 }}>
        <Button
          title="Confirm Edit"
          color={"red"}
          onPress={() => {
            category&&description&&imageLink?(

              editCategory({
                category: category,
                description: description,
                link: imageLink,
                id: ids,
              }).then(() => {
                navigation.navigate("Category");
              })
              ):alert("you must edit category")
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
    width: width-100,
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