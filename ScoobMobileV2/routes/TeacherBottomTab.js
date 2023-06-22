import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

// Need to redo import style
import TeachersHomeStack from "./TeacherHomeStack";
import TeachersChatPage from "../screens/Teachers/ChatPage";
import TeachersSettingsStack from "./TeacherSettingsStack";

const Tab = createBottomTabNavigator();
const TeacherBottomTab = () => {
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

                if (route.name === "TeachersHome") {
                    iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                } else if (route.name === "TeachersSettings") {
                    iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === "TeachersChat") {
                    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                }

                return <Icon name={iconName} size={22} color={color} />
            }
        })}>
        <Tab.Screen name="TeachersHome" component={TeachersHomeStack} options={{tabBarLabel: "Home"}}/>
        {/* <Tab.Screen name="TeachersHome" component={TeachersHomePage} options={{tabBarLabel: "Home", gestureEnabled: false,}}/> */}
        <Tab.Screen name="TeachersChat" component={TeachersChatPage} options={{tabBarLabel: "Chat", headerShown: true, headerTitle: '', headerStyle: {backgroundColor: COLORS.primary}}}/>
        <Tab.Screen name="TeachersSettings" component={TeachersSettingsStack} options={{tabBarLabel: "Settings"}}/>
    </Tab.Navigator>
  )
}

export default TeacherBottomTab