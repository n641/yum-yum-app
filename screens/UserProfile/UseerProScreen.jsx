import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import Header from './Components/Header/Header'
import Address from './Components/Address/Address';

const UseerProScreen = () => {
  return (
    <View style={{ width:width , height:height , backgroundColor:"red"}}>
      <Header/>
      <Address/>
    </View>
  )
}

export default UseerProScreen

const styles = StyleSheet.create({})