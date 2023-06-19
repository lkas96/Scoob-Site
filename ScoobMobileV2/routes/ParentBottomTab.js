import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

// Need to redo import style
import ParentsHomePage from "../screens/Parents/HomePage";
import ParentsProfilePage from "../screens/Parents/ProfilePage";
// import ParentsChildInfoPage from "../screens/Parents/ChildInfoPage";
import ParentsChatPage from "../screens/Parents/ChatPage";
import ParentsBusServicePage from "../screens/Parents/BusServicePage";
import ParentsSettingsStack from "../routes/ParentSettingsStack";

const Tab = createBottomTabNavigator();

function ParentBottomTab() {
  return (
    <Tab.Navigator 
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            gestureEnabled: false,
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
        <Tab.Screen name="ParentsHome" component={ParentsHomePage} options={{tabBarLabel: "Home", gestureEnabled: false,}}/>
        {/* <Tab.Screen name="ChildInfo" component={ParentsChildInfoPage} /> */}
        <Tab.Screen name="BusService" component={ParentsBusServicePage} options={{tabBarLabel: "Bus Service"}}/>
        <Tab.Screen name="ParentsChat" component={ParentsChatPage} options={{tabBarLabel: "Chat"}}/>
        <Tab.Screen name="ParentsSettings" component={ParentsSettingsStack} options={{tabBarLabel: "Settings"}}/>
    </Tab.Navigator>
  );
}

export default ParentBottomTab;