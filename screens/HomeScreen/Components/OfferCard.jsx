import { StyleSheet, Text, View , Image , Dimensions } from 'react-native'
import React from 'react'
import colors from '../../../Constants/colors'

const width = Dimensions.get("window").width;


const OfferCard = ({ url}) => {
    return (
        <View>
            <Image
                style={{
                    width: width - 20,
                    height: 250,
                    borderRadius: 30,
                    borderWidth: 1,
                    marginHorizontal: 10
                }}
                source={{
                    uri: `${url}`,
                }}
            />

            <View style={{ position: "absolute", left: 10 }}>
                <Text style={{
                    transform: [
                        { translateY: 50 },
                        { rotate: "320deg" }],
                    fontWeight: "bold", fontSize: 20,
                    backgroundColor: colors.primary , width: 140, textAlign: "center", color: colors.third
                }}>New Offer</Text>
            </View>
        </View>
    )
}

export default OfferCard

const styles = StyleSheet.create({})