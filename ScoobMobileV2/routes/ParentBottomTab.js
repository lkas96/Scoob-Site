import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants";

// Need to redo import style
import ParentsBusServiceStack from "../routes/ParentBusServiceStack";
import ParentsHomeStack from "../routes/ParentHomeStack";
import ParentsSettingsStack from "../routes/ParentSettingsStack";
import ParentsChatPage from "../screens/Parents/ChatPage";
import ParentsHomePage from "../screens/Parents/HomePage";
import ParentsProfilePage from "../screens/Parents/ProfilePage";

const Tab = createBottomTabNavigator();

function ParentBottomTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				headerTitle: "",
				tabBarShowLabel: false,
				gestureEnabled: false,
				tabBarActiveBackgroundColor: COLORS.background,
				tabBarInactiveBackgroundColor: COLORS.background,
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.secondary,
				tabBarStyle: {
					paddingBottom: 0,
				},
				tabBarIconStyle: {
					paddingBottom: Platform.OS === "ios" ? 25 : 0,
				},
				headerStyle: {
					backgroundColor: COLORS.background,
				},

				// To dynamically set bottom tab bar icons to icon pack, name must be the same, KIV
				tabBarIcon: ({ color, size, focused }) => {
					let iconName;

					if (route.name === "ParentsHome") {
						iconName = focused ? "ios-home-sharp" : "ios-home-outline";
					} else if (route.name === "ParentsSettings") {
						iconName = focused ? "settings" : "settings-outline";
					} else if (route.name === "ParentsChat") {
						iconName = focused ? "chatbubbles" : "chatbubbles-outline";
					} else if (route.name === "BusService") {
						iconName = focused ? "bus" : "bus-outline";
					}

					return <Icon name={iconName} size={25} color={color} />;
				},
			})}
		>
			{/* <Tab.Screen name="ParentsHome" component={ParentsHomePage} options={{tabBarLabel: "Home", gestureEnabled: false,}}/> */}
			<Tab.Screen
				name="ParentsHome"
				component={ParentsHomeStack}
				options={{
					tabBarLabel: "Home",
					gestureEnabled: false,
					headerStyle: { backgroundColor: COLORS.background },
				}}
			/>
			<Tab.Screen
				name="BusService"
				component={ParentsBusServiceStack}
				options={{
					tabBarLabel: "Bus Service",
					headerShown: true,
					headerTitle: "",
					headerStyle: { backgroundColor: COLORS.background },
				}}
			/>
			<Tab.Screen
				name="ParentsChat"
				component={ParentsChatPage}
				options={{
					tabBarLabel: "Chat",
					headerShown: true,
					headerTitle: "",
					headerStyle: { backgroundColor: COLORS.background },
				}}
			/>
			<Tab.Screen
				name="ParentsSettings"
				component={ParentsSettingsStack}
				options={{
					tabBarLabel: "Settings",
					headerStyle: { backgroundColor: COLORS.background },
				}}
			/>
		</Tab.Navigator>
	);
}

export default ParentBottomTab;
