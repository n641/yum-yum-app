import react, {useEffect} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';

import { deleteCategory, editCategory, getCategories, subscribe } from '../../db/Auth/usersData/Categories';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoriesCart = props => {

    const handleDeleteCategory = (id) =>{
        console.log("We delete category with id: ", id);
        deleteCategory(id);
    }

    useEffect(() => {
        const unsubscribe = subscribe(({ change, snapshot }) => {
            if (change.type === "added") {
                console.log("New mesg: ", change.doc.data());
                getCategories();
            }
            if (change.type === "modified") {
                console.log("Modified mesg: ", change.doc.data());
                getCategories();
            }
            if (change.type === "removed") {
                console.log("Removed mesg: ", change.doc.data());
                getCategories();
            }
          // }
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    return(
        <View style={styles.listItem}>
            <View style={styles.contentContainer}>
                <Image 
                    source={{uri: props.link}}
                    style={{width: 100, height: 100}}
                />
                <View>
                <Text style={styles.textHeader}>{props.category}</Text>
                <Text style={styles.textDescription}>{props.description}</Text>
                </View>
            </View>
            <Button 
                title='Delete'
                color={"red"}
                onPress={() => handleDeleteCategory(props.id)}
            />
            <Button 
                title='Edit'
                onPress={() => editCategory({category: props.newCategory, description: props.newDescription, link: props.newLink, id: props.id})}
            />
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
    contentContainer:{
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