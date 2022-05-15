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

import { editStuff } from '../../../db/Auth/usersData/Stuff';

const editStaff = ({route, navigation}) =>{

    const {name, rule, url, salary, rate, id} = route.params;

    const [namee, setName] = useState(name);
    const [rulee, setRule] = useState(rule);
    const [urll, setUrll] = useState(url);
    const [salaryy, setSalary] = useState(salary);
    const [ratee, setRate] = useState(rate);

    const editStaffHandler = () =>{
        editStuff({
            name: namee,
            rule: rulee,
            url: urll,
            salary: salaryy,
            rate: ratee,
            id:id
        }).then(() => navigation.navigate("Staff"));
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
                    Edit Staff
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of Staff'
                    onChangeText={setName}
                    value={namee}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter rule of Staff'
                    onChangeText={setRule}
                    value={rulee}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter image of Staff'
                    onChangeText={setUrll}
                    value={urll}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter Salary of Staff'
                    onChangeText={setSalary}
                    value={salaryy}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter ate of Staff'
                    onChangeText={setRate}
                    value={ratee}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    editStaffHandler();
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

export default editStaff