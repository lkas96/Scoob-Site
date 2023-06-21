import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DriversHomePage from '../screens/Drivers/HomePage';
import DriversTripsPage from '../screens/Drivers/TripsPage';

const Stack = createStackNavigator();

const DriverHomeStack = () => {
  return (
    <Stack.Navigator 
			screenOptions={{
			headerShown: false,
			}} 
			initialRouteName='DriversHomePage'
		>
			<Stack.Screen 
                name="DriversHomePage" 
                component={DriversHomePage} 
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
  )
}

export default DriverHomeStack