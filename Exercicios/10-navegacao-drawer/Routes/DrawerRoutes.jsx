import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../Screens/HomeScreen'
import ConfigScreen from '../Screens/ConfigScreen'
import ProfileScreen from '../Screens/ProfileScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home Screen' component={HomeScreen}/>
                <Drawer.Screen name='Profile Screen' component={ProfileScreen}/>
        <Drawer.Screen name='Config Screen' component={ConfigScreen}/>


    </Drawer.Navigator>
 
  )
}

const styles = StyleSheet.create({})