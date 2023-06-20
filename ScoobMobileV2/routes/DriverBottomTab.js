import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

// Need to redo import style
import DriversHomePage from "../screens/Drivers/HomePage";
import DriversTripPage from "../screens/Drivers/TripsPage";
import DriversSettingsPage from "../screens/Drivers/Settings";
import DriversHomeStack from './DriversHomeStack';

const Tab = createBottomTabNavigator();

function DriverBottomTab() {
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
        <Tab.Screen name="DriversHome" component={DriversHomeStack} options={{tabBarLabel: "Home", gestureEnabled: false,}}/>
        <Tab.Screen name="DriverSettings" component={DriversSettingsPage} options={{tabBarLabel: "Settings"}}/>
    </Tab.Navigator>
  );
}

export default DriverBottomTab;