import {
    StyleSheet, 
    Text, 
    View, 
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native'
import react, {useState} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { editUser } from '../../../db/Auth/usersData/users';

const editUsers = ({route, navigation}) =>{

    const {userName, email, password, address, credit, points, rule, id} = route.params;

    const [userNamee, setUserName] = useState(userName)
    const [emaill, setEmail] = useState(email)
    const [passwordd, setPassword] = useState(password)
    const [addresss, setAddress] = useState(address)
    const [creditt, setCredit] = useState(credit)
    const [pointss, setPoints] = useState(points)
    const [rulee, setRule] = useState(rule)

    const editUsersHandler = () =>{
        console.log(userNamee, emaill, passwordd, addresss, creditt, pointss, rulee)
        editUser({
            userName: userNamee,
            email: emaill,
            password: passwordd,
            address: [addresss],
            credit: creditt,
            points: pointss,
            rule: rule,
            cart: [],
            favourite: [],
            oldOrders: []
        }).then(() => navigation.navigate("Staff"));
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
                    Edit Users
                </Text>
            </View>
            
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter user name'
                    onChangeText={setUserName}
                    value={userNamee}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter email'
                    onChangeText={setEmail}
                    value={emaill}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter password'
                    onChangeText={setPassword}
                    value={passwordd}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter address'
                    onChangeText={setAddress}
                    value={addresss}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter credit'
                    onChangeText={setCredit}
                    value={creditt}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter point'
                    onChangeText={setPoints}
                    value={pointss}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Enter rule'
                    onChangeText={setRule}
                    value={rulee}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    editUsersHandler();
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
        height: 10,
        borderRadius: 10,
        width: 400,
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

export default editUsers