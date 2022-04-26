import { StyleSheet, Text, View, ScrollView, Dimensions,FlatList } from "react-native";
import React , {useState}from 'react'
import Card from './Card';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const BestSellingFood = () => {
    const [pro, setpro] = useState([        //must order product by count!!!!
      {
        name: "sawarma",
        url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
        price: 20,
        count: 19,
        offer:true,
        discound:20
      },
      {
        name: "pizza",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
        price: 70,
        count: 8,
        offer:true,
        discound:10
      },
      {
        name: "burger",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
        price: 100,
        count: 7,
        offer:false,
        discound:10
      },
      {
        name: "rice",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
        price: 150,
        count: 6,
        offer:true,
        discound:20
      },
      {
        name: "pasta",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
        price: 200,
        count: 1,
        offer:true,
        discound:40
      },
    ]);
  return (
    <View>
      <Text style={{fontSize:25,color:"red",fontWeight:"bold" ,textAlign:"center",marginVertical:10}}>BestSellingFood</Text>
    
      <FlatList
        data={pro}
        numColumns={2}
        //style={{marginHorizontal: 30}}
        renderItem={(itemData) => (
            itemData.item.count>5?(

                <Card
                name={itemData.item.name}
                url={itemData.item.url}
                price={itemData.item.price}
                offer={itemData.item.offer}
                discound={itemData.item.discound}
                />
                ):null
        )}
      />
    </View>
  );}
    
export default BestSellingFood

const styles = StyleSheet.create({})
