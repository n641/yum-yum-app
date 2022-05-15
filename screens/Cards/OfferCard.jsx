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
        <View style={styles.FirstContainer}>
            <View style={{flexDirection: "row"}}>
                <Image 
                    source={url}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                />
                <View style={styles.Card}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>name: </Text>
                        <Text>{offerName}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.fontStyle}>price: </Text>
                        <Text>{price} EGP</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text>{desc}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("editOffer" , {offerName :offerName , price: price , desc: desc , url: url, id :id })
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
    );

}

const styles = StyleSheet.create({
    FirstContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 25 ,
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5
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

export default OfferCard