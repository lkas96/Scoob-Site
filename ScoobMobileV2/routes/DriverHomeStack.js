import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import DriversHomePage from "../screens/Drivers/HomePage";
import DriversTripsPage from "../screens/Drivers/TripsPage";

import COLORS from "../constants/colors";

const Stack = createStackNavigator();

const DriverHomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: " ",
				headerStyle: {
					backgroundColor: COLORS.background,
				},
			}}
			initialRouteName="DriversHomePage"
		>
			<Stack.Screen
				name="DriversHomePage"
				component={DriversHomePage}
				options={{
					headerLeft: false,
				}}
			/>
			<Stack.Screen
				name="DriversTripsPage"
				component={DriversTripsPage}
				options={{
					headerShown: true,
					headerTitle: "Trip",
				}}
			/>
		</Stack.Navigator>
	);
};

export default DriverHomeStack;
