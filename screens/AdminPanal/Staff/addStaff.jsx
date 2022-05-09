import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'
import react, {useState} from 'react'

import { Ionicons } from "@expo/vector-icons";

import { addStuff } from '../../../db/Auth/usersData/Stuff';

const addStaff = ({navigation}) =>{

    const [name, setName] = useState("");
    const [rule, setRule] = useState("");
    const [salary, setSalary] = useState(0);
    const [rate, setRate] = useState(0);

    const addStaffHandler = () =>{
        console.log(name, rule, salary, rate)
        addStuff({
            name: name,
            rule: rule,
            salary: salary,
            rate: rate
        });
    }

    return(
        <View style={styles.bigContainer}>
            <View style={styles.backButtonStyle}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Staff");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={styles.fontStyle}>
                    Add Staff
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of Staff'
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter rule of Staff'
                    onChangeText={setRule}
                    value={rule}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter Salary of Staff'
                    onChangeText={setSalary}
                    value={salary}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter ate of Staff'
                    onChangeText={setRate}
                    value={rate}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    addStaffHandler();
                    navigation.navigate("Staff");
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
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
        height: '20%',
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

export default addStaff