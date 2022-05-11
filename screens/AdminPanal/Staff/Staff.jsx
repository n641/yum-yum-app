import {
    StyleSheet, 
    View, 
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { getStuff, subscribe } from '../../../db/Auth/usersData/Stuff';
import StaffCard from '../../Cards/StaffCard';
import AssistantStuffCard from '../../Cards/AssistantStuffCard';

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


    return (
      <View style={styles.bigContainer}>
        <View style={styles.Container}>
          <Text style={styles.fontStyle}>Sheifs</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            data={arrStaff.filter(
              (e) => e.rule === "Sheif" || e.rule === "Second Sheif"
            )}
            numColumns={2}
            renderItem={(itemData) => (
              <StaffCard
                name={itemData.item.name}
                rule={itemData.item.rule}
                salary={itemData.item.salary}
                rate={itemData.item.rate}
                id={itemData.item.id}
                navigation={navigation}
              />
            )}
          />

          <View style={styles.Container}>
            <Text style={styles.fontStyle}>Assistant</Text>
          </View>

          <FlatList
            data={arrStaff.filter((e) => e.rule === "Assistant")}
            renderItem={(itemData) => (
              <AssistantStuffCard
                name={itemData.item.name}
                rule={itemData.item.rule}
                salary={itemData.item.salary}
                rate={itemData.item.rate}
                id={itemData.item.id}
                navigation={navigation}
              />
            )}
            horizontal={true}
            style={{ width: width, padding: 5 }}
          />

          <View style={styles.Container}>
            <Text style={styles.fontStyle}>waiter</Text>
          </View>

          <FlatList
            data={arrStaff.filter((e) => e.rule === "waiter")}
            renderItem={(itemData) => (
              <AssistantStuffCard
                name={itemData.item.name}
                rule={itemData.item.rule}
                salary={itemData.item.salary}
                rate={itemData.item.rate}
                id={itemData.item.id}
                navigation={navigation}
              />
            )}
            horizontal={true}
            style={{ width: width, padding: 5 }}
          />

          <View style={styles.Container}>
            <Text style={styles.fontStyle}>delever</Text>
          </View>

          <FlatList
            data={arrStaff.filter((e) => e.rule === "delever ")}
            renderItem={(itemData) => (
              <AssistantStuffCard
                name={itemData.item.name}
                rule={itemData.item.rule}
                salary={itemData.item.salary}
                rate={itemData.item.rate}
                id={itemData.item.id}
                navigation={navigation}
              />
            )}
            horizontal={true}
            style={{ width: width, padding: 5 }}
          />
        </View>
        <View style={{ bottom: 0 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addStaff");
            }}
          >
            <Ionicons name="add-circle" size={width / 5} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width,
        height: height,
        // justifyContent: "center",
        // alignItems: "center",
    },
    Container: {
        marginTop: 5,
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: "red"
    },
    AnimationStyle: {
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