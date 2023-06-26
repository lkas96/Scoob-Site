import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants";

// Need to redo import style
import DriversSettingsPage from "../screens/Drivers/Settings";
import DriverHomeStack from "./DriverHomeStack";

const Tab = createBottomTabNavigator();

function DriverBottomTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: true,
				headerTitle: "",
				tabBarShowLabel: false,
				gestureEnabled: false,
				tabBarActiveTintColor: COLORS.black,
				tabBarActiveBackgroundColor: COLORS.primary,
				tabBarInactiveBackgroundColor: COLORS.secondary,
				tabBarInactiveTintColor: COLORS.white,
				tabBarStyle: {
					paddingBottom: 0,
				},
				tabBarIconStyle: {
					paddingBottom: Platform.OS === "ios" ? 25 : 0,
				},
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
				// To dynamically set bottom tab bar icons to icon pack, name must be the same, KIV
				tabBarIcon: ({ color, size, focused }) => {
					let iconName;

					if (route.name === "DriversHome") {
						iconName = focused ? "ios-home-sharp" : "ios-home-outline";
					} else if (route.name === "DriverSettings") {
						iconName = focused ? "settings" : "settings-outline";
					}

					return <Icon name={iconName} size={22} color={color} />;
				},
			})}
		>
			<Tab.Screen
				name="DriversHome"
				component={DriverHomeStack}
				options={{ tabBarLabel: "Home", gestureEnabled: false }}
			/>
			<Tab.Screen
				name="DriverSettings"
				component={DriversSettingsPage}
				options={{ tabBarLabel: "Settings" }}
			/>
		</Tab.Navigator>
	);
}

export default DriverBottomTab;
