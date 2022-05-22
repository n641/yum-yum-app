import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import Headerinf from "./Components/Headerinf/Headerinf";
import Address from './Components/Address/Address';
import Favourite from './Components/Favourite/favourite';
import LastOrder from './Components/LastOrders/LastOrder';
import Footer from './Components/Footer/Footer';

const UseerProScreen = ({ navigation}) => {
  return (
  

        <ScrollView style={{backgroundColor: "white"}}>

          <Headerinf  navigation={navigation}/> 
          <Address navigation={navigation} />
          <LastOrder navigation={navigation} />
          <Favourite navigation={navigation} />
          <Footer navigation={navigation}/>
        </ScrollView>

  
  );
}

export default UseerProScreen

const styles = StyleSheet.create({})