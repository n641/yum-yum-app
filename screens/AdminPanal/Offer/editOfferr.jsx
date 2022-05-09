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

    const [offerNamee, setOfferNamee] = useState('')
    const [pricee, setPricee] = useState(0)
    const [descc, setDescc] = useState('')
    const [urll, seturll] = useState('')

    const editOfferHandler = () =>{
        console.log(offerNamee, pricee, descc, urll)
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
                    value={offerName}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter price of offer'
                    onChangeText={setPricee}
                    value={price}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter description of Offer'
                    onChangeText={setDescc}
                    value={desc}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    placeholder='Enter image url of Offer'
                    onChangeText={setUrll}
                    value={url}
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