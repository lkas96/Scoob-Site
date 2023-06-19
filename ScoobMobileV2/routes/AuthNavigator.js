import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ParentBottomTab from './ParentBottomTab';
import LoginPage from "../screens/LoginPage";

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
        {/* <Stack.Screen name="ParentsProfilePage" component={ParentStack} /> */}
        {/* <Stack.Screen name="ParentsChildInfoPage" component={ParentsChildInfoPage} />
        <Stack.Screen name="ParentsChatPage" component={ParentsChatPage} />
        <Stack.Screen name="ParentsBusServicePage" component={ParentsBusServicePage} /> */}

        {/* <Stack.Screen name="TeachersHomePage" component={TeachersHomePage} />
        <Stack.Screen name="TeachersChatPage" component={TeachersChatPage} />
        <Stack.Screen name="TeachersPickUpZonePage" component={TeachersPickUpZonePage} />
        <Stack.Screen name="DriversHomePage" component={DriversHomePage} />
        <Stack.Screen name="DriversTripsPage" component={DriversTripsPage} /> */}
        <Stack.Screen 
            name="ParentsBottomTab" 
            component={ParentBottomTab} 
            options={{headerShown: false, gestureEnabled: false,}}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;