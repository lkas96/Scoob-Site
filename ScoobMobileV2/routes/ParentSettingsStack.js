import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ParentsProfilePage from "../screens/Parents/ProfilePage";
import ParentsSettingsPage from "../screens/Parents/Settings";

import { Text } from 'react-native';

const Stack = createStackNavigator();

function ParentSettingsStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }} 
      initialRouteName='ParentsSettingsPage'
    >
      <Stack.Screen name="ParentsSettingsPage" component={ParentsSettingsPage} />
      <Stack.Screen 
        name="ParentsProfile" 
        component={ParentsProfilePage} 
        options={{
          headerShown: true,
          headerTitle: "Profile",
        }}/>
      {/* <Stack.Screen name="ParentsChildInfoPage" component={ParentsChildInfoPage} />
      <Stack.Screen name="ParentsChatPage" component={ParentsChatPage} />
      <Stack.Screen name="ParentsBusServicePage" component={ParentsBusServicePage} /> */}

    </Stack.Navigator>
  );
}

export default ParentSettingsStack;