import react from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

const CategoriesCart = props => {
    return(
        <View style={styles.listItem}>
            <Text>{props.category}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10, 
        borderColor: 'black',
        borderWidth: 1,
        overflow: "visible"
    },
})

export default CategoriesCart;