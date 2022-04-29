import { StyleSheet, Text, View  , Animated , Dimensions} from 'react-native'
import React, { useState } from 'react'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from '../../../../Constants/style';

import LastOrderCard from './LastOrderCard';

const LastOrder = ({ navigation}) => {
    const [pro, setpro] = useState([        //must order product by count!!!!
        {
            name: "sawarma",
            url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
            price: 20,
            count: 19,
            offer: true,
            discound: 20,
            desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
            fav: false

        },
        {
            name: "pizza",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
            price: 70,
            count: 8,
            offer: true,
            discound: 10
            , desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
            , fav: true

        },
        {
            name: "burger",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
            price: 100,
            count: 7,
            offer: false,
            discound: 10
            , desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
            , fav: true

        },
        {
            name: "rice",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
            price: 150,
            count: 6,
            offer: true,
            discound: 20
            , desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
            , fav: true

        },
        {
            name: "pasta",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
            price: 200,
            count: 1,
            offer: true,
            discound: 40
            , desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
            , fav: true

        },
    ]);
    return (
        <View>
            <View>
                <View
                    style={{
                        flexDirection: "column",
                        borderRadius: 30,
                        justifyContent: "center",
                        // height:height/
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: style.primary }}> Last Orders</Text>
                    </View>
                    <Animated.ScrollView
                        horizontal
                        snapToInterval={width}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    >

                        {pro.map((e, id) => (

                            <LastOrderCard url={e.url} name={e.name} price={e.price} desc={e.desc} fav={e.fav} offer={e.offer} discound={e.discound} navigation={navigation} key={id} />

                        ))}

                    </Animated.ScrollView>



                </View>
            </View>
        </View>
    )
}

export default LastOrder

const styles = StyleSheet.create({})