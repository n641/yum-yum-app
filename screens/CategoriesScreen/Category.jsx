import { StyleSheet, Text, View , FlatList,Dimensions ,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import CardCategory from './Component/CardCaregory';
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import style from "../../Constants/style";




import Header from '../HomeScreen/Components/Header';

const Category = ({navigation}) => {
    const [category, setcategory] = useState([
        {
            name: "sawarma",
            url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
            productid:[]

        },
        {
            name: "pizza",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
            productid:[]
        },
        {
            name: "burger",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
            productid:[]

        },
        {
            name: "rice",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
            productid:[]

        },
        {
            name: "pasta",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
            productid:[]
        },

    ]);
    return (
      <View>
        <Header icon={"cart"} navigation={navigation} />
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          select from the categories below{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: 18,
            position: "absolute",
            top: 55,
            left: 20,
            marginHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            width: width / 14,
            height: width / 14,
            backgroundColor: style.third,
            borderRadius: width / 2,
          }}
        >
          <Ionicons name="chevron-back" size={30} color={"black"} style={{}} />
        </TouchableOpacity>
        <FlatList
          data={category}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={(itemData) => (
            <CardCategory
              url={`${itemData.item.url}`}
              namepro={itemData.item.name}
              navigation={navigation}
            />
          )}
        />
      </View>
    );
}

export default Category

const styles = StyleSheet.create({})