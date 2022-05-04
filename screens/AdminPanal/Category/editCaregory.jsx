import { StyleSheet, Text, View, Button, TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


import { editCategory } from '../../../db/Auth/usersData/Categories';



const EditCaregory = ({ route, navigation }) => {

  const { url, name, desc, ids } = route.params;


  const [category, setCategory] = useState(name);
  const [description, setDescription] = useState(desc);
  const [imageLink, setImageLink] = useState(url);



 
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
      <View style={{ flexDirection: "row" , alignItems:'center' , justifyContent:'center' }}>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Category");
        }}>
          <Ionicons name="chevron-back" size={40} color={'red'} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "red" }}>
          Edit category {category}
        </Text>
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={setCategory}
          value={category}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={setDescription}
          value={description}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={setImageLink}
          value={imageLink}
        />
      </View>

      <View style={{ width: 200, margin: 10 }}>
        <Button title='Confirm Edit' color={'red'} onPress={() => {
          editCategory({ category: category, description: description, link: imageLink, id: ids }).then(() => {
            navigation.navigate("Category");
          })
        }} />
      </View>
    </View>
  )
}

export default EditCaregory

const styles = StyleSheet.create({

  input: {
    height: '20%',
    borderRadius: 10,
    width: 400,
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