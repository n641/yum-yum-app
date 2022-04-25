import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React ,{useState} from 'react';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cart = () => {
  
const [Carts, setCarts] = useState([]);

    return Carts.length!=0? (
    <View>
      <Text>Cart</Text>
    </View>
    

  ):(
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
                    source={require('../../assets/emptyCart.png')}
                />
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 50 , alignItems: 'center', justifyContent:'flex-end'}}>
                <Text style={{color:'red' , fontSize:30, fontWeight:'500'}}>Empty Card</Text>
                </View>
               
      </View>
  )
}

export default Cart

const styles = StyleSheet.create({})