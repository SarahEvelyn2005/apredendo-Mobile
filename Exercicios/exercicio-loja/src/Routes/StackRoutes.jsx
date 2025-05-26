import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ListaProdutosScreen from "../Screens/ListaProdutosScreen";
import ProdutoScreen from "../Screens/ProdutoScreen";

const Stack =createStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home",headerTitleAlign:"center"
            }}/>
            <Stack.Screen name="ListaProdutosScreen" component={ListaProdutosScreen} options={{title: "Lista",headerTitleAlign:"center"
            }}/>
             <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} options={{title: "Produtos",headerTitleAlign:"center"
            }}/>
        </Stack.Navigator>
    )
}