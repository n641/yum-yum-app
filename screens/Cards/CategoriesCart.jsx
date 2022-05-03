import react, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';
import style from '../../Constants/style'
import { Ionicons } from "@expo/vector-icons";



import { deleteCategory, editCategory, getCategories, subscribe } from '../../db/Auth/usersData/Categories';
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoriesCart = ({navigation , link , category , description , id }) => {

    const handleDeleteCategory = (id) => {
        console.log("We delete category with id: ", id);
        deleteCategory(id);
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getCategories();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getCategories();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getCategories();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: width,
                    margin: 10,
                }}
            >
                <View
                    style={{
                        borderRadius: style.border,
                        borderWidth: 1,
                        justifyContent: "space-between",
                        width: width - 20,
                        alignItems: "center",
                        flexDirection: "row",
                        height: height / 6,
                    }}
                >
                    <Image
                        style={{
                            width: width / 3 - 18,
                            height: height / 6,
                            borderRadius: style.border,
                        }}
                        source={{
                            uri: `${link}`,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: "column",
                            height: height / 4,
                            justifyContent: "center",
                        }}
                    >
                        <View>

                            <View>
                                <Text
                                    style={{
                                        fontSize: width / 20,
                                        fontWeight: "bold",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {category}
                                </Text>
                            </View>

                            <Text style={{ fontSize: 16, color: "gray" }}>
                                {description.substring(0, 15)}...
                            </Text>

                        </View>
                    </View>

                    <View>
                        <Ionicons name="apps" size={40} color={'red'} />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("editCaregory" , {name :category , desc:description , url : link })
                        }}>
                            <Ionicons name="create" size={30} color={'red'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{  //test
                            handleDeleteCategory(id);
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
    listItem: {
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible",
        width: width / 2.2,
    },
    contentContainer: {
        flexDirection: "row"
    },
    textHeader: {
        fontWeight: 'bold'
    },
    textDescription: {
        width: width / 4.3
    }
})

export default CategoriesCart;