import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";
import UsersCard from '../../Cards/UsersCard';

import { getUsers, subscribe } from '../../../db/Auth/usersData/users';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Users = ({navigation}) =>{

    const [arrUsers, setArrUsers] = useState([]);

    const getUsersHandler = async () => {
        const arr = await getUsers();
        setArrUsers(arr)
        console.log(arrUsers);
    }

    useEffect(() => {
        getUsersHandler();
    }, [])

    useEffect(() => {
        // const unsubscribe = subscribe(({ change, snapshot }) => {
        //     if (change.type === "added") {
        //         console.log("New mesg: ", change.doc.data());
        //         getUsersHandler();
        //     }
        //     if (change.type === "modified") {
        //         console.log("Modified mesg: ", change.doc.data());
        //         getUsersHandler();
        //     }
        //     if (change.type === "removed") {
        //         console.log("Removed mesg: ", change.doc.data());
        //         getUsersHandler();
        //     }
        //     // }
        // });


     //   return () => {
          //  unsubscribe();
      //  };

    }, []);

    return (
      <View>

        <FlatList
          data={arrUsers}
          renderItem={(itemData) => (
            <UsersCard
            navigation={navigation}
              address={itemData.item.address}
              credit={itemData.item.credit}
              email={itemData.item.email}
              password={itemData.item.password}
              points={itemData.item.points}
              rule={itemData.item.rule}
              userName={itemData.item.userName}
              id={itemData.item.id}
              />
              )}
              />
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addUsers");
            }}
          >
            <Ionicons name="add-circle" size={width / 5} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width,
        paddingVertical: 4
    },
});

export default Users