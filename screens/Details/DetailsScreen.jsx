import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React ,{useState ,useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import {auth} from '../../db/config'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";
import { editUser,getProducts ,getUsers,subscribeUser} from "../../db/Auth/usersData/users";


const DetailsScreen = ({ route,navigation}) => {
    const{name,price,desc,url,discound,offer}=route.params;


      const [users, setUsers] = useState([]);
      const [product, setproduct] = useState([]);


    const [counter,setcounter] = useState(1);
    const[favo,setfavo]= useState(false);

    const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    // console.log(arr);
  };
   


     useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New message: ", change.doc.data());
        getUserss();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getUserss();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getUserss();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
     if (!users?.length) return;
    const user = users.find((e) => e.email == auth.currentUser.email);
        console.log("User i find :>> ", user);


    const fav = user.favourite.map((namefav) =>
      namefav == name ? setfavo(true) : null
    );
  }, [users]);
  
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          style={{
            width: width,
            height: height / 2,
            borderBottomRightRadius: width,
            borderBottomLeftRadius: width,
          }}
          source={{
            uri: `${url}`,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: 18,
            position: "absolute",
            top: 0,
            left: 0,
            marginHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            width: width / 12,
            height: width / 12,
            backgroundColor: style.third,
            borderRadius: width / 2,
          }}
        >
          <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{}}>
          
         
          

          <TouchableOpacity
            onPress={() => {
                  const user = users.find(
                    (e) => e.email == auth.currentUser.email
                  );


                    favo
                     ? editUser({
                         ...user,
                         favourite: user.favourite.filter(
                           (n) => n !== name
                         ),
                       }).then(() => setfavo(false))
                     : editUser({
                         ...user,
                         favourite: [...user.favourite, name],
                       }).then(() => setfavo(true))


              
            }}
          >
            <Ionicons
              name={favo ? "heart" : "heart-outline"}
              size={40}
              color={"red"}
              style={{}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          flexDirection: "row",
        }}
      >


        
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              counter <= 0 ? setcounter(0) : setcounter(counter - 1);
            }}
          >
            <Ionicons name="remove" size={20} color={"red"} style={{}} />
          </TouchableOpacity>
          <View
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
              width: width / 12,
              height: width / 12,
              backgroundColor: "gray",
              borderRadius: width / 2,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 15,
                borderRadius: width / 2,
                color: "white",
              }}
            >
              {counter}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setcounter(counter + 1);
            }}
          >
            <Ionicons name="add" size={20} color={"red"} style={{}} />
          </TouchableOpacity>
        </View>
        <View>
          {offer ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#838787",
                    fontSize: 18,
                    fontWeight: "bold",
                    textDecorationLine: "line-through",
                    marginRight: 5,
                  }}
                >
                  {price + "$"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {price - discound + "$"}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {price + "$"}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Product Detailes
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{desc}</Text>
      </View>
      <TouchableOpacity
        style={{
          width: width - 40,
          justifyContent: "center",
          marginHorizontal: 20,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: style.primary,
          height: height / 10,
        }}
        onPress={() => {


           const user = users.find((e) => e.email == auth.currentUser.email);
     if (user.cart.length == 0) {
       editUser({
         ...user,
         cart: [...user.cart, name],
       }).then(() => {
         navigation.navigate("Cart");
       });
     } else {
                const cart = user.cart.find(
                  (namecart) => namecart == name
                );
                cart?alert("you have already added this product to your cart"):(
                       editUser({
                              ...user,
                                cart: [...user.cart, name],
                           }).then(()=>{
                             navigation.navigate("Cart",{counter:counter});
                           })

                )

       
     }}

             
          
        }
      >
        <Text
          style={{
            color: style.third,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({})

