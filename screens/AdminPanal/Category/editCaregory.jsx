import { StyleSheet, Text, View } from 'react-native'
import React  , {useState}from 'react'

const EditCaregory = ({route , navigation }) => {

    const {url , name , desc} =  route.params;


    const [category, setCategory] = useState(name);
    const [description, setDescription] = useState(desc);
    const [imageLink, setImageLink] = useState(url);



    const addCategoryHandler = () => {
        console.log(category);
        addCategory({
            category: category,
            description: description,
            link: imageLink,
            products: [],
        })
    }

  return (
    <View>
      <Text>editCaregory</Text>
    </View>
  )
}

export default EditCaregory

const styles = StyleSheet.create({})