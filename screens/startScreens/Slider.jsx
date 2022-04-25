import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const slider_hight = 0.61 * height;


const Slider = ({ label, right }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, {transform:[
            {translateY:(slider_hight-100)/2},
            {translateX : right ? width /2-50 : -width/2+50},
            {rotate: right? "-90deg":"90deg"}
        ]}]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        width: width,
        
    },
    titleContainer:{
        height:100,
        justifyContent: 'center',
    },
    title:{
        fontSize:80,
        color:"white",
        textAlign:"center",
        lineHeight:88
    }
})