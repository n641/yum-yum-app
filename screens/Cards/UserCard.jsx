import React from "react";
import { 
    View ,
    StyleSheet,
    Text,
    Dimensions,
    Button
} from "react-native";

import { deleteUser, getAuth } from "firebase/auth";
import { db } from "../../db/config";
import { deleteUserDB } from "../../db/Auth/usersData/users";


const width = Dimensions.get("window").width;

const UserCard = (props, {navigation}) => {

    const deleteUserHandler = (email) => {
        console.log(getAuth())
        getAuth().getUserByEmail(email).then((user) =>{
            deleteUser(user).then(() =>{
                deleteUserDB(props.id)
                console.log("User is deleted", email)
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        });
    }

    return(
        <View style={styles.listItem}>
            <Text>user name: {props.userName}</Text>
            <Text>email: {props.email}</Text>
            <Text>password: {props.password}</Text>
            <Text>rule: {props.rule}</Text>
            <Text>address: {props.address}</Text>
            <Text>credit: ${props.credit}</Text>
            <Button 
                title="Delete"
                color={"red"}
                onPress={() => deleteUserHandler(props.email)}
            />
            <Button 
                title="Edit"
                onPress={() => null}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10, 
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible",
        width: width / 2.2,
    },
});

export default UserCard;