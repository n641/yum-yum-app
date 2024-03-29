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

const AssistantStuffCard = ({navigation, name, rule, url, salary, rate, id}) => {

    const handleDeleteStaff = (id) => {
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
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.FirsrCotainer}>
            <View style={{flexDirection: "row"}}>
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
                        <Text style={styles.fontStyle}>name: </Text>
                        <Text>{name}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>job: </Text>
                        <Text>{rule}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>salary: </Text>
                        <Text>{salary}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>rate: </Text>
                        <Text>{rate}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("editStaff" , {name :name , rule: rule ,url: url, salary: salary , id :id })
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
    FirsrCotainer: {
        flexDirection: "row",
        alignItems: 'center', 
        justifyContent: "space-between",
        width: width-20,
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5 ,
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

export default AssistantStuffCard