import {
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'
import react, {useState} from 'react'

import { Ionicons } from "@expo/vector-icons";

import { addOffer } from '../../../db/Auth/usersData/Offers';

const addOffers = ({navigation}) =>{

    const [offerName, setOfferName] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')

    const addOfferHandler = () =>{
        addOffer({
            offerName: offerName,
            price: price,
            desc: desc,
            url: url
        });
    }

    return(
        <View style={styles.bigContainer}>
            <View style={styles.backButtonStyle}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Offer");
                }}>
                    <Ionicons name="chevron-back" size={40} color={'red'} />
                </TouchableOpacity>

                <Text style={styles.fontStyle}>
                    Add Offer
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of Offer'
                    onChangeText={setOfferName}
                    value={offerName}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter price of offer'
                    onChangeText={setPrice}
                    value={price}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter description of Offer'
                    onChangeText={setDesc}
                    value={desc}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter image url of Offer'
                    onChangeText={setUrl}
                    value={url}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Confirm Add' color={'red'} onPress={() => {
                    addOfferHandler();
                    navigation.navigate("Offer");
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

export default addOffers