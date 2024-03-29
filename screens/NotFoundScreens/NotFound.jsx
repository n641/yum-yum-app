import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React ,{useState} from 'react';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const NotFound = () => {
  


    return (
      <View style={{
          flex:1,
          backgroundColor:'white'
          }}>
               
           <Image
                    style={{
                        width: width,
                        height: height,
                        position: 'relative',
                        resizeMode: 'contain'

                    }}
                    source={require('../../assets/notfound.png')}
                />
               <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 50 , alignItems: 'center', justifyContent:'flex-end'}}>
                <Text style={{color:'red' , fontSize:30, fontWeight:'500'}}>Not Found</Text>
                </View>
      </View>
  )
}

export default NotFound

const styles = StyleSheet.create({})