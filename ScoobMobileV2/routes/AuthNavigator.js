import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';

import LoginPage from "../screens/LoginPage";
import ParentBottomTab from './ParentBottomTab';
import DriverBottomTab from './DriverBottomTab';
import TeacherBottomTab from './TeacherBottomTab';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fd7e14",
                shadowColor: 'transparent',
                elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#F6F6F6',
        }} 
        initialRouteName='LoginPage'
    >
        <Stack.Screen 
            name="LoginPage" 
            component={LoginPage}
            options={{
                headerTitle: " "
            }}
        />
        {/* <Stack.Screen 
            name="ParentsHomePage" 
            component={ParentsHomePage} 
            options={{
                headerLeft: () => null, // Remove back button
                headerTitle: "Home"
            }}
        /> */}
        <Stack.Screen 
            name="ParentBottomTab" 
            component={ParentBottomTab} 
            options={{headerShown: false, gestureEnabled: false,}}
        />
        <Stack.Screen 
            name="DriverBottomTab" 
            component={DriverBottomTab} 
            options={{headerShown: false, gestureEnabled: false,}}
        />
        <Stack.Screen 
            name="TeacherBottomTab" 
            component={TeacherBottomTab} 
            options={{headerShown: false, gestureEnabled: false,}}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;