import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { COLORS } from "../constants";

import TeachersHomePage from "../screens/Teachers/HomePage";
import TeacherPickUpStack from "./TeacherPickUpStack";

const Stack = createStackNavigator();

const TeacherHomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: " ",
				headerStyle: {
					backgroundColor: COLORS.background,
				},
			}}
			initialRouteName="TeachersHomePage"
		>
			<Stack.Screen
				name="TeachersHomePage"
				component={TeachersHomePage}
				options={{
					headerLeft: false,
				}}
			/>
			<Stack.Screen
				name="TeacherPickUpStack"
				component={TeacherPickUpStack}
				options={{
					headerShown: false,
					headerTitle: "Child Info",
				}}
			/>
		</Stack.Navigator>
	);
};

export default TeacherHomeStack;
