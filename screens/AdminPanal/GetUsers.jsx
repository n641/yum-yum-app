import React, {useState} from "react";
import { 
    View ,
    Text,
    TextInput,
    StyleSheet,
    Button,
    FlatList,Dimensions
} from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import { addUser, getUsers } from "../../db/Auth/usersData/users";
import UserCard from "../Cards/UserCard";

const GetUsers = ({ navigation }) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rule, setRule] = useState("user");
    const [address, setAddress] = useState("");
    const [credit, setCredit] = useState();
    const [users, setUsers] = useState([]);

    const addUserHandler = () => {
        register(email, password).then(() => {
            addUser({
                userName: userName,
                password: password,
                email: email,
                rule: rule,
                address: [address],
                credit: credit,
                points:0,
                cart: [],
                favourite: [],
                oldOrders: [],
                orders: []
            }).catch((err) =>{
                console.log(err);
            });
        })
    }

    const getUserss = async() =>{
        const arr = await getUsers();
        setUsers(arr);
    }

    return(
        <View>
            <View style={styles.RowContainer}>
                <TextInput 

                    placeholder="Enter user name"
                    onChangeText={setUserName}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Enter email"
                    onChangeText={setEmail}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.RowContainer}>
                <TextInput 
                    placeholder="Enter password"
                    onChangeText={setPassword}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Enter rule"
                    onChangeText={setRule}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.RowContainer}>
                <TextInput 
                    placeholder="Enter address"
                    onChangeText={setAddress}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Enter credit"
                    onChangeText={setCredit}
                    style={styles.textInput}
                />
            </View>
            <Button 
                title="Add user"
                onPress={() => addUserHandler()}
            />
            <View style={styles.secondContainer}>
                <Button
                    title="get user"
                    onPress={() => getUserss()}
                />
                <FlatList 
                    data={users}
                    numColumns={2}
                    renderItem={itemData => <UserCard 
                        userName={itemData.item.userName}
                        email={itemData.item.email}
                        password={itemData.item.password}
                        rule={itemData.item.rule}
                        address={itemData.item.address}
                        credit={itemData.item.credit}
                    />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secondContainer: {
        marginVertical: 5,
    },
    RowContainer: {
        flexDirection: "row",
        paddingVertical : 2,
        paddingHorizontal: 3,
        marginHorizontal: 2
    },
    textInput: {
        borderWidth: 1,
        width: width-50,
        height:height/12,
        paddingVertical: 4,
        paddingHorizontal: 3,
        marginVertical: 5,
        marginHorizontal: 3,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});

export default GetUsers;