import react, {useEffect} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { deleteStuff, getStuff, subscribe } from "../../db/Auth/usersData/Stuff";
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StaffCard = ({navigation, name, rule, salary, rate, id}) => {

    const handleDeleteStaff = (id) => {
        console.log("We delete Staff with id: ", id);
        deleteStuff(id);
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                getStuff();
            }
            if (change.type === "modified") {
                getStuff();
            }
            if (change.type === "removed") {
                getStuff();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.FirstContainer}>
            <Image 
                source={"https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100
                }}
            />
            <View style={styles.SecondContainer}>
                <Text>name: </Text>
                <Text>{name}</Text>
            </View>
            <View style={styles.SecondContainer}>
                <Text>job: </Text>
                <Text>{rule}</Text>
            </View>
            <View style={styles.SecondContainer}>
                <Text>salary: </Text>
                <Text>{salary}</Text>
            </View>
            <View style={styles.SecondContainer}>
                <Text>rate: </Text>
                <Text>{rate}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
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
    );

}

const styles = StyleSheet.create({
    FirstContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: width / 2.5,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    SecondContainer: {
        flexDirection: "row"
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