import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Users from "./Users";
import addUsers from "./addUsers";
import editUsers from "./editUsers";

const Stack = createNativeStackNavigator();

const StartUsers = () =>{
    return(
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen
                name="Users"
                component={Users}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="addUsers"
                component={addUsers}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="editUsers"
                component={editUsers}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StartUsers