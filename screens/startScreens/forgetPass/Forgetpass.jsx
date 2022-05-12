import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { sendEmail } from './SendEmail';

const Forgetpass = () => {
  return (
    <View>
      <Text>Forgetpass</Text>
    </View>
  )
}

export default Forgetpass

const styles = StyleSheet.create({})

// sendEmail(
//     'user@domain.com',
//        'We need your feedback',
//     'UserName, we need 2 minutes of your time to fill this quick survey [link]',
//  { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
// ).then(() => {
//     console.log('Your message was successfully sent!');
// });