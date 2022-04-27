import { StyleSheet, Text, View , FlatList} from 'react-native'
import React, {useState} from 'react'

import CardCategory from './Component/CardCaregory';
import Header from '../HomeScreen/Components/Header';

const Category = () => {
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
            <Header icon={'cart'} />
            <Text style={{textAlign:'center', fontSize:20 , margin:20 }}>select from the categories below </Text>
            <FlatList
                data={category}
                numColumns={2}
                keyExtractor={item => item.name}
                renderItem={(itemData) => (
                    <CardCategory url={`${itemData.item.url}`} name={itemData.item.name} />
                )}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({})