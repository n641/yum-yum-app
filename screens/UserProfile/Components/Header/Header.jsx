import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

import colors from '../../../../Constants/colors';
import { Ionicons } from "@expo/vector-icons";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Header = () => {
    return (
        <View>
            <Image
                style={{
                    width: width,
                    height: height / 3,
                    borderBottomRightRadius: 300,
                    resizeMode: 'stretch'
                }}
                source={require('../../../../assets/avater.png')}
            />

            <View style={{ flexDirection: 'row', position: 'absolute' }}>

                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', top: 120 }}>
                    <Text style={{ color: colors.fourth, fontSize: 20, fontWeight: 'bold' }}> noha mohammed</Text>
                    <View style={{ flexDirection: 'row' , alignItems:'center' ,justifyContent:'center' }}>
                        <Ionicons name="mail" size={15} color={colors.fourth} />
                        <Text style={{ color: colors.secondry, fontSize: 16, fontWeight: 'bold' }}> noha64@gamil.com</Text>
                    </View>

                </View>
            </View>

            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>
                        {/* ///info */}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    Slider: {
        height: height / 3,
        borderBottomRightRadius: 300
    },
    footer: {
        flex: .65,
        width: width,
        height: 100

    },
})