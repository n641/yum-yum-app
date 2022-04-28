import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import Headerinf from "./Components/Header/Header";
import Address from './Components/Address/Address';
import Favourite from './Components/Favourite/favourite';
import LastOrder from './Components/LastOrders/LastOrder';
import Footer from './Components/Footer/Footer';

const UseerProScreen = () => {
  return (
    <View>
        <ScrollView>
      <View style={{ backgroundColor: "#232424" }}>

          <Headerinf />
          <Address />
          <LastOrder />
          <Favourite />
          <Footer />
      </View>
        </ScrollView>
    </View>
  );
}

export default UseerProScreen

const styles = StyleSheet.create({})