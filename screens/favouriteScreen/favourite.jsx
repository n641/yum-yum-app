import { StyleSheet, Text, View , Dimensions , FlatList,ScrollView , Image} from 'react-native'
import React , {useState} from 'react';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import FavCard from '../UserProfile/Components/Favourite/FavCard';
import style from '../../Constants/style';

const Favourite = ({ navigation}) => {

    const [Favourite, setFavourite] = useState([]);

  return Favourite.length != 0 ? (
    <ScrollView>
        <Text
          style={{
            fontSize: 25,
            color: style.primary,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          favourite meals
        </Text>

        <FlatList
          data={Favourite}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={(itemData) => (
            <FavCard
              name={itemData.item.name}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discound}
              fav={itemData.item.fav}
              desc={itemData.item.desc}
              navigation={navigation}
            />
          )}
        />
    </ScrollView>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{
          width: width,
          height: height,
          position: "relative",
          resizeMode: "contain",
        }}
        source={require("../../assets/fav.png")}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: height / 23,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: "red", fontSize: 30, fontWeight: "500" }}>
          not exist favourit meals
        </Text>
      </View>
    </View>
  );
}

export default Favourite
