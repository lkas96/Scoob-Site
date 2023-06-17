import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native' 
import Profile from './ParentsViewProfile'
import Child from './ParentsViewChild'
import Logout from './Logout'
import Home from './ParentsHomePage'
const Drawer = createDrawerNavigator();
const ParentsNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Homepage" component={Profile}/>
        <Drawer.Screen name="View Child" component={Child}/>
        <Drawer.Screen name="Logout" component={Logout}/>
        <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>
  )
}

export default ParentsNavigation