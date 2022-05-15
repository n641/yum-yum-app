import react, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';
import style from '../../Constants/style'
import { Ionicons } from "@expo/vector-icons";



import { deleteCategory, getCategories, subscribe } from '../../db/Auth/usersData/Categories';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { async } from '@firebase/util';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoriesCart = ({navigation , link , category , description , id }) => {


    const handleDeleteCategory = async(id) => {
        console.log("We delete category with id: ", id);
        const categoriesArr = await getCategories();
        const obj = categoriesArr.find(e => e.id === id)
        if(obj.products.length == 0){
          deleteCategory(id);
        }
        else{
          alert(`This category have ${obj.products.length} product please delete this products first`)
        }
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                getCategories();
            }
            if (change.type === "modified") {
                getCategories();
            }
            if (change.type === "removed") {
                getCategories();
            }
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: width,
            margin: 10,
          }}
        >
          <View
            style={{
              borderRadius: style.border,
              borderWidth: 1,
              justifyContent: "space-between",
              width: width - 20,
              alignItems: "center",
              flexDirection: "row",
              height: height / 6,
            }}
          >
            <Image
              style={{
                width: width / 3 - 18,
                height: height / 6,
                borderRadius: style.border,
              }}
              source={{
                uri: `${link}`,
              }}
            />

            <View
              style={{
                flexDirection: "column",
                height: height / 4,
                justifyContent: "center",
              }}
            >
              <View>
                <View style={{ minWidth: width / 3 }}>
                  <Text
                    style={{
                      fontSize: width / 20,
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {category}
                  </Text>
                </View>

                <Text style={{ fontSize: width / 35, color: "gray" }}>
                  {description.substring(0, 15)}...
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductOfCategory", { name: category });
                }}
              >
                <Ionicons name="apps" size={width / 10} color={"red"} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("editCaregory", {
                    name: category,
                    desc: description,
                    url: link,
                    ids: id,
                  });
                }}
              >
                <Ionicons name="create" size={width / 15} color={"red"} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  //test
                  handleDeleteCategory(id);
                }}
              >
                <Ionicons name="trash" size={width / 15} color={"red"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible",
        width: width / 2.2,
    },
    contentContainer: {
        flexDirection: "row"
    },
    textHeader: {
        fontWeight: 'bold'
    },
    textDescription: {
        width: width / 4.3
    }
})

export default CategoriesCart;