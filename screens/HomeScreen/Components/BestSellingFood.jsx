import { StyleSheet, Text, View, ScrollView, Dimensions,FlatList } from "react-native";
import React , {useState}from 'react'
import Card from './Card';
import style from "../../../Constants/style";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const BestSellingFood = ({ navigation}) => {
    const [pro, setpro] = useState([
      //must order product by count!!!!
      {
        name: "sawarmaa",
        url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
        price: 20,
        count: 19,
        offer: true,
        discound: 20,
        fav: true,
        desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      },
      {
        name: "pizza",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
        price: 70,
        count: 8,
        offer: true,
        discound: 10,
        fav: true,
        desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      },
      {
        name: "burger",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
        price: 100,
        count: 7,
        offer: false,
        discound: 10,
        fav: false,
        desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      },
      {
        name: "rice",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
        price: 150,
        count: 6,
        offer: true,
        discound: 20,
        fav: false,
        desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      },
      {
        name: "pasta",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
        price: 200,
        count: 1,
        offer: true,
        discound: 40,
        fav: true,
        desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
      },
    ]);
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: style.primary,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        BestSellingFood
      </Text>

      <FlatList
        data={pro}
        numColumns={2}
        keyExtractor={(item) => item.name}
        //style={{marginHorizontal: 30}}
        renderItem={(itemData) =>
          itemData.item.count > 5 ? (
            <Card
              name={itemData.item.name}
              url={itemData.item.url}
              price={itemData.item.price}
              desc={itemData.item.desc}
              offer={itemData.item.offer}
              discound={itemData.item.discound}
              fav={itemData.item.fav}
              navigation={navigation}
            />
          ) : null
        }
      />
    </View>
  );}
    
export default BestSellingFood

const styles = StyleSheet.create({})
