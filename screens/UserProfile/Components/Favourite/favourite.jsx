import { StyleSheet, Text, View , Dimensions , Animated  , Image} from 'react-native'
import React , {useState ,useEffect} from 'react';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import FavCard from './FavCard';
import BasicCard from '../../../../Components/BasicCard'
import style from '../../../../Constants/style';

import { getUsers, subscribeUser } from "../../../../db/Auth/usersData/users";
import { getProducts, subscribe } from "../../../../db/Auth/usersData/Products";
import { auth } from "../../../../db/config";

const Favourite = ({ navigation }) => {
  const [Favourite, setFavourite] = useState([]);

  const [Users, setUsers] = useState([]);

  const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };

  const getProduct = async () => {
    const arr = await getProducts();
    setFavourite(arr);
  };

  useEffect(() => {
    getUserss();
    getProduct();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
     
      if (change.type === "added") {
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
        getUserss();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        getProduct();
      }
      if (change.type === "modified") {
        getProduct();
      }
      if (change.type === "removed") {
        getProduct();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
 

  Users.map((e) =>
    e.email == auth.currentUser.email
      ? e.favourite.map((op) =>
          Favourite.map((p) =>
            op == p.productName ? console.log(p.productName) : null
          )
        )
      : null
  );

  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          borderRadius: 30,
          justifyContent: "center",
          // height:height/
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: style.primary,
            }}
          >
          
            favourites meals
          </Text>
        </View>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          {Users.map((e) =>
            e.email == auth.currentUser.email
              ? e.favourite.map((op) =>
                  Favourite.map((p, id) =>
                    op == p.productName ? (
                      <BasicCard
                        url={p.url}
                        name={p.productName}
                        price={p.price}
                        desc={p.description}
                        offer={p.offer}
                        discound={p.discount}
                        navigation={navigation}
                        key={id}
                      />
                    ) : null
                  )
                )
              : null
          )}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Favourite

const styles = StyleSheet.create({})


