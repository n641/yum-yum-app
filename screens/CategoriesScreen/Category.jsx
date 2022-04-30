import { StyleSheet, Text, View , FlatList,Dimensions ,TouchableOpacity} from 'react-native'
import React, {useState , useEffect} from 'react'

import CardCategory from './Component/CardCaregory';
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import style from "../../Constants/style";

//db
import { getCategories, subscribe } from '../../db/Auth/usersData/Categories';




import Header from '../HomeScreen/Components/Header';

const Category = ({navigation}) => {

    const [category, setcategory] = useState([]);
    const getGategoriesHandler = async () => {
      const arr = await getCategories();
      setcategory(arr)
      console.log(category);
  }

  useEffect(()=>{
    getGategoriesHandler();
  },[]);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getGategoriesHandler();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getGategoriesHandler();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getGategoriesHandler();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);




    return (
      <View>
        <Header icon={"cart"} navigation={navigation} />
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          select from the categories below
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
            borderRadius: width / 2,
          }}
        >
          <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
        </TouchableOpacity>
        <FlatList
          data={category}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={(itemData) => (
            <CardCategory
              url={`${itemData.item.link}`}
              namepro={itemData.item.category}
              navigation={navigation}
            />
          )}
        />
      </View>
    );
}

export default Category

const styles = StyleSheet.create({})