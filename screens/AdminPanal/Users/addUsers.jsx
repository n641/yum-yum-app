import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Button,Dimensions
} from 'react-native'
import react, {useState} from 'react'

import { Ionicons } from "@expo/vector-icons";

import { addUser } from '../../../db/Auth/usersData/users';
import { register } from '../../../db/Auth/auth';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const addUsers = ({navigation}) =>{
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState('')
    const [credit, setCredit] = useState("")
    const [points, setPoints] = useState("")
    const [rule, setRule] = useState("")

    const addUserHandler = () =>{
        console.log(userName, email, password, address, credit, points, rule)
        register(email, password).then(() => {
            addUser({
                userName: userName,
                email: email,
                password: password,
                address: [address],
                credit: credit,
                points: points,
                rule: rule,
                cart: [],
                favourite: [],
                oldOrders: []
            })
        })
    }

    return(
        <View style={styles.bigContainer}>
            <View style={styles.backButtonStyle}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Users");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={styles.fontStyle}>
                    Add User
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                style={{width:width-50 , height:height/12}}
                    placeholder='Enter user name'
                    onChangeText={setUserName}
                    value={userName}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50 , height:height/12}}

                    placeholder='Enter email'
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter password'
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50 , height:height/12}}

                    placeholder='Enter address'
                    onChangeText={setAddress}
                    value={address}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50 , height:height/12}}

                    placeholder='Enter credit'
                    onChangeText={setCredit}
                    value={credit}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50 , height:height/12}}

                    placeholder='Enter point'
                    onChangeText={setPoints}
                    value={points}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                                style={{width:width-50 , height:height/12}}

                    placeholder='Enter rule'
                    onChangeText={setRule}
                    value={rule}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Add' color={'red'} onPress={() => {
                    addUserHandler();
                    navigation.navigate("Users");
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 60 
    },
    backButtonStyle: {
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: "red"
    },
    input: {
        height: height/12,
        borderRadius: 10,
        width: width-50,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10,
    },
    finishButton: {
        width: 200, 
        margin: 10 
    }
})

export default addUsers