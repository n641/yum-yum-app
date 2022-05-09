import {
    StyleSheet, 
    View, 
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { getOffers, subscribe } from '../../../db/Auth/usersData/Offers';
import OfferCard from '../../Cards/OfferCard';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Offer = ({navigation}) => {

    const [arrOffer, setArrOffer] = useState([]);

    const getOfferHandler = async () => {
        const arr = await getOffers();
        setArrOffer(arr)
        console.log(arrOffer);
    }

    useEffect(() => {
        getOfferHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getOfferHandler();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getOfferHandler();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getOfferHandler();
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
                data={arrOffer}
                renderItem={itemDate =>
                    <OfferCard 
                        offerName={itemDate.item.offerName}
                        price={itemDate.item.price}
                        desc={itemDate.item.desc}
                        url={itemDate.item.url}
                        id={itemDate.item.id}
                    />
                }
            />

        <View>
                <TouchableOpacity onPress={()=>{ navigation.navigate("addOffer")}}>
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

export default Offer;