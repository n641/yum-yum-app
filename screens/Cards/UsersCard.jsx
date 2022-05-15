import react, {useEffect} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { deleteUserDB, getUsers, subscribe } from "../../db/Auth/usersData/users";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteUser } from "firebase/auth";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const UsersCard = ({navigation, address, credit, email, password, points, rule, userName, id}) =>{
    const handleDeleteUser = (id) => {
        deleteUser(id).then(() =>{
            deleteUserDB(id);   
        }).catch((e) =>{
            alert(e.messege)
        })
    }

    useEffect(() => {
       //const unsubscribe = subscribe(({ change, snapshot }) => {
        //     if (change.type === "added") {
        //         getStuff();
        //     }
        //     if (change.type === "modified") {
        //         getStuff();
        //     }
        //     if (change.type === "removed") {
        //         getStuff();
        //     }
        //     // }
        // });

        // return () => {
        //     unsubscribe();
        // };
    }, []);

    return (
      <View>

      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          width: width - 20,
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
          height: height / 3 - 30,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: width / 4,
          }}
        >
          <Image
            source={
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"
            }
            style={{
              width: width / 8,
              height: height / 8,
              borderRadius: 100,
            }}
          />
        </View>
        <ScrollView>
          <View style={{ flexDirection: "column",justifyContent:"space-between",padding:10}}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                >
                user name:
              </Text>
              <Text>{userName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                >
                email:
              </Text>
              <Text>{email}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                >
                password:
              </Text>
              <Text>{password}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                >
                credit:
              </Text>
              <Text>{credit} EGP</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
              >
                address:
              </Text>
              <Text>{address[0]}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
              >
                rule:
              </Text>
              <Text>{rule}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 35,
                  paddingRight: 5,
                  fontWeight: "bold",
                }}
                >
                points:
              </Text>
              <Text>{points}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "column",justifyContent:"space-around" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("editUsers", {
                address: address,
                rule: rule,
                credit: credit,
                id: id,
                email: email,
                password: password,
                points: points,
                userName: userName,
              });
            }}
            >
            <Ionicons name="create" size={30} color={"red"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              //test
              handleDeleteUser(id);
            }}
            >
            <Ionicons name="trash" size={30} color={"red"} />
          </TouchableOpacity>
        </View>
       
      </View>
            </View>
    );

}

const styles = StyleSheet.create({
    
})

export default UsersCard