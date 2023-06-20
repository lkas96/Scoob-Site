import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ParentsHomePage from '../screens/Parents/HomePage';
import ChildInfoPage from '../screens/Parents/ChildInfoPage';

const Stack = createStackNavigator();

const ParentHomeStack = () => {
	return (
		<Stack.Navigator 
			screenOptions={{
			headerShown: false,
			}} 
			initialRouteName='ParentsHomePage'
		>
			<Stack.Screen 
                name="ParentsHomePage" 
                component={ParentsHomePage} 
            />
			<Stack.Screen 
                name="ChildProfile" 
                component={ChildInfoPage} 
                options={{
                    headerShown: true,
                    headerTitle: "Child",
                }}
            />
		</Stack.Navigator>
	)
}

export default ParentHomeStack