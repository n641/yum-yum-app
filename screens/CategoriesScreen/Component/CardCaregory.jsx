import { StyleSheet, Text, View, Image, Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../Constants/colors'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



const CardCategory = ({ url , name }) => {
    return (
        <View >
            <TouchableOpacity onPress={()=>{
                //NAVIGATE TO PRODUCT SCREEN  WITH PARAM NAME OF CATEGORY TO LIST ALL PRODUCT OF THIS CATEGORY 
            }}>
            <Image
                style={{
                    width: width / 2 - 10,
                    height:  height / 2 - 100,
                    borderRadius: 30,
                    borderWidth: 1,
                    marginHorizontal: 5,
                    marginVertical: 5

                }}
                source={{
                    uri: `${url}`,
                }}
            />

            <View style={{ position: "absolute", left: '15%' ,top:width / 2 - 90 , bottom:0 , right:0 }}>
                <Text style={{
                    fontWeight: "bold", fontSize: 30,
                     width: 140, textAlign: "center", color: colors.third , fontWeight:'bold'
                }}>{name}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardCategory

const styles = StyleSheet.create({})