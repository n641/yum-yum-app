import { StyleSheet, Text, View , Dimensions , FlatList , Image} from 'react-native'
import React , {useState} from 'react';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import FavCard from '../UserProfile/Components/Favourite/FavCard';
import style from '../../Constants/style';

const Favourite = () => {

    const [Favourite, setFavourite] = useState([        //must order Favouriteduct by count!!!!
    {
        name: "sawarma",
        url: "https://pbs.twimg.com/media/EoyE2lvWEAAo-pk?format=jpg&name=4096x4096",
        price: 20,
        count: 19,
        offer: true,
        discound: 20,
        desc:"pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l",
        fav:false

    },
    {
        name: "pizza",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_hPABuSXp3vmpfoOhZASRFB3O1qfF8c_Ew&usqp=CAU",
        price: 70,
        count: 8,
        offer: true,
        discound: 10
        ,desc:"pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
        ,fav:true
        
    },
    {
        name: "burger",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w3pS-DmxibqgtTz2H2FLuCIs5dmUl9YB5g&usqp=CAU",
        price: 100,
        count: 7,
        offer: false,
        discound: 10
        ,desc:"pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
        ,fav:true

    },
    {
        name: "rice",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JjLQlJMNvD_Iex8Zp36zNWM-fGlkoBGfnw&usqp=CAU",
        price: 150,
        count: 6,
        offer: true,
        discound: 20
        ,desc:"pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
        ,fav:true

    },
    {
        name: "pasta",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk9SLkWzA6RHgAfZKAdNfk_UQ2IsdHDRz2A&usqp=CAU",
        price: 200,
        count: 1,
        offer: true,
        discound: 40
        ,desc:"pla plap pla pla pla pla pla pla pla pla pl apl apl apl pal pal pal pal pa l"
        ,fav:true

    },
]);

  return Favourite.length!=0?  (
    <View>
    <Text style={{fontSize:25,color:style.primary,fontWeight:"bold" ,textAlign:"center",marginVertical:10}}>BestSellingFood</Text>
  
    <FlatList
      data={Favourite}
      numColumns={2}
      keyExtractor={item => item.name}
      renderItem={(itemData) => (

              <FavCard
              name={itemData.item.name}
              url={itemData.item.url}
              price={itemData.item.price}
              offer={itemData.item.offer}
              discound={itemData.item.discound}
              desc={itemData.item.desc}
              />
      )}
    />
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
                  source={require('../../assets/fav.png')}
              />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: height/23 , alignItems: 'center', justifyContent:'flex-end'}}>
              <Text style={{color:'red' , fontSize:30, fontWeight:'500'}}>not exist favourit meals</Text>
              </View>
             
    </View>
)
}

export default Favourite
