import {
    StyleSheet, 
    Text, 
    View, 
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { getStuff, subscribe } from '../../../db/Auth/usersData/Stuff';
import StaffCard from '../../Cards/StaffCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Staff = ({navigation}) =>{

    const [arrStaff, setArrStaff] = useState([]);



    const getStaffHandler = async () => {
        const arr = await getStuff();
        setArrStaff(arr)
        console.log(arrStaff);
    }

    useEffect(() => {
        getStaffHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getStaffHandler();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getStaffHandler();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getStaffHandler();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return(
        <View style={styles.bigContainer}>
            <FlatList 
                data={arrStaff}
                renderItem={itemData => 
                    <StaffCard 
                        name={itemData.item.name}
                        rule={itemData.item.rule}
                        salary={itemData.item.salary}
                        rate={itemData.item.rate}
                        id={itemData.item.id}
                    />
                }
            />
            <View>
                <TouchableOpacity onPress={()=>{ navigation.navigate("addStaff")}}>
                <Ionicons name="add-circle" size={70} color={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width
    },
    Container: {
        padding: 3
    },
    getCategoriesContainer: {
        margin: 3
    },
    textInput: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 4,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
    textInputDescription: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
});

export default Staff