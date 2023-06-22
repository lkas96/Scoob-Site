import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {COLORS} from '../constants';

import TeachersHomePage from '../screens/Teachers/HomePage';
import ChildInfoStack from './ChildInfoStack';


const Stack = createStackNavigator();

const TeacherHomeStack = () => {
	return (
		<Stack.Navigator 
			screenOptions={{
			headerShown: true,
			headerTitle: " ",
			headerStyle: {
				backgroundColor: COLORS.primary,
			},
			}} 
			initialRouteName='TeachersHomePage'
		>
			<Stack.Screen 
                name="TeachersHomePage" 
                component={TeachersHomePage} 
				options={{
					headerLeft: false,
				}}
            />
			<Stack.Screen 
                name="ChildInfoStack" 
                component={ChildInfoStack} 
				options={{
					headerShown: false,
					headerTitle: "Child Info",
				}}
            />
		</Stack.Navigator>
	)
}

export default TeacherHomeStack;