import react, {useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import style from '../../Constants/style'
import { Ionicons } from "@expo/vector-icons";

import { deleteStuff, getStuff, subscribe } from "../../db/Auth/usersData/Stuff";
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StaffCard = ({navigation, name, rule, salary, rate, id}) => {

    const handleDeleteStaff = (id) => {
        console.log("We delete category with id: ", id);
        deleteStuff(id);
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getStuff();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getStuff();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getStuff();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View>
            <View style={styles.FirstContainer}>
                <View style={styles.SecondContainer}>
                    <View style={styles.thirdContainer}>
                        <View>
                            <View>
                                <Text>{name}</Text>
                            </View>
                            <View>
                                <Text>{rule}</Text>
                            </View>
                            <View>
                                <Text>{salary}</Text>
                            </View>
                            <View>
                                <Text>{rate}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("editStaff" , {name :name , rule: rule , salary: salary , id :id })
                        }}>
                            <Ionicons name="create" size={30} color={'red'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{  //test
                            handleDeleteStaff(id);
                        }}>
                            <Ionicons name="trash" size={30} color={'red'} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    FirstContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
        margin: 10,
    },
    SecondContainer: {
        borderRadius: style.border,
        borderWidth: 1,
        justifyContent: "space-between",
        width: width - 20,
        alignItems: "center",
        flexDirection: "row",
        height: height / 6,
    },
    thirdContainer: {
        flexDirection: "column",
        height: height / 4,
        justifyContent: "center",
    },
    fourthContainer: {
        fontSize: width / 20,
        fontWeight: "bold",
        textTransform: "capitalize",
    }
})

export default StaffCard;