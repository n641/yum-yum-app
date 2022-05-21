import { StyleSheet, Text, View , FlatList,Dimensions ,TouchableOpacity} from 'react-native'
import React, {useState , useEffect} from 'react'

import CardCategory from './Component/CardCaregory';
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import style from "../../Constants/style";

import { getCategories, subscribe } from '../../db/Auth/usersData/Categories';




import Header from '../HomeScreen/Components/Header/Header';

const Category = ({user,products,navigation}) => {

    const [category, setcategory] = useState([]);
    
    const getGategoriesHandler = async () => {
      const arr = await getCategories();
      setcategory(arr)
  }

  useEffect(()=>{
    getGategoriesHandler();
  },[]);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
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




    return (
      <View>
        <Header user={user} product={products} icon={"cart"} navigation={navigation} />
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 , fontWeight:'bold' }}>
          select from the categories below
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: 18,
            position: "absolute",
            top: width/5,
            left: width/35,
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