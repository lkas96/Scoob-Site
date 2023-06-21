import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';
import { Platform } from 'react-native';

// Need to redo import style
import ParentsHomePage from "../screens/Parents/HomePage";
import ParentsProfilePage from "../screens/Parents/ProfilePage";
import ParentsHomeStack from "../routes/ParentHomeStack";
import ParentsChatPage from "../screens/Parents/ChatPage";
import ParentsSettingsStack from "../routes/ParentSettingsStack";
import ParentsBusServiceStack from "../routes/ParentBusServiceStack";

const Tab = createBottomTabNavigator();

function ParentBottomTab() {
  return (
    <Tab.Navigator 
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel:false,
            gestureEnabled: false,
            tabBarActiveTintColor: COLORS.white,
            tabBarActiveBackgroundColor: COLORS.primary,
            tabBarInactiveBackgroundColor: "#003D7C",
            tabBarInactiveTintColor: COLORS.black,
            tabBarStyle: {
              paddingBottom: 0,
            },
            tabBarIconStyle: {
              paddingBottom: Platform.OS === 'ios' ? 25 : 0,
            },

            // To dynamically set bottom tab bar icons to icon pack, name must be the same, KIV
            tabBarIcon: ({color, size, focused}) => {
                let iconName;

                if (route.name === 'ParentsHome') {
                    iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                } else if (route.name === 'ParentsSettings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'ParentsChat') {
                    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                } else if (route.name === 'BusService') {
                    iconName = focused ? 'bus' : 'bus-outline';
                }

                return <Icon name={iconName} size={22} color={color} />
            }
        })}>
        {/* <Tab.Screen name="ParentsHome" component={ParentsHomePage} options={{tabBarLabel: "Home", gestureEnabled: false,}}/> */}
        <Tab.Screen name="ParentsHome" component={ParentsHomeStack} options={{tabBarLabel: "Home", gestureEnabled: false,}}/>
        <Tab.Screen name="BusService" component={ParentsBusServiceStack} options={{tabBarLabel: "Bus Service"}}/>
        <Tab.Screen name="ParentsChat" component={ParentsChatPage} options={{tabBarLabel: "Chat"}}/>
        <Tab.Screen name="ParentsSettings" component={ParentsSettingsStack} options={{tabBarLabel: "Settings"}}/>
    </Tab.Navigator>
  );
}

export default ParentBottomTab;