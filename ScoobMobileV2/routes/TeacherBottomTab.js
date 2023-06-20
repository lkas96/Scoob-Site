import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

// Need to redo import style
import TeachersHomePage from "../screens/Teachers/HomePage";
import TeachersChatPage from "../screens/Teachers/ChatPage";
import TeachersSettingsStack from "../routes/TeachersSettingsStack";

const Tab = createBottomTabNavigator();
const TeacherBottomTab = () => {
  return (
    <Tab.Navigator 
        screenOptions={({route}) => ({
          headerShown: false,
          gestureEnabled: false,
          tabBarActiveTintColor: COLORS.white,
          tabBarActiveBackgroundColor: COLORS.primary,
          tabBarInactiveBackgroundColor: 'gray',
          tabBarInactiveTintColor: COLORS.black,
            // To dynamically set bottom tab bar icons to icon pack, name must be the same, KIV
            // tabBarIcon: ({color, size, focused}) => {
            //     let iconName;

            //     if (route.name === ROUTES.HOME_TAB) {
            //         iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            //     } else if (route.name === ROUTES.SETTINGS) {
            //         iconName = focused ? 'settings' : 'settings-outline';
            //     } else if (route.name === ROUTES.WALLET) {
            //         iconName = focused ? 'wallet' : 'wallet-outline';
            //     } else if (route.name === ROUTES.NOTIFICATIONS) {
            //         iconName = focused ? 'md-notifications-sharp' : 'md-notifications-outline';
            //     }

            //     return <Icon name={iconName} size={22} color={color} />
            // }
        })}>
        <Tab.Screen name="TeachersHome" component={TeachersHomePage} options={{tabBarLabel: "Home"}}/>
        {/* <Tab.Screen name="TeachersHome" component={TeachersHomePage} options={{tabBarLabel: "Home", gestureEnabled: false,}}/> */}
        <Tab.Screen name="TeachersChat" component={TeachersChatPage} options={{tabBarLabel: "Chat"}}/>
        <Tab.Screen name="TeachersSettings" component={TeachersSettingsStack} options={{tabBarLabel: "Settings"}}/>
    </Tab.Navigator>
  )
}

export default TeacherBottomTab