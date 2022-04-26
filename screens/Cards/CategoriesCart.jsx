import react from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

const CategoriesCart = props => {
    return(
        <View style={styles.listItem}>
            <Image 
                source={{uri: props.link}}
                style={{width: 100, height: 100}}
            />
            <View>
                <Text style={styles.textHeader}>{props.category}</Text>
                <Text style={styles.textDescription}>{props.description}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
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
    textHeader: {
        fontWeight: 'bold'
    },
    textDescription: {
        width: width / 4.3
    }
})

export default CategoriesCart;