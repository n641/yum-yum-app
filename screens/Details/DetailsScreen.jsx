import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React ,{useState ,useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";


import {auth} from '../../db/config'
import { getData , removeItemValue , storeData } from "../../db/AsyncStorage/AsyncStore";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";
import { editUser ,getUsers,subscribeUser} from "../../db/Auth/usersData/users";
import { cos } from "react-native-reanimated";


const DetailsScreen = ({ route,navigation}) => {
    const{name,price,desc,url,discound,offer}=route.params;
      const [user, setUsers] = useState([]);

    const [counter,setcounter] = useState(1);
    const[favo,setfavo]= useState(false);

    const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
    // console.log(arr);
  };

 
    // const StoreData = (productlist) => {
    //   try {
    //     AsyncStorage.setItem("ListOfData", JSON.stringify(productlist));
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

     

    // const deleteItem = (name) => {
     
    //         const data = listItems.filter((item, index) => item.name !== name);
    //         console.log(data);
    //         console.log(idx);
    //         setListItems(data);
    //         StoreData(data);
          
        
      
    // };
   

    // const addlist = async () => {
     



    //   AsyncStorage.getItem("ListOfData").then((productlist) => {
    //     if (productlist) {
    //         // if (listItems.length == 0) {
    //         //   listItems.map((item, id) => {
    //         //     if (name == item.name) {
    //         //     deleteItem(name)
    //         //       console.log("yes");
    //         //     } else {
    //         //       console.log("no");
    //         //     }
    //         //   });
    //         // } else console.log("ddd");
    //       setListItems(JSON.parse(productlist))
         
         
    //         StoreData([
    //           ...JSON.parse(productlist),

    //           {
    //             name: name,
    //             desc: desc,
    //             price: price,
    //             offer: offer,
    //             discound: discound,
    //             count: counter,
    //             url: url,
    //           },
    //         ]);
            
    //         console.log(listItems);
          
    //       }
        
    //     else {
    //       AsyncStorage.setItem("ListOfData", JSON.stringify([]));
    //     }
    //   });
    // };







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

               user.map((u, id) =>
                 u.email == auth.currentUser.email
                   ? favo
                     ? editUser({
                         ...u,
                         favourite: u.favourite.filter(
                           (n) => n !== name
                         ),
                       }).then(() => setfavo(false))
                     : editUser({
                         ...u,
                         favourite: [...u.favourite, name],
                       }).then(() => setfavo(true))
                   : null
               );

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
          addlist().then(() =>{
              navigation.goBack();
          })
        }}
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



//  onPress={() => {
//             editMessage({ ...messageToEdit, name: messageToEditName })
//               .then((d) => {
//                 onSave();
//                 console.log(messageToEditName);
//               })
//               .catch((e) => console.log(e));
//           }}
