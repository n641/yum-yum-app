import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Product from "./Product";
import addProductt from "./addProduct";
import editProductt from "./editProduct";

const Stack = createNativeStackNavigator();

const ProductStart = () =>{
    return(
        <Stack.Navigator initialRouteName="Producto">
            <Stack.Screen
                name="Producto"
                component={Product}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="addProduct"
                component={addProductt}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="editProduct"
                component={editProductt}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default ProductStart