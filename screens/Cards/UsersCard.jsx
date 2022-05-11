import react, {useEffect} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { deleteUserDB, getUsers, subscribe } from "../../db/Auth/usersData/users";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteUser } from "firebase/auth";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const UsersCard = ({navigation, address, credit, email, password, points, rule, userName, id}) =>{
    const handleDeleteUser = (id) => {
        deleteUser(id).then(() =>{
            console.log("We delete user with id: ", id);
            deleteUserDB(id);   
        }).catch((e) =>{
            alert(e.messege)
            console.log(e.messege)
        })
    }

    useEffect(() => {
        // const unsubscribe = subscribe(({ change, snapshot }) => {
        //     if (change.type === "added") {
        //         console.log("New mesg: ", change.doc.data());
        //         getStuff();
        //     }
        //     if (change.type === "modified") {
        //         console.log("Modified mesg: ", change.doc.data());
        //         getStuff();
        //     }
        //     if (change.type === "removed") {
        //         console.log("Removed mesg: ", change.doc.data());
        //         getStuff();
        //     }
        //     // }
        // });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.FirsrCotainer}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image 
                    source={"https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100
                    }}
                />
                <View style={styles.Card}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>user name: </Text>
                        <Text>{userName}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>email: </Text>
                        <Text>{email}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>password: </Text>
                        <Text>{password}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>credit: </Text>
                        <Text>{credit} EGP</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>address: </Text>
                        <Text>{address[0]}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>rule: </Text>
                        <Text>{rule}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>points: </Text>
                        <Text>{points}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("editUsers" , {address :address , rule: rule , credit: credit , id :id, email:email, password: password, points:points, userName: userName })
                }}>
                    <Ionicons name="create" size={30} color={'red'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{  //test
                    handleDeleteUser(id);
                }}>
                    <Ionicons name="trash" size={30} color={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    FirsrCotainer: {
        paddingVertical: 50,
        flexDirection: "row",
        alignItems: 'center', 
        justifyContent: "space-between",
        width: width - 10,
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5 ,
        marginVertical: 5 ,
    },
    Card:{
        flexDirection: "column",
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    fontStyle:{
        fontSize: 15, 
        fontWeight: 'bold', 
    }
})

export default UsersCard