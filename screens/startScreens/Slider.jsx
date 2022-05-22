import { StyleSheet, Text, View, Dimensions , Image} from 'react-native'
import React from 'react'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const slider_hight = 0.61 * height;


const Slider = ({ label, right , img }) => {
    return (
        <View style={styles.container}>
            <View>
            {/* <View style={[styles.titleContainer, {transform:[
            {translateY:(slider_hight-100)/2},
            {translateX : right ? width /2-50 : -width/2+50},
            {rotate: right? "-90deg":"90deg"} 
        ], flexDirection:'row'}]}>
                <Text style={styles.title}>{label}</Text>

            </View> */}
            <Image
                    style={{
                        width: width,
                        height: height-300,
                        position: 'relative',
                        resizeMode: 'contain'

                    }}
                    source={img}
                />
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        width: width,
        flex:1
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