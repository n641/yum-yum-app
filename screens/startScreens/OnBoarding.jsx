import { View, Text, StatusBar, StyleSheet, Alert, Button, Dimensions } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';

import {
    Gesture,
    GestureDetector,
    TouchableOpacity,
} from 'react-native-gesture-handler';

import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import Slider , {slider_hight} from './Slider'

const SCREEN_WIDTH = Dimensions.get('window').width;

const OnBoarding = ({ navigation }) => {

    const xtranslate = useSharedValue(SCREEN_WIDTH);
    const xOffset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(xtranslate.value) }],
        };
    });

    const scrollGesture = Gesture.Pan()
        .onBegin(() => {
            xOffset.value = xtranslate.value;
        })
        .onUpdate(e => {
            if (
                xOffset.value + e.translationX < -SCREEN_WIDTH ||
                xOffset.value + e.translationX > SCREEN_WIDTH
            ) {
                return;
            }
            xtranslate.value = xOffset.value + e.translationX;
        })
        .onFinalize(e => {
            if (xtranslate.value > SCREEN_WIDTH / 2) {
                xtranslate.value = SCREEN_WIDTH;
            } else if (xtranslate.value < -SCREEN_WIDTH / 2) {
                xtranslate.value = -SCREEN_WIDTH;
            } else {
                xtranslate.value = 0;
            }
            xOffset.value = xtranslate.value;
        });

    const gotoNextPage = () => {
        //to do navigate to login screen
    }

    return (
        <View style={styles.container}>
            <GestureDetector gesture={scrollGesture}>
                <Animated.View style={[styles.OnBoardingContainer, animatedStyles ]}>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <View style={{flexDirection:'column'}}>
                    <View
                        style={[
                            styles.OnBoardingPage,

                            {
                                flex: 1,
                                flexDirection: 'column',
                            },
                        ]}>
                          <View style={[styles.Slider , {backgroundColor:"red"}]}>
                        
                              <Slider label='Testy' />
                          </View>
                      </View>  
                      {/* /////////////////////// footer */}
                      <View style={styles.footer}>
              <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "red" }}>
                 <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>


                <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>

                <Text style={{fontSize:60 , fontWeight:'500'}}>Food App</Text>
                <Text style={{fontSize:19 , fontWeight:'400'}}>contrary to popular belief,Lorem </Text>
                <Text style={{fontSize:19 , fontWeight:'400'}}>ipsum is not simply random text.It</Text>
                <Text style={{fontSize:19 , fontWeight:'400'}}>has roots in a piece of classical Latin</Text>
                <Text style={{fontSize:19 , fontWeight:'400'}}>literature from</Text>


                <View style={{alignItems:'center', height:"15%" ,justifyContent:'center' , width:'30%' , marginTop:70 , backgroundColor:"red" , borderRadius:20} }>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Login')
                    }}>
                    <Text style={{fontSize:20 , fontWeight:'400'}}>{'Skip'}</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                  </View>
               </View>
            </View>
            </View>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <View style={{flexDirection:'column'}}>
                    <View
                        style={[
                            styles.OnBoardingPage,

                            {
                                flex: 1,
                                flexDirection: 'column',
                                // backgroundColor: 'red',
                            },
                        ]}>
                          <View style={[styles.Slider , {backgroundColor:"#ff4d00"}]}>
                        
                              <Slider label='Fast Food' />
                          </View>
                      </View>  
                      {/* ////////////////////////////////////////////////////////////// */}
                      <View style={styles.footer}>
              <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#ff4d00" }}>
                 <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>

                <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>

                <Text style={{fontSize:70 , fontWeight:'400' , marginTop:20 }}>Yummies</Text>
                <Text style={{fontSize:20 , fontWeight:'400'}}>Tasty meals delivered to </Text>
                <Text style={{fontSize:20 , fontWeight:'400'}}>your doorstep</Text>

                <View style={{alignItems:'center', height:"15%" ,justifyContent:'center' , width:'30%' , marginTop:70 , backgroundColor:"#ff4d00" , borderRadius:20} }>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Login')
                    }}>
                    <Text style={{fontSize:20 , fontWeight:'400'}}>{'Skip'}</Text>
                    </TouchableOpacity>
                    </View>

                </View>
                  </View>
               </View>
            </View>
            </View>  
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    <View style={{flexDirection:'column'}}>
                    <View
                        style={[
                            styles.OnBoardingPage,

                            {
                                flex: 1,
                                flexDirection: 'column',
                            },
                        ]}>
                          <View style={[styles.Slider , {backgroundColor:"yellow"}]}>
                        
                              <Slider label='Delivery' />
                          </View>
                      </View>  
                      {/* /////////////////////// ///////////////////////////////////////*/}
                      <View style={styles.footer}>
              <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "yellow" }}>
                 <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>

                        <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>

                        <Text style={{fontSize:45 , fontWeight:'500'}}>The Fastest</Text>
                        <Text style={{fontSize:45 , fontWeight:'500'}}>Food Delivery </Text>
                        <Text style={{fontSize:19 , fontWeight:'400' , marginTop:10}}>Lorem ipsum dolor sit amet, consetetur</Text>
                        <Text style={{fontSize:19 , fontWeight:'400'}}>sadipscing eliter, sed diam nonumy</Text>


                        <View style={{alignItems:'center', height:"15%" ,justifyContent:'center' , width:'30%' , marginTop:70 , backgroundColor:"yellow" , borderRadius:20} }>
 
                        <TouchableOpacity onPress={()=>{
                        navigation.navigate('Login')
                        }}>
                        <Text style={{fontSize:20 , fontWeight:'400'}}>{'Let\'s Order'}</Text>
                        </TouchableOpacity>
                        </View>

                    </View>

                  </View>
               </View>
            </View>
            </View>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                </Animated.View>
            </GestureDetector>
           </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },Slider: {
        height: slider_hight,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: .65,
        width:SCREEN_WIDTH,
        height:100

    },
    OnBoardingContainer: {
        width: SCREEN_WIDTH * 3,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    OnBoardingPage: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: '100%',
    },
});

export default OnBoarding;



