import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { COLORS } from "../constants";

import ChildVerifyPage from "../screens/Teachers/PUZInfoPage";
import ScanID from "../screens/Teachers/ScannerPage";

const Stack = createStackNavigator();

const TeacherPickUpStack = ({ route }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: " ",
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
			}}
			initialRouteName="ChildVerifyPage"
		>
			<Stack.Screen
				name="ChildVerifyPage"
				component={ChildVerifyPage}
				// initialParams={route.params.childInfo}
				options={{
					headerShown: true,
					headerTitle: "Child Info",
				}}
			/>
			<Stack.Screen name="ScanID" component={ScanID} options={{}} />
		</Stack.Navigator>
	);
};

export default TeacherPickUpStack;
