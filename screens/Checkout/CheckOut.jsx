import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { JumpingTransition } from 'react-native-reanimated';

const CheckOut = ({ route, navigation}) => {
  const total = route.params;
  return (
    <View>
      <Text>CheckOut total is {total.total}</Text>
    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({})