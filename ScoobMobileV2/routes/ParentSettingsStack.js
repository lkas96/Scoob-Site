import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParentsProfilePage from "../screens/Parents/ProfilePage";
import ParentsSettingsPage from "../screens/Parents/Settings";

import { COLORS } from "../constants";
import { Text } from "react-native";

const Stack = createStackNavigator();

function ParentSettingsStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: "",
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
			}}
			initialRouteName="ParentsSettingsPage"
		>
			<Stack.Screen
				name="ParentsSettingsPage"
				component={ParentsSettingsPage}
				options={{ headerLeft: false }}
			/>
			<Stack.Screen name="ParentsProfile" component={ParentsProfilePage} />
		</Stack.Navigator>
	);
}

export default ParentSettingsStack;
