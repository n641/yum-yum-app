import react, {useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import style from '../../Constants/style'
import { Ionicons } from "@expo/vector-icons";

import { deleteOffer, getOffers, subscribe } from "../../db/Auth/usersData/Offers";
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const OfferCard = ({navigation, offerName, price, desc, url, id}) =>{

    const handleDeleteOffer = (id) => {
        console.log("We delete Offer with id: ", id);
        deleteOffer(id);
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getOffers();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getOffers();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getOffers();
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
                        <Image
                            style={style.imageStyle}
                            source={{
                                uri: url,
                            }}
                        />
                        <View>
                            <View>
                                <Text>{offerName}</Text>
                            </View>
                            <View>
                                <Text>{price}</Text>
                            </View>
                            <View>
                                <Text>{desc}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("editOffer" , {offerName :offerName , price: price , desc: desc, url: url , id :id })
                        }}>
                            <Ionicons name="create" size={30} color={'red'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{  //test
                            handleDeleteOffer(id);
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
    },
    imageStyle:{
        width: width / 3 - 18,
        height: height / 6,
        borderRadius: style.border,
    }
})

export default OfferCard