import {
    StyleSheet, 
    Text, 
    View, 
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native'
import react, {useState} from 'react'
import { Ionicons } from "@expo/vector-icons";

import { editOffer } from '../../../db/Auth/usersData/Offers';

const editOfferr = ({route, navigation}) =>{

    const {offerName, price, desc, url, id} = route.params

    const [offerNamee, setOfferNamee] = useState(offerName)
    const [pricee, setPricee] = useState(price)
    const [descc, setDescc] = useState(desc)
    const [urll, seturll] = useState(url)

    const editOfferHandler = () =>{
        editOffer({
            offerName: offerNamee,
            price: pricee,
            desc: descc,
            url: urll,
            id:id
        }).then(() => navigation.navigate("Offer"));
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
                    Edit Offer
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter name of Offer'
                    onChangeText={setOfferNamee}
                    value={offerNamee}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter price of offer'
                    onChangeText={setPricee}
                    value={pricee}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter description of Offer'
                    onChangeText={setDescc}
                    value={descc}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter image url of Offer'
                    onChangeText={seturll}
                    value={urll}
                />
            </View>

            <View style={styles.finishButton}>
                <Button title='Confirm Edit' color={'red'} onPress={() => {
                    editOfferHandler();
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

export default editOfferr