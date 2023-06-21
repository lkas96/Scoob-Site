import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {COLORS} from '../constants';
import ParentsHomePage from '../screens/Parents/HomePage';
import ChildInfoPage from '../screens/Parents/ChildInfoPage';

const Stack = createStackNavigator();

const ParentHomeStack = () => {
	return (
		<Stack.Navigator 
			screenOptions={{
			headerShown: true,
			headerTitle: " ",
			headerStyle: {
				backgroundColor: COLORS.primary,
			},
			}} 
			initialRouteName='ParentsHomePage'
		>
			<Stack.Screen 
                name="ParentsHomePage" 
                component={ParentsHomePage} 
				options={{
					headerLeft: false,
				}}
            />
			<Stack.Screen 
                name="ChildProfile" 
                component={ChildInfoPage} 
				options={{
					headerShown: true,
					headerTitle: "Child Info",
				}}
            />
		</Stack.Navigator>
	)
}

export default ParentHomeStack