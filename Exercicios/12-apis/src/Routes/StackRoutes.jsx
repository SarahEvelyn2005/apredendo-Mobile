import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import UsuarioScreen from "../Screens/UsuarioScreen";

const Stack =createStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Lista de usuarios",headerTitleAlign:"center"
            }}/>
            <Stack.Screen name="UsuarioScreen" component={UsuarioScreen} options={{title: "Usuario",headerTitleAlign:"center"
            }}/>
        </Stack.Navigator>
    )
}