import {
    StyleSheet, 
    View, 
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import react, {useState, useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";
import ProductCard from '../../Cards/ProductCard';

import { getProducts, subscribe } from '../../../db/Auth/usersData/Products';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Product = ({navigation}) =>{
    
    const [arrProduct, setProductArr] = useState([])

    const getProductsHandler = async () => {
        const arr = await getProducts();
        setProductArr(arr)
    }

    useEffect(() => {
        getProductsHandler();
    }, [])

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                getProductsHandler();
            }
            if (change.type === "modified") {
                getProductsHandler();
            }
            if (change.type === "removed") {
                getProductsHandler();
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
      <View style={styles.bigContainer}>
        <FlatList
          data={arrProduct}
          renderItem={(itemData) => (
            <ProductCard
              navigation={navigation}
              category={itemData.item.category}
              count={itemData.item.count}
              desc={itemData.item.desc}
              discount={itemData.item.discount}
              offer={itemData.item.offer}
              url={itemData.item.url}
              price={itemData.item.price}
              productName={itemData.item.productName}
              id={itemData.item.id}
            />
          )}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addProduct");
            }}
          >
            <Ionicons name="add-circle" size={width / 7} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        width: width
    },
});

export default Product