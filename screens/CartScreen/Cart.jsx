import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React ,{useState} from 'react';
import HomeStart from '../HomeScreen/HomeStart';
import CardofCart from "./Compnent/CardofCart"


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cart = () => {
   const [Carts, setCarts] = useState([
     //must order product by count!!!!
     {
       name: "sawarmaa",
       url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
       price: 20,
       count: 19,
       offer: true,
       discound: 20,
       fav: true,
       desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
     },
     {
       name: "pizza",
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
       price: 70,
       count: 8,
       offer: true,
       discound: 10,
       fav: true,
       desc: "pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa lwerrrrrrrrrrrrrrrrrrr",
     },
   ]);
  

    return Carts.length==0? (
          <View>
               <CardofCart/>
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
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: height/20 , alignItems: 'center', justifyContent:'flex-end'}}>
                <Text style={{color:'red' , fontSize:30, fontWeight:'500'}}>Empty Card</Text>
                </View>
                <HomeStart/>
               
      </View>
  )
}

export default Cart

const styles = StyleSheet.create({})